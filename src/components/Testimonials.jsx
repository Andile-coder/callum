import React from "react";

import Slider from "react-slick";

const Testimonials = () => {
  const reviews = [
    {
      name: "Colleague",
      position: "UX Designer",
      src: "",
      company: "AWS",
      desc: "“ Valerie is a strong team member, demonstrating customer obsession as a superpower. Valerie proved very adept at advancing the customer engagement, diving deep into requirements and changes, and quickly course correcting when customer's requirements and goals drastically changed.”",
    },

    {
      name: "Colleague",
      position: "UX Designer",
      src: "",
      company: "AWS",
      desc: "“I would love to see Valerie more confidently assert herself as a champion and voice for the voiceless. Valerie was an excellent Innovation Fund grantee, enacting amazing results through her work in Baltimore, and I can see a world where Valerie continues to thrive in situations that lean on her ability to lead and inspire others.”",
    },
    {
      name: "Colleague",
      position: "Development Team Lead at Upilio",
      src: "",
      company: "AWS",
      desc: "“ Valerie´s superpower is her design abilities. She is a gem when she finds her mojo. She not only amazed me but the customer was wow-ed on how she understood the customer interviews, pain points and solved for interactions that were the closest to seamless we could foresee, on a single iteration! She sees beyond customer words to really understand needs. ”",
    },
    {
      name: "Colleague",
      position: "Development Team Lead at Upilio",
      src: "",
      company: "AWS",
      desc: "“Valerie is very focused on identifying new ways the customer could do things that provide a big benefit to them. For example, when working on the CHC Innovation project, she identified several areas to improve the caller and agent experience that the customer hadn't considered and would make a big improvement. ”",
    },
    {
      name: "Colleague",
      position: "Development Team Lead at Upilio",
      src: "",
      company: "AWS",
      desc: "“ I had the opportunity to work with Valerie during prototyping sessions for Koch Industries. She demonstrated strong Ownership skills to take initiative of leading the meeting and thinking long term in her approach during the meetings. She also demonstrated Have Backbone Disagree and Commit skills to speak up and stand up to her ideas.  ”",
    },
    {
      name: "Colleague",
      position: "Development Team Lead at Upilio",
      src: "",
      company: "AWS",
      desc: "“Valerie is very good at meeting the customer's needs with good instincts that fill in the gaps where there is little or no direction. She joined the Molex engagement in a red status with a new team, where her customer obsession and instincts helped us to turn the engagement around to green in less than three weeks..  ”",
    },
  ];

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <i className="fa fa-chevron-left"></i>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <i className="fa fa-chevron-right"></i>
    </button>
  );

  var settings = {
    dots: true,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };

  return (
    <section id="testimonial" className="section bg-secondary">
      <div className="container">
        {/* Heading */}
        <p className=" text-center mb-2 wow fadeIn">
          <span className="bg-primary text-dark px-2">Client Speak</span>
        </p>
        <h2 className="text-10 fw-600 text-white text-center mb-5 wow fadeIn">
          What Some of my Clients Say
        </h2>
        {/* Heading end*/}
        <div className="row">
          <div className="col-lg-9 mx-auto wow fadeInUp">
            <Slider {...settings}>
              {reviews.length > 0 &&
                reviews.map((review, index) => (
                  <div className="item text-center px-5" key={index}>
                    {" "}
                    <span className="text-9 text-primary">
                      <i className="fa fa-quote-start" />
                    </span>
                    <p className="text-5 text-white">{review.desc}</p>
                    {/* <img
                      className="img-fluid d-inline-block w-auto rounded-circle shadow"
                      src={review.src}
                      alt={review.name}
                    />{" "} */}
                    <strong className="d-block text-3 fw-600 text-white">
                      {review.name}
                    </strong>{" "}
                    <span className="text-light">{review.company}</span>{" "}
                  </div>
                ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
