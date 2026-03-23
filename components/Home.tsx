// @ts-nocheck
"use client";

import { useState } from "react";
import Cv from "./Cv";
import Bcard from "./Bcard";
import { Printer } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"cv" | "bcard">("cv");

  const handleDownloadPdf = () => {
    // Native window.print avoids Tailwind v4 'oklch'/'lab' color function crashes inside html2canvas
    window.print();
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-neutral-100">
      {/* Navigation Top Bar */}
      <nav className="sticky top-0 z-[100] bg-white border-b border-neutral-200 shadow-sm print:hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center relative space-x-6 sm:space-x-12 h-16">
            <button
              onClick={() => setActiveTab("cv")}
              className={`inline-flex items-center px-1 pt-1 border-b-[3px] text-[15px] font-bold transition-colors duration-200 cursor-pointer ${
                activeTab === "cv"
                  ? "border-[#0a152e] text-[#0a152e]"
                  : "border-transparent text-neutral-500 hover:text-neutral-800 hover:border-neutral-300"
              }`}
            >
              Professional CV
            </button>
            <button
              onClick={() => setActiveTab("bcard")}
              className={`inline-flex items-center px-1 pt-1 border-b-[3px] text-[15px] font-bold transition-colors duration-200 cursor-pointer ${
                activeTab === "bcard"
                  ? "border-[#d95222] text-[#d95222]"
                  : "border-transparent text-neutral-500 hover:text-neutral-800 hover:border-neutral-300"
              }`}
            >
              Business Card
            </button>
            
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden sm:flex">
              <button
                onClick={handleDownloadPdf}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-neutral-600 hover:text-neutral-900 border border-neutral-300 rounded-md hover:bg-neutral-100 transition-colors cursor-pointer"
                title="Download as PDF"
              >
                <Printer className="w-4 h-4" />
                <span>Save PDF</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main id="pdf-content" className="flex-1 w-full flex flex-col relative">
        {activeTab === "cv" ? (
          <div className="animate-in fade-in zoom-in-[0.98] duration-300 flex-1 flex flex-col">
            <Cv />
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in-[0.98] duration-300 flex-1 flex flex-col bg-[#e8cdb0]">
            <Bcard />
          </div>
        )}
      </main>
    </div>
  );
}
