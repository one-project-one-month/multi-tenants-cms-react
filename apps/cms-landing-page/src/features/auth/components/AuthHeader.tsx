import { Building2, Sparkles } from 'lucide-react';

const AuthHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 p-4">
      <div className="flex items-center justify-between px-6 lg:px-12 py-4 max-w-[950px] ">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-2.5 rounded-xl shadow-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1">
              <Sparkles className="h-3 w-3 text-yellow-500" />
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">ContentFlow</h1>
            <p className="text-xs text-gray-500 -mt-0.5">Multi-Tenant CMS</p>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
          <span className="cursor-pointer">Need help? Contact support</span>
        </div>
      </div>
    </header>
  );
};

export default AuthHeader;
