"use client";

export default function Cv() {
  return (
    <div className="min-h-screen bg-neutral-200 flex flex-col items-center py-10 px-4 md:px-8 font-sans selection:bg-blue-100 selection:text-blue-900 print:bg-white print:py-0 print:px-0">
      {/* CV Paper Container */}
      <div className="relative w-full max-w-[850px] bg-white text-neutral-900 shadow-xl print:shadow-none mx-auto p-10 md:p-14 text-[13.5px] leading-[1.6]">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide mb-2 uppercase">
            AGNI PATEL
          </h1>
          <p className="font-semibold text-neutral-700">
            Bangalore Karnataka | 6386026426
          </p>
          <p className="font-semibold text-neutral-700 mt-0.5 flex items-center justify-center flex-wrap gap-x-2">
            <a
              href="mailto:patelagni239@gmail.com"
              className="hover:underline"
            >
              patelagni239@gmail.com
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="https://www.linkedin.com/in/agni-patel-938292265"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-blue-700"
            >
              LinkedIn
            </a>
            <span className="hidden sm:inline">|</span>
            <a
              href="https://github.com/Agnipatel"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-blue-700"
            >
              GitHub
            </a>
          </p>
        </div>

        {/* Professional Summary */}
        <section className="mb-5">
          <h2 className="text-[13px] font-bold tracking-widest uppercase mb-2">
            Professional Summary
          </h2>
          <p className="text-justify text-neutral-800">
            Motivated <strong>MERN Stack Developer</strong> with professional
            experience in web development and deep learning. Proven track record
            of training developers and contributing to high-scale projects,
            including eCommerce platforms and energy forecasting systems. Expert
            in <strong>JavaScript</strong> and <strong>React</strong>, focused
            on delivering innovative, data-driven technology solutions.
          </p>
        </section>

        <hr className="border-t-[1.5px] border-neutral-300 mb-5" />

        {/* Technical Skills */}
        <section className="mb-5">
          <h2 className="text-[13px] font-bold tracking-widest uppercase mb-2">
            Technical Skills
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-neutral-800">
            <li>
              <strong>Web Development:</strong> MERN Stack (MongoDB, Express.js,
              React.js, Node.js), Next.js, NestJS, HTML5, CSS3.
            </li>
            <li>
              <strong>UI Frameworks:</strong> Tailwind CSS, Bootstrap, UI/UX
              design, State Management.
            </li>
            <li>
              <strong>Languages & Algorithms:</strong> JavaScript (ES6+), Data
              Structures, and Algorithms.
            </li>
            <li>
              <strong>AI & Data Science:</strong> Deep Learning, Machine
              Learning, Statistical Modeling.
            </li>
            <li>
              <strong>Tools & Deployment:</strong> Git, REST APIs, Firebase,
              Netlify, Vercel, Heroku, VS Code, Antigravity.
            </li>
          </ul>
        </section>

        <hr className="border-t-[1.5px] border-neutral-300 mb-5" />

        {/* Work Experience */}
        <section className="mb-5">
          <h2 className="text-[13px] font-bold tracking-widest uppercase mb-3">
            Work Experience
          </h2>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <h3 className="font-bold text-neutral-900 text-[14px]">
                MERN Stack Trainer & Developer{" "}
                <span className="font-normal text-neutral-700">
                  | Sileo Technologies Pvt. Ltd. (CMMI Level 3)
                </span>
              </h3>
              <span className="text-sm font-semibold italic text-neutral-600 sm:min-w-[180px] sm:text-right">
                March 2025 – August 2025
              </span>
            </div>

            <ul className="list-disc pl-5 space-y-1 mt-1.5 text-neutral-800">
              <li>
                <strong>Delivered</strong> end-to-end training programs on the
                MERN stack, emphasizing practical coding and industry readiness.
              </li>
              <li>
                <strong>Designed</strong> structured learning materials and
                mentored trainees on building real-world applications.
              </li>
              <li>
                <strong>Engineered</strong> frontend (React.js, UI/UX, State
                Management) and backend (Node.js, Express.js, MongoDB) for
                <strong> SwarajIndia</strong> and <strong>BVG projects.</strong>
              </li>
              <li>
                <strong>Optimized</strong> application performance and ensured
                seamless client-server integration for high-traffic
                environments.
              </li>
            </ul>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
              <h3 className="font-bold text-neutral-900 text-[14px]">
                React Developer
                <span className="font-normal text-neutral-700">
                  {" "}
                  | difmo Technology
                </span>
              </h3>
              <span className="text-sm font-semibold italic text-neutral-600 sm:min-w-[150px] sm:text-right">
                6-Month Internship
              </span>
            </div>

            <ul className="list-disc pl-5 space-y-1 mt-1.5 text-neutral-800">
              <li>
                <strong>Spearheaded</strong> the development of an
                enterprise-level project using <strong>React</strong>.
              </li>
              <li>
                <strong>Completed</strong> intensive project-based training
                centered on advanced frontend frameworks.
              </li>
              <li>
                <strong>Collaborated</strong> on cross-functional teams to
                migrate legacy UI components.
              </li>
              <li>
                <strong>Implemented</strong> responsive web designs using
                <strong> Bootstrap</strong> and
                <strong> Tailwind CSS</strong>.
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-t-[1.5px] border-neutral-300 mb-5" />

        {/* Technical Projects */}
        <section className="mb-5">
          <h2 className="text-[13px] font-bold tracking-widest uppercase mb-3">
            Technical Projects
          </h2>

          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-0.5">
              <h3 className="font-bold text-neutral-900 text-[14px]">
                Energy Consumption Forecasting [Deep Learning]
              </h3>
              <span className="text-sm font-semibold italic text-neutral-600">
                2023
              </span>
            </div>

            <p className="mt-1 font-semibold text-neutral-800">
              Developed a predictive system for smart buildings using historical
              data and statistical models.
            </p>

            <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-800">
              <li>
                <strong>Achieved</strong> an <strong>R² score greater than
                0.9</strong>.
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="font-bold text-neutral-900 text-[14px] mb-0.5">
              E-Commerce & Client Solutions
            </h3>

            <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-800">
              <li>
                <strong>Built and deployed</strong> multiple platforms including
                <strong> Annapurna Restaurants</strong> and
                <strong> USD Plotting.</strong>
              </li>
              <li>
                <strong>Implemented</strong> secure user authentication and
                dynamic login systems.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-neutral-900 text-[14px] mb-0.5">
              Full-Stack Responsive Web Application
            </h3>

            <ul className="list-disc pl-5 space-y-1 mt-1 text-neutral-800">
              <li>
                Built a responsive web application using
                <strong> React.js</strong> and
                <strong> Tailwind CSS</strong>.
              </li>
              <li>
                Integrated <strong>Firebase</strong> for real-time database
                operations and authentication.
              </li>
              <li>
                Managed version control with <strong>GitHub</strong> and
                deployed via Vercel.
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-t-[1.5px] border-neutral-300 mb-5" />

        {/* Education */}
        <section className="mb-5">
          <h2 className="text-[13px] font-bold tracking-widest uppercase mb-2">
            Education
          </h2>

          <ul className="list-disc pl-5 space-y-1 text-neutral-800">
            <li>
              <strong>B.Tech in Computer Science & Engineering:</strong>
              Rameshwaram Institute of Technology and Management (2020 – 2024)
            </li>
            <li>
              <strong>Intermediate:</strong> Adarsh Inter College, Adalhat
              (2017 – 2019)
            </li>
          </ul>
        </section>

        <hr className="border-t-[1.5px] border-neutral-300 mb-5" />

        {/* Certifications */}
        <section>
          <h2 className="text-[13px] font-bold tracking-widest uppercase mb-2">
            Certifications
          </h2>

          <ul className="list-disc pl-5 space-y-1 text-neutral-800">
            <li>
              <strong>TCS iON NQT - IT</strong>
            </li>
            <li>
              <strong>IIT BHU (Summer Internship)</strong>
            </li>
            <li>
              <strong>Roomshala Hospitality Private Limited</strong>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
