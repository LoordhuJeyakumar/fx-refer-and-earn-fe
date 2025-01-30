import { Sparkles } from "lucide-react";

const LogoComponent = () => {
  return (
    <div className="w-full  flex flex-col items-center justify-center relative  ">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />

      <div className="relative group cursor-pointer">
        {/* Main Logo Container */}
        <div className="text-center transform transition-transform duration-300 ease-in-out group-hover:scale-105">
          {/* Logo Header */}
          <div className="flex items-center justify-center space-x-2">
            <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
            <h1 className="text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent text-nowrap">
              Francis Xavier
            </h1>
            <Sparkles className="w-8 h-8 text-blue-600 animate-pulse" />
          </div>

          {/* Tagline */}
          <div className=" relative">
            <span className="text-sm font-medium text-gray-600 tracking-wide relative inline-block">
              Innovating the Future
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
            </span>
          </div>
        </div>

        {/* Decorative Pills */}
        <div className="absolute -top-4 -left-4 w-2 h-2 rounded-full bg-blue-400 animate-ping" />
        <div className="absolute -bottom-4 -right-4 w-2 h-2 rounded-full bg-blue-400 animate-ping delay-150" />
      </div>

      {/* Bottom Border Design */}
      <div className="mt-6 w-full max-w-md">
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-20" />
        <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-40 mt-1" />
      </div>
    </div>
  );
};

export default LogoComponent;
