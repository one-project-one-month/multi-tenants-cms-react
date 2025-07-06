import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@cms/ui/components/button';
import { Input } from '@cms/ui/components/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@cms/ui/components/form';
import { Mail, Lock, User } from 'lucide-react';
import { Link } from 'react-router';

const registerSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: 'Username is required' })
      .min(3, { message: 'Username must be at least 3 characters' })
      .max(20, { message: 'Username must not exceed 20 characters' })
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: 'Username can only contain letters, numbers, and underscores',
      }),
    email: z
      .string()
      .min(1, { message: 'Email is required' })
      .email({ message: 'Please enter a valid email address' }),
    password: z
      .string()
      .min(1, { message: 'Password is required' })
      .min(8, { message: 'Password must be at least 8 characters' })
      .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
      .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
      .regex(/[0-9]/, { message: 'Password must contain at least one number' })
      .regex(/[^a-zA-Z0-9]/, { message: 'Password must contain at least one special character' }),
    confirmPassword: z.string().min(1, { message: 'Please confirm your password' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage = () => {
  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log('Register Form Data:', data);
    // Here you would typically handle the registration logic
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
        <p className="text-gray-600">Join us and start managing your content</p>
      </div>

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Username</FormLabel>
                <FormControl>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Choose a username"
                      className="pl-10 h-12 border-gray-200 focus:border-gray-900 focus:ring-gray-900 rounded-lg"
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">Email Address</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 h-12 border-gray-200 focus:border-gray-900 focus:ring-gray-900 rounded-lg"
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
                <FormLabel className="text-sm font-medium text-gray-700">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="password"
                      placeholder="Create a password"
                      className="pl-10 h-12 border-gray-200 focus:border-gray-900 focus:ring-gray-900 rounded-lg"
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
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      className="pl-10 h-12 border-gray-200 focus:border-gray-900 focus:ring-gray-900 rounded-lg"
                      {...field}
                    />
                  </div>
                </FormControl>
                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <div className="flex items-start">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-gray-900 focus:ring-gray-900 mt-1"
            />
            <span className="ml-2 text-sm text-gray-600">
              I agree to the{' '}
              <Button
                variant="link"
                className="text-gray-900 hover:text-gray-700 p-0 h-auto text-sm"
              >
                Terms of Service
              </Button>{' '}
              and{' '}
              <Button
                variant="link"
                className="text-gray-900 hover:text-gray-700 p-0 h-auto text-sm"
              >
                Privacy Policy
              </Button>
            </span>
          </div>

          <Button
            type="submit"
            className="w-full h-12 bg-gray-900 cursor-pointer hover:bg-gray-800 text-white font-medium rounded-lg"
          >
            Create Account
          </Button>
        </form>
      </Form>

      {/* Switch to Login */}
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-600">
          Already have an account?{' '}
          <Button
            asChild
            type="button"
            variant="link"
            className="text-gray-900 font-medium hover:text-gray-700 p-0 h-auto"
          >
            <Link to="/login">Sign in instead</Link>
          </Button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
