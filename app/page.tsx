'use client';

import { useState } from "react";
import {
  ArrowDown, ArrowUpRight, BrainCircuit, Github, Linkedin, Mail, MapPin,
  Menu, X, Workflow, Mic2, ShieldCheck, Layers3, Terminal, ExternalLink
} from "lucide-react";

const github = "https://github.com/devanshuguptaa";
const linkedin = "https://in.linkedin.com/in/devanshuguptaa92161729/";
const email = "devanshugupta1729@gmail.com";
const gmailCompose = "https://mail.google.com/mail/?view=cm&fs=1&to=devanshugupta1729%40gmail.com";

const projects = [
  {
    number: "01",
    name: "Converge AI",
    category: "AI PRODUCT · MCP · RAG",
    year: "2026",
    headline: "A Slack assistant connected to the tools people already use.",
    description: "Built a Slack-based assistant that handles Gmail and Calendar actions, searches indexed workspace history, and retains useful context between sessions.",
    proof: ["21 integrated tools", "Slack · Gmail · Calendar", "RAG + long-term memory"],
    stack: ["Python", "FastAPI", "Gemini", "MCP", "ChromaDB", "Mem0"],
    repo: github + "/Converge-AI",
    icon: Workflow,
    detail: "The service receives Slack events through Socket Mode and uses FastAPI to coordinate the request. Gemini interprets intent, while MCP keeps tool definitions separate from their execution. ChromaDB retrieves relevant Slack history and Mem0 stores longer-term user context. Connected actions include reading, drafting and sending email, and listing or creating calendar events."
  },
  {
    number: "02",
    name: "Angel — Realtime Voice",
    category: "VOICE AI · FULL STACK",
    year: "2026",
    headline: "One voice interface with two realtime model providers.",
    description: "Developed a mobile-first voice application with a Next.js frontend and FastAPI backend. Provider selection keeps the application interface consistent while the realtime transport changes.",
    proof: ["OpenAI Realtime + Gemini Live", "WebRTC + WebSocket", "Server-side API keys"],
    stack: ["Next.js", "TypeScript", "FastAPI", "WebRTC", "WebSocket"],
    repo: github + "/real-time-voice",
    icon: Mic2,
    detail: "The application supports OpenAI Realtime through WebRTC and Gemini Live through WebSockets. Provider configuration is handled on the server, and permanent API keys stay out of the browser. The repository includes separate frontend and backend setup and deployment instructions."
  },
  {
    number: "03",
    name: "Document Intelligence",
    category: "GENAI · DOCUMENT AUTOMATION",
    year: "2025–26",
    headline: "Extraction, validation and evaluation in one document workflow.",
    description: "At BluCursor, implemented document extraction and classification with LangGraph and LangChain. Added JSON Logic validation and dynamic preprocessing to reduce manual review and improve throughput.",
    proof: ["97% reported accuracy", "40% less manual effort", "30% higher throughput", "25% lower hallucination rate"],
    stack: ["Python", "LangGraph", "LangChain", "JSON Logic", "LLM Evaluation"],
    repo: "",
    icon: Layers3,
    detail: "Work covered extraction and classification orchestration, preprocessing for varied client datasets, and JSON Logic checks to validate structured outputs. Dynamic logic gates increased data throughput. A separate Python evaluation pipeline measured generated outputs against client requirements and reduced hallucination rates. The outcome figures shown are the results recorded in the resume."
  },
  {
    number: "04",
    name: "Ransomware Detection",
    category: "MACHINE LEARNING · EXPLAINABILITY",
    year: "2025",
    headline: "A model workflow that exposes the reasoning behind predictions.",
    description: "Built a Streamlit application for ransomware detection from static file features, combining class-imbalance handling, feature analysis, Random Forest classification and local explanations.",
    proof: ["Random Forest", "SMOTE-Tomek", "LIME explanations"],
    stack: ["Python", "Scikit-learn", "Streamlit", "LIME", "Pandas"],
    repo: github + "/ransomware-detection",
    icon: ShieldCheck,
    detail: "The application includes dataset and label-distribution exploration, correlation analysis, Information Value / Weight of Evidence feature analysis, Random Forest training and evaluation, SMOTE-Tomek resampling, and LIME explanations for individual predictions. No unsupported accuracy figure is presented."
  },
  {
    number: "05",
    name: "Email MCP Agent",
    category: "AGENT SYSTEMS · INTEGRATIONS",
    year: "2024–25",
    headline: "An API service for email and calendar workflows.",
    description: "Built a FastAPI service that uses Gemini to interpret requests and invoke Gmail or Google Calendar operations, with conversation context stored per session.",
    proof: ["OAuth-secured Google APIs", "Email + Calendar actions", "Session-scoped memory"],
    stack: ["Python", "FastAPI", "Gemini", "MCP", "SQLite"],
    repo: github + "/Email-MCP-Agent",
    icon: BrainCircuit,
    detail: "The service supports email listing, message details, search, draft creation and sending, alongside calendar-event listing and creation. LangGraph structures the agent flow and SQLite stores session context. The repository documents that the upstream application is responsible for user authentication."
  },
  {
    number: "06",
    name: "Collaborative Comment System",
    category: "FULL STACK · REALTIME",
    year: "2025",
    headline: "Comments and presence updates shared across clients.",
    description: "Built a full-stack commenting application with session-based authentication, REST endpoints and Socket.IO events for live comments and typing indicators.",
    proof: ["Realtime updates", "PostgreSQL + Redis", "Session-based authentication"],
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Redis", "Socket.IO"],
    repo: github + "/collaborative-comment-system",
    icon: Terminal,
    detail: "The repository documents a Next.js and TypeScript frontend with an Express backend, PostgreSQL persistence, Redis-backed session and cache support, and Socket.IO events. Core flows include registration, login, comment creation and retrieval, live comment updates, and typing status."
  }
];

const experience = [
  {
    date: "MAY — OCT 2026",
    role: "Software Developer Engineer",
    company: "Data Annotation",
    location: "REMOTE · INDIA",
    copy: "Created coding tasks and adversarial edge cases to test how language models handle practical software-engineering work. Reviewed generated solutions for correctness, reasoning and instruction adherence, then documented reproducible defects and failure patterns."
  },
  {
    date: "DEC 2025 — MAY 2026",
    role: "Gen AI Developer",
    company: "BluCursor Infotech Pvt. Ltd.",
    location: "INDORE, MADHYA PRADESH, INDIA · ON-SITE",
    copy: "Implemented document extraction and classification workflows with LangGraph and LangChain. Added JSON Logic validation and dynamic preprocessing; recorded outcomes included 97% accuracy, 40% less manual effort and 30% higher throughput. Also developed a Python evaluation pipeline that reduced hallucination rates by 25%."
  },
  {
    date: "DEC 2024 — SEP 2025",
    role: "Founding Engineer",
    company: "Advanced Intelligence Ventures",
    location: "ORLANDO, FLORIDA, USA · REMOTE",
    copy: "Developed an MCP-based email agent using OAuth-secured Gmail APIs and LLM-driven intent reasoning. Implemented tool-calling flows for email triage and responses, and designed a modular service that could extend to calendar and document workflows."
  }
];

const toolkit = [
  {
    number: "01",
    title: "Mathematical foundations",
    description: "Quantitative foundations used in data science and machine learning.",
    topics: ["Linear Algebra", "Calculus", "Probability", "Statistics"]
  },
  {
    number: "02",
    title: "Machine learning algorithms",
    description: "Common supervised, unsupervised and dimensionality-reduction methods.",
    topics: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "Support Vector Machines", "K-Nearest Neighbors", "Naive Bayes", "Gradient Boosting", "XGBoost", "K-Means", "DBSCAN", "PCA"]
  },
  {
    number: "03",
    title: "Optimization methods",
    description: "Algorithms used to update model parameters and minimize objective functions.",
    topics: ["Gradient Descent", "Stochastic Gradient Descent", "Mini-batch GD", "Momentum", "RMSProp", "Adam"]
  },
  {
    number: "04",
    title: "MLOps & production ML",
    description: "Self-directed learning in experiment tracking, versioning, deployment and model monitoring.",
    topics: ["Git & GitHub", "DVC", "AWS S3", "MLflow", "CI/CD", "Docker", "FastAPI", "Kubernetes", "Prometheus", "Grafana", "AWS EKS", "DagsHub"],
    source: true
  }
];

export default function Home() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <nav className="wrap nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Devanshu Gupta home">DG<span>.</span></a>
          <div className={"links " + (menuOpen ? "open" : "")}>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
            <a href="#toolkit" onClick={() => setMenuOpen(false)}>Toolkit</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </div>
          <a className="nav-cta" href={gmailCompose} target="_blank" rel="noopener noreferrer">Contact <ArrowUpRight size={14}/></a>
          <button className="mobile-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={19}/> : <Menu size={19}/>}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="hero-meta">
              <div className="eyebrow"><span className="dot"/> SOFTWARE ENGINEER · APPLIED AI · MACHINE LEARNING</div>
              <div className="hero-location"><MapPin size={12}/> INDORE, INDIA</div>
            </div>
            <div className="hero-grid">
              <div className="hero-copy">
                <div className="mono kicker">AI systems · backend engineering · product development</div>
                <h1>Engineering<br/>useful AI and<br/><em>reliable software.</em></h1>
                <p className="lead">I’m a software engineer working across applied AI, machine learning and backend development. My work includes document-processing pipelines, LLM evaluation workflows, MCP integrations and realtime applications — with a focus on building the system behind the feature.</p>
                <div className="hero-actions">
                  <a className="button" href="#work">Selected work <ArrowDown size={14}/></a>
                  <a className="button secondary" href={github} target="_blank" rel="noreferrer">GitHub <Github size={14}/></a>
                </div>
                <div className="hero-links">
                  <a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={13}/> LinkedIn <ArrowUpRight size={12}/></a>
                  <a href={github} target="_blank" rel="noreferrer"><Github size={13}/> GitHub <ArrowUpRight size={12}/></a>
                  <a href={gmailCompose} target="_blank" rel="noopener noreferrer"><Mail size={13}/> Email</a>
                </div>
              </div>
              <div className="hero-art" aria-label="Abstract system diagram showing data, tools, context and output">
                <div className="art-label art-label-top">FIG. 01 — SYSTEMS IN MOTION</div>
                <svg className="systems-art" viewBox="0 0 520 470" role="img" aria-hidden="true">
                  <defs>
                    <radialGradient id="core" cx="35%" cy="30%">
                      <stop offset="0%" stopColor="#e4e7cc"/>
                      <stop offset="100%" stopColor="#839071"/>
                    </radialGradient>
                  </defs>
                  <circle cx="260" cy="235" r="74" fill="none" stroke="#9ca68d" strokeOpacity=".42"/>
                  <circle cx="260" cy="235" r="132" fill="none" stroke="#c2c9aa" strokeOpacity=".36" strokeDasharray="3 8"/>
                  <circle cx="260" cy="235" r="190" fill="none" stroke="#c2c9aa" strokeOpacity=".25" strokeDasharray="2 9"/>
                  <circle cx="260" cy="235" r="43" fill="url(#core)"/>
                  <circle cx="260" cy="235" r="7" fill="#f0f0dc"/>
                  <path d="M260 43V192M260 278V427M68 235H217M303 235H452" stroke="#bcc6a5" strokeOpacity=".24" strokeDasharray="3 8"/>
                  <circle cx="125" cy="119" r="4" fill="#d7dfbf"/><circle cx="391" cy="126" r="4" fill="#d7dfbf"/>
                  <circle cx="116" cy="337" r="4" fill="#d7dfbf"/><circle cx="405" cy="340" r="4" fill="#d7dfbf"/>
                  <circle cx="260" cy="43" r="3" fill="#d7dfbf"/><circle cx="260" cy="427" r="3" fill="#d7dfbf"/>
                  <text x="90" y="103" fill="#a6b096" fontSize="10" letterSpacing="2">INPUT</text>
                  <text x="402" y="111" fill="#a6b096" fontSize="10" letterSpacing="2">TOOLS</text>
                  <text x="78" y="361" fill="#a6b096" fontSize="10" letterSpacing="2">DATA</text>
                  <text x="407" y="365" fill="#a6b096" fontSize="10" letterSpacing="2">OUTPUT</text>
                  <text x="260" y="22" fill="#a6b096" fontSize="9" textAnchor="middle" letterSpacing="2">CONTEXT</text>
                  <text x="260" y="453" fill="#a6b096" fontSize="9" textAnchor="middle" letterSpacing="2">SYSTEM</text>
                </svg>
                <div className="art-label art-label-bottom"><span>01 / 06</span><span>THOUGHT → SYSTEM → OUTCOME</span></div>
              </div>
            </div>
            <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>PORTFOLIO / 2026</span></div>
          </div>
        </section>

        <div className="signal-strip">
          <div className="signal-inner">
            <span>BUILT AROUND REAL PROBLEMS</span><b>AI SYSTEMS</b><i/> <b>BACKEND ENGINEERING</b><i/> <b>MACHINE LEARNING</b><i/> <b>RELIABLE EXECUTION</b>
          </div>
        </div>

        <section className="section work-section" id="work">
          <div className="wrap">
            <div className="section-head">
              <div><div className="mono section-kicker">01 — Selected work</div><h2>Projects with<br/>a clear purpose.</h2></div>
              <p className="section-intro">A selection of AI, machine-learning and software projects. Each entry describes the problem, implementation and verifiable source where available.</p>
            </div>
            <div className="projects">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className="project-card" key={project.number}>
                    <div className="project-top">
                      <span className="project-index">/{project.number}</span>
                      <span className="project-category">{project.category}</span>
                      <span className="project-year">{project.year}</span>
                    </div>
                    <div className="project-visual">
                      <div className="visual-orbit"/><div className="visual-orbit orbit-two"/>
                      <div className="visual-core"><Icon size={31} strokeWidth={1.35}/></div>
                      <span className="visual-caption">PROJECT / {project.number}</span>
                      <span className="visual-node node-a"/><span className="visual-node node-b"/><span className="visual-node node-c"/>
                    </div>
                    <div className="project-content">
                      <h3>{project.name}</h3>
                      <h4>{project.headline}</h4>
                      <p>{project.description}</p>
                      <div className="proof-row">{project.proof.map((item) => <span key={item}>{item}</span>)}</div>
                      <div className="project-bottom">
                        <div className="tag-row">{project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
                        <button className="text-link" onClick={() => setSelected(project)}>Project details <ArrowUpRight size={14}/></button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="wrap">
            <div className="section-head">
              <div><div className="mono section-kicker">02 — Experience</div><h2>Teams and<br/>responsibilities.</h2></div>
              <p className="section-intro">Roles spanning model evaluation, document automation and founding-stage product engineering. Locations and working arrangements are shown alongside each team.</p>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={item.company}>
                  <div className="exp-date">{item.date}</div>
                  <div className="exp-main">
                    <div><div className="exp-role">{item.role}</div><div className="exp-company">{item.company}</div></div>
                    <div className="exp-location"><MapPin size={13}/><span>{item.location}</span></div>
                    <p className="exp-copy">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="capabilities">
          <div className="wrap">
            <div className="section-head">
              <div><div className="mono section-kicker">03 — Capabilities</div><h2>Work across<br/>the stack.</h2></div>
              <p className="section-intro">My experience connects model capabilities to software delivery: retrieval and orchestration, service design, integrations, evaluation and user-facing applications.</p>
            </div>
            <div className="cap-grid">
              <article className="cap"><div className="cap-num">CAPABILITY / 01</div><h3>Applied AI &amp; LLM systems</h3><p>RAG pipelines, semantic retrieval, tool calling, MCP integrations and evaluation workflows for applications that need more than a chat interface.</p></article>
              <article className="cap"><div className="cap-num">CAPABILITY / 02</div><h3>Backend &amp; integration engineering</h3><p>Python, FastAPI, API design, OAuth integrations, data processing and service boundaries that keep application logic maintainable.</p></article>
              <article className="cap"><div className="cap-num">CAPABILITY / 03</div><h3>Machine learning &amp; product delivery</h3><p>Classical ML, model evaluation and explainability, paired with React, Next.js and TypeScript interfaces.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="toolkit">
          <div className="wrap">
            <div className="section-head">
              <div><div className="mono section-kicker">04 — Engineering toolkit</div><h2>Maths, models<br/>and operations.</h2></div>
              <p className="section-intro">Quantitative foundations, commonly used machine-learning algorithms and optimization methods, alongside MLOps topics studied through a structured course.</p>
            </div>
            <div className="toolkit-grid">
              {toolkit.map((group) => (
                <article className="tool-card" key={group.number}>
                  <div className="tool-card-head"><span className="tool-number">/{group.number}</span><div><h3>{group.title}</h3><p>{group.description}</p></div></div>
                  <div className="chips">{group.topics.map((topic) => <span className="chip" key={topic}>{topic}</span>)}</div>
                  {group.source && <a className="source-link" href="https://www.youtube.com/playlist?list=PLupK5DK91flV45dkPXyGViMLtHadRr6sp" target="_blank" rel="noreferrer">MLOps learning playlist <ExternalLink size={13}/></a>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <div className="section-head">
              <div><div className="mono section-kicker">05 — Education</div><h2>Computer science<br/>and data science.</h2></div>
              <p className="section-intro">B.Tech in Computer Science with a Data Science major, covering software engineering, analytical methods and mathematical foundations.</p>
            </div>
            <div className="education">
              <div><h3>Acropolis Institute of Technology and Research</h3><p>B.Tech · Computer Science — Data Science · Indore, India</p><p>November 2021 — May 2025</p></div>
              <strong>CGPA · 7.64 / 10</strong>
            </div>
            <p className="achievement">Global Rank <strong>734 / 27,681</strong> · CodeChef START157</p>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="wrap contact-grid">
            <div><div className="mono section-kicker">06 — Contact</div><h2>Let’s discuss<br/>what needs building.</h2><p>I’m interested in engineering teams working on practical AI products, machine learning systems and software where strong implementation matters.</p></div>
            <div className="contact-actions">
              <a className="button" href={gmailCompose} target="_blank" rel="noopener noreferrer">Email <Mail size={14}/></a>
              <a className="button secondary" href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Linkedin size={14}/></a>
              <a className="button secondary" href={github} target="_blank" rel="noreferrer">GitHub <Github size={14}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap"><span>© {new Date().getFullYear()} DEVANSHU GUPTA</span><span>BUILT WITH INTENTION · <a href="#top">BACK TO TOP ↑</a></span></footer>

      {selected && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" aria-label="Close project details" onClick={() => setSelected(null)}><X size={19}/></button>
            <div className="mono section-kicker">PROJECT / {selected.number} · {selected.category}</div>
            <h2 id="modal-title">{selected.name}</h2>
            <p><strong>{selected.headline}</strong></p>
            <p>{selected.detail}</p>
            <div className="chips">{selected.stack.map((item) => <span className="chip" key={item}>{item}</span>)}</div>
            {selected.repo && <a className="button" href={selected.repo} target="_blank" rel="noreferrer">Inspect source code <ArrowUpRight size={14}/></a>}
          </section>
        </div>
      )}
    </>
  );
}
