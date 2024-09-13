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
					<Label htmlFor='email'>Username</Label>
					<Input className='border-[1px] border-primary' id='email' type='email' placeholder='m@example.com' required />
				</div>
				<div className='grid gap-2'>
					<Label htmlFor='password'>Password</Label>
					<Input className='border-[1px] border-primary' id='password' type='password' required />
				</div>
			</CardContent>
			<CardFooter>
				<Button className='w-full'>Sign in</Button>
			</CardFooter>
		</Card>
	);
}
