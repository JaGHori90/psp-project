import prisma from '$lib/prisma';
import { redirect, error } from '@sveltejs/kit';
import type { Actions } from './$types';
import z from 'zod';
import type { UserType } from '@prisma/client';
import { render } from 'svelte-email';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import UserConfirmationEmail from '$components/emails/UserConfirmationEmail.svelte';
import { env } from '$env/dynamic/private';

const requestFormSchema = z.object({
	firstname: z.string().min(2, { message: 'First name must be at least 2 characters long' }),
	lastname: z.string().min(2, { message: 'Last name must be at least 2 characters long' }),
	email: z.string().email({ message: 'Invalid email address' }),
	message: z.string().min(5, { message: 'Message must be at least 10 characters long' }),
	phone: z.string().regex(/^(\+|0)[0-9]{10,14}$/, { message: 'Invalid phone number' }),
	type: z
		.string()
		.transform((value) => value as UserType)
		.refine((value) => ['STUDENT', 'TEACHER'].includes(value), { message: 'Invalid user type' })
});

// create a type from the schema
export type RequestForm = z.infer<typeof requestFormSchema>;

const client = new SESClient({
	region: env.AWS_REGION,
	credentials: {
		accessKeyId: env.AWS_ACCESS_KEY_ID,
		secretAccessKey: env.AWS_SECRET_ACCESS_KEY
	}
});

// Form actions
export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const payload = Object.fromEntries(formData);

		let form: RequestForm;
		try {
			// from zod library, parse the payload into a RequestForm object
			form = requestFormSchema.parse(payload);
		} catch (err) {
			if (err instanceof z.ZodError) {
				const { fieldErrors: errors } = err.flatten();

				console.error(errors);

				return {
					data: payload,
					errors
				};
			}

			throw error(500, 'Invalid form data');
		}

		// save the data to the database
		await prisma.registrationRequest.create({
			data: {
				firstName: form.firstname,
				lastName: form.lastname,
				email: form.email,
				phone: form.phone,
				message: form.message,
				userType: form.type
			}
		});

		console.log('sending email ...');

		const emailHtml = render({
			template: UserConfirmationEmail,
			props: {
				userConfirmationProps: form
			}
		});

		const options = new SendEmailCommand({
			Source: 'jaghori_reza@hotmail.com',
			Destination: {
				ToAddresses: [form.email]
			},
			Message: {
				Body: {
					Html: {
						Charset: 'UTF-8',
						Data: emailHtml
					}
				},
				Subject: {
					Charset: 'UTF-8',
					Data: `Registration confirmation: ${form.firstname} - ${form.lastname}`
				}
			}
		});

		const result = await client.send(options);
		console.log('email sent', result);

		// request is valid, data is saved
		throw redirect(301, '/success');
	}
} satisfies Actions;
