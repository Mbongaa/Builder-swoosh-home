import { useState } from "react";

export default function Index() {
  const [arabicText] = useState([
    "الحمد لله رب العالمين",
    "بسم الله الرحمن الرحيم",
    "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً",
  ]);

  const [dutchText] = useState([
    "Vrede zij met u en Gods barmhartigheid en zegeningen",
    "Alle lof is voor Allah, de Heer der werelden",
    "In de naam van Allah, de Barmhartige, de Genadevolle",
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-gray-50 to-teal-100 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl">
        {/* Top Icon */}
        <div className="flex justify-center mb-12">
          <div className="w-16 h-16 flex items-center justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              className="text-teal-300"
            >
              <path
                d="M24 4L30 18L44 18L33 28L39 42L24 34L9 42L15 28L4 18L18 18L24 4Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-2 gap-16 items-start">
          {/* Dutch Translation - Left Side */}
          <div className="text-left space-y-6">
            <h3 className="text-teal-400 text-sm font-medium tracking-wide mb-8">
              Dutch Translation
            </h3>

            <div className="space-y-4">
              {dutchText.map((line, index) => (
                <p
                  key={index}
                  className={`text-lg leading-relaxed font-light ${
                    index === 0
                      ? "text-teal-300/60"
                      : index === 1
                        ? "text-teal-600/80"
                        : "text-teal-700 font-medium"
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          {/* Arabic Transcription - Right Side */}
          <div className="text-right space-y-6" dir="rtl">
            <h3 className="text-teal-400 text-sm font-medium tracking-wide mb-8">
              Arabic Transcription
            </h3>

            <div className="space-y-6">
              {arabicText.map((line, index) => (
                <p
                  key={index}
                  className={`text-xl leading-relaxed ${
                    index === 0
                      ? "text-teal-300/60 font-light"
                      : index === 1
                        ? "text-teal-600/80 font-normal"
                        : "text-teal-700 font-medium"
                  }`}
                  style={{
                    fontFamily: "'Amiri', 'Arabic Typesetting', serif",
                    fontSize: index === 2 ? "1.375rem" : "1.25rem",
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Icon */}
        <div className="flex justify-center mt-12">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="text-teal-300"
            >
              <path
                d="M6 8C6 6.89543 6.89543 6 8 6H24C25.1046 6 26 6.89543 26 8V22C26 23.1046 25.1046 24 24 24H16L10 28V24H8C6.89543 24 6 23.1046 6 22V8Z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M10 12H22M10 16H18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Google Fonts for Arabic */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap");
      `}</style>
    </div>
  );
}
