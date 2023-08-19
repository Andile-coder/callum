import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = () => {
  const educationDetails = [
    {
      yearRange: "Jun 2021 - Dec 2021",
      title: "UX Design Immersive",
      place: "General Assembly | Remote",
      desc: "Full-time immersive program in UX/UI design consisting of 480+ hours of study, practice, professional training, and mentorship. Executed end-to-end UX/UI design processes for six projects from the user research phase through UI design, prototyping, usability testing, iteration, and stakeholder presentation; worked fully remote with teams using Agile methodologies and iterative development.",
    },
    {
      yearRange: "May 2021",
      title: "Master of Science in Education",
      place: "Johns Hopkins School of Education | Baltimore, MD	",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.",
    },
    {
      yearRange: "June 2019",
      title: "IBachelor of Arts in Political Science",
      place: "Williams College | Williamstown, MA",
      desc: "Concentrations in International Relations, Africana Studies, and Justice and Law.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "2021-2023",
      title: "DIGITAL INNOVATION",
      place: "AWS EXPERIENCE DESIGN ARCHITECT ",
      desc: "",
    },
    {
      yearRange: "2021",
      title: "LEAD UX DESIGNER",
      place: "DELOITTE ",
      desc: "",
    },
    {
      yearRange: "2020 - 2021",
      title: "  SENIOR UX & SERVICE DESIGNER  ",
      place: "FADV",
      desc: "",
    },
    {
      yearRange: "2019 - 2020",
      title: " ENIOR DESIGN STRATEGIST  ",
      place: "FANNIE MAE",
      desc: "",
    },
    {
      yearRange: "2017 - 2019",
      title: "  SENIOR UX DESIGNER",
      place: "HOME DEPOT",
      desc: "",
    },
    {
      yearRange: "2016 - 2017",
      title: " SENIOR UX DESIGNER ",
      place: "CAPITAL ONE",
      desc: "",
    },
  ];

  const skills = [
    {
      name: "UX",
      percent: 80,
    },
    {
      name: "UI",
      percent: 95,
    },
    {
      name: "UX Copywrite",
      percent: 77,
    },
    {
      name: "UX Research",
      percent: 85,
    },
    {
      name: "Product Strategy",
      percent: 82,
    },

    {
      name: "Team Collaboration",
      percent: 90,
    },
    {
      name: "Accessibility Reviews",
      percent: 88,
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
