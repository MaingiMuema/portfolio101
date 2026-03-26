"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";
import {
  activeHero,
  capabilityGroups,
  conceptLabTeaser,
  conceptShowcase,
  contactCardContent,
  contactCta,
  projectPortfolio,
} from "./portfolioContent";

const heroTypeSequence = activeHero.roles.flatMap((role) => [role, 1100]);
const homeCapabilityColumns = [
  capabilityGroups.slice(0, 2),
  capabilityGroups.slice(2, 4),
];
const toolsGroup = capabilityGroups[4];

function getDrivePreviewUrl(url) {
  const match = url.match(/\/file\/d\/([^/]+)/);
  return match ? `https://drive.google.com/file/d/${match[1]}/preview` : url;
}

export default function PortfolioGrid() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [showContactPopup, setShowContactPopup] = useState(false);
  const visibleProjects = showAllProjects ? projectPortfolio.length : 8;

  const cardVariants = {
    introCard: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
    imageCard: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    },
    contactCard: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    skillsCard: {
      hidden: { opacity: 0, rotateX: 90 },
      visible: { opacity: 1, rotateX: 0, transition: { duration: 0.6 } },
    },
    conceptCard: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    },
    projectsSidebar: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white-100 to-white-200 p-10 pt-2 space-y-4">
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1.85fr)_minmax(340px,0.9fr)] lg:items-start">
        <div className="min-w-0 grid grid-cols-1 gap-4 content-start md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-max">
          <motion.div
            variants={cardVariants.introCard}
            initial="hidden"
            animate="visible"
            className="col-span-2 self-start p-8 bg-gradient-to-r from-[#efb307] to-[#707070] rounded-2xl shadow-lg text-gray-900 transition-all duration-300 hover:shadow-2xl overflow-hidden relative pt-20 group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20 transition-transform duration-700 ease-in-out group-hover:scale-150"></div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-800 mb-4">
              {activeHero.eyebrow}
            </p>
            <h2 className="text-4xl font-bold mb-6 leading-tight">
              <span className="text-gray-900">Mark Maingi</span>
            </h2>
            <h3 className="text-3xl font-semibold mb-6">
              <TypeAnimation
                sequence={heroTypeSequence}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h3>
            <p className="text-xl leading-relaxed mb-6 max-w-2xl text-gray-800">
              {activeHero.intro}
            </p>
            <button
              onClick={() => setShowContactPopup(true)}
              className="mt-6 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 flex items-center group"
            >
              <span className="mr-2 text-sm uppercase tracking-wider">
                Start a build conversation
              </span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </motion.div>

          <motion.div
            variants={cardVariants.imageCard}
            initial="hidden"
            animate="visible"
            className="self-start p-1 bg-gradient-to-bl from-[#efb307] to-[#707070] rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl group lg:self-stretch lg:h-full"
          >
            <Image
              src="/Mark.jpeg"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-xl object-cover w-full h-full min-h-[320px] transition-transform duration-500 group-hover:scale-110 filter group-hover:brightness-110 lg:min-h-0"
            />
          </motion.div>

          <motion.div
            variants={cardVariants.contactCard}
            initial="hidden"
            animate="visible"
            className="col-span-2 self-start p-8 bg-gradient-to-l from-[#efb307] to-[#707070] rounded-2xl shadow-lg text-gray-900 transition-all duration-300 hover:shadow-2xl lg:col-span-1"
          >
            <h3 className="text-3xl font-semibold mb-4">
              {contactCardContent.title}
            </h3>
            <p className="text-lg mb-5 text-gray-800 leading-relaxed">
              {contactCardContent.description}
            </p>
            <div className="space-y-2 mb-6">
              {contactCardContent.highlights.map((highlight) => (
                <p
                  key={highlight}
                  className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-800"
                >
                  {highlight}
                </p>
              ))}
            </div>
            <div className="flex space-x-6 mt-4">
              <a
                href="https://github.com/MaingiMuema"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-900 hover:text-white transition-all duration-300 hover:scale-110 transform"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://ke.linkedin.com/in/muema-mark-maingi-3790a020b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-4xl text-gray-900 hover:text-white transition-all duration-300 hover:scale-110 transform"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:manlikemaingi@gmail.com"
                className="text-4xl text-gray-900 hover:text-white transition-all duration-300 hover:scale-110 transform"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={cardVariants.skillsCard}
            initial="hidden"
            animate="visible"
            className="col-span-2 self-start p-8 bg-gradient-to-r from-[#707070] to-[#efb307] rounded-2xl shadow-lg text-gray-900 transition-all duration-300 hover:shadow-2xl lg:col-span-2"
          >
            <h3 className="text-3xl font-semibold mb-4">Core Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {homeCapabilityColumns.map((column, index) => (
                <div key={index} className="space-y-4">
                  {column.map((group) => (
                    <div key={group.title}>
                      <h4 className="text-xl font-medium mb-2">{group.title}</h4>
                      <ul className="list-disc list-inside text-gray-800">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-800/20">
              <h4 className="text-xl font-medium mb-2">{toolsGroup.title}</h4>
              <p className="text-gray-800 leading-relaxed">
                {toolsGroup.items.join(" | ")}
              </p>
            </div>
          </motion.div>

          <motion.a
            variants={cardVariants.conceptCard}
            initial="hidden"
            animate="visible"
            href="#concept-lab"
            className="col-span-2 self-start overflow-hidden rounded-2xl bg-gradient-to-r from-[#707070] to-[#efb307] shadow-lg text-gray-900 transition-all duration-300 hover:shadow-2xl group lg:col-span-3"
          >
            <div className="grid gap-6 p-3 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:p-6">
              <div className="overflow-hidden rounded-xl bg-gray-900/85">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/Mark.jpeg"
                  className="aspect-video h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                >
                  <source src={conceptLabTeaser.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="flex flex-col justify-center p-3 md:p-0">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-800 mb-4">
                  {conceptLabTeaser.eyebrow}
                </p>
                <h3 className="text-3xl font-bold leading-tight mb-4">
                  {conceptLabTeaser.title}
                </h3>
                <p className="text-lg leading-relaxed text-gray-800 mb-6">
                  {conceptLabTeaser.description}
                </p>
                <div className="inline-flex items-center text-sm font-semibold uppercase tracking-[0.2em] text-gray-900">
                  <span className="mr-3">{conceptLabTeaser.cta}</span>
                  <svg
                    className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </motion.a>
        </div>

        <motion.div
          variants={cardVariants.projectsSidebar}
          initial="hidden"
          animate="visible"
          className="min-w-0 self-start p-8 bg-gradient-to-br from-[#efb307] via-[#707070] to-[#efb307] rounded-2xl shadow-lg text-gray-900 transition-all duration-300 hover:shadow-2xl overflow-hidden relative lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:flex lg:flex-col"
        >
          <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
          <h3 className="text-3xl font-bold mb-8 relative z-10">
            Selected Work
          </h3>
          <ul className="min-w-0 space-y-6 relative z-10 overflow-x-hidden lg:flex-1 lg:overflow-y-auto lg:pr-2">
            {projectPortfolio.slice(0, visibleProjects).map((project) => (
              <li key={project.name} className="group">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block min-w-0 p-4 rounded-xl transition-all duration-300 hover:bg-white hover:bg-opacity-20"
                >
                  <div className="flex items-center justify-between mb-2 gap-4">
                    <div className="min-w-0">
                      <span className="block break-words text-xs font-semibold uppercase tracking-[0.22em] text-gray-700 group-hover:text-gray-200 transition-colors duration-300">
                        {project.category}
                      </span>
                      <span className="block break-words text-xl font-medium text-gray-800 group-hover:text-white transition-colors duration-300">
                        {project.name}
                      </span>
                    </div>
                    <svg
                      className="w-6 h-6 shrink-0 text-gray-800 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <p className="break-words text-sm leading-relaxed text-gray-800 group-hover:text-gray-100 transition-colors duration-300">
                    {project.summary}
                  </p>
                  <div className="mt-3 overflow-hidden rounded-lg bg-black/10 ring-1 ring-white/20 transition-all duration-300 lg:max-h-0 lg:opacity-0 lg:group-hover:max-h-60 lg:group-hover:opacity-100">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        sizes="(min-width: 1024px) 22vw, 100vw"
                        className="rounded-lg object-contain p-1"
                      />
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="mt-10 w-full shrink-0 px-8 py-4 bg-gray-900 text-white font-semibold rounded-full shadow-md hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center group"
          >
            <span className="mr-2 text-sm uppercase tracking-wider">
              {showAllProjects ? "Show Less" : "View All Projects"}
            </span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      <motion.section
        id="concept-lab"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="scroll-mt-24 space-y-4"
      >
        <div className="rounded-2xl bg-gradient-to-r from-[#efb307] to-[#707070] p-8 shadow-lg text-gray-900">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gray-800 mb-4">
            Current experiments
          </p>
          <h3 className="text-3xl font-bold mb-4">Concept Lab</h3>
          <p className="max-w-3xl text-lg leading-relaxed text-gray-800">
            This section captures some of the product concepts I am actively
            testing right now, from agentic compliance tooling to AI-assisted
            education media systems. The focus here is on process, prototype
            quality, and how ideas are evolving before full product rollout.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {conceptShowcase.map((concept) => (
            <div
              key={concept.name}
              className="rounded-2xl bg-gradient-to-br from-[#707070] to-[#efb307] p-4 shadow-lg text-gray-900"
            >
              <div className="overflow-hidden rounded-xl bg-gray-900 mb-5">
                <iframe
                  src={getDrivePreviewUrl(concept.video)}
                  title={concept.name}
                  allow="autoplay; fullscreen"
                  className="aspect-video w-full border-0"
                />
              </div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-800 mb-3">
                {concept.category}
              </p>
              <h4 className="text-2xl font-bold mb-3">{concept.name}</h4>
              <p className="text-lg text-gray-800 leading-relaxed mb-4">
                {concept.summary}
              </p>
              <p className="text-gray-800 leading-relaxed mb-4">
                {concept.description}
              </p>
              <p className="text-sm text-gray-800 leading-relaxed">
                <span className="font-semibold text-gray-900">In testing:</span>{" "}
                {concept.process}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {showContactPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-center">
              {contactCta.popupTitle}
            </h3>
            <p className="text-center text-gray-600 mb-6">
              Choose the fastest way to reach me.
            </p>
            <div className="flex flex-col space-y-4">
              <a
                href="https://wa.me/254112246573"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300"
              >
                <FaWhatsapp className="mr-3 text-xl" />
                Message on WhatsApp
              </a>
              <a
                href="tel:+254112246573"
                className="flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                <FaPhone className="mr-3 text-xl" />
                Call Directly
              </a>
            </div>
            <button
              onClick={() => setShowContactPopup(false)}
              className="mt-6 w-full bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
