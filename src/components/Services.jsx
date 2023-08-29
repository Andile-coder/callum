import React from "react";

const Services = () => {
  // services details

  const services = [
    {
      name: "COLLABORATION",
      desc: "WORKING EFFECTIVELY WITH DIVERSE TEAMS, BUILDING TRUST AND FOSTERING DEEP CONNECTIONS TO DELIVER CREATIVE SOLUTIONS.",
      icon: "fas fa-handshake",
    },
    {
      name: "EMPATHY",
      desc: " DEMONSTRATING AN EMPATHETIC STYLE, ALLOWING MYSELF TO UNDERSTAND AND ADDRESS PAIN POINTS AND CRAFT CREATIVE SOLUTIONS.",
      icon: "fas fa-hand-holding-heart",
    },
    {
      name: "COURAGE",
      desc: " STANDING UP FOR MY IDEAS AND WILLING TO ADVOCATE FOR ORGANIZATIONAL OR PROCESS CHANGE THAT RESULTS IN A BETTER CUSTOMER EXPERIENCE.",
      icon: "fas fa-heart",
    },
    {
      name: "INNOVATION ",
      desc: "A STRONG ABILITY TO THINK BIG AND IDENTIFY NEW WAYS TO IMPROVE CUSTOMER EXPERIENCES AND PROCESSES.",
      icon: "fas fa-lightbulb",
    },
    {
      name: "RESILIENCE",
      desc: "NOT AFRAID TO FACE CHALLENGES AND CONSISTENTLY DELIVER MY BEST EFFORT, EVEN WHEN FACED WITH ADVERSITY.",
      icon: "fas fa-dumbbell",
    },
    // {
    //   name: "User Interface Design",
    //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.",
    //   icon: "fas fa-bullhorn",
    // },
  ];

  return (
    <section id="services" className="section bg-light">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeInUp">
          <span className="bg-primary text-dark px-2">Core Values?</span>
        </p>
        <h2 className="text-10 fw-600 text-center mb-5 wow fadeInUp">
          How I can help your next project
        </h2>
        {/* Heading end*/}
        <div className="row gy-5 mt-5">
          {services.length > 0 &&
            services.map((service, index) => (
              <div className="col-sm-6 col-lg-4 wow fadeInUp" key={index}>
                <div className="featured-box text-center px-md-4">
                  <div className="featured-box-icon text-primary text-13">
                    {" "}
                    <i className={service.icon} />
                  </div>
                  <h3 className="text-6 fw-600 mb-3">{service.name}</h3>
                  <p className="text-muted mb-0">{service.desc} </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
