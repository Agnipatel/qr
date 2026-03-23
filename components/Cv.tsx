"use client";

import QRCode from "react-qr-code";
import { Download } from "lucide-react";

const vcfData = `
BEGIN:VCARD
VERSION:3.0
N:PATEL;AGNI;;;
FN:AGNI PATEL
TITLE:MERN Stack Developer & React Specialist
TEL;TYPE=WORK,VOICE:6386026426
TEL;TYPE=CELL,VOICE:+9266348732
EMAIL;TYPE=PREF,INTERNET:patelagni239@gmail.com
ADR;TYPE=WORK:;;;Lucknow;;;India
URL;TYPE=LinkedIn:https://www.linkedin.com/in/agni-patel-938292265
URL;TYPE=GitHub:https://github.com/Agnipatel
URL;TYPE=Portfolio:https://usdunique.com/
NOTE:Motivated MERN Stack Developer with professional experience in web development. Expert in JavaScript and React, focused on delivering innovative solutions.
END:VCARD
`.trim();

const cvTextData = `
AGNI PATEL
Lucknow | 6386026426 | 9266348732
patelagni239@gmail.com | LinkedIn: /in/agni-patel-938292265 | GitHub: Agnipatel

PROFESSIONAL SUMMARY
Motivated MERN Stack Developer with professional experience in web development and deep learning. Expert in JavaScript and React, focused on delivering innovative solutions.

TECHNICAL SKILLS
- Web Dev: MERN Stack, Next.js, NestJS, HTML5, CSS3
- UI: Tailwind CSS, Bootstrap, UI/UX
- Lang/Algo: JavaScript (ES6+), DSA
- AI/Data: Deep Learning, ML, Statistical Modeling
- Tools: Git, REST APIs, Firebase, Netlify, Vercel

WORK EXPERIENCE
1. MERN Stack Trainer & Developer | Sileo Technologies (Mar23-Aug23)
- Engineered frontend (React) and backend (Node.js/Express) for SwarajIndia/BVG.

2. React Developer | difmo Technology (6-Months)
- Spearheaded enterprise project using React.

PROJECTS
- Energy Consumption Forecasting: Smart building predictor using Deep Learning.
- E-Commerce & Client Solutions: Annapurna Restaurants and platforms.
- Full-Stack Web App: usdunique.com (React, Firebase, Tailwind).

EDUCATION: B.Tech CSE Rameshwaram Institute (2020-2024), Intermediate (2017-2019).
CERTIFICATIONS: TCS iON NQT, IIT BHU, Roomshala Hospitality.
`.trim();

export default function Cv() {
    const handleDownloadContact = () => {
        const blob = new Blob([vcfData], { type: "text/vcard" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "AGNI_PATEL_Contact.vcf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-neutral-200 flex flex-col items-center py-10 px-4 md:px-8 font-sans selection:bg-blue-100 selection:text-blue-900 print:bg-white print:py-0 print:px-0">


            {/* CV Paper Container */}
            <div className="relative w-full max-w-[850px] bg-white text-neutral-900 shadow-xl print:shadow-none mx-auto p-10 md:p-14 text-[13.5px] leading-[1.6]">

                {/* QR Code in Top Right Absolute (Hidden on Print optionally, but let's keep it visible so they can scan paper too) */}
                <div className="absolute top-8 right-8 flex flex-col items-center gap-1.5 opacity-90 group cursor-pointer hidden md:flex" onClick={handleDownloadContact} title="Click to download vCard, or scan on mobile">
                    <div className="p-1.5 border border-neutral-200 rounded bg-white shadow-sm transition-transform group-hover:scale-105">
                        <QRCode value={cvTextData} size={85} fgColor="#171717" />
                    </div>
                    <span className="text-[8px] font-bold text-neutral-500 tracking-wider uppercase">Scan Full CV</span>
                </div>

                {/* Header */}
                <div className="flex flex-col items-center text-center mb-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-2 uppercase">AGNI PATEL</h1>
                    <p className="font-semibold text-neutral-700">
                        Lucknow | 6386026426 / 9266348732
                    </p>
                    <p className="font-semibold text-neutral-700 mt-0.5 flex items-center justify-center flex-wrap gap-x-2">
                        <a href="mailto:patelagni239@gmail.com" className="hover:underline">patelagni239@gmail.com</a>
                        <span className="hidden sm:inline">|</span>
                        <a href="https://www.linkedin.com/in/agni-patel-938292265" target="_blank" rel="noreferrer" className="hover:underline text-blue-700">LinkedIn</a>
                        <span className="hidden sm:inline">|</span>
                        <a href="https://github.com/Agnipatel" target="_blank" rel="noreferrer" className="hover:underline text-blue-700">GitHub</a>
                    </p>
                </div>

                {/* Section: Professional Summary */}
                <section className="mb-5">
                    <h2 className="text-[13px] font-bold tracking-widest uppercase mb-2">Professional Summary</h2>
                    <p className="text-justify text-neutral-800">
                        Motivated <strong>MERN Stack Developer</strong> with professional experience in web development and deep learning. Proven track record of training developers and contributing to high-scale projects, including eCommerce platforms and energy forecasting systems. Expert in <strong>JavaScript</strong> and <strong>React</strong>, focused on delivering innovative, data-driven technology solutions.
                    </p>
                </section>

                <hr className="border-t-[1.5px] border-neutral-300 mb-5" />

                {/* Section: Technical Skills */}
                <section className="mb-5">
                    <h2 className="text-[13px] font-bold tracking-widest uppercase mb-2">Technical Skills</h2>
                    <ul className="list-disc pl-5 space-y-1.5 text-neutral-800">
                        <li><strong>Web Development:</strong> MERN Stack (MongoDB, Express.js, React.js, Node.js), Next.js, NestJS, HTML5, CSS3.</li>
                        <li><strong>UI Frameworks:</strong> Tailwind CSS, Bootstrap, UI/UX design, State Management.</li>
                        <li><strong>Languages & Algorithms:</strong> JavaScript (ES6+), Data Structures, and Algorithms.</li>
                        <li><strong>AI & Data Science:</strong> Deep Learning, Machine Learning, Statistical Modeling.</li>
                        <li><strong>Tools & Deployment:</strong> Git, REST APIs, Firebase, Netlify, Vercel, Heroku, VS Code, Antigravity.</li>
                    </ul>
                </section>

                <hr className="border-t-[1.5px] border-neutral-300 mb-5" />

                {/* Section: Work Experience */}
                <section className="mb-5">
                    <h2 className="text-[13px] font-bold tracking-widest uppercase mb-3">Work Experience</h2>

                    <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                            <h3 className="font-bold text-neutral-900 text-[14px]">MERN Stack Trainer & Developer <span className="font-normal text-neutral-700">| Sileo Technologies Pvt. Ltd. (CMMI Level 3)</span></h3>
                            <span className="text-sm font-semibold italic text-neutral-600 sm:min-w-[180px] sm:text-right">March 2023 – August 2023</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-1 mt-1.5 text-neutral-800">
                            <li><strong>Delivered</strong> end-to-end training programs on the MERN stack, emphasizing practical coding and industry readiness.</li>
                            <li><strong>Designed</strong> structured learning materials and mentored trainees on building real-world applications.</li>
                            <li><strong>Engineered</strong> frontend (React.js, UI/UX, State Management) and backend (Node.js, Express.js, MongoDB) for <strong>SwarajIndia</strong> and <strong>BVG projects.</strong></li>
                            <li><strong>Optimized</strong> application performance and ensured seamless client-server integration for high-traffic environments.</li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                            <h3 className="font-bold text-neutral-900 text-[14px]">React Developer <span className="font-normal text-neutral-700">| difmo Technology</span></h3>
                            <span className="text-sm font-semibold italic text-neutral-600 sm:min-w-[150px] sm:text-right">6-Month Internship</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-1 mt-1.5 text-neutral-800">
                            <li><strong>Spearheaded</strong> the development of an enterprise-level project using <strong>React</strong>, focusing on modular architecture and scalable component design.</li>
                            <li><strong>Completed</strong> intensive project-based training centered on advanced frontend frameworks and state management.</li>
                            <li><strong>Collaborated</strong> on cross-functional teams to migrate legacy UI components to modern React standards, improving maintainability.</li>
                            <li><strong>Implemented</strong> responsive web designs using <strong>Bootstrap</strong> and <strong>Tailwind CSS</strong> to enhance user engagement across platforms.</li>
                        </ul>
                    </div>
                </section>

                <hr className="border-t-[1.5px] border-neutral-300 mb-5" />

                {/* Section: Technical Projects */}
                <section className="mb-5">
                    <h2 className="text-[13px] font-bold tracking-widest uppercase mb-3">Technical Projects</h2>

                    <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-0.5">
                            <h3 className="font-bold text-neutral-900 text-[14px]">Energy Consumption Forecasting [Deep Learning]</h3>
                            <span className="text-sm font-semibold italic text-neutral-600">2023</span>
                        </div>
                        <p className="mt-1 font-semibold text-neutral-800">Developed a predictive system for smart buildings using historical data and statistical models.</p>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-800">
                            <li><strong>Achieved</strong> an <strong>R² score greater than 0.9</strong> by implementing and tuning various deep learning algorithms.</li>
                        </ul>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-bold text-neutral-900 text-[14px] mb-0.5">E-Commerce & Client Solutions <span className="font-normal text-neutral-700">| <a href="#" className="hover:underline text-blue-700 font-semibold">Live Link</a></span></h3>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-800">
                            <li><strong>Built and deployed</strong> multiple platforms including <strong>Annapurna Restaurants</strong> and <strong>USD Plotting.</strong></li>
                            <li><strong>Implemented</strong> secure user authentication and dynamic login systems.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-neutral-900 text-[14px] mb-0.5">Full-Stack Responsive Web Application <span className="font-normal text-neutral-700">| <a href="https://usdunique.com/" target="_blank" rel="noreferrer" className="hover:underline text-blue-700 font-semibold">usdunique.com</a></span></h3>
                        <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-800">
                            <li>Built a responsive web application using <strong>React.js</strong> and <strong>Tailwind CSS</strong> with mobile-first design.</li>
                            <li>Integrated <strong>Firebase</strong> for real-time database operations and secure user authentication.</li>
                            <li>Managed version control with <strong>GitHub</strong> and deployed via Vercel with a custom domain.</li>
                        </ul>
                    </div>
                </section>

                <hr className="border-t-[1.5px] border-neutral-300 mb-5" />

                {/* Section: Education */}
                <section className="mb-5">
                    <h2 className="text-[13px] font-bold tracking-widest uppercase mb-2">Education</h2>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-800">
                        <li><strong>B.Tech in Computer Science & Engineering:</strong> Rameshwaram Institute of Technology and Management (2020 – 2024).</li>
                        <li><strong>Intermediate:</strong> Adarsh Inter College, Adalhat (2017 – 2019).</li>
                    </ul>
                </section>

                <hr className="border-t-[1.5px] border-neutral-300 mb-5" />

                {/* Section: Certifications */}
                <section className="mb-2">
                    <h2 className="text-[13px] font-bold tracking-widest uppercase mb-2">Certifications</h2>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-800">
                        <li><strong>TCS iON NQT - IT</strong></li>
                        <li><strong>IIT BHU (Summer Internship)</strong></li>
                        <li><strong>Roomshala Hospitality Private Limited (Testing frameworks)</strong></li>
                    </ul>
                </section>

            </div>
        </div>
    );
}
