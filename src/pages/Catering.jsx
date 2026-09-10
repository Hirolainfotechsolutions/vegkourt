import { useState } from "react";
import { Link } from "react-router-dom";
import useSeoData from "../hooks/useSeoData";
import {
  ArrowLeft,
  ArrowRight,
  Leaf,
  ShieldCheck,
  Star,
  Truck,
  UserRound,
  Users,
} from "lucide-react";

const heroServices = [
  {
    icon: Truck,
    title: "Fresh Arrival",
    text: "Prepared fresh and timed for your event.",
  },
  {
    icon: Leaf,
    title: "Pure Veg Menu",
    text: "Vegetarian dishes planned for every guest.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Service",
    text: "Neat packing, hygienic handling, polished serving.",
  },
];

const menuItems = [
  {
    image: "/assets/img/menu/next/items/generated/classic-paneer-tikka.webp",
    title: "Paneer Tikka",
    text: "Charred paneer cubes tossed in a bright tandoori marinade.",
    tag: "Welcome Bite",
  },
  {
    image: "/assets/img/menu/next/items/generated/dum-paneer-biryani.webp",
    title: "Dum Paneer Biryani",
    text: "Layered rice, paneer, herbs, and mellow spices served with comfort.",
    tag: "Rice Special",
  },
  {
    image:
      "/assets/img/menu/next/items/generated/dal-makhani-24-hour-black-lentils.webp",
    title: "Dal Makhani",
    text: "Velvety black lentils with a slow, homely depth of flavor.",
    tag: "Main Course",
  },
  {
    image: "/assets/img/menu/next/items/generated/tandoori-bread-basket.webp",
    title: "Bread Basket",
    text: "Soft tandoori breads made to pair with gravies and shared plates.",
    tag: "Table Side",
  },
  {
    image: "/assets/img/menuitems/generated/vegetarian-pasta-trio.png",
    title: "Pasta Selection",
    text: "Creamy and saucy vegetarian pasta for guests who enjoy global flavors.",
    tag: "Fusion Choice",
  },
  {
    image:
      "/assets/img/menu/next/items/generated/dessert-tasting-plate-for-two.webp",
    title: "Dessert Platter",
    text: "A sweet finish with familiar favorites and elegant plated treats.",
    tag: "Sweet Finish",
  },
];

const scrollImages = [
  {
    src: "/assets/img/vegkourtimages/vegkourtimg5.webp",
    alt: "Veg Kourt fresh catering dishes",
  },
  {
    src: "/assets/img/vegkourtimages/bdparty.webp",
    alt: "Veg Kourt family celebration catering",
  },
  {
    src: "/assets/img/vegkourtimages/item7.webp",
    alt: "Veg Kourt vegetarian starter",
  },
  {
    src: "/assets/img/vegkourtimages/item5.webp",
    alt: "Veg Kourt vegetarian platter",
  },
  {
    src: "/assets/img/vegkourtimages/item8.webp",
    alt: "Veg Kourt event food dish",
  },
  {
    src: "/assets/img/vegkourtimages/outsideimage.webp",
    alt: "Veg Kourt Mysuru restaurant",
  },
];

const cateringSteps = [
  {
    image: "/assets/img/vegkourtimages/bdparty.webp",
    text: "Share the occasion, guest count, venue, and food preferences. We understand the mood of your event before suggesting the menu.",
  },
  {
    image: "/assets/img/vegkourtimages/reservation-split-bg.png",
    text: "Pick from pure vegetarian starters, gravies, rice, breads, desserts, beverages, and comfort dishes that suit your guests.",
  },
  {
    image: "/assets/img/vegkourtimages/vegkourtimg11.webp",
    text: "We plan preparation, dispatch, packing, and serving flow so the food reaches fresh and the event stays relaxed.",
  },
  {
    image: "/assets/img/vegkourtimages/outsideimage.webp",
    text: "Your guests enjoy warm vegetarian food while our team keeps the service simple, clean, and attentive.",
  },
];

const testimonials = [
  {
    quote:
      "The food felt restaurant-fresh even at our venue. Every dish was served neatly, and our guests enjoyed the variety from starters to dessert.",
    name: "Family Gathering",
  },
  {
    quote:
      "Our team lunch was smooth from start to finish. The menu was pure vegetarian, easy for everyone, and packed with the Veg Kourt taste we expected.",
    name: "Corporate Lunch",
  },
  {
    quote:
      "For the birthday event, the starters, mains, breads, and sweets were balanced beautifully. The service team handled everything calmly.",
    name: "Birthday Celebration",
  },
  {
    quote:
      "The setup was clean, the food arrived fresh, and the serving was handled with care. It made hosting much easier for us.",
    name: "Private Event",
  },
];

export default function Catering() {
  useSeoData("catering");
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const activeTestimonial = testimonials[testimonialIndex];

  const showPreviousTestimonial = () => {
    setTestimonialIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const showNextTestimonial = () => {
    setTestimonialIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  return (
    <main className="catering-page">
      <section className="catering-hero">
        <div className="container">
          <div className="catering-hero-grid">
            <div className="catering-hero-copy">
              <p className="catering-eyebrow">Veg Kourt Catering</p>
              <h1>
                <span className="catering-hero-title-main">Pure Veg Catering</span>
                <span>For Every Occasion</span>
              </h1>
              <p className="catering-lead">
                Make your gathering easier to host with fresh vegetarian food,
                clean service, and menus planned for birthdays, office meals,
                family functions, and festive celebrations across Mysuru.
              </p>
              <div className="catering-actions">
                <Link
                  className="catering-btn catering-btn-primary"
                  to="/contact"
                >
                  Start An Enquiry
                </Link>
                <Link className="catering-btn catering-btn-outline" to="/menu">
                  View Dishes
                </Link>
              </div>
              <div className="catering-service-cards">
                {heroServices.map(({ icon: Icon, title, text }) => (
                  <article className="catering-service-card" key={title}>
                    <Icon aria-hidden="true" size={28} strokeWidth={1.7} />
                    <h2>{title}</h2>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="catering-hero-visual" aria-label="Veg Kourt catering dishes">
              <div className="catering-hero-plate">
                <img
                  src="/assets/img/vegkourtimages/cateringi-banner.png"
                  alt="Veg Kourt vegetarian catering platter"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="catering-about">
        <div className="container">
          <div className="catering-about-grid">
            <div
              className="catering-collage"
              aria-label="Veg Kourt vegetarian event food"
            >
              <span
                className="catering-collage-leaf catering-collage-leaf-top"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 30C10 12 28 4 46 8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M14 14c4 4 4 10 0 14"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </span>

              <img
                className="catering-collage-main"
                src="/assets/img/menu/next/items/generated/veg-fried-rice.webp"
                alt="Veg Kourt fried rice bowl"
              />
              <img
                className="catering-collage-top"
                src="/assets/img/menu/next/items/generated/margherita-naanza.webp"
                alt="Veg Kourt naanza"
              />
              <img
                className="catering-collage-thumb"
                src="/assets/img/menu/next/items/generated/mango-avocado-arugula-salad.webp"
                alt="Veg Kourt fresh salad"
              />
              <img
                className="catering-collage-wide"
                src="/assets/img/menu/next/items/generated/papdi-chaat-crispy-spinach.webp"
                alt="Veg Kourt chaat platter"
              />

              <span
                className="catering-collage-leaf catering-collage-leaf-bottom"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M58 30C50 48 32 56 14 52"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M46 46c-4-4-4-10 0-14"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </span>
            </div>
            <div className="catering-about-copy">
              <p className="catering-script">Our approach</p>
              <h2>Fresh Food, Calm Hosting</h2>
              <h3>Pure vegetarian menus made for sharing</h3>
              <p>
                We bring together Indian favorites, festive starters, comforting
                mains, breads, rice, beverages, and desserts in a spread that
                suits your occasion. The focus is simple: fresh food, neat
                presentation, and guests who feel well cared for.
              </p>
              <div className="catering-actions">
                <Link
                  className="catering-btn catering-btn-primary"
                  to="/contact"
                >
                  Discuss Your Event
                </Link>
                <Link className="catering-btn catering-btn-outline" to="/about">
                  Know Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="catering-scroll-showcase" aria-label="Catering gallery">
        <div className="catering-scroll-window">
          <div className="catering-scroll-track">
            {[...scrollImages, ...scrollImages].map((item, index) => (
              <div className="catering-scroll-card" key={`${item.src}-${index}`}>
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className="catering-scroll-action">
          <Link className="catering-btn catering-btn-primary" to="/menu">
            See More Choices
          </Link>
        </div>
      </section>

      <section className="catering-event-process">
        <div className="container">
          <div className="catering-event-heading">
            <h2>How We Make Your Event Easier</h2>
            <p>From the first conversation to the final serving, the flow stays clear.</p>
          </div>

          <div className="catering-event-grid">
            {cateringSteps.map((item, index) => (
              <article className="catering-event-step" key={item.image}>
                <div className="catering-event-image">
                  <img src={item.image} alt={`Veg Kourt catering step ${index + 1}`} />
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="catering-event-action">
            <Link className="catering-btn catering-btn-primary" to="/contact">
              Share Event Details
            </Link>
          </div>
        </div>
      </section>

      <section className="catering-testimonial">
        <div className="container">
          <div className="catering-testimonial-grid">
            <div className="catering-testimonial-copy">
              <p className="catering-testimonial-kicker">Guest moments</p>
              <h2>Made For Celebrations People Talk About</h2>
              <p className="catering-testimonial-text">
                {activeTestimonial.quote}
              </p>
              <div className="catering-testimonial-customer">
                <div className="catering-testimonial-user-icon">
                  <UserRound aria-hidden="true" size={30} strokeWidth={1.7} />
                </div>
                <div>
                  <h3>{activeTestimonial.name}</h3>
                  <div className="catering-testimonial-stars" aria-label="5 star rating">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        aria-hidden="true"
                        fill="currentColor"
                        key={index}
                        size={18}
                        strokeWidth={1.3}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="catering-testimonial-controls">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={showPreviousTestimonial}
                >
                  <ArrowLeft aria-hidden="true" size={24} strokeWidth={2.3} />
                </button>
                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={showNextTestimonial}
                >
                  <ArrowRight aria-hidden="true" size={24} strokeWidth={2.3} />
                </button>
                <div className="catering-testimonial-dots" aria-label="Testimonials">
                  {testimonials.map((item, index) => (
                    <button
                      aria-label={`Show testimonial ${index + 1}`}
                      className={index === testimonialIndex ? "active" : ""}
                      key={item.name}
                      onClick={() => setTestimonialIndex(index)}
                      type="button"
                    ></button>
                  ))}
                </div>
              </div>
            </div>
            <div className="catering-testimonial-visual">
              <img
                src="/assets/img/catering/testimonial-child-chef.png"
                alt="Happy guest enjoying Veg Kourt catering"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="catering-menu-preview">
        <div className="container">
          <div className="catering-section-heading">
            <p className="catering-script">Menu inspiration</p>
            <h2>Dishes Guests Love At Events</h2>
          </div>
          <div className="catering-menu-grid">
            {menuItems.map((item) => (
              <article className="catering-menu-card" key={item.title}>
                <img src={item.image} alt={item.title} />
                <div>
                  <span>{item.tag}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <Link to="/contact">
                    Ask For This Dish
                    <ArrowRight
                      aria-hidden="true"
                      size={14}
                      strokeWidth={1.8}
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="catering-menu-more">
            <Link to="/menu">
              Browse The Menu
              <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <section className="catering-cta">
        <div className="container">
          <div className="catering-cta-inner">
            <Users aria-hidden="true" size={38} strokeWidth={1.5} />
            <div>
              <p className="catering-eyebrow">Hosting soon?</p>
              <h2>Tell us your event story, and we will help plan the food.</h2>
            </div>
            <Link className="catering-btn catering-btn-primary" to="/contact">
              Contact Catering
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
