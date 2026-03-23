"use client";

import { Globe, MapPin, Phone, Download } from "lucide-react";
import QRCode from "react-qr-code";

const vcfData = `
BEGIN:VCARD
VERSION:3.0
N:PVT. LTD.;AGNIIT;;;
FN:AGNIIT PVT. LTD.
ORG:AGNIIT PVT. LTD.
TITLE:Website Developer | App UI/UX | Digital Marketing | SEO
TEL;TYPE=WORK,VOICE:6386026426
TEL;TYPE=WORK,VOICE:+19266348732
ADR;TYPE=WORK:;;Gomti Nagar;Lucknow & Mirzapur;;;
URL:https://agniit.com
NOTE:AGNIIT PVT. LTD. - Website Development, App UI/UX, SEO, and Digital Marketing solutions.
END:VCARD
`.trim();

const FireLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left flame */}
        <path d="M40 45 C40 45 20 65 25 85 C28 95 38 100 45 95 C50 90 50 80 45 70 C40 60 40 45 40 45 Z" fill="url(#mainGrad)" />
        {/* Right flame */}
        <path d="M60 45 C60 45 80 65 75 85 C72 95 62 100 55 95 C50 90 50 80 55 70 C60 60 60 45 60 45 Z" fill="url(#mainGrad)" />
        {/* Center flame */}
        <path d="M50 20 C50 20 35 55 35 80 C35 93 43 100 50 100 C57 100 65 93 65 80 C65 55 50 20 50 20 Z" fill="url(#mainGrad)" />
        {/* Center cutout */}
        <path d="M50 70 C44 80 44 90 50 95 C56 90 56 80 50 70 Z" fill="#ffffff" />
        <defs>
            <linearGradient id="mainGrad" x1="50" y1="20" x2="50" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#f58025" />
                <stop offset="60%" stopColor="#e34825" />
                <stop offset="100%" stopColor="#9a1b1b" />
            </linearGradient>
        </defs>
    </svg>
);

export default function Bcard() {
    const handleDownloadContact = () => {
        const blob = new Blob([vcfData], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "AGNIIT_Contact.vcf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-[#e8cdb0] flex flex-col items-center justify-center p-8 gap-16 font-sans relative overflow-x-hidden">
            {/* Wooden/desk texture overlay */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #d3a97d 25%, transparent 25%, transparent 75%, #d3a97d 75%, #d3a97d), repeating-linear-gradient(45deg, #d3a97d 25%, #ebd1b1 25%, #ebd1b1 75%, #d3a97d 75%, #d3a97d)",
                    backgroundPosition: "0 0, 10px 10px",
                    backgroundSize: "20px 20px"
                }}
            ></div>

            {/* Front Card */}
            <div className="relative w-full max-w-[650px] aspect-[1.75/1] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col items-center justify-center transition-all hover:scale-[1.02] duration-500 rounded-sm">

                {/* Abstract Corner Shapes */}

                {/* Top Right Dark Blue Triangle */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#0a152e] transform rotate-45 z-10 shadow-lg"></div>
                {/* Top Right Grey Overlay */}
                <div className="absolute -top-28 -right-40 w-64 h-64 bg-[#e0e1e3] transform rotate-45 z-0 opacity-90"></div>

                {/* Bottom Left Light Grey Triangle */}
                <div className="absolute -bottom-36 -left-36 w-64 h-64 bg-[#e0e1e3] transform rotate-45 z-0"></div>

                {/* Center Content */}
                <div className="z-20 flex flex-col items-center">
                    <FireLogo className="w-28 h-28 drop-shadow-lg filter brightness-110 mb-2" />
                    <h1 className="text-[34px] font-extrabold text-[#0a152e] tracking-widest flex items-center">
                        AGN
                        <span className="relative inline-block w-4 h-9">
                            <span className="absolute bottom-0 w-2.5 h-[26px] bg-[#0a152e] left-1/2 -translate-x-1/2"></span>
                            <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#f46624] shadow-[0_0_6px_#f46624]"></span>
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 rounded-full bg-[#f46624]"></span>
                        </span>
                        <span className="relative inline-block w-4 h-9 ml-0.5">
                            <span className="absolute bottom-0 w-2.5 h-[26px] bg-[#0a152e] left-1/2 -translate-x-1/2"></span>
                            <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#f46624] shadow-[0_0_6px_#f46624]"></span>
                            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-1.5 rounded-full bg-[#f46624]"></span>
                        </span>
                        T
                    </h1>
                    <p className="text-[10px] tracking-[0.25em] text-[#0a152e] mt-2 font-bold opacity-80 pl-1">PVT. LTD.</p>
                </div>
            </div>

            {/* Back Card */}
            <div className="relative w-full max-w-[650px] aspect-[1.75/1] bg-[#fdfdfd] shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)] overflow-hidden flex transition-all hover:scale-[1.02] duration-500 rounded-sm">

                {/* Top Left Shape */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#0a152e] transform rotate-45 z-10 shadow-lg"></div>

                {/* Top Right Abstract */}
                <div className="absolute top-0 right-0 w-80 h-32 overflow-hidden pointer-events-none z-0">
                    <div className="absolute -top-32 -right-10 w-64 h-64 bg-[#e0e1e3] transform rotate-45"></div>
                    <div className="absolute -top-40 -right-24 w-80 h-80 bg-gradient-to-r from-purple-900/40 to-[#0a152e]/80 transform -rotate-12 blur-2xl opacity-50"></div>
                    {/* Top Right Orange-Red Bar */}
                    <div className="absolute top-10 -right-4 w-48 h-2 bg-gradient-to-r from-[#d95222] to-[#240a16] transform rotate-45 z-10 shadow-md"></div>
                </div>

                {/* Bottom Right Shape */}
                <div className="absolute -bottom-24 -right-10 w-72 h-48 bg-[#0a152e] transform -skew-x-[35deg] z-10 opacity-95"></div>
                <div className="absolute -bottom-20 -right-16 w-80 h-32 bg-gradient-to-r from-[#f48422] via-[#e24422] to-[#611624] transform -skew-x-[35deg] z-0 shadow-lg"></div>


                {/* Background Grey Diagonal Pattern Left */}
                <div className="absolute bottom-0 left-1/2 w-[350px] h-full -translate-x-1/2 bg-[#f6f6f6] transform -skew-x-[35deg] -z-10"></div>

                {/* QR Code element placed in the bottom right corner (absolute) */}
                <div className="absolute bottom-6 right-6 z-30 p-2.5 bg-white rounded-lg shadow-xl border border-gray-100 flex flex-col items-center gap-1.5 group hover:scale-[1.05] transition-transform cursor-pointer">
                    <QRCode value={vcfData} size={75} fgColor="#0a152e" />
                    <span className="text-[7px] font-bold text-[#f46624] tracking-widest uppercase">Scan to Save</span>
                </div>

                {/* Content Container */}
                <div className="flex-1 flex flex-col z-20 w-full h-full relative pl-[10%] pt-8">

                    {/* Top Section: Logo & Services */}
                    <div className="flex items-center mt-6">

                        {/* Circular Logo Component */}
                        <div className="relative flex items-center justify-center">
                            <div className="absolute w-[140px] h-[140px] rounded-full border-[3px] border-[#0a152e] flex items-center justify-center">
                                <div className="absolute inset-x-2 inset-y-2 rounded-full border-[6px] border-transparent border-t-purple-900/30 border-r-[#f48422]/70 border-b-[#9a1b1b]/50 border-l-transparent transform -rotate-45"></div>
                            </div>
                            <div className="flex flex-col items-center justify-center w-[120px] h-[120px] bg-white rounded-full relative z-10 shadow-sm">
                                <FireLogo className="w-[52px] h-[52px] mb-0" />
                                <h2 className="text-[14px] font-extrabold text-[#0a152e] tracking-widest mt-1">
                                    AGN<span className="relative px-[0.5px]">I<span className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-[#f46624]"></span></span><span className="relative px-[0.5px]">I<span className="absolute -top-[1.5px] left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-[#f46624]"></span></span>T
                                </h2>
                                <p className="text-[5px] tracking-[0.2em] text-[#0a152e] font-bold mt-0.5">PVT. LTD.</p>
                            </div>
                        </div>

                        {/* Separator */}
                        <div className="flex flex-col ml-8 mr-6 py-2 gap-4">
                            <div className="w-[1.5px] h-12 bg-gradient-to-b from-transparent via-[#872023] to-transparent"></div>
                            <div className="w-[1.5px] h-[50px] bg-[#9e272b]"></div>
                        </div>

                        {/* Services text block aligned vertically with logo */}
                        <div className="flex flex-col translate-y-2 mt-4">
                            <p className="text-[17px] font-semibold text-[#30333a] tracking-tight mb-1">
                                Website Developer <span className="text-[#a1a1a1] mx-1 mr-2 px-[1px]">|</span> App| UI/UX
                            </p>
                            <p className="text-[17px] font-semibold text-[#30333a] tracking-tight flex items-center">
                                <span className="flex flex-col items-center justify-center mr-2">
                                    {/* Vertical indicator element */}
                                </span>
                                Digital Marketing <span className="text-[#a1a1a1] mx-1 mr-2 px-[1px]">|</span> SEO
                            </p>
                        </div>
                    </div>

                    {/* Bottom Section: Contact Info */}
                    <div className="mt-auto mb-[15%] flex flex-col gap-2.5 ml-2">
                        <div className="flex items-center gap-4 text-[14px] text-[#2c3038] font-semibold">
                            <div className="w-5 h-5 rounded-full bg-[#0a152e] flex items-center justify-center text-white shrink-0 mt-[1px]">
                                <Globe className="w-3 h-3" strokeWidth={2.5} />
                            </div>
                            <span className="tracking-wide">agniit.com</span>
                        </div>

                        <div className="flex items-start gap-4 text-[14px] text-[#2c3038] font-semibold">
                            <div className="w-5 h-5 flex items-center justify-center text-[#0a152e] shrink-0 mt-[1px]">
                                <MapPin className="w-[20px] h-[20px]" strokeWidth={2.5} />
                            </div>
                            <span className="tracking-wide leading-tight mt-[1px]">Gomti Nagar, Lucknow & Mirzapur</span>
                        </div>

                        <div className="flex items-center gap-4 text-[14px] text-[#2c3038] font-semibold">
                            <div className="w-5 h-5 flex items-center justify-center text-[#0a152e] shrink-0 mt-[1px]">
                                <Phone className="w-[18px] h-[18px] ml-1" strokeWidth={2.5} />
                            </div>
                            <span className="tracking-wide">6386026426 / 9266348732</span>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    );
}
