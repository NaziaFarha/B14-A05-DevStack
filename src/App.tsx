
import { useState } from "react";
import "./App.css";

const navItems = ["Home", "Technologies", "Projects", "About", "Contact"];

type Technology = {
  id: number;
  name: string;
  category: string;
  level: string;
  rating: number;
  description: string;
  icon: string;
  badge?: string;
  badgeClass?: string;
};

const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
    icon: "⚛",
    badge: "Popular",
    badgeClass: "badge-blue",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
  },
  {
    id: 2,
    name: "Vue.js",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
    icon: "V",
    badge: "Versatile",
    badgeClass: "badge-green",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
  },
  {
    id: 3,
    name: "Svelte",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
    icon: "S",
    badge: "Fast",
    badgeClass: "badge-orange",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
  },
  {
    id: 4,
    name: "Next.js",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
    icon: "N",
    description:
      "The React framework for full-stack web applications with hybrid static and server rendering.",
  },
  {
    id: 5,
    name: "Node.js",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
    icon: "⬡",
    badge: "Standard",
    badgeClass: "badge-green",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
  },
  {
    id: 6,
    name: "PostgreSQL",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
    icon: "🐘",
    badge: "Top SQL",
    badgeClass: "badge-blue",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
  },
  {
    id: 7,
    name: "Redis",
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
    icon: "▰",
    badge: "Cache",
    badgeClass: "badge-red",
    description:
      "An in-memory data structure store used as a high-speed database, cache, and message broker.",
  },
  {
    id: 8,
    name: "JavaScript",
    category: "Language",
    level: "Beginner-Friendly",
    rating: 4.9,
    icon: "JS",
    badge: "Ubiquitous",
    badgeClass: "badge-yellow",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
  },
  {
    id: 9,
    name: "TypeScript",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
    icon: "TS",
    badge: "Essential",
    badgeClass: "badge-blue",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
  },
  {
    id: 10,
    name: "Java",
    category: "Language",
    level: "Intermediate",
    rating: 4.6,
    icon: "☕",
    badge: "Robust",
    badgeClass: "badge-red",
    description:
      "A secure, object-oriented programming language designed for portability and scale.",
  },
  {
    id: 11,
    name: "Tailwind CSS",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.9,
    icon: "≈",
    badge: "Modern",
    badgeClass: "badge-cyan",
    description:
      "A utility-first CSS framework packed with classes that can be composed to build custom UI.",
  },
  {
    id: 12,
    name: "Docker",
    category: "DevOps",
    level: "Intermediate",
    rating: 4.9,
    icon: "◆",
    badge: "Containers",
    badgeClass: "badge-cyan",
    description:
      "A platform designed to build, share, and run containerized applications reliably.",
  },
];

function StackIllustration() {
  return (
    <div className="stack-wrapper">
      <div className="stack-glow" />

      <div className="stack-layer stack-top">
        <div className="layer-content">
          <div className="layer-icon">A</div>
          <div className="layer-line line-long" />
          <div className="layer-line line-short" />
          <div className="layer-circle" />
        </div>
      </div>

      <div className="stack-layer stack-middle">
        <div className="layer-content">
          <div className="layer-icon purple">◉</div>
          <div className="layer-line line-long" />
          <div className="layer-line line-medium" />
          <div className="layer-box" />
        </div>
      </div>

      <div className="stack-layer stack-bottom">
        <div className="layer-content">
          <div className="layer-icon pink">◆</div>
          <div className="layer-line line-long" />
          <div className="layer-line line-medium" />
          <div className="layer-box" />
        </div>
      </div>

      <div className="connector connector-1" />
      <div className="connector connector-2" />
      <div className="connector connector-3" />

      <span className="floating-dot dot-1" />
      <span className="floating-dot dot-2" />
      <span className="floating-dot dot-3" />
      <span className="floating-dot dot-4" />
    </div>
  );
}

function App() {
  const [stack, setStack] = useState<Technology[]>([]);

  const addToStack = (technology: Technology) => {
    setStack((currentStack) => {
      if (currentStack.some((item) => item.id === technology.id)) {
        return currentStack;
      }

      return [...currentStack, technology];
    });
  };

  const removeFromStack = (id: number) => {
    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== id)
    );
  };

  const removeAll = () => {
    setStack([]);
  };

  return (
    <main className="page">

      <header className="navbar">

        <a href="#" className="brand">
  <img src="./assets/logo-text.png" alt="" />
  <span></span>
</a>

        <nav className="navigation">
          {navItems.map((item, index) => (
            <a
              href={`#${item.toLowerCase()}`}
              className={index === 0 ? "active" : ""}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="auth-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>

      </header>

    

      <section className="hero" id="home">

        <div className="hero-content">

          <h1>
            Build Your Ideal
            <br />
            <span>Development Stack</span>
          </h1>

          <p>
            Explore frontend, backend, database, and tooling options,
            <br />
            compare them side by side, and put together the stack that fits
            your
            <br />
            next project.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-button"
              onClick={() =>
                document
                  .getElementById("technologies")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Explore Technologies
            </button>

            <button
              className="secondary-button"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </button>

          </div>

        </div>

        <div className="hero-visual">
          <img
            src="./assets/banner-stack.png"
            alt="Development Stack"
            className="hero-image"
          />
        </div>

      </section>

      
      <section
        className="technology-section"
        id="technologies"
      >

        <div className="technology-layout">

          <div className="technology-main">

            <h2>
              Explore the <span>Technologies</span>
            </h2>

            <p className="technology-subtitle">
              Pick one technology per category to build your ideal stack.
            </p>

            <div className="technology-grid">

              {technologies.map((technology) => {

                const isSelected = stack.some(
                  (item) => item.id === technology.id
                );

                return (
                  <article
                    className="technology-card"
                    key={technology.id}
                  >

                    <div className="technology-card-top">

                      <div
                        className={`technology-icon technology-icon-${technology.id}`}
                      >
                        {technology.icon}
                      </div>

                      {technology.badge && (
                        <span
                          className={`technology-badge ${technology.badgeClass}`}
                        >
                          {technology.badge}
                        </span>
                      )}

                    </div>

                    <h3>
                      {technology.name}
                    </h3>

                    <p className="technology-description">
                      {technology.description}
                    </p>

                    <div className="technology-meta">

                      <span className="category-label">
                        {technology.category}
                      </span>

                      <span>
                        {technology.level}
                      </span>

                      <span className="technology-rating">
                        ★ {technology.rating}
                      </span>

                    </div>

                    <button
                      type="button"
                      className={`add-stack-button ${
                        isSelected ? "added" : ""
                      }`}
                      disabled={isSelected}
                      onClick={() =>
                        addToStack(technology)
                      }
                    >
                      {isSelected
                        ? "Added to Stack"
                        : "Add to Stack"}
                    </button>

                  </article>
                );
              })}

            </div>

          </div>

          

          <aside className="your-stack">

            <h2>
              Your Stack
            </h2>

            <p className="stack-count">

              {stack.length === 0
                ? "No technologies selected yet."
                : `${stack.length} Technology${
                    stack.length === 1 ? "" : "ies"
                  } Selected`}

            </p>

            {stack.length === 0 ? (

              <div className="empty-stack">
                <p>
                  Your stack is empty.
                </p>
              </div>

            ) : (

              <>

                <div className="selected-stack-list">

                  {stack.map((technology) => (

                    <div
                      className="selected-stack-item"
                      key={technology.id}
                    >

                      <div
                        className={`selected-stack-icon technology-icon-${technology.id}`}
                      >
                        {technology.icon}
                      </div>

                      <div className="selected-stack-info">

                        <strong>
                          {technology.name}
                        </strong>

                        <small>
                          {technology.category}
                        </small>

                      </div>

                      <button
                        type="button"
                        className="remove-item"
                        onClick={() =>
                          removeFromStack(technology.id)
                        }
                        aria-label={`Remove ${technology.name}`}
                      >
                        ×
                      </button>

                    </div>

                  ))}

                </div>

                <button
                  type="button"
                  className="remove-all-button"
                  onClick={removeAll}
                >
                  Remove All
                </button>

              </>

            )}

          </aside>

        </div>

      </section>

     

      <footer className="footer">

        <div className="footer-container">

         

          <div className="footer-brand">

            <a href="#" className="footer-logo">

              <span className="footer-logo-icon">
                DS
              </span>

              <span className="footer-logo-text">
                Dev<span>Stack</span>
              </span>

            </a>

            <p className="footer-description">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className="footer-socials">

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

            </div>

          </div>

         

          <div className="footer-column">

            <h3>
              PRODUCT
            </h3>

            <a href="#home">
              Home
            </a>

            <a href="#technologies">
              Technologies
            </a>

            <a href="#technologies">
              Projects
            </a>

          </div>

         

          <div className="footer-column">

            <h3>
              COMPANY
            </h3>

            <a href="#about">
              About
            </a>

            <a href="#contact">
              Contact
            </a>

            <a href="#">
              Careers
            </a>

          </div>

       

          <div className="footer-column">

            <h3>
              LEGAL
            </h3>

            <a href="#">
              Privacy Policy
            </a>

            <a href="#">
              Terms of Service
            </a>

          </div>

        </div>

      

        <div className="footer-bottom">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="footer-bottom-links">

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}

export default App;
// project is complete