import { useState, useEffect } from "react";

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    // Simulate initial loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleIframeLoad = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-gray-200 border-t-gray-600 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-gray-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Content Wrapper */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          {/* Embedded Content Container */}
          <div className="relative w-full h-full max-w-5xl max-h-[80vh] bg-white rounded-lg shadow-2xl overflow-hidden">
            {/* Iframe Loading State */}
            {!isIframeLoaded && !isLoading && (
              <div className="absolute inset-0 bg-gray-50 flex items-center justify-center z-10">
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mx-auto"></div>
                  <p className="mt-4 text-gray-600 text-sm">
                    Loading content...
                  </p>
                </div>
              </div>
            )}

            {/* Embedded Canva Content */}
            <iframe
              src="https://bf6wzc6xrgbg7pd1.canva-hosted-embed.com/codelet/AAEAEGJmNnd6YzZ4cmdiZzdwZDEAAAAAAZfGxfC6IfTmOx_UCB3_WuOdkay6FC9X092Q42sYWxW5HNJWMw8/"
              className={`w-full h-full border-0 transition-opacity duration-300 ${
                isIframeLoaded ? "opacity-100" : "opacity-0"
              }`}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              allowFullScreen
              title="Interactive Content"
              onLoad={handleIframeLoad}
            />
          </div>
        </div>

        {/* Optional: Branded Corner */}
        <div className="absolute top-6 left-6 z-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
            <span className="text-sm font-medium text-gray-800">
              Interactive Experience
            </span>
          </div>
        </div>

        {/* Optional: Info Corner */}
        <div className="absolute top-6 right-6 z-20">
          <button className="bg-white/80 backdrop-blur-sm rounded-full p-3 shadow-lg hover:bg-white/90 transition-colors group">
            <svg
              className="w-5 h-5 text-gray-600 group-hover:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Responsive Message */}
      <div className="fixed bottom-4 left-4 right-4 md:hidden z-30">
        <div className="bg-gray-900/90 backdrop-blur-sm text-white text-sm px-4 py-3 rounded-lg text-center">
          <p>For the best experience, view on a larger screen</p>
        </div>
      </div>

      {/* Gradient Overlays for Visual Enhancement */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-purple-50/20 pointer-events-none"></div>
    </div>
  );
}
