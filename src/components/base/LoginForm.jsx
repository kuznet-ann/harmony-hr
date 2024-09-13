import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function LoginForm() {
	return (
		<Card className='w-full max-w-sm m-auto mt-48'>
			<CardHeader>
				<CardTitle className='text-2xl text-center'>Login</CardTitle>
			</CardHeader>
			<CardContent className='grid gap-4'>
				<div className='grid gap-2'>
					<Label htmlFor='email'>username</Label>
					<Input id='email' type='email' placeholder='m@example.com' required />
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='password'>password</Label>
					<Input id='password' type='password' required />
				</div>
			</CardContent>
			<CardFooter>
				<Button className='w-full'>Sing up</Button>
			</CardFooter>
		</Card>
	);
}
