import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../plugins/animate.css"
import "../plugins/personal.css"
// import "../plugins/owl.theme.default.min.css"
// import "../plugins/owl.carousel.min.css"
import "../plugins/font-awesome"
import "../css/style.css"
// import { ChevronLeft, ChevronRight } from "lucide-react";
const Home = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [timer, setTimer] = useState(null);


  // slider 2
  const featuresData = [
    {
      img: "img/timetable.svg",
      title: "timetable",
      description: "Create a reading schedule according to the school timetable.",
    },
    {
      img: "img/synced.svg",
      title: "On the go",
      description: "Use Sidis on all your devices anytime, anywhere you go.",
    },
    {
      img: "img/easy-search.svg",
      title: "search",
      description: "Find what you are looking for with our Search feature.",
    },
    {
      img: "img/community-support.svg",
      title: "active community",
      description: "Get help from the sidis community today.",
    },
    {
      img: "img/simple-notes.svg",
      title: "simplified notes",
      description: "Complex notes have been shortened and simplified for fast comprehension.",
    },
    {
      img: "img/monitor-progress.svg",
      title: "monitor yourself",
      description: "Monitor individual progress while studying.",
    },
  ];

  const featuresToShow = 4;

  const getVisibleCards = (startIndex) => {
    const cards = [];
    for (let i = 0; i < featuresToShow; i++) {
      cards.push(featuresData[(startIndex + i) % featuresData.length]);
    }
    return cards;
  };


  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getVisibleCards(0));

  useEffect(() => {
    const interval = setInterval(() => {
      slideRight();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const slideRight = () => {
    const newIndex = (currentIndex + 1) % featuresData.length;
    setCurrentIndex(newIndex);
    setVisibleCards(getVisibleCards(newIndex));
  };

  // const slideLeft = () => {
  //   const newIndex = (currentIndex - 1 + featuresData.length) % featuresData.length;
  //   setCurrentIndex(newIndex);
  //   setVisibleCards(getVisibleCards(newIndex));
  // };


  // end of slider 2


  // begin of slider 1
  useEffect(() => {
    showSlides(slideIndex);
    return () => clearTimeout(timer);
  }, [slideIndex]);

  useEffect(() => {
    const t = setTimeout(() => setSlideIndex(prev => (prev >= 5 ? 1 : prev + 1)), 9000);
    setTimer(t);
    return () => clearTimeout(t);
  }, [slideIndex]);

  const plusSlides = (n) => {
    clearTimeout(timer);
    setSlideIndex(prev => {
      const next = prev + n;
      return next < 1 ? 5 : next > 5 ? 1 : next;
    });
  };

  const currentSlide = (n) => {
    clearTimeout(timer);
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    Array.from(slides).forEach(slide => (slide.style.display = "none"));
    Array.from(dots).forEach(dot => dot.classList.remove("active"));

    if (slides[n - 1]) slides[n - 1].style.display = "flex";
    if (dots[n - 1]) dots[n - 1].classList.add("active");
  };

  // enn of slider 1

  return (
    <div className="body w-[100%]">
      <section className="hero" id="hero">
        <div className="slideshow">
          {[
            {
              heading: "Access our Academic vault",
              emphasis:
                "With more than 1,000 Academic materials in store, we are a good choice for researching any subject. TRY US",
              img: "img/reference-vault.svg",
            },
            {
              heading: "Search Engine",
              emphasis: "Use our keyword engine to easily find what you are looking for Quickly and easily.",
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
          ].map((slide, idx) => (
            <div className="slide flex row-between" key={idx}>
              <div className="slide-content flex column-start">
                <div className="heading font-extrabold">{slide.heading}</div>
                <div className="emphasis">{slide.emphasis}</div>
                <div className="cta">
                  <Link to="/sign" className="btn">get started</Link>
                  <Link to="/sign" className="btn"><i className="fas fa-sign-in-alt"></i></Link>
                </div>
              </div>
              <div className="slide-image">
                <img src={slide.img} alt="" />
              </div>
            </div>
          ))}

          <div className="slide-count">
            {[1, 2, 3, 4, 5].map(n => (
              <span key={n} className="dot" onClick={() => currentSlide(n)}></span>
            ))}
          </div>
        </div>

        <div className="controls">
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
      </section>

      <div className="info" id="info">
        <div className="flex column-start">
          <div className="first flex column-start">
            <div className="heading">what is sidis?</div>
            <div className="emphasis">
              Sidis is an educational focused platform. We aim to provide simplified learning methods, strategies and tools to relieve Academic-related struggles and stress. With practice exercises, tutorial videos, online tutorial sessions, and more.
            </div>
          </div>

          <div className="second flex column-end">
            <fieldset className="quote">
              <legend>
                <a href="https://www.nyu.edu/life/safety-health-wellness/live-well-nyu/staff/stress.html" target="_blank" rel="noopener noreferrer">nyu</a>
              </legend>
              <ul>
                <li>Extreme levels of stress can hinder work effectiveness and lead to poor academic performance and attrition.</li>
                <li>Students who experienced stressful life events also reported worse health outcomes and reduced quality of life.</li>
                <li>Introducing successful coping strategies may help students avoid the destructive consequences of excessive stress.</li>
              </ul>
            </fieldset>
          </div>

          <div className="third flex column-start">We help students learn better and faster. Give us a shot.</div>
        </div>
      </div>

      <section className="features" id="features">
        <div className="heading top">what we do!</div>

        <div className="grid lg:grid-cols-4 grid-cols-1 gap-2">
          {visibleCards.map((item, idx) => (
            <div key={idx} className="item">
              <img src={item.img} alt={item.title} className="icon" />
              <div className="content flex column-center">
                <div className="heading">{item.title}</div>
                <div className="emphasis">{item.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>



      <section className="action flex row-center" id="action">
        <div className="content">
          <div className="heading">get started</div>
          <div className="emphasis">
            Start using Sidis and start your journey to a smarter YOU. <br />
            Create a free account and get started today.
            <hr />
            <div className="social flex row-start">
              <Link to="/launch"><i className="fab fa-facebook-f"></i></Link>
              <Link to="/launch"><i className="fab fa-twitter"></i></Link>
              <Link to="/launch"><i className="fab fa-instagram"></i></Link>
              <Link to="/launch"><i className="fab fa-telegram-plane"></i></Link>
              <Link to="/launch"><i className="fab fa-linkedin-in"></i></Link>
            </div>
          </div>
        </div>

        <form action="" method="post" className="register-form flex column-start">
          <input type="text" name="first_name" id="" placeholder="Your First Name" required />
          <input type="text" name="last_name" id="" placeholder="Your Last Name" required />
          <input type="email" name="email_address" id="" placeholder="Your Email Address" required />
          <input type="password" name="password" id="" placeholder="Password" required />
          <input type="password" name="password_confirm" id="" placeholder="Confirm Password" required />
          <input type="submit" value="register" />
          <p>already have an account? login <Link to="/sign">here</Link></p>
        </form>
      </section>
    </div>
  );
};

export default Home;
