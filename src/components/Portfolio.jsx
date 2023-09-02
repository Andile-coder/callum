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
    // YOUTUBE: "Youtube Videos",
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
      type: types.DOCUMENT,

      thumbImage: "images/projects/project_featured_image (1).jpg",

      categories: [filters.PRODUCT_DESIGN],
      document: {
        projectInfo:
          "Website Redesign involving the creation of an end-to-end e-commerce experience.",
        projectDetails:
          "Local Color Flowers, known as LoCo Flo hereafter--a Baltimore-based floral design business--opened in 2013. After renting a stand at a local farmers market, they saw the retail side of their business grow, with many of their new customers taking an interest in the owner's floral design classes.This project is a redesign of their website in a way that appeals to their target audience, displays all that they have to offer, and encourages users to complete their purchases.",
        technologies: "Figma, Miro, Trello, Slack",
        industry: "UX/UI design",
        date: "4-week design sprint (Sep. 2021)",
        sliderImages: [
          "images/projects/before.png",
          "images/projects/after.png",
        ],
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
      title: " Change Health Care",
      type: types.IMAGE,
      document: {
        projectInfo:
          "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        client: "Ruby Clinton",
        projectDetails: "",
        technologies: "iOS, HTML5, CSS3, PHP, Java",
        industry: "Art & Design",
        date: "July 16, 2019",
      },
      thumbImage: "images/projects/project_featured_image (2).jpg",
      categories: [filters.SERVICE_DESIGN],
    },

    // {
    //   title: "Mockups Design 2",
    //   type: types.IMAGE,

    //   thumbImage: "images/projects/project-6.jpg",

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
