import React from "react";
import "./Home.css";

function Home() {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="home">
      <header className="header">
        <div className="header-prompt">
          <span className="prompt-symbol">$</span>
          <span className="prompt-path">~/erel-ozen</span>
          <span className="cursor">_</span>
          <span className="nav-links">
            <a href="#about" onClick={(e) => scrollToSection(e, "about")}>
              [about]
            </a>
            <a href="https://erelo.substack.com/" target="_blank" rel="noopener noreferrer">
              [blog]
            </a>
            <a href="/Erel_Ozen_Resume.pdf" target="_blank" rel="noopener noreferrer">
              [cv]
            </a>
          </span>
          <span className="separator">|</span>
          <span className="social-icons">
            <a href="mailto:erelozen@gmail.com" aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </a>
            <a href="https://github.com/eozen1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/erel-ozen/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </span>
        </div>
      </header>

      <main className="main">
        <section id="about" className="section">
          <div className="section-content">
            <h2 className="shell-heading">
              <span className="prompt-green">$</span>{" "}
              <span className="prompt-text">whoami</span>
            </h2>
            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a <span className="highlight">B.S./M.S. '27 Computer Science student at Georgia Tech</span>{" "}
                  (<span className="highlight">4.0 GPA</span>), specializing in{" "}
                  <span className="highlight">Systems Architecture and Machine Intelligence</span>.
                </p>
                <p>
                  I'm passionate about building high-performance, scalable systems and ML applications. I've interned at{" "}
                  <span className="highlight">Apple</span> in the{" "}
                  <span className="highlight">CoreOS group</span>, where I engineered state management logic for paravirtualized network drivers. I've also worked at{" "}
                  <span className="highlight">OKSI</span>, deploying Llama-3 on resource-constrained devices.
                </p>
                <p>
                  My academic projects include building a <span className="highlight">UNIX OS kernel from scratch</span>, implementing virtual memory, a file system, and CPU scheduling. I am also a TA for Computer Organizations & Programming.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-content">
            <h2 className="shell-heading">
              <span className="prompt-blue">&gt;</span>{" "}
              <span className="prompt-text">Experience Timeline</span>
            </h2>
            <ul className="experience-list">
              <li>
                <span className="year">2025</span>{" "}
                <span className="experience-text">Software Development Engineering Intern @ Apple</span>
              </li>
              <li>
                <span className="year">2024-2025</span>{" "}
                <span className="experience-text">Software Engineering Intern, Machine Learning @ OKSI</span>
              </li>
              <li>
                <span className="year">2023</span>{" "}
                <span className="experience-text">Software Engineering Intern, Embedded Systems @ OKSI</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-content">
            <h2 className="shell-heading">
              <span className="prompt-green">$</span>{" "}
              <span className="prompt-text">ls projects/</span>
            </h2>
            <ul className="projects-list">
              <li>
                <span className="project-prefix">::</span>{" "}
                <span className="project-title">ereLLM:</span>{" "}
                <span className="project-description">Lightweight Transformer for Scalable Training Implemented a minimal GPT architecture in PyTorch, optimized with CUDA for scalable training and fine-tuning on custom datasets.</span>
              </li>
              <li>
                <span className="project-prefix">::</span>{" "}
                <span className="project-title">UNIX Kernel Development (Spring 2025)</span>{" "}
                <span className="project-description">Implemented core OS components for a UNIX V6-based teaching OS in C, including virtual memory, file system, and CPU scheduling.</span>
              </li>
              <li>
                <span className="project-prefix">::</span>{" "}
                <span className="project-title">Founding Engineer @ Stealth Startup (2024)</span>{" "}
                <span className="project-description">Developed an ML recommendation engine analyzing 300+ credit-cards and built the MERN stack application.</span>
              </li>
              <li>
                <span className="project-prefix">::</span>{" "}
                <span className="project-title">Engineering Team Member @ Fintech Georgia Tech (2023 - 2024)</span>{" "}
                <span className="project-description">Created a credit card "smart-wallet" using React and Node.js to dynamically select the best card based on purchase type.</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-content">
            <h2 className="shell-heading">
              <span className="prompt-green">$</span>{" "}
              <span className="prompt-text">cat skills.txt</span>
            </h2>
            <ul className="skills-list">
              <li>
                <span className="skill-category">Languages:</span>{" "}
                <span className="skill-items">Python, C/C++, Java, JavaScript, TypeScript, Bash</span>
              </li>
              <li>
                <span className="skill-category">Frameworks:</span>{" "}
                <span className="skill-items">TensorFlow, PyTorch, ROS/ROS2, OpenCV, React.JS, React Native, NATS.io</span>
              </li>
              <li>
                <span className="skill-category">Technologies:</span>{" "}
                <span className="skill-items">RESTful APIs, AWS, Git, Docker, SLAM, CAN, Micro Controllers</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
