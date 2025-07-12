import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Mail, Lock } from 'lucide-react';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cms/ui/components/form';
import { Button } from '@cms/ui/components/button';
import { Input } from '@cms/ui/components/input';
import { Link } from 'react-router';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(1, { message: 'Password is required' })
    .min(6, { message: 'Password must be at least 6 characters' }),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginFormData) => {
    console.log('Login Form Data:', data);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="w-full max-w-md mx-auto space-y-4 ">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">Welcome Back</h1>
          <p className="text-sm sm:text-base text-gray-600">Sign in to your account to continue</p>
        </div>

        {/* Form */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base font-medium text-gray-700">Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 h-10 sm:h-12 border-gray-100 focus:border-gray-900 focus:ring-gray-900 rounded-lg w-full text-sm sm:text-base"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm sm:text-base font-medium text-gray-700">Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
                      <Input
                        type="password"
                        placeholder="Enter your password"
                        className="pl-10 h-10 sm:h-12 border-gray-100 focus:border-gray-900 focus:ring-gray-900 rounded-lg w-full text-sm sm:text-base"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />

            <div className="flex flex-row items-center justify-between gap-3">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-gray-900 focus:ring-gray-900 h-4 w-4"
                />
                <span className="text-sm text-gray-700">Remember me</span>
              </label>
              <Button
                variant="link"
                className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 p-0 h-auto text-start "
              >
                Forgot password?
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full h-9 sm:h-10 md:h-12 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg border border-white/30 shadow transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/50 text-sm sm:text-base"
            >
              Sign In
            </Button>
          </form>
        </Form>

        {/* Switch to Register */}
        <div className="text-center border-t border-gray-100">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <Button
              asChild
              type="button"
              variant="link"
              className="text-gray-700 font-medium cursor-pointer hover:text-gray-800 p-0 h-auto text-sm sm:text-base"
            >
              <Link to="/register">Create one here</Link>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;