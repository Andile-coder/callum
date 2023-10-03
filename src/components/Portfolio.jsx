import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import { Link } from "react-scroll";
import { scrollDuration } from "../config/commonConfig";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = () => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const htmlElement = document.getElementsByTagName("html")[0];
  const isRtl = htmlElement.getAttribute("dir") === "rtl";

  const filters = {
    SERVICE_DESIGN: "Service Design",
    PRODUCT_DESIGN: "Product Desgn",
    YOUTUBE: "Youtube Videos",
    // VIMEO: "Vimeo Videos",
  };

  const types = {
    IMAGE: "image",
    VIDEO: "video",
    DOCUMENT: "document",
  };

  const projectsData = [
    {
      title: "FANNIE MAE",
      type: types.DOCUMENT,
      document: {
        projectInfo:
          "Service Design project for Reston Gateway Employee Workplace Needs",
        client: "Fannie Mae",
        projectDetails:
          "Amid the challenges posed by Covid-19, the workplace strategy team identified a pressing need to transform the employee workplace experience at the Reston Gateway. The team aimed to understand and optimize the interaction of Northern Virginia employees with collaboration spaces, technology, tools, and wayfinding systems.<br/> How might we utilize the collective  expertise of the workplace strategy and CXD teams to transform the Reston Gateway employee workplace into a safer, more collaborative, and efficient environment, in light of the implications of Covid-19, without changing the building's structural design? Primary Objective: 1. To delve into the realities of Northern Virginia employees' daily experiences, understanding their use and perception of collaboration spaces, technology, tools, and wayfinding systems. The end goal is to cultivate an environment that fosters synergy, where these tools and spaces are not just functional, but also resonant with the user's needs. 2. To decipher the effects of Covid-19 on the dynamics within the Reston Gateway building, looking at changes in remote and onsite collaboration, shifts in neighborhood and residency models, and new safety and security demands. Our aim is to navigate this new norm in a way that not only safeguards our employees but also enhances their productivity.",

        technologies: "Figma, Mural",
        industry: "UX/UI design",
        date: "3 Months June 2020",
        url: {
          name: "www.invisionapp.com",
          link: "https://projects.invisionapp.com/d/main?origin=v7#/console/19189167/451484530/preview?scrollOffset=0",
        },

        sliderImages: [],
      },

      thumbImage: "images/projects/project_featured_image.jpg",

      categories: [filters.SERVICE_DESIGN],
    },
    {
      title: "FADV Service Design Project",
      type: types.IMAGE,

      thumbImage: "images/projects/project_featured_image (1).jpg",

      categories: [filters.PRODUCT_DESIGN],
    },
    {
      title: "Johnson & Johnson",
      type: types.DOCUMENT,

      thumbImage: "images/projects/project_featured_image (3).jpg",

      categories: [filters.PRODUCT_DESIGN],
      document: {
        projectInfo: "Service Design Project for Johnson & Johnson ",
        projectDetails: (
          <span>
            {" "}
            I was hired as a UX Researcher & Service Design Consultant to
            support & assist the User Experience & Service Design Manager with
            conducting global enterprise research for Johnson's & Johnson's
            Learning & Development Team & The Corporate Business Technology
            (CBT) group. I was responsible for conducting & synthesizing remote
            and in-person interviews across the US and other countries. My
            responsibilities included the planning and execution of
            collaborative workshops with stakeholders to help gain clarity
            around business objectives and next steps as to prepare for a RFP
            for a new Learning Experience Platform.
            <br />
            <br />
            Key Responsibilities:
            <br />
            <br /> - Planned and executed co-creation collaborative workshops
            with core team & stakeholders to share findings and to propose
            solutions <br />- Recruitment of interview participants
            <br /> - Facilitation of 23 interviews across the US, Europe & Asia
            <br /> - Synthesized & documented interview data and research
            findings
            <br /> - Facilitated & co-facilitated collaborative workshops with
            core-team and stakeholders to gain alignment and to identify &
            clarify business objectives & goals
          </span>
        ),
        client: "Johnson & Johnson",
        technologies: "Figma, Power Point, Adobe Illustrator",
        industry: "UX/UI design",
        url: {
          name: "www.invisionapp.com",
          link: "https://projects.invisionapp.com/share/JPVIXWUKZ67#/screens/445231157_J-J_-1--01",
        },
        date: "September 2020 - December 2020",
        sliderImages: [],
      },
    },
    // {
    //   title: "YouTube Video",
    //   type: types.VIDEO,
    //   video: {
    //     vimeo: false,
    //     id: "PMNnEEEacCg",
    //   },
    //   thumbImage: "images/projects/project-3.jpg",

    //   categories: [filters.YOUTUBE],
    // },
    // {
    //   title: "Vimeo Video",
    //   type: types.VIDEO,
    //   video: {
    //     vimeo: true,
    //     id: "259411563",
    //   },

    //   thumbImage: "images/projects/project-4.jpg",
    //   categories: [filters.VIMEO],
    // },

    {
      title: "Change Health Care",
      type: types.VIDEO,
      video: {
        vimeo: false,
        id: "EoeFKLlXi-k",
      },
      thumbImage: "images/projects/project_featured_image (2).jpg",

      categories: [filters.YOUTUBE],
    },
    {
      title: "Westpoint",
      type: types.DOCUMENT,

      thumbImage: "images/projects/astro_1.jpg",

      categories: [filters.PRODUCT_DESIGN],
      document: {
        projectInfo: "Information Architect ",
        projectDetails: (
          <span>
            The Astro Chatbot is an exemplar of sophisticated design principles
            meticulously applied to craft a user experience that’s intuitive,
            engaging, and supremely functional. As the Senior Product Designer,
            I led the design initiatives from concept to completion, ensuring
            that Astro not only aligned with PwC’s vision but also seamlessly
            catered to the unique needs of the executive user base.
            <br />
            <br />
            Astro, is a state-of-the-art executive concierge designed to enhance
            the productivity of busy professionals through voice and text
            commands. Integrated with PwC's robust systems, Astro stands ready
            to assist in orchestrating your day with efficiency and precision by
            leveraging AI, Machine learning and alexa voice technology. <br />
            Design Process:
            <br />
            <ol>
              <li>
                Understanding User Needs:
                <br />
                <ul>
                  <li>
                    Conducted comprehensive user research to understand the
                    intricacies of executives' daily tasks and challenges.
                  </li>
                  <li>
                    Developed user personas and journey maps to visualize and
                    address the diverse needs of the target audience.
                  </li>
                </ul>
              </li>
              <li>
                Conceptualization & Ideation:
                <br />
                <ul>
                  <li>
                    Engaged in brainstorming sessions and collaborative
                    discussions to generate innovative solutions and ideas for
                    Astro.
                  </li>
                  <li>
                    Sketched initial design concepts and created wireframes to
                    visualize the user interface and overall user experience.
                  </li>
                </ul>
              </li>
              <li>
                Prototyping & Testing:
                <br />
                <ul>
                  <li>
                    Designed interactive prototypes to demonstrate Astro’s
                    functionality and garner feedback from potential users and
                    stakeholders.
                  </li>
                  <li>
                    Conducted usability tests to ensure the interface is
                    intuitive and user-friendly, making necessary adjustments
                    based on the findings.
                  </li>
                </ul>
              </li>
              <li>
                Key Features:
                <br />
                <ul>
                  <li>
                    Voice & Text Commands: Allows users to interact with Astro
                    effortlessly through simple voice or text inputs.
                  </li>
                  <li>
                    User-Centric Interface: Designed with the user in mind,
                    Astro’s interface is intuitive, providing quick access to
                    essential features and functionalities.
                  </li>
                  <li>
                    System Integration: Seamlessly integrates with PwC’s
                    existing infrastructure, allowing for real-time assistance
                    and support for users.
                  </li>
                </ul>
              </li>
            </ol>
            <br />
            Conclusion Astro Chatbot is a testament to a design process deeply
            rooted in understanding user needs and employing a collaborative and
            iterative approach to product development. Through careful planning,
            testing, and refinement, Astro was brought to life as a tool that
            significantly enhances the productivity of executives at PwC,
            providing a user experience that is unmatched in its intuitiveness
            and efficiency. This portfolio piece encapsulates the dedication and
            skill set I bring to the table as a Product Designer, where user
            needs and business objectives are harmoniously balanced to create
            products that truly make an impact.
          </span>
        ),

        client: "PWC",
        technologies: "Figma, Power Point,Adobe Illustrator",
        industry: "UX/UI design",
        url: {
          name: "",
          link: "",
        },
        date: "",
        sliderImages: ["images/projects/astro_2.jpg"],
      },
    },
    {
      title: "Westpoint",
      type: types.DOCUMENT,

      thumbImage: "images/projects/infor_arch.jpg",

      categories: [filters.PRODUCT_DESIGN],
      document: {
        projectInfo: "Information Architect ",
        projectDetails: (
          <span>
            I was hired to help with redesign of West Point Military Academy’s
            <br />
            website Key Responsibilities:
            <br />
            <br /> - Planned, created and launched a open and closed card sort
            in optimal sort <br /> - Synthesized card sort results and
            recommended new taxonomy and navigation based on the results of the
            card sortRedesigned navigation and information architecture
            Conducted user research and usability testing to validate the new
            design
          </span>
        ),

        client: "Westpoint",
        technologies: "Optimal Sort,Adobe XD",
        industry: "UX/UI design",
        url: {
          name: "www.westpoint.com",
          link: "https://www.westpoint.edu/",
        },
        date: "",
        sliderImages: [
          "images/projects/westpoint_1.jpg",
          "images/projects/westpoint_2.jpg",
        ],
      },
    },
    {
      title: "Marvel",
      type: types.DOCUMENT,

      thumbImage: "images/projects/spiderman_1.jpg",

      categories: [filters.PRODUCT_DESIGN],
      document: {
        projectInfo: "Personal Marvel Project ",
        projectDetails: (
          <span>
            I re-imagined an app for marvel’s spider character for my nephew who
            loves spider man. This app was designed to not only entertain but
            also educate, with engaging quizzes and facts about the Marvel
            spider verse, and it served as a delightful and constructive bonding
            activity for our family. This project, highlights my skills in app
            development, user experience design, and project conceptualization,
            which I believe would be valuable in contributing to the development
            and success of any project.
          </span>
        ),

        client: "Personal",
        technologies: "Figma, Adobe Illustrator",
        industry: "UX/UI design",

        date: "",
        sliderImages: [
          "images/projects/spiderman_2.jpg",
          "images/projects/spiderman_3.jpg",
          "images/projects/spiderman_4.jpg",
        ],
      },
    },

    // {
    //   title: "Mockups Design 2",
    //   type: types.IMAGE,

    //   thumbImage: "images/projects/project_featured_image (2).jpg",

    //   categories: [filters.MOCKUPS],
    // },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
      originLeft: !isRtl,
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  const getKeyByValue = (value) => {
    return Object.keys(filters).find((key) => filters[key] === value);
  };

  const getFilterClasses = (categories) => {
    if (categories.length > 0) {
      let tempArray = [];
      categories.forEach((category, index) => {
        tempArray.push(getKeyByValue(category));
      });
      return tempArray.join(" ");
    }
  };

  return (
    <>
      <section id="portfolio" className={"section bg-light"}>
        <div className={"container"}>
          {/* Heading */}
          <p className="text-center mb-2 wow fadeInUp">
            <span className="bg-primary text-dark px-2">Portfolio</span>
          </p>
          <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
            Some of my most recent projects
          </h2>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs fw-600 justify-content-start justify-content-md-center border-bottom-0 mb-5 wow fadeInUp"
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " + (filterKey === oneKey ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(oneKey)}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio wow fadeInUp">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      getFilterClasses(project.categories)
                    }
                    key={index}
                  >
                    <div className="portfolio-box">
                      <div className="portfolio-img">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div
                          className="portfolio-overlay"
                          onClick={() => {
                            setSelectedProjectDetails(projectsData[index]);
                            setIsOpen(true);
                          }}
                        >
                          <button className="popup-ajax stretched-link border-0 p-0 ">
                            {" "}
                          </button>
                          <div className="portfolio-overlay-details">
                            <p className="text-primary text-8">
                              {project.type === types.DOCUMENT && (
                                <i className="fas fa-file-alt"></i>
                              )}
                              {project.type === types.IMAGE && (
                                <i className="fas fa-image"></i>
                              )}
                              {project.type === types.VIDEO && (
                                <i className="fas fa-video"></i>
                              )}
                            </p>
                            <h5 className="text-white text-5">
                              {project?.title}
                            </h5>
                            <span className="text-light">Category</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="container text-center py-5 wow fadeInUp">
            <a
              className="btn btn-primary rounded-0 smooth-scroll wow rubberBand"
              data-wow-delay="1s"
              smooth="easeInOutQuint"
              duration={scrollDuration}
              href="https://valerie.boxapps.org/Account/Login?ReturnUrl=%2F"
              target="_blank"
            >
              See More
            </a>{" "}
          </div>
        </div>
      </section>
      {/* Modal */}
      {isOpen && (
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          setIsOpen={setIsOpen}
        ></ProjectDetailsModal>
      )}
    </>
  );
};

export default Portfolio;
