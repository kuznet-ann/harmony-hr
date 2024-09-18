import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { redirect } from 'next/dist/server/api-utils';

export function LoginForm() {
	return (
		<Card className='w-full max-w-sm m-auto mt-48'>
			<CardHeader>
				<CardTitle className='text-2xl text-center'>Login</CardTitle>
			</CardHeader>
			<CardContent>
				<form action={async (formData) => {
					'use server';
					await login(formData);
					redirect('/')
				}}>
					<Label htmlFor='email'>Email</Label>
					<Input
						className='mb-2 border-[1px] border-primary'
						id='email'
						type='email'
						placeholder='m@example.com'
						required
					/>
					<Label htmlFor='password'>Password</Label>
					<Input
						className='border-[1px] border-primary'
						id='password'
						type='password'
						required
					/>
				</form>
			</CardContent>
			<CardFooter>
				<Button className='w-full'>Sign in</Button>
			</CardFooter>
		</Card>
	);
}
