'use client';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router';
import { AlertCircle, ArrowLeft, CheckCircle } from 'lucide-react';
import { Input } from '@cms/ui/components/input';
import { Textarea } from '@cms/ui/components/textarea';
import { Button } from '@cms/ui/components/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@cms/ui/components/select';
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormField,
  FormMessage,
} from '@cms/ui/components/form';
import { ImageUploader } from '@cms/ui/components/ImageUploader';
import { useMutation } from '@tanstack/react-query';
import { createPageRequest } from '@cms/data';
import { Alert, AlertTitle, AlertDescription } from '@cms/ui/components/alert';
import { useState } from 'react';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
const schema = z.object({
  pageType: z.enum(['1', '2', '3'], { required_error: 'Page type is required' }),
  pageTitle: z.string().min(1, 'Page title is required'),
  pageDescription: z.string().min(1, 'Page description is required'),
  pageLink: z.string().url('Must be a valid URL'),
  logo: z
    .instanceof(File, { message: 'Logo image is required' })
    .refine((file) => file.size <= MAX_FILE_SIZE, 'Logo must be 5MB or less.')
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file.type),
      '.jpg, .jpeg, .png, and .webp files are accepted.'
    ),
});

type PageRequestFormData = z.infer<typeof schema>;

export default function PageRequestForm() {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const form = useForm<PageRequestFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      pageType: '1',
      pageTitle: '',
      pageDescription: '',
      pageLink: '',
      logo: undefined as any,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: PageRequestFormData) => {
      const payload = {
        ownerId: '23009708-b06c-412a-b028-19b3a105d39e',
        requestType: getRequestTypeString(data.pageType),
        title: data.pageTitle,
        description: data.pageDescription,
        pageUrl: data.pageLink,
        logo: data.logo,
      };

      return createPageRequest(payload);

    },
    onSuccess: (data: any) => {
      setErrorMessage(null);
      setSuccessMessage(data.message || 'Page request submitted successfully!');
      form.reset();
    },
    onError: (error: any) => {
      setSuccessMessage(null);
      const message = error?.response?.data?.message || 'An unexpected error occurred. Please try again.';
      setErrorMessage(message);
    },
  });

  const getRequestTypeString = (pageType: '1' | '2' | '3'): string => {
  switch (pageType) {
    case '1':
      return 'Learning Management System';
    case '2':
      return 'E-Commerce System';
    case '3':
      return 'Point of Sales System';
    default:
      return '';
  }
};

  const onSubmit = (data: PageRequestFormData) => {
    setErrorMessage(null);
    mutate(data);
  };

  return (
    <section className="min-h-screen  py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Request Your Custom Page</h1>
            <p className="text-gray-600">
              Tell us about your project and we'll get back to you within 24 hours
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {successMessage && (
                <Alert variant="success">
                  <CheckCircle className="h-4 w-4" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>{successMessage}</AlertDescription>
                </Alert>
              )}
              {errorMessage && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Submission Failed</AlertTitle>
                  <AlertDescription>{errorMessage}</AlertDescription>
                </Alert>
              )}
              {/* Page Type */}
              <FormField
                control={form.control}
                name="pageType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Page Type</FormLabel>
                    <FormControl>
                      {/* <select
                        {...field}
                        className="w-full h-12 border rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 "
                      >
                        <option value="">Select a page type</option>
                        <option value="1">Learning Management System</option>
                        <option value="2">E-Commerce System</option>
                        <option value="3">Point of Sales System</option>
                      </select> */}

                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-full h-12 border rounded-md px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-blue-500">
                          <SelectValue placeholder="Select a page type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Learning Management System</SelectItem>
                          <SelectItem value="2">E-Commerce System</SelectItem>
                          <SelectItem value="3">Point of Sales System</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Page Title */}
              <FormField
                control={form.control}
                name="pageTitle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Page Title</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Enter the title" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Page Description */}
              <FormField
                control={form.control}
                name="pageDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Page Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} placeholder="Describe your page..." rows={4} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Page Link */}
              <FormField
                control={form.control}
                name="pageLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Page Link</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="https://example.com" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* ImageUploader */}
              <Controller
                name="logo"
                control={form.control}
                render={({ field }) => {
                  const handleChange = (file: File | string | null) => {
                    console.log('Controller onChange called with:', file);
                    field.onChange(file ?? null);
                    field.onBlur();
                  };

                  return (
                    <FormItem>
                      <FormLabel>Page Logo</FormLabel>
                      <ImageUploader value={field.value ?? null} onChange={handleChange} />
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />

              {/* Submit */}
              <Button type="submit" className="w-full h-12" disabled={isPending}>
                {isPending ? 'Submitting...' : 'Submit Request'}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
