import type React from 'react';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Shield } from 'lucide-react';
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
import { Alert, AlertDescription } from '@cms/ui/components/alert';
import { Link, useNavigate } from 'react-router';

import { useEffect, useRef } from 'react';
import { useRegistrationStore } from '../../../store/register-store';

const mfaVerifySchema = z.object({
  mfaCode: z
    .string()
    .min(1, { message: 'Authentication code is required' })
    .length(6, { message: 'Authentication code must be 6 digits' })
    .regex(/^\d+$/, { message: 'Authentication code must contain only numbers' }),
});

type MfaVerifyData = z.infer<typeof mfaVerifySchema>;

const MfaVerify = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, setupMFA, setCurrentStep, setError } = useRegistrationStore();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const form = useForm<MfaVerifyData>({
    resolver: zodResolver(mfaVerifySchema),
    defaultValues: {
      mfaCode: data.mfaCode,
    },
  });

  // Set current step when component mounts
  useEffect(() => {
    setCurrentStep(4);
  }, [setCurrentStep]);

  // Clear error when form values change
  useEffect(() => {
    if (error) {
      setError(null);
    }
  }, [form.watch(), error, setError]);

  const onSubmit = async (formData: MfaVerifyData) => {
    await setupMFA(formData.mfaCode);
  };

  const goBack = () => {
    navigate('/onboarding/mfa-setup');
  };

  // Handle individual digit input
  const handleDigitChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(-1); // Take only the last character
    }

    if (!/^\d*$/.test(value)) {
      return; // Only allow digits
    }

    const currentCode = form.getValues('mfaCode') || '';
    const newCode = currentCode.split('');
    newCode[index] = value;

    // Fill empty slots with empty strings
    while (newCode.length < 6) {
      newCode.push('');
    }

    const finalCode = newCode.join('');
    form.setValue('mfaCode', finalCode);

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace') {
      const currentCode = form.getValues('mfaCode') || '';
      const newCode = currentCode.split('');

      if (newCode[index]) {
        // Clear current digit
        newCode[index] = '';
      } else if (index > 0) {
        // Move to previous input and clear it
        newCode[index - 1] = '';
        inputRefs.current[index - 1]?.focus();
      }

      form.setValue('mfaCode', newCode.join(''));
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    form.setValue('mfaCode', pastedData);

    // Focus the next empty input or the last input
    const nextIndex = Math.min(pastedData.length, 5);
    inputRefs.current[nextIndex]?.focus();
  };

  const currentCode = form.watch('mfaCode') || '';
  let paddedCode = currentCode;
  while (paddedCode.length < 6) {
    paddedCode += ' '; // Or whatever character you want to pad with
  }
  const digits = paddedCode.split('').slice(0, 6);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Verify MFA Setup</h2>
        <p className="text-gray-600">Enter the 6-digit code from your authenticator app</p>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertDescription className="text-red-700">{error}</AlertDescription>
        </Alert>
      )}

      {/* Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="mfaCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700 text-center block">
                  Authentication Code
                </FormLabel>
                <FormControl>
                  <div className="flex gap-2 justify-center" onPaste={handlePaste}>
                    {digits.map((digit, index) => (
                      <Input
                        key={index}
                        type="text"
                        ref={(el) => {
                          inputRefs.current[index] = el;
                        }}
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleDigitChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-12 text-center text-lg font-mono border-gray-200 focus:border-gray-900 focus:ring-gray-900 rounded-lg"
                        disabled={isLoading}
                      />
                    ))}
                  </div>
                </FormControl>
                <FormMessage className="text-xs text-center" />
              </FormItem>
            )}
          />

          <div className="flex gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={goBack}
              disabled={isLoading}
              className="flex-1 h-12 bg-transparent"
            >
              Back
            </Button>
            <Button
              type="submit"
              disabled={isLoading || currentCode.length !== 6}
              className="flex-1 h-12 bg-slate-700 hover:bg-slate-800 text-white font-medium rounded-lg disabled:opacity-50"
            >
              {isLoading ? 'Verifying...' : 'Complete Setup'}
            </Button>
          </div>

          {/* Help Text */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              Open your authenticator app and enter the current 6-digit code
            </p>
            <Button
              type="button"
              variant="link"
              onClick={goBack}
              className="text-slate-700 hover:text-slate-800 font-medium text-sm"
            >
              Need to see the QR code again?
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Button
                asChild
                variant="link"
                className="text-slate-700 hover:text-slate-800 font-medium p-0 h-auto"
              >
                <Link to="/login">Sign In Here</Link>
              </Button>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default MfaVerify;
