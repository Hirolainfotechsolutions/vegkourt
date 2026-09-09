import { useState } from "react";
import { Link } from "react-router-dom";
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
    title: "Live Delivery",
    text: "Freshly packed dishes brought to your venue on time.",
  },
  {
    icon: Leaf,
    title: "Pure Veg",
    text: "Thoughtful vegetarian menus made for every gathering.",
  },
  {
    icon: ShieldCheck,
    title: "Clean Setup",
    text: "Hygienic service, neat counters, and careful packaging.",
  },
];

const menuItems = [
  {
    image: "/assets/img/menu/next/items/generated/classic-paneer-tikka.webp",
    title: "Paneer Tikka",
    text: "Smoky cottage cheese with classic tandoori spice.",
    tag: "Starter",
  },
  {
    image: "/assets/img/menu/next/items/generated/dum-paneer-biryani.webp",
    title: "Dum Paneer Biryani",
    text: "Aromatic rice layered with paneer and fragrant masala.",
    tag: "Rice",
  },
  {
    image:
      "/assets/img/menu/next/items/generated/dal-makhani-24-hour-black-lentils.webp",
    title: "Dal Makhani",
    text: "Slow cooked lentils finished with rich, comforting flavors.",
    tag: "Main",
  },
  {
    image: "/assets/img/menu/next/items/generated/tandoori-bread-basket.webp",
    title: "Bread Basket",
    text: "Assorted tandoori breads served warm for the table.",
    tag: "Sides",
  },
  {
    image: "/assets/img/menuitems/generated/vegetarian-pasta-trio.png",
    title: "Pasta Selection",
    text: "Creamy and saucy vegetarian pasta for mixed-age crowds.",
    tag: "Continental",
  },
  {
    image:
      "/assets/img/menu/next/items/generated/dessert-tasting-plate-for-two.webp",
    title: "Dessert Platter",
    text: "A graceful finish with house-style sweets and desserts.",
    tag: "Dessert",
  },
];

const scrollImages = [
  {
    src: "/assets/img/vegkourtimages/vegkourtimg5.webp",
    alt: "Veg Kourt catering preparation",
  },
  {
    src: "/assets/img/vegkourtimages/bdparty.webp",
    alt: "Veg Kourt private celebration",
  },
  {
    src: "/assets/img/vegkourtimages/item7.webp",
    alt: "Veg Kourt plated starter",
  },
  {
    src: "/assets/img/vegkourtimages/item5.webp",
    alt: "Veg Kourt chef-style platter",
  },
  {
    src: "/assets/img/vegkourtimages/item8.webp",
    alt: "Veg Kourt fresh vegetarian dish",
  },
  {
    src: "/assets/img/vegkourtimages/outsideimage.webp",
    alt: "Veg Kourt entrance",
  },
];

const cateringSteps = [
  {
    image: "/assets/img/vegkourtimages/bdparty.webp",
    text: "Share your event details, guest count, and preferences. Our team will understand what you are planning and get back to you quickly.",
  },
  {
    image: "/assets/img/vegkourtimages/reservation-split-bg.png",
    text: "We help you select a balanced pure vegetarian menu with starters, mains, breads, rice, desserts, and beverages.",
  },
  {
    image: "/assets/img/vegkourtimages/vegkourtimg11.webp",
    text: "For hosted events, we align the setup, serving flow, timing, and presentation so everything feels seamless.",
  },
  {
    image: "/assets/img/vegkourtimages/outsideimage.webp",
    text: "On the event day, our team arrives prepared, serves with care, and lets you focus fully on your guests.",
  },
];

const testimonials = [
  {
    quote:
      "So happy with the catering for our family celebration. The food was fresh, the service was humble, and everyone loved the dry jamoon, veg noodles, and paneer tikka.",
    name: "Nirmal Kumar",
  },
  {
    quote:
      "Veg Kourt handled our office lunch beautifully. The menu was pure vegetarian, neatly packed, and every dish reached on time with excellent taste.",
    name: "Ananya Hegde",
  },
  {
    quote:
      "We planned a birthday gathering and the team made it very easy. Starters, mains, breads, and desserts were balanced perfectly for our guests.",
    name: "Raghavendra Urs",
  },
  {
    quote:
      "The catering setup was clean, warm, and well coordinated. Our family enjoyed the food, and the service team took care of every small detail.",
    name: "Sahana Murthy",
  },
];

export default function Catering() {
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
                Pure Veg Food
                <span>For Memorable</span>
                <span>Events</span>
              </h1>
              <p className="catering-lead">
                Celebrate with vegetarian menus crafted for birthdays, family
                gatherings, office lunches, and special occasions across Mysuru.
              </p>
              <div className="catering-actions">
                <Link
                  className="catering-btn catering-btn-primary"
                  to="/contact"
                >
                  Book Catering
                </Link>
                <Link className="catering-btn catering-btn-outline" to="/menu">
                  See Menu
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
            <div className="catering-hero-visual" aria-label="Catering dishes">
              <div className="catering-hero-plate">
                <img
                  src="/assets/img/vegkourtimages/cateringi-banner.png"
                  alt="Veg Kourt vegetarian dishes"
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
              aria-label="Veg Kourt events and dishes"
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
              <p className="catering-script">About us</p>
              <h2>We Cater The Veg Kourt Way</h2>
              <h3>Restaurant taste, event-ready service</h3>
              <p>
                From intimate family functions to larger hosted meals, our team
                helps you build a pure vegetarian spread with the right balance
                of starters, mains, breads, rice, desserts, and beverages.
              </p>
              <div className="catering-actions">
                <Link
                  className="catering-btn catering-btn-primary"
                  to="/contact"
                >
                  Enquire Now
                </Link>
                <Link className="catering-btn catering-btn-outline" to="/about">
                  Our Story
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
            View Menu
          </Link>
        </div>
      </section>

      <section className="catering-event-process">
        <div className="container">
          <div className="catering-event-heading">
            <h2>A Simple, Clear Process.</h2>
            <p>When it comes to the food, leave it to us.</p>
          </div>

          <div className="catering-event-grid">
            {cateringSteps.map((item, index) => (
              <article className="catering-event-step" key={item.image}>
                <div className="catering-event-image">
                  <img src={item.image} alt={`Catering process step ${index + 1}`} />
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="catering-event-action">
            <Link className="catering-btn catering-btn-primary" to="/contact">
              Plan Your Event
            </Link>
          </div>
        </div>
      </section>

      <section className="catering-testimonial">
        <div className="container">
          <div className="catering-testimonial-grid">
            <div className="catering-testimonial-copy">
              <p className="catering-testimonial-kicker">Testimonial</p>
              <h2>What People&apos;s Say About Us?</h2>
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
                alt="Smiling child chef holding a vegetarian plate"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="catering-menu-preview">
        <div className="container">
          <div className="catering-section-heading">
            <p className="catering-script">Fresh &amp; festive</p>
            <h2>Our Catering Favorites</h2>
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
                    Order Now
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
              View Full Menu
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
              <p className="catering-eyebrow">Planning a gathering?</p>
              <h2>Tell us your guest count and we will help with the menu.</h2>
            </div>
            <Link className="catering-btn catering-btn-primary" to="/contact">
              Get Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
