import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";
import {
  activeAbout,
  additionalProjects,
  capabilityGroups,
  certifications,
  education,
  interests,
  projectCaseStudies,
  services,
  whyWorkWithMe,
  workExperience,
} from "./portfolioContent";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 pt-0 md:py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <Navbar />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center text-[#efb307]">
          About Me
        </h2>
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">
            About
          </h3>
          <div className="space-y-4 mb-6 md:mb-8">
            {activeAbout.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">
            What I Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-8">
            {services.map((service) => (
              <div key={service.title} className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-800">
                  {service.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">
            Core Capabilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 md:mb-8">
            {capabilityGroups.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold mb-2 text-gray-800">
                  {group.title}
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">
            Work Experience
          </h3>

          <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
            {workExperience.map((experience) => (
              <div
                key={`${experience.company}-${experience.dates}`}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="flex items-center gap-4 mb-2">
                  {experience.image && (
                    <Image
                      src={experience.image}
                      alt={experience.company}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-lg object-contain"
                    />
                  )}
                  <h4 className="text-xl font-medium text-gray-800">
                    {experience.title} | {experience.company}
                  </h4>
                </div>
                <p className="italic text-gray-600 mb-4">{experience.dates}</p>
                <p className="text-gray-700 leading-relaxed">
                  {experience.description}
                </p>

                {experience.linkUrl && (
                  <p className="mt-4 text-gray-700">
                    Explore:{" "}
                    <a
                      href={experience.linkUrl}
                      className="text-blue-600 hover:underline"
                    >
                      {experience.linkLabel}
                    </a>
                  </p>
                )}

                {experience.links && (
                  <div className="mt-4">
                    <p className="text-gray-700 mb-2">Platforms:</p>
                    <ul className="list-disc list-inside text-gray-700">
                      {experience.links.map((link) => (
                        <li key={link.url}>
                          <a
                            href={link.url}
                            className="text-blue-600 hover:underline"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">
            Selected Projects
          </h3>
          <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
            {projectCaseStudies.map((project) => (
              <div key={project.name} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex flex-col gap-2 mb-4">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                    {project.category}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="text-xl font-medium text-gray-800">
                      {project.name}
                    </h4>
                    <a
                      href={project.url}
                      className="text-blue-600 hover:underline whitespace-nowrap"
                    >
                      Visit project
                    </a>
                  </div>
                  <p className="text-gray-700 font-medium">{project.summary}</p>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {project.description}
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-semibold text-gray-800">Role:</span>{" "}
                  {project.role}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold text-gray-800">Value:</span>{" "}
                  {project.outcome}
                </p>
              </div>
            ))}
          </div>

          <h4 className="text-lg md:text-xl font-semibold mb-4 text-[#efb307]">
            Additional Project Portfolio
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-8">
            {additionalProjects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                className="bg-gray-50 p-5 rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                  {project.category}
                </p>
                <h5 className="font-semibold text-gray-800 mb-2">
                  {project.name}
                </h5>
                <p className="text-gray-700 leading-relaxed">{project.summary}</p>
                {project.role && (
                  <p className="mt-3 text-sm text-gray-600">
                    <span className="font-semibold text-gray-700">Role:</span>{" "}
                    {project.role}
                  </p>
                )}
              </a>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">
            Why Work With Me
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            {whyWorkWithMe.intro}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8">
            {whyWorkWithMe.points.map((point) => (
              <div key={point.title} className="bg-gray-50 p-5 rounded-lg">
                <h4 className="font-semibold mb-2 text-gray-800">
                  {point.title}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">
            Education
          </h3>
          <ul className="list-disc list-inside mb-6 md:mb-8 text-gray-700">
            {education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">
            Certifications
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 md:mb-8">
            {certifications.map((group) => (
              <div key={group.title}>
                <h4 className="font-semibold mb-2 text-gray-800">
                  {group.title}
                </h4>
                <ul className="list-disc list-inside text-gray-700">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-[#efb307]">
            Interests
          </h3>
          <p className="text-gray-700">{interests.join(", ")}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
