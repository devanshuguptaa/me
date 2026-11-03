'use client';

import { useEffect, useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, X
} from "lucide-react";

const github = "https://github.com/devanshuguptaa";
const linkedin = "https://www.linkedin.com/in/devanshuguptaa92161729/";
const email = "devanshugupta1729@gmail.com";
const gmailCompose = "https://mail.google.com/mail/?view=cm&fs=1&to=devanshugupta1729%40gmail.com";

const projects = [
  {
    number: "01",
    name: "Converge AI",
    category: "AI PRODUCT · MCP · RAG",
    year: "2026",
    headline: "Bringing Slack, Gmail and Calendar actions into one assistant.",
    description: "Built the Slack integration and backend orchestration for an assistant that searches workspace history and carries out Gmail and Calendar actions.",
    proof: ["21 integrated tools", "Slack · Gmail · Calendar", "RAG + long-term memory"],
    stack: ["Python", "FastAPI", "Gemini", "MCP", "ChromaDB", "Mem0"],
    repo: github + "/Converge-AI",
    detail: "Slack events enter through Socket Mode and are coordinated by FastAPI. Gemini classifies intent; MCP separates tool definitions from execution. ChromaDB retrieves relevant workspace history, while Mem0 stores longer-term context. The connected tools cover Gmail reading, drafting and sending, plus Google Calendar lookup and event creation."
  },
  {
    number: "02",
    name: "Angel — Realtime Voice",
    category: "VOICE AI · FULL STACK",
    year: "2026",
    headline: "Two realtime speech providers behind one interface.",
    description: "Built a mobile-first Next.js interface and FastAPI service with separate connection paths for OpenAI Realtime and Gemini Live.",
    proof: ["OpenAI Realtime + Gemini Live", "WebRTC + WebSocket", "Server-side API keys"],
    stack: ["Next.js", "TypeScript", "FastAPI", "WebRTC", "WebSocket"],
    repo: github + "/real-time-voice",
    detail: "OpenAI Realtime connects through WebRTC; Gemini Live connects through WebSockets. Provider configuration is handled by the backend, keeping permanent API keys out of the browser. The frontend presents one voice interface while the service manages provider-specific connections."
  },
  {
    number: "03",
    name: "LeaseGuard AI",
    category: "DOCUMENT AUTOMATION · PRODUCTION",
    year: "2025–26",
    headline: "Checking whether a residency application is complete—not just extracting its text.",
    description: "Worked on a production document-processing platform for US tenant residency applications. It handled 50–150-page application bundles, identified each form, extracted structured fields and checked whether state- and applicant-specific supporting documents were present and valid.",
    proof: ["50–150 page application bundles", "State-specific rule validation", "Asynchronous processing with SQS", "Human review for exceptions"],
    stack: ["Python", "Google Vertex AI", "Pydantic", "Tesseract OCR", "AWS Textract", "JSON Logic", "Amazon S3", "Amazon SQS", "LangChain", "LangGraph", "REST APIs"],
    repo: "",
    pipeline: "PDF submission → Amazon S3 storage with a UUID → paginated OCR using Tesseract or AWS Textract → Vertex AI document classification → form-specific Pydantic extraction → Python preprocessing and normalization → JSON Logic and prompt-based validation → SQS-backed stage hand-offs → database and REST API results → leasing-agent review.",
    challenge: "A single PDF could contain several different forms, financial records, court orders, scanned pages, tables and handwritten content. The required evidence also changed with the applicant’s state, income and marital status. The difficult part was connecting those facts to the correct document requirements, while treating documents with expiry rules differently from permanent records such as birth certificates and court orders.",
    evaluation: "We used a separate LLM validation pass as an additional check, not as ground truth. Extraction quality was measured against manually verified data using precision, recall and percentage accuracy. A cost calculator tracked classification, extraction, preprocessing, rule processing and the separate validation call.",
    detail: "OCR handled scanned and image-based pages. Vertex AI classified forms using form-specific descriptions, and each form type had its own Pydantic extraction schema. Python preprocessing normalized extracted values before multiple JSON Logic configurations evaluated conditional requirements. Failed rules, low-confidence extraction, blurry documents and notarized records requiring human verification were surfaced in the admin panel. SQS connected the classification, extraction, preprocessing and validation stages asynchronously, with intermediate JSON results available through the database and APIs. The application exposed missing documents and failed requirements so leasing agents did not have to manually inspect every page."
  },
  {
    number: "04",
    name: "Ransomware Detection",
    category: "MACHINE LEARNING · EXPLAINABILITY",
    year: "2025",
    headline: "Inspecting ransomware predictions from static file features.",
    description: "Built a Streamlit classifier using static file features, with class-balancing methods and feature explanations to make individual predictions easier to inspect.",
    proof: ["Random Forest", "SMOTE-Tomek", "LIME explanations"],
    stack: ["Python", "Scikit-learn", "Streamlit", "LIME", "Pandas"],
    repo: github + "/ransomware-detection",
    detail: "The workflow covers dataset and label-distribution exploration, correlation analysis, Information Value and Weight of Evidence feature analysis, Random Forest training and evaluation, SMOTE-Tomek resampling, and LIME explanations for individual predictions. I have not added an accuracy figure because I do not have a verified result to publish."
  },
  {
    number: "05",
    name: "Email MCP Agent",
    category: "AGENT SYSTEMS · INTEGRATIONS",
    year: "2024–25",
    headline: "Turning requests into authenticated Gmail and Calendar actions.",
    description: "Built an OAuth-secured email and calendar agent with FastAPI, Gemini and session-scoped conversation context.",
    proof: ["OAuth-secured Google APIs", "Email + Calendar actions", "Session-scoped memory"],
    stack: ["Python", "FastAPI", "Gemini", "MCP", "SQLite"],
    repo: github + "/Email-MCP-Agent",
    detail: "Gemini interprets requests and LangGraph coordinates the tool flow. OAuth-secured Gmail operations include reading message details, creating drafts and sending messages; Calendar tools list upcoming events and create new ones. SQLite stores context by session. The service keeps Google API access behind authenticated integrations."
  },
  {
    number: "06",
    name: "Collaborative Comment System",
    category: "FULL STACK · REALTIME",
    year: "2025",
    headline: "Keeping comments and typing status in sync across users.",
    description: "Built session-authenticated comments with PostgreSQL persistence and Socket.IO events for live updates and typing status.",
    proof: ["Realtime updates", "PostgreSQL + Redis", "Session-based authentication"],
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Redis", "Socket.IO"],
    repo: github + "/collaborative-comment-system",
    detail: "The application uses a Next.js and TypeScript frontend with an Express backend, PostgreSQL persistence, Redis-backed session and cache support, and Socket.IO events. Core flows include registration, login, comment creation and retrieval, live comment updates, and typing status."
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
    copy: "Implemented document classification and extraction workflows with LangGraph and LangChain. Added dynamic preprocessing, JSON Logic validation and a Python evaluation pipeline, with uncertain outputs routed for review."
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
    description: "The mathematical ideas behind common data-science and machine-learning methods.",
    topics: ["Vectors and matrices", "Matrix operations", "Linear transformations", "Eigenvalues and eigenvectors", "Limits and derivatives", "Partial derivatives", "Chain rule", "Gradients", "Conditional probability", "Bayes’ theorem", "Random variables", "Probability distributions", "Expectation and variance", "Sampling", "Hypothesis testing", "Confidence intervals", "Correlation", "Regression"]
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
    title: "MLOps foundations",
    description: "Tools and practices studied for versioning, experiment tracking, packaging, deployment and model monitoring.",
    topics: ["Git & GitHub", "DVC", "AWS S3", "MLflow", "CI/CD", "Docker", "FastAPI", "Kubernetes", "Prometheus", "Grafana", "AWS EKS", "DagsHub"],
    source: true
  }
];

export default function Home() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!selected) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selected]);

  return (
    <>
      <header className="topbar">
        <nav className="wrap nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Devanshu Gupta home">DG<span>.</span></a>
          <div className={"links " + (menuOpen ? "open" : "")}>
            <a href="#work" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#capabilities" onClick={() => setMenuOpen(false)}>Skills</a>
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
                <div className="mono kicker">PYTHON · FASTAPI · TYPESCRIPT</div>
                <h1>I build AI<br/>and backend<br/><em>software.</em></h1>
                <p className="lead">I work mainly in Python and TypeScript, building document-processing pipelines, model-evaluation workflows and integrations for AI products. I pay attention to the parts that make them usable: reliable APIs, accurate outputs, permissions and clear failure paths.</p>
                <div className="hero-actions">
                  <a className="button" href="#work">View projects <ArrowUpRight size={14}/></a>
                  <a className="button secondary" href={github} target="_blank" rel="noreferrer">GitHub <Github size={14}/></a>
                </div>
                <div className="hero-links">
                  <a href={linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={13}/> LinkedIn <ArrowUpRight size={12}/></a>
                  <a href={github} target="_blank" rel="noreferrer"><Github size={13}/> GitHub <ArrowUpRight size={12}/></a>
                  <a href={gmailCompose} target="_blank" rel="noopener noreferrer"><Mail size={13}/> Email</a>
                </div>
              </div>
              <div className="hero-panel">
                <div className="panel-heading">WORK I’VE DONE</div>
                <div className="panel-row"><span>01</span><div><strong>Document workflows</strong><p>Classification · extraction · validation · human review</p></div></div>
                <div className="panel-row"><span>02</span><div><strong>Model evaluation</strong><p>Coding tasks · edge cases · failure analysis</p></div></div>
                <div className="panel-row"><span>03</span><div><strong>Tool integrations</strong><p>MCP · Gmail · Google Calendar</p></div></div>
                <div className="panel-row"><span>04</span><div><strong>Realtime applications</strong><p>WebRTC · WebSockets · FastAPI</p></div></div>
              </div>
            </div>
            <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span className="scroll-line"/><span>PORTFOLIO / 2026</span></div>
          </div>
        </section>

        <div className="signal-strip" aria-label="Areas of work">
          <div className="signal-inner">
            <span>FOCUS</span><b>APPLIED AI</b><i/><b>BACKEND SYSTEMS</b><i/><b>MODEL EVALUATION</b><i/><b>MACHINE LEARNING</b>
          </div>
        </div>

        <section className="section work-section" id="work">
          <div className="wrap">
            <div className="section-head">
              <div><div className="mono section-kicker">01 — Projects</div><h2>A few projects<br/>I’ve worked on.</h2></div>
              <p className="section-intro">A closer look at the applications and systems I’ve built: what each one does, the parts I worked on and the technical decisions behind it.</p>
            </div>
            <div className="projects">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-top">
                    <span className="project-index">/{project.number}</span>
                    <span className="project-category">{project.category}</span>
                    <span className="project-year">{project.year}</span>
                  </div>
                  <div className="project-content">
                    <h3>{project.name}</h3>
                    <h4>{project.headline}</h4>
                    <p>{project.description}</p>
                    <div className="proof-row">{project.proof.map((item) => <span key={item}>{item}</span>)}</div>
                    <div className="project-bottom">
                      <div className="tag-row">{project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
                      <button className="text-link" onClick={() => setSelected(project)}>Details <ArrowUpRight size={14}/></button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="wrap">
            <div className="section-head">
              <div><div className="mono section-kicker">02 — Experience</div><h2>Where I’ve<br/>worked.</h2></div>
              <p className="section-intro">My roles have covered language-model evaluation, production document workflows and early-stage product engineering. Each entry includes the location and working arrangement.</p>
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
              <div><div className="mono section-kicker">03 — Skills</div><h2>Areas I<br/>work in.</h2></div>
              <p className="section-intro">The main areas I’ve worked in are AI application development, backend services and machine-learning workflows, with frontend work where the product needs it.</p>
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
              <div><div className="mono section-kicker">04 — Technical toolkit</div><h2>Math, machine learning<br/>and tooling.</h2></div>
              <p className="section-intro">A more specific view of the mathematics, algorithms and engineering tools I have studied or used.</p>
            </div>
            <div className="toolkit-grid">
              {toolkit.map((group) => (
                <article className="tool-card" key={group.number}>
                  <div className="tool-card-head"><span className="tool-number">/{group.number}</span><div><h3>{group.title}</h3><p>{group.description}</p></div></div>
                  <div className="chips">{group.topics.map((topic) => <span className="chip" key={topic}>{topic}</span>)}</div>

                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <div className="section-head">
              <div><div className="mono section-kicker">05 — About</div><h2>Background<br/>and education.</h2></div>
              <p className="section-intro">My experience has moved between product engineering and AI-focused workflows. At BluCursor, I worked on document extraction and validation; at Data Annotation, I reviewed language-model coding outputs; and at Advanced Intelligence Ventures, I built an email agent around authenticated Google APIs. That mix has given me experience with both model-facing logic and the backend services around it.</p>
            </div>
            <div className="education">
              <div><div className="mono about-label">EDUCATION</div><h3>Acropolis Institute of Technology and Research</h3><p>B.Tech · Computer Science — Data Science · Indore, India</p><p>November 2021 — May 2025</p></div>
              <strong>CGPA · 7.64 / 10</strong>
            </div>
            <p className="achievement">CodeChef START157 · Global Rank <strong>734 / 27,681</strong></p>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="wrap contact-grid">
            <div><div className="mono section-kicker">06 — Contact</div><h2>Get in touch.</h2><p>For software engineering roles, AI product work or a technical collaboration, email is the best way to reach me. I’m also on LinkedIn and GitHub.</p></div>
            <div className="contact-actions">
              <a className="button" href={gmailCompose} target="_blank" rel="noopener noreferrer">Email <Mail size={14}/></a>
              <a className="button secondary" href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Linkedin size={14}/></a>
              <a className="button secondary" href={github} target="_blank" rel="noreferrer">GitHub <Github size={14}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap"><span>© {new Date().getFullYear()} DEVANSHU GUPTA</span><a href="#top">BACK TO TOP ↑</a></footer>

      {selected && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" aria-label="Close project details" onClick={() => setSelected(null)}><X size={19}/></button>
            <div className="mono section-kicker">PROJECT / {selected.number} · {selected.category}</div>
            <h2 id="modal-title">{selected.name}</h2>
            <p className="modal-summary"><strong>{selected.headline}</strong></p>
            <div className="modal-block"><span>OVERVIEW</span><p>{selected.description}</p></div>
            {"pipeline" in selected && <div className="modal-block"><span>PROCESSING PIPELINE</span><p>{selected.pipeline}</p></div>}
            {"challenge" in selected && <div className="modal-block"><span>ENGINEERING CHALLENGE</span><p>{selected.challenge}</p></div>}
            <div className="modal-block"><span>IMPLEMENTATION</span><p>{selected.detail}</p></div>
            {"evaluation" in selected && <div className="modal-block"><span>EVALUATION &amp; COST</span><p>{selected.evaluation}</p></div>}
            <div className="chips">{selected.stack.map((item) => <span className="chip" key={item}>{item}</span>)}</div>
            {selected.repo && <a className="button" href={selected.repo} target="_blank" rel="noreferrer">Inspect source code <ArrowUpRight size={14}/></a>}
          </section>
        </div>
      )}
    </>
  );
}
