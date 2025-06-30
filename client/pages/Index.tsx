import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Index() {
  const [arabicText, setArabicText] = useState("مرحبا كيف حالك؟");
  const [dutchText, setDutchText] = useState("Hallo, hoe gaat het?");
  const [isConnected, setIsConnected] = useState(true);
  const [isListening, setIsListening] = useState(false);

  // Mock real-time updates for demo
  useEffect(() => {
    const interval = setInterval(() => {
      setIsListening((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      {/* Header */}
      <header className="relative z-20 p-6">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10"
          >
            <span className="text-white font-medium text-sm tracking-wide">
              Live Transcription
            </span>
          </motion.div>

          {/* Status */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            {/* Connection Status */}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <div
                className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-400" : "bg-red-400"} animate-pulse`}
              ></div>
              <span className="text-white text-xs">
                {isConnected ? "Connected" : "Disconnected"}
              </span>
            </div>

            {/* Info Button */}
            <button className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/10 hover:bg-white/20 transition-colors group">
              <svg
                className="w-5 h-5 text-white/80 group-hover:text-white"
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
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 px-6 pb-6">
        <div className="max-w-7xl mx-auto">
          {/* Audio Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full"
                  animate={{
                    height: isListening
                      ? [20, 40, 60, 40, 20]
                      : [20, 25, 20, 25, 20],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
            <p className="text-white/70 text-sm">
              {isListening ? "Listening..." : "Ready to transcribe"}
            </p>
          </motion.div>

          {/* Transcription Panels */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {/* Arabic Panel */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 h-80 relative overflow-hidden">
                {/* Panel Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AR</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Arabic</h3>
                      <p className="text-white/50 text-xs">
                        Original transcription
                      </p>
                    </div>
                  </div>
                  <div className="text-white/40 text-xs">
                    {arabicText.length} chars
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative h-48 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={arabicText}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-white text-xl leading-relaxed text-right font-medium"
                      dir="rtl"
                    >
                      {arabicText}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </motion.div>

            {/* Dutch Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 h-80 relative overflow-hidden">
                {/* Panel Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">NL</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Dutch</h3>
                      <p className="text-white/50 text-xs">Live translation</p>
                    </div>
                  </div>
                  <div className="text-white/40 text-xs">
                    {dutchText.length} chars
                  </div>
                </div>

                {/* Text Content */}
                <div className="relative h-48 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={dutchText}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-white text-xl leading-relaxed font-medium"
                    >
                      {dutchText}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <button className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10 hover:bg-white/20 transition-colors text-white text-sm font-medium">
              Clear All
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full px-8 py-3 text-white text-sm font-medium hover:from-blue-600 hover:to-cyan-600 transition-colors shadow-lg">
              Export Transcript
            </button>
          </motion.div>
        </div>
      </main>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 right-20 w-1 h-1 bg-cyan-400/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-pulse"></div>
    </div>
  );
}
