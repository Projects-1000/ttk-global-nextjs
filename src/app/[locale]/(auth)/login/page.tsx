'use client';
import { TtkFrame } from '@/assets/TtkFrame';
import Button from '@/components/ui/Button/Button';
import ControlledInput from '@/components/ui/Input';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;
    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      newErrors.email = 'Invalid email address';
      isValid = false;
    }
    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // TODO: Implement login logic
      console.log({ email, password });
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="relative m-xl hidden w-1/3 flex-col items-center justify-between rounded-xl bg-gradient-to-b from-blue-10 to-blue-500 p-8 laptop:flex">
        <div className="relative flex w-full flex-col items-center opacity-35">
          <h1 className="h1-extrabold">TTK</h1>
          <h1 className="headline-bold">Global Ventures</h1>
        </div>
        <div className="relative flex h-32 w-32 items-center justify-center">
          <div className="h-32 w-32">
            <TtkFrame width={128} height={128} fillOpacity={1} />
          </div>
        </div>
        <div className="relative w-full">
          <p className="text-sm text-white/70">TTK Global Ventures</p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center p-8 laptop:w-2/3">
        <div className="w-full max-w-xl space-y-8">
          <div className="space-y-2 text-center laptop:text-left">
            <h2 className="h3-bold laptop:h2-bold">Login</h2>
            <p className="headline-light laptop:body-light">Enter your email below to login to your account</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 laptop:space-y-2xl">
            <ControlledInput
              type="email"
              required
              placeholder="m@example.com"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />
            <ControlledInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />
            <Button type="submit" isDirty classCustom="w-full btn__medium laptop:btn__large">
              Login
            </Button>
          </form>
          <div className="mb-4 flex w-full max-w-xl justify-start">
            <Link href="/" className="group flex items-center gap-s text-greyscale-title hover:text-primary-default">
              <ArrowLeft className="h-5 w-5 transition-transform duration-200 group-hover:-translate-x-1" />
              <span className="subtitle-regular laptop:body-regular">Back to home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
