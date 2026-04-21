import React, { useState } from 'react';
import {
  Button,
  TextInput,
  Accordion,
  AccordionItem,
} from '@carbon/react';
import './TestLandingPage.scss';

const PARTNER_LOGOS = [
  { name: 'Syd', icon: true },
  { name: 'Bern', icon: false },
  { name: 'Montréal', icon: false },
  { name: 'Terra', icon: false },
  { name: 'Colorado', icon: false },
  { name: 'Ankara', icon: false },
];

const FEATURES = [
  {
    title: 'Dashboard',
    description: 'This item would provide a snapshot of the most important metrics or data points related to the product.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Dashboard analytics overview',
  },
  {
    title: 'Mobile integration',
    description: 'This item would provide information about the mobile app version of the product.',
    image: 'https://images.pexels.com/photos/6241239/pexels-photo-6241239.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Mobile app integration on smartphone',
  },
  {
    title: 'Available on all platforms',
    description: 'This item would let users know the product is available on all platforms, such as web, mobile, and desktop.',
    image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Available across all platforms and devices',
  },
];

const TESTIMONIALS = [
  {
    initial: 'R',
    name: 'Remy Sharp',
    role: 'Senior Engineer',
    text: 'Whether be tackling work projects or indulging in my favorite hobbies, it seamlessly adapts to my changing needs. Its intuitive design has truly enhanced my daily routine, making tasks more efficient and enjoyable.',
  },
  {
    initial: 'T',
    name: 'Travis Howard',
    role: 'Lead Product Designer',
    text: 'One of the standout features of this product is the exceptional customer support. In my experience, the team behind this product has been quick to respond and incredibly helpful. It\'s reassuring to know that they stand firmly behind their product.',
  },
  {
    initial: 'C',
    name: 'Cindy Baker',
    role: 'CTO',
    text: 'From the moment I started using this product, it\'s revolutionized how I approach both professional challenges and personal interests. The thoughtful functionality adjusts perfectly as I switch between different activities throughout my day.',
  },
  {
    initial: 'J',
    name: 'Julia Stewart',
    role: 'Senior Engineer',
    text: 'I appreciate the attention to detail in the design of this product. The small touches make a big difference, and it\'s evident that the creators focused on delivering a premium experience.',
  },
  {
    initial: 'T',
    name: 'John Smith',
    role: 'Product Designer',
    text: 'I\'ve tried other similar products, but this one stands out for its innovative features. It\'s clear that the makers put a lot of thought into creating a solution that truly addresses user needs.',
  },
  {
    initial: 'C',
    name: 'Daniel Wolf',
    role: 'CDO',
    text: 'The quality of this product exceeded my expectations. It\'s durable, well-designed, and built to last. Definitely worth the investment!',
  },
];

const FAQS = [
  {
    question: 'How do I contact customer support if I have a question or issue?',
    answer: 'You can reach our customer support team 24/7 through our help center, email, or live chat. We\'re committed to responding to all inquiries within 24 hours.',
  },
  {
    question: 'Can I return the product if it doesn\'t meet my expectations?',
    answer: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with your purchase, contact our support team and we\'ll process your refund promptly.',
  },
  {
    question: 'What makes your product stand out from others in the market?',
    answer: 'Our product combines cutting-edge technology with an intuitive user experience, offering unmatched performance, reliability, and customer support that sets us apart from the competition.',
  },
  {
    question: 'Is there a warranty on the product, and what does it cover?',
    answer: 'Yes, all our products come with a comprehensive 2-year warranty covering manufacturing defects, hardware failures, and software issues. Extended warranty plans are also available.',
  },
];

const FOOTER_LINKS = {
  Product: ['Features', 'Testimonials', 'Highlights', 'Pricing', 'FAQs'],
  Company: ['About us', 'Careers', 'Press'],
  Legal: ['Terms', 'Privacy', 'Contact'],
};

function TestimonialAvatar({ initial }) {
  return (
    <div className="testimonial-avatar" aria-hidden="true">
      <span className="testimonial-avatar-initial">{initial}</span>
    </div>
  );
}

export default function TestLandingPage() {
  const [heroEmail, setHeroEmail] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');

  return (
    <div className="test-landing">

      {/* ── Hero ── */}
      <section className="tl-hero">
        <div className="tl-hero__inner">
          <h1 className="tl-hero__heading">Our latest</h1>
          <p className="tl-hero__subtitle">
            Explore our cutting-edge dashboard, delivering high-quality solutions tailored to your
            needs. Elevate your experience with top-tier features and services.
          </p>

          <div className="tl-hero__cta-row">
            <TextInput
              id="hero-email"
              type="email"
              labelText=""
              placeholder="Your email address"
              value={heroEmail}
              onChange={(e) => setHeroEmail(e.target.value)}
              className="tl-hero__email-input"
            />
            <Button kind="primary" className="tl-hero__start-btn">
              Start now
            </Button>
          </div>

          <p className="tl-hero__terms">
            By clicking &ldquo;Start now&rdquo; you agree to our{' '}
            <a href="#terms" className="tl-hero__terms-link">Terms and Conditions</a>
          </p>

          <div className="tl-hero__image-wrapper">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/263b229f547f669cfecc69608ce5a4770dbb62ea?width=2304"
              alt="Dashboard overview screenshot"
              className="tl-hero__dashboard-img"
            />
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="tl-partners">
        <p className="tl-partners__label">Trusted by the best companies</p>
        <div className="tl-partners__logos">
          {PARTNER_LOGOS.map((partner) => (
            <div key={partner.name} className="tl-partners__logo-item">
              {partner.icon && (
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                  <path d="M14.25 8.25H5.8725L9.5325 4.59C9.825 4.2975 9.825 3.8175 9.5325 3.525C9.24 3.2325 8.7675 3.2325 8.475 3.525L3.5325 8.4675C3.24 8.76 3.24 9.2325 3.5325 9.525L8.475 14.4675C8.7675 14.76 9.24 14.76 9.5325 14.4675C9.825 14.175 9.825 13.7025 9.5325 13.41L5.8725 9.75H14.25C14.6625 9.75 15 9.4125 15 9C15 8.5875 14.6625 8.25 14.25 8.25Z" fill="currentColor"/>
                </svg>
              )}
              <span className="tl-partners__logo-text">{partner.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Product Features ── */}
      <section className="tl-features">
        <div className="tl-features__intro">
          <h2 className="tl-section-heading">Product features</h2>
          <p className="tl-section-body">
            Provide a brief overview of the key features of the product. For example, you could
            list the number of features, their types or benefits, and add-ons.
          </p>
        </div>

        <div className="tl-features__dashboard-preview">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/263b229f547f669cfecc69608ce5a4770dbb62ea?width=2304"
            alt="Product dashboard feature preview"
            className="tl-features__preview-img"
          />
        </div>

        <div className="tl-features__cards">
          {FEATURES.map((feat) => (
            <div key={feat.title} className="tl-feature-card">
              <div className="tl-feature-card__image-wrapper">
                <img
                  src={feat.image}
                  alt={feat.alt}
                  className="tl-feature-card__image"
                  loading="lazy"
                />
              </div>
              <h3 className="tl-feature-card__title">{feat.title}</h3>
              <p className="tl-feature-card__desc">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="tl-testimonials">
        <div className="tl-testimonials__header">
          <h2 className="tl-section-heading tl-section-heading--light">Testimonials</h2>
          <p className="tl-section-body tl-section-body--light">
            See what our customers love about our products. Discover how we excel in efficiency,
            durability, and satisfaction. Join us for quality, innovation, and reliable support.
          </p>
        </div>

        <div className="tl-testimonials__grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="tl-testimonial-card">
              <p className="tl-testimonial-card__text">{t.text}</p>
              <div className="tl-testimonial-card__footer">
                <div className="tl-testimonial-card__author">
                  <TestimonialAvatar initial={t.initial} />
                  <div className="tl-testimonial-card__author-info">
                    <span className="tl-testimonial-card__name">{t.name}</span>
                    <span className="tl-testimonial-card__role">{t.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="tl-faq">
        <h2 className="tl-section-heading">Frequently asked questions</h2>
        <div className="tl-faq__list">
          <Accordion>
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} title={faq.question}>
                <p className="tl-faq__answer">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="tl-footer">
        <div className="tl-footer__main">

          <div className="tl-footer__brand">
            <div className="tl-footer__logo" aria-label="Sitemark">
              <svg width="86" height="19" viewBox="0 0 86 19" fill="none" aria-hidden="true">
                <path d="M0.787003 12.567L6.842 9.892L10.327 11.898L11.031 18.481L6.736 18.446L7.37 13.869L6.63 13.447L3.005 16.264L0.787003 12.567Z" fill="#B4C0D3"/>
                <path d="M10.714 11.616L16.066 15.524L18.178 11.757L13.883 10.032V9.187L18.178 7.427L16.066 3.695L10.714 7.603V11.616Z" fill="#00D3AB"/>
                <path d="M10.327 7.286L11.031 0.703003L6.736 0.773003L7.37 5.35L6.63 5.772L2.97 2.956L0.785995 6.617L6.841 9.293L10.327 7.286Z" fill="#4876EF"/>
                <path d="M32.507 8.804V14.971H34.819V7.111H31.453V8.804H32.507ZM32.435 6.006C32.647 6.226 32.97 6.336 33.403 6.336C33.837 6.336 34.154 6.226 34.356 6.006C34.569 5.776 34.674 5.49 34.674 5.146C34.674 4.792 34.569 4.505 34.356 4.286C34.154 4.056 33.836 3.941 33.403 3.941C32.97 3.941 32.647 4.056 32.435 4.285C32.233 4.505 32.132 4.792 32.132 5.145C32.132 5.49 32.233 5.777 32.435 6.006ZM24.46 14.799C25.115 15.095 25.92 15.243 26.873 15.243C27.769 15.243 28.54 15.104 29.185 14.827C29.83 14.55 30.326 14.163 30.673 13.665C31.03 13.159 31.208 12.571 31.208 11.901C31.208 11.251 31.039 10.701 30.702 10.252C30.374 9.793 29.917 9.434 29.329 9.176C28.742 8.909 28.063 8.741 27.292 8.674L26.483 8.603C26.002 8.564 25.655 8.435 25.443 8.215C25.125 7.441 25.298 6.81 25.818 6.336C26.059 6.222 26.353 6.164 26.7 6.164C27.066 6.164 27.37 6.231 27.61 6.365C27.97 6.612 28.087 6.744 28.174 6.896C28.299 7.106 28.362 7.34 28.362 7.599H30.673C30.673 6.91 30.514 6.313 30.197 5.806C29.879 5.29 29.421 4.893 28.824 4.616C28.236 4.329 27.528 4.186 26.7 4.186C25.91 4.186 25.226 4.319 24.648 4.586C23.29 5.706 22.813 6.772 22.813 7.441C22.813 8.368 23.127 9.114 23.753 9.678C24.379 10.242 25.217 10.568 26.267 10.654L27.061 10.725C27.706 10.783 28.174 10.912 28.462 11.113C28.896 11.901 28.665 12.618 27.985 13.092C27.687 13.207 27.316 13.264 26.873 13.264C26.383 13.264 25.983 13.197 25.674 13.064C25.366 12.92 25.135 12.734 24.98 12.504C24.764 11.758H22.467C22.467 12.437 22.635 13.039 22.972 13.565C23.309 14.082 23.806 14.493 24.461 14.799H24.46ZM39.977 15.07C39.177 15.07 38.532 14.975 38.041 14.784C36.736 13.325 36.625 12.694 36.625 11.901V8.789H35.425V7.11H36.625V4.988H38.778V7.11H41.09V8.79H38.778V11.988C38.778 12.361 38.874 12.648 39.067 12.848C39.269 13.04 39.553 13.135 39.919 13.135H41.089V15.072H39.977V15.07Z" fill="#4876EE"/>
              </svg>
            </div>
            <h4 className="tl-footer__newsletter-heading">Join the newsletter</h4>
            <p className="tl-footer__newsletter-sub">Subscribe for weekly updates. No spams ever!</p>
            <label className="tl-footer__email-label" htmlFor="footer-email">Email</label>
            <div className="tl-footer__newsletter-row">
              <TextInput
                id="footer-email"
                type="email"
                labelText=""
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="tl-footer__email-input"
              />
              <Button kind="primary" className="tl-footer__subscribe-btn">
                Subscribe
              </Button>
            </div>
          </div>

          <div className="tl-footer__links">
            {Object.entries(FOOTER_LINKS).map(([category, links]) => (
              <div key={category} className="tl-footer__link-col">
                <h5 className="tl-footer__link-heading">{category}</h5>
                <ul className="tl-footer__link-list">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="tl-footer__link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="tl-footer__bottom">
          <div className="tl-footer__bottom-left">
            <a href="#" className="tl-footer__bottom-link">Privacy Policy</a>
            <span className="tl-footer__bottom-sep">&bull;</span>
            <a href="#" className="tl-footer__bottom-link">Terms of Service</a>
            <span className="tl-footer__bottom-sep">&bull;</span>
            <span className="tl-footer__copyright">Copyright &copy;</span>
          </div>
          <div className="tl-footer__social">
            {/* GitHub */}
            <a href="#" className="tl-footer__social-link" aria-label="GitHub">
              <div className="tl-footer__social-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M8.00005 0.846858C6.24986 0.834662 4.55302 1.44884 3.2161 2.57842C1.87917 3.708 0.990339 5.27849 0.710177 7.00616C0.430015 8.73382 0.777003 10.5047 1.68845 11.9989C2.5999 13.4931 4.01569 14.612 5.68005 15.1535C6.04671 15.2135 6.16671 14.9669 6.16671 14.7869V13.5602C4.14671 13.9869 3.72005 12.5869 3.72005 12.5869C3.35338 11.7269 2.86671 11.4869 2.86671 11.4869C2.25338 11.0535 2.93338 11.0535 2.93338 11.0535C3.66671 11.0535 4.08671 11.7869 4.08671 11.7869C4.70005 12.8869 5.80005 12.5869 6.22671 12.4002C6.65338 11.4202 5.00671 11.2402 5.00671 11.2402C3.29338 10.6269 3.29338 7.75352 3.29338 7.75352C3.29338 7.02019 3.60005 6.35352 4.09338 5.86019C4.09338 3.90686 4.70005 3.72019 4.70005 3.72019C6.16671 4.64019 6.16671 4.64019C7.36671 4.31352 8.63338 4.31352 9.83338 4.64019C11.2334 3.72019 11.8467 3.90686 11.8467 3.90686C12.4 5.86019 12.4 5.86019C12.4 6.35352 12.6467 7.02019 12.6467 7.82019C12.6467 10.6269 10.9334 11.2402 9.28671 11.4202C9.58671 11.6669 9.83338 12.0335 9.83338 12.7669V14.7869C9.83338 14.9669 9.90005 15.2135 10.32 15.1535C11.9844 14.612 13.4002 13.4931 14.3116 11.9989C15.2231 10.5047 15.5701 8.73382 15.2899 7.00616C15.0098 5.27849 14.1209 3.708 12.784 2.57842C11.4471 1.44884 9.75024 0.834662 8.00005 0.846858Z" fill="currentColor"/>
                </svg>
              </div>
            </a>
            {/* X / Twitter */}
            <a href="#" className="tl-footer__social-link" aria-label="X (Twitter)">
              <div className="tl-footer__social-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M12.1627 1.5H14.3681L9.55006 7.00667L15.2181 14.5H10.7801L7.30406 9.95533L3.32673 14.5H1.12006L6.27339 8.61L0.83606 1.5H5.38673L8.52873 5.654L12.1627 1.5ZM11.3887 13.18H12.6107L4.72273 2.75067H3.41139L11.3887 13.18Z" fill="currentColor"/>
                </svg>
              </div>
            </a>
            {/* LinkedIn */}
            <a href="#" className="tl-footer__social-link" aria-label="LinkedIn">
              <div className="tl-footer__social-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M12.6667 2C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667ZM12.3333 12.3333V8.8C12.3333 8.2236 12.1044 7.6708 11.6968 7.26322C11.2892 6.85564 10.7364 6.62667 10.16 6.62667C9.59333 6.62667 8.93333 6.97333 8.61333 7.49333V6.75333H6.75333V12.3333H8.61333V9.04667C8.61333 8.53333 9.02667 8.11333 9.54 8.11333C9.78754 8.11333 10.0249 8.21167 10.2 8.3867C10.375 8.56173 10.4733 8.79913 10.4733 9.04667V12.3333H12.3333ZM4.58667 5.70667C4.88371 5.70667 5.16859 5.58867 5.37863 5.37863C5.58867 5.16859 5.70667 4.88371 5.70667 4.58667C5.70667 3.96667 5.20667 3.46 4.58667 3.46C4.28786 3.46 4.00128 3.5787 3.78999 3.78999C3.5787 4.00128 3.46 4.28786 3.46 4.58667C3.46 5.20667 3.96667 5.70667 4.58667 5.70667ZM5.51333 12.3333V6.75333H3.66667V12.3333H5.51333Z" fill="currentColor"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
