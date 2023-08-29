import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
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
          "Conceptualized mobile application designed to enhance and expedite the food ordering and delivery process.",
        client: "Individual Project",
        projectDetails:
          "Since the early 2010's, food delivery apps have allowed customers to order and receive food from the comfort of their homes--without even having to speak to anyone. Stay In | Dine Out is a redesign of an food delivery service app. The Stay In | Dine Out app allows users to order from their favorite restaurants in a timely manner. The app is focused on improving two key issues: long ordering processes and the lack of communication between stakeholders.",
        technologies: "Figma, Miro, Trello, Slack",
        industry: "UX/UI design",
        date: "4-week design sprint (Aug. 2021)",
        url: {
          name: "www.example.com",
          link: "https://www.example.com",
        },

        sliderImages: [
          "images/projects/iPhone 13 Mockup (1).webp",
          "images/projects/iPhone 13 Mockup.webp",
          "images/projects/iPhone 13 Mockup-2.webp",
        ],
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
