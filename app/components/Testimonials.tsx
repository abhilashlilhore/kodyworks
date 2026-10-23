import "./Testimonials.css";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    quote:
      "KODY Works has been an incredible technology partner. They built our custom e-commerce platform with seamless payment integration. The team delivered on time and the increase in conversions has been remarkable. Highly recommend!",
    name: "Sarah Johnson",
    title: "CEO, TechStart Solutions",
    rating: 5,
  },
  {
    quote:
      "The KODY Works team helped us migrate our entire infrastructure to the cloud with zero downtime. Their cloud architects were patient, thorough, and explained everything in plain English. We have grown our business significantly since.",
    name: "Michael Rodriguez",
    title: "Founder, GreenLeaf Digital",
    rating: 5,
  },
  {
    quote:
      "Outstanding service from start to finish. Kody and his team handled our AI automation project flawlessly. They took complex requirements and turned them into a robust, scalable solution that saves us 30 hours per week. Five stars!",
    name: "Priya Sharma",
    title: "CTO, FinEdge Capital",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="section-title">
        <span className="line"></span>
        <h2>WHAT OUR CLIENTS SAY</h2>
        <span className="line"></span>
      </div>

      <p className="testimonials-subtitle">
        Hear what our clients have to say about KODY Works
      </p>

      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-rating">
              {[...Array(t.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <p className="testimonial-quote">{'"'}{t.quote}{'"'}</p>
            <div className="testimonial-author">
              <span className="author-name">{t.name}</span>
              <span className="author-title">{t.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
