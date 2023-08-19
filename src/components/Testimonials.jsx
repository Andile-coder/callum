import React from "react";

import Slider from "react-slick";

const Testimonials = () => {
  const reviews = [
    {
      name: "Kevin",
      position: "UX Designer",
      src: "images/testimonial/kevin.webp",
      desc: "“Terricka's background in education makes her an excellent team player. Not only is she able to provide clear constructive criticism but is also eager to receive feedback to become a better UX designer. She is diligent and observant, and always keeping the user needs at the front of her design decisions. Terricka is quick learner and works great under pressure and tight deadlines.”",
    },

    {
      name: "Steph",
      position: "UX Designer",
      src: "images/testimonial/steph.webp",
      desc: "“Only trying it out since a few days. But up to now excellent. Seems to work flawlessly. priced simply dummy text of the printing and typesetting industry.”",
    },
    {
      name: "Naguib Ihab",
      position: "Development Team Lead at Upilio",
      src: "images/testimonial/Nick_edited.webp",
      desc: "We were lucky to work with Terricka during the UX Design GA course, Terricka was in charge of the UX Design and we were blown away by the beautify of the end product. Terricka was very open to feedback, and listened to all of our hopes with the app, and translated that into an amazing design.”",
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
                    <img
                      className="img-fluid d-inline-block w-auto rounded-circle shadow"
                      src={review.src}
                      alt={review.name}
                    />{" "}
                    <strong className="d-block text-3 fw-600 text-white">
                      {review.name}
                    </strong>{" "}
                    <span className="text-light">{review.position}</span>{" "}
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