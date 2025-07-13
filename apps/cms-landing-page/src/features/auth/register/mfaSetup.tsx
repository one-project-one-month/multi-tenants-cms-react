'use client';

import { useState, useEffect } from 'react';
import { Shield, Copy, Check, Smartphone } from 'lucide-react';
import { Button } from '@cms/ui/components/button';
import { Alert, AlertDescription } from '@cms/ui/components/alert';
import { Link, useNavigate } from 'react-router';
import { useRegistrationStore } from '../../../store/register-store';

const MfaSetup = () => {
  const navigate = useNavigate();
  const { data, isLoading, error, setCurrentStep, prevStep, updateData } = useRegistrationStore();
  const [qrCodeUrl, setQrCodeUrl] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [copied, setCopied] = useState(false);

  // Mock QR code and secret generation
  useEffect(() => {
    setCurrentStep(4);

    // Generate mock secret key
    const mockSecret = 'JBSWY3DPEHPK3PXP';
    setSecretKey(mockSecret);

    // Generate QR code URL (using a QR code service)
    const appName = 'ContentFlow';
    const accountName = data.email;
    const otpUrl = `otpauth://totp/${encodeURIComponent(appName)}:${encodeURIComponent(accountName)}?secret=${mockSecret}&issuer=${encodeURIComponent(appName)}`;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(otpUrl)}`;
    setQrCodeUrl(qrUrl);

    // Store secret in state
    updateData({ mfaSecret: mockSecret });
  }, [setCurrentStep, data.email, updateData]);

  const copySecret = async () => {
    try {
      await navigator.clipboard.writeText(secretKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy secret:', err);
    }
  };

  const goBack = () => {
    prevStep();
    navigate('/onboarding/verify-email');
  };

  const continueToVerification = () => {
    navigate('/onboarding/mfa-verify');
  };

  const skipMfa = () => {
    updateData({ mfaEnabled: false });
    navigate('/onboarding/success');
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Shield className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Setup MFA</h2>
        <p className="text-gray-600">Secure your account with two-factor authentication</p>
      </div>

      {/* Error Alert */}
      {error && (
        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertDescription className="text-red-700">{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-6">
        {/* Step 1: Download App */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
              1
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Download an Authenticator App</h3>
              <p className="text-sm text-gray-600 mb-3">
                Install Google Authenticator, Authy, or any TOTP-compatible app on your phone.
              </p>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="text-xs bg-transparent">
                  <Smartphone className="w-3 h-3 mr-1" />
                  Google Authenticator
                </Button>
                <Button size="sm" variant="outline" className="text-xs bg-transparent">
                  <Smartphone className="w-3 h-3 mr-1" />
                  Authy
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Scan QR Code */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 mb-1">Scan QR Code</h3>
              <p className="text-sm text-gray-600 mb-4">
                Open your authenticator app and scan this QR code:
              </p>

              {/* QR Code */}
              <div className="flex justify-center mb-4">
                <div className="bg-white p-4 rounded-lg border-2 border-gray-200">
                  {qrCodeUrl ? (
                    <img
                      src={qrCodeUrl || '/placeholder.svg'}
                      alt="MFA QR Code"
                      className="w-48 h-48"
                      crossOrigin="anonymous"
                    />
                  ) : (
                    <div className="w-48 h-48 bg-gray-100 flex items-center justify-center">
                      <p className="text-gray-500">Loading QR Code...</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Manual Entry */}
              <div className="bg-white rounded-lg p-3 border">
                <p className="text-xs text-gray-600 mb-2">Can't scan? Enter this code manually:</p>
                <div className="flex items-center gap-2">
                  <code className="flex-1 text-sm font-mono bg-gray-100 px-2 py-1 rounded text-gray-800">
                    {secretKey}
                  </code>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={copySecret}
                    className="flex-shrink-0 bg-transparent"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Verify */}
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
              3
            </div>
            <div>
              <h3 className="font-medium text-gray-900 mb-1">Verify Setup</h3>
              <p className="text-sm text-gray-600">
                Enter the 6-digit code from your authenticator app to complete setup.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
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
            onClick={continueToVerification}
            disabled={isLoading}
            className="flex-1 h-12 bg-slate-700 hover:bg-slate-800 text-white font-medium rounded-lg"
          >
            Continue
          </Button>
        </div>

        {/* Skip Option */}
        <div className="text-center">
          <Button
            variant="link"
            onClick={skipMfa}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Skip MFA Setup (Not Recommended)
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
      </div>
    </div>
  );
};

export default MfaSetup;
