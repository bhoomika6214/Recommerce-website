import React, { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronRight,
  FiBookOpen,
  FiPackage,
  FiMic,
  FiBarChart2,
  FiZap,
  FiGitBranch,
  FiFileText,
  FiVideo,
  FiUsers,
} from "react-icons/fi";
import { Leaf } from "lucide-react";
import "./Services.css";

const servicesData = [
  {
    id: "01",
    title: "Training & Workshops",
    description:
      "Hands-on capability building programs that equip teams to implement circular economy principles at scale.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=80",
    icon: FiBookOpen,
  },
  {
    id: "02",
    title: "Expo",
    description:
      "Showcasing innovations and solutions driving circular progress.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80",
    icon: FiPackage,
  },
  {
    id: "03",
    title: "Conference",
    description:
      "Global thought-leadership forums connecting policymakers, industry experts, and sustainability innovators.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1800&q=80",
    icon: FiMic,
  },
  {
    id: "04",
    title: "Market Research & Analysis",
    description:
      "Data-backed market intelligence to uncover circular opportunities, trends, and strategic growth pathways.",
    image:
      "https://images.unsplash.com/photo-1551281044-8b1675d6d7b3?auto=format&fit=crop&w=1800&q=80",
    icon: FiBarChart2,
  },
  {
    id: "05",
    title: "Product Launches",
    description:
      "End-to-end launch management for circular products that resonate with markets and stakeholders.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80",
    icon: FiZap,
  },
  {
    id: "06",
    title: "Supply Chain Project Management",
    description:
      "Cross-functional execution of sustainable supply chain transformations with measurable business outcomes.",
    image:
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1800&q=80",
    icon: FiGitBranch,
  },
  {
    id: "07",
    title: "Green Reporting",
    description:
      "Transparent ESG and sustainability reporting frameworks aligned with global compliance and impact metrics.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1800&q=80",
    icon: FiFileText,
  },
  {
    id: "08",
    title: "Webinar & Seminar",
    description:
      "Engaging digital and in-person knowledge sessions to accelerate awareness, adoption, and innovation.",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1800&q=80",
    icon: FiVideo,
  },
  {
    id: "09",
    title: "Community Engagement",
    description:
      "Purpose-driven campaigns and partnerships that mobilize communities for long-term circular impact.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1800&q=80",
    icon: FiUsers,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [inView, setInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);
  const swiperRef = useRef(null);

  const totalSlides = servicesData.length;

  const progressWidth = useMemo(
    () => `${((activeIndex + 1) / totalSlides) * 100}%`,
    [activeIndex, totalSlides]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setInView(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  const handleThumbClick = (index) => {
    swiperRef.current?.slideTo(index);
  };

  return (
    <section
      className={`sv-services-section ${inView ? "sv-in-view" : ""}`}
      ref={sectionRef}
      aria-label="Our services"
    >
      <div className="sv-services-particles" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="sv-services-top">
        {/* LEFT PANEL */}
        <aside className="sv-services-left">
          <p className="sv-services-label">OUR SERVICES</p>
          <h2 className="sv-services-heading">
            Comprehensive Solutions for a{" "}
            <span className="sv-gradient-text">Circular Economy</span> in Action
          </h2>
          <p className="sv-services-description">
            From knowledge to impact, we offer end-to-end services that empower
            industries, inspire action and drive sustainable transformation.
          </p>

          <div className="sv-services-progress-wrap">
            <div className="sv-services-count">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(totalSlides).padStart(2, "0")}
            </div>
            <div className="sv-services-progress-track" role="progressbar">
              <span
                className="sv-services-progress-fill"
                style={{ width: progressWidth }}
              />
            </div>
          </div>
        </aside>

        {/* RIGHT PANEL */}
        <div
          className="sv-services-right"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button className="sv-nav-btn sv-nav-prev" onClick={goPrev} aria-label="Previous service">
            <FiArrowLeft />
          </button>

          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            slidesPerView={1}
            speed={700}
            loop={true}
            initialSlide={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.realIndex);
              if (isHovered) swiper.autoplay.stop();
            }}
            className="sv-services-swiper"
          >
            {servicesData.map((item) => (
              <SwiperSlide key={item.id}>
                <article
                  className="sv-service-card"
                  style={{ backgroundImage: `url(${item.image})` }}
                >
                  <div className="sv-service-overlay" />
                  <div className="sv-service-glass" />
                  <div className="sv-service-content">
                    <span className="sv-service-no">{item.id}</span>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <button className="sv-learn-btn">
                      Learn More <FiChevronRight />
                    </button>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button className="sv-nav-btn sv-nav-next" onClick={goNext} aria-label="Next service">
            <FiArrowRight />
          </button>

          <div className="sv-dots-wrap" aria-label="Slide indicators">
            {servicesData.map((_, i) => (
              <button
                key={i}
                className={`sv-dot ${activeIndex === i ? "active" : ""}`}
                onClick={() => handleThumbClick(i)}
                aria-label={`Go to service ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* THUMBNAILS */}
      <div className="sv-services-thumbs" role="tablist" aria-label="Service thumbnails">
        {servicesData.map((item, index) => {
          const Icon = item.icon;
          const active = activeIndex === index;
          return (
            <button
              key={item.id}
              className={`sv-thumb-card ${active ? "active" : ""}`}
              onClick={() => handleThumbClick(index)}
              role="tab"
              aria-selected={active}
            >
              <span className="sv-thumb-icon">
                <Icon />
              </span>
              <div className="sv-thumb-meta">
                <small>{item.id}</small>
                <h4>{item.title}</h4>
              </div>
            </button>
          );
        })}
      </div>

      {/* BOTTOM CTA STRIP */}
      <div className="sv-services-cta-strip">
        <div className="sv-cta-left">
          <span className="sv-leaf-icon">
            <Leaf size={24} />
          </span>
          <p>Let&apos;s build a sustainable future together.</p>
        </div>

        <ul className="sv-cta-points">
          <li>Collaborate for Impact</li>
          <li>Innovate for Change</li>
          <li>Sustain for Tomorrow</li>
        </ul>

        <button className="sv-cta-btn">Connect with us</button>
      </div>
    </section>
  );
};

export default Services;
