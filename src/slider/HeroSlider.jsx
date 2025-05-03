import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const heroSlides = [
  {
    heading: "Access our Academic vault",
    emphasis:
      "With more than 1,000 Academic materials in store, we are a good choice for researching any subject. TRY US",
    img: "img/reference-vault.svg",
  },
  {
    heading: "Search Engine",
    emphasis:
      "Use our keyword engine to easily find what you are looking for Quickly and easily.",
    img: "img/file-searching.svg",
  },
  {
    heading: "study toolkit",
    emphasis:
      "Our toolkit includes more than ten web applications. Each of these apps helps guide users, through different aspects of their learning curve.",
    img: "img/study-toolkit.svg",
  },
  {
    heading: "Make Requests",
    emphasis: "We help our users get answers to difficult questions.",
    img: "img/make-requests.svg",
  },
  {
    heading: "Project help",
    emphasis:
      "Do you need help structuring and researching your project? Contact our project line via Sidis chat and other platforms, let us reduce your stress.",
    img: "img/project-help.svg",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const slideCount = heroSlides.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slideCount);
    }, 9000);
    return () => clearTimeout(timer);
  }, [current, slideCount]);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slideCount);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slideCount) % slideCount);
  const goToSlide = (index) => setCurrent(index);

  return (
    <section className="hero" id="hero">
      <div className="slideshow">
        {heroSlides.map((slide, index) => (
          <div
            className={`slide flex row-between`}
            key={index}
            style={{ display: index === current ? "flex" : "none" }}
          >
            <div className="slide-content flex column-start">
              <div className="heading">{slide.heading}</div>
              <div className="emphasis">{slide.emphasis}</div>
              <div className="cta">
                <Link to="/sign" className="btn">
                  get started
                </Link>
                <Link to="/sign" className="btn">
                  <i className="fas fa-sign-in-alt"></i>
                </Link>
              </div>
            </div>
            <div className="slide-image">
              <img src={slide.img} alt={slide.heading} />
            </div>
          </div>
        ))}

        <div className="slide-count">
          {heroSlides.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === current ? "active" : ""}`}
              onClick={() => goToSlide(i)}
            ></span>
          ))}
        </div>
      </div>

      <div className="controls">
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
