import { error } from '@sveltejs/kit';
import type { Actions } from './$types';
import z from 'zod';

const loginSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	password: z.string().min(8, { message: 'Password must be at least 8 characters long' })
});

// create a type from the schema
export type LoginForm = z.infer<typeof loginSchema>;

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const payload = Object.fromEntries(formData);

		let form: LoginForm;
		try {
			// from zod library, parse the payload into a LoginForm object
			form = loginSchema.parse(payload);
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
	}
} satisfies Actions;
