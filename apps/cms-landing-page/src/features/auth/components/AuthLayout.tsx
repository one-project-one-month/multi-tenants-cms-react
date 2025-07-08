import { Outlet } from 'react-router';

import { Building2, Shield, Users, Zap, BarChart3 } from 'lucide-react';
import AuthHeader from './AuthHeader';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-white flex relative">
      <AuthHeader />
      {/* Left Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-md">
          <Outlet />
        </div>
      </div>
      {/* Right Side - CMS information */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* Right Side - CMS Information */}
        <div className="hidden lg:flex flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
          {/* Enhanced background pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            {/* Floating elements */}
            <div className="absolute top-20 right-20 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
            <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
            <div className="absolute top-1/2 right-40 w-16 h-16 bg-purple-500/10 rounded-full blur-xl"></div>
          </div>

          <div className="relative z-10 flex flex-col justify-center p-12 text-white">
            {/* Logo and Title */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <div className="ml-4">
                  <h1 className="text-3xl font-bold">ContentFlow CMS</h1>
                  <p className="text-blue-200 text-sm font-medium">
                    Enterprise Multi-Tenant Platform
                  </p>
                </div>
              </div>

              <h2 className="text-5xl font-bold leading-tight mb-6">
                Manage Your Content
                <br />
                <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Like Never Before
                </span>
              </h2>

              <p className="text-gray-300 text-xl leading-relaxed">
                Powerful, scalable, and intuitive content management system designed for modern
                teams and organizations.
              </p>
            </div>

            {/* Enhanced Features */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-3 rounded-xl backdrop-blur-sm border border-blue-400/20 group-hover:border-blue-400/40 transition-colors">
                  <Users className="h-6 w-6 text-blue-200" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Multi-Tenant Architecture</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Manage multiple organizations and teams from a single, unified platform with
                    complete data isolation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-3 rounded-xl backdrop-blur-sm border border-green-400/20 group-hover:border-green-400/40 transition-colors">
                  <Shield className="h-6 w-6 text-green-200" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Enterprise Security</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Advanced security features with role-based access control, SSO integration, and
                    compliance standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 p-3 rounded-xl backdrop-blur-sm border border-yellow-400/20 group-hover:border-yellow-400/40 transition-colors">
                  <Zap className="h-6 w-6 text-yellow-200" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Lightning Fast Performance</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Optimized performance with edge caching and CDN integration for seamless content
                    delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-3 rounded-xl backdrop-blur-sm border border-purple-400/20 group-hover:border-purple-400/40 transition-colors">
                  <BarChart3 className="h-6 w-6 text-purple-200" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-lg">Advanced Analytics</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Comprehensive insights, real-time reporting, and data visualization for informed
                    decision making.
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Stats */}
            <div className="mt-16 pt-8 border-t border-white/10">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                    10K+
                  </div>
                  <div className="text-gray-300 text-sm mt-1">Active Users</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent">
                    99.9%
                  </div>
                  <div className="text-gray-300 text-sm mt-1">Uptime SLA</div>
                </div>
                <div className="text-center group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-gray-300 text-sm mt-1">Organizations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
