import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "",
      title:
        "Master of Science in Information Architecture &amp; Interaction Design ",
      place: "University of Baltimore,",
      desc: "",
    },

    {
      yearRange: "",
      title: "Bachelor of Science in Marketing",
      place: "Coppin State University",
      desc: "",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2021-PRESENT",
      title: "Senior Innovation Service Design Experience Consultant",
      place: "AWS Remote ",
      desc: "Lead visual design of web, mobile, voice, and AR/VR applications. Created and deployed process flows, wireframes, and visual design mock-ups and effectively conceptualized and communicated detailed interaction behaviors. Collaborated with product teams to meet business requirements. Supervised product delivery, leadership during build phase, and translated learnings into commercial offerings. Facilitated the best development team for project and effectively communicated scope requirements. Designed customer- facing assets and mechanisms to facilitate customers’ understanding, Amazon innovates at scale and takes new products to market. Observed metrics to expose offering portfolio opportunities and developments for Innovation Advisory Practice by identifying sales and delivery trends.",
    },
    {
      yearRange: "2020-2021",
      title: "Senior UX Designer | Research Lead | FTE,",
      place: "First Advantage, Atlanta, GA",
      desc: "Spearheaded and carried out research across all of FADV&#39;s business verticals in APAC, LATAM, and US. Established and maintained design principles, produced style guides, and enabled design system to develop brand identity of new application. Supervised key UX/UI processes, directing team partnerships, quickly reducing organizational barriers, and resolving challenges.",
    },
    {
      yearRange: "2019-2020",
      title: "Senior Design Strategist,",
      place: "Fannie Mae, Washington DC",
      desc: "This role involved leading and facilitating workshops and qualitative interviews with key stakeholders, synthesizing research data to create design principles, and collaborating with design strategists to deliver project milestones. Additionally, the role encompassed conducting usability testing and prioritizing features for consumer-facing products, ensuring optimal user experiences and alignment with business objectives. Championed customer-first design, tackling challenges with an experience-driven mindset and advocating for customer needs.",
    },
    {
      yearRange: "2019 - 2020",
      title: "Senior UX Designer &amp; Service Designer | Consultant ",
      place: "Johnson &amp; Johnson, New Brunswick, NJ",
      desc: " Oversaw discovery research in order to replace current learning management systems. Organized and conducted human-centered design and data synthesis workshops involving stakeholders, business analysts, and users. Developed user personas and scenarios in order to enhance functionality and usability for key audiences.",
    },
    {
      yearRange: "2017 - 2019",
      title: " Senior UX Designer &amp; Researcher, ",
      place: "Home Depot, Atlanta, Atlanta, GA",
      desc: "Conducted various user research techniques, such as surveys, interviews, usability testing, and ethnographic studies. Analyzed user data to identify patterns, trends, and insights that inform design decisions. Developed user personas that accurately reflected needs, goals, and behaviors of target users.",
    },
  ];

  const skills = [
    {
      name: "Information Archtecture",
      percent: 80,
    },
    {
      name: "User Interface Design",
      percent: 85,
    },
    {
      name: "User Research",
      percent: 77,
    },
    {
      name: "Service Design",
      percent: 95,
    },
    {
      name: "Conversational Design",
      percent: 82,
    },

    {
      name: "Collaboration",
      percent: 90,
    },
  ];

  return (
    <section id="resume" className="section">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Resume</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          A summary of My Resume
        </h2>
        {/* Heading end*/}
        <div className="row g-5 mt-5">
          {/* My Education */}
          <div className="col-lg-6 wow fadeInUp">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Education</h2>
            <div className="border-start border-2 border-primary ps-3">
              {educationDetails.length > 0 &&
                educationDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
          {/* My Experience */}
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="text-7 fw-600 mb-4 pb-2">My Experience</h2>
            <div className="border-start border-2 border-primary ps-3">
              {experienceDetails.length > 0 &&
                experienceDetails.map((value, index) => (
                  <div key={index}>
                    <h3 className="text-5">{value.title}</h3>
                    <p className="mb-2">
                      {value.place} / {value.yearRange}
                    </p>
                    <p className="text-muted">{value.desc}</p>
                    <hr className="my-4" />
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* My Skills */}
        <h2 className="text-7 fw-600 mb-4 pb-2 mt-5 wow fadeInUp">My Skills</h2>
        <div className="row gx-5">
          {skills.length > 0 &&
            skills.map((skill, index) => (
              <div className="col-md-6 wow fadeInUp" key={index}>
                <p className="fw-500 text-start mb-2">
                  {skill.name}{" "}
                  <span className="float-end">{skill.percent}%</span>
                </p>
                <div className="progress progress-sm mb-4">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: skill.percent + "%" }}
                    aria-valuenow={skill.percent}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            ))}
        </div>
        <p className="text-center mt-5 wow fadeInUp">
          <a
            className="btn btn-outline-dark shadow-none rounded-0"
            href={resumeFile}
            download
          >
            Download CV
          </a>
        </p>
      </div>
    </section>
  );
};

export default Resume;
