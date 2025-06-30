import { useState, useEffect } from "react";

export default function Index() {
  // Dynamic state for real-time updates
  const [arabicText, setArabicText] = useState([
    "الحمد لله رب العالمين",
    "بسم الله الرحمن الرحيم",
    "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً",
  ]);

  const [dutchText, setDutchText] = useState([
    "Vrede zij met u en Gods barmhartigheid en zegeningen",
    "Alle lof is voor Allah, de Heer der werelden",
    "In de naam van Allah, de Barmhartige, de Genadevolle",
  ]);

  // WebSocket integration placeholder
  useEffect(() => {
    // TODO: Add your WebSocket connection here
    // Example:
    // const ws = new WebSocket('ws://your-livekit-server');
    // ws.onmessage = (event) => {
    //   const message = JSON.parse(event.data);
    //   if (message.type === "transcription") {
    //     setArabicText(prev => [...prev.slice(1), message.text]);
    //   } else if (message.type === "translation") {
    //     setDutchText(prev => [...prev.slice(1), message.text]);
    //   }
    // };
    // return () => ws.close();
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col justify-center px-20 py-16"
      style={{ backgroundColor: "#f9f7f4" }}
    >
      <div className="w-full max-w-4xl mx-auto space-y-20">
        {/* Arabic Transcription - Top Right */}
        <div className="text-right space-y-6" dir="rtl">
          <h3
            className="text-sm font-medium tracking-wide mb-8"
            style={{ color: "#1a4744" }}
          >
            Arabic Transcription
          </h3>

          <div className="space-y-6">
            {arabicText.map((line, index) => (
              <p
                key={`${line}-${index}`}
                className={`leading-relaxed transition-all duration-500 ease-in-out ${
                  index === 0
                    ? "font-light text-xl"
                    : index === 1
                      ? "font-normal text-xl"
                      : "font-medium text-2xl"
                }`}
                style={{
                  fontFamily: "'Amiri', 'Arabic Typesetting', serif",
                  color:
                    index === 0
                      ? "#1a474470"
                      : index === 1
                        ? "#1a474490"
                        : "#1a4744",
                  opacity: index === 0 ? 0.7 : index === 1 ? 0.9 : 1,
                }}
              >
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* Dutch Translation - Bottom Left */}
        <div className="text-left space-y-6">
          <h3
            className="text-sm font-medium tracking-wide mb-8"
            style={{ color: "#1a4744" }}
          >
            Dutch Translation
          </h3>

          <div className="space-y-4">
            {dutchText.map((line, index) => (
              <p
                key={`${line}-${index}`}
                className={`leading-relaxed transition-all duration-500 ease-in-out ${
                  index === 0
                    ? "font-light text-lg"
                    : index === 1
                      ? "font-normal text-lg"
                      : "font-medium text-xl"
                }`}
                style={{
                  color:
                    index === 0
                      ? "#1a474470"
                      : index === 1
                        ? "#1a474490"
                        : "#1a4744",
                  opacity: index === 0 ? 0.7 : index === 1 ? 0.9 : 1,
                }}
              >
                {line}
              </p>
            ))}
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
