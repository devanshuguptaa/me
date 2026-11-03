'use client';

import { useState } from "react";
import {
  ArrowDown, ArrowUpRight, BrainCircuit, Github, Linkedin, Mail, MapPin,
  Menu, X, Workflow, Mic2, ShieldCheck, Layers3, Terminal, ExternalLink
} from "lucide-react";

const github = "https://github.com/devanshuguptaa";
const linkedin = "https://www.linkedin.com/in/devanshuguptaa92161729";
const email = "devanshugupta1729@gmail.com";

const projects = [
  {
    n: "01", title: "Converge AI", type: "AI PRODUCT · MCP · RAG", year: "2026",
    hook: "A useful assistant should understand the work around the conversation.",
    description: "A Slack-native assistant connecting conversations to Gmail and Google Calendar, with retrieval and memory to carry context forward.",
    proof: ["21 connected tools", "Slack · Gmail · Calendar", "RAG + persistent memory"],
    stack: ["Python", "FastAPI", "Gemini", "MCP", "ChromaDB", "Mem0"],
    repo: github + "/Converge-AI", icon: Workflow,
    detail: "Combines Slack event handling, tool execution, semantic retrieval and long-term user context. The repository documents scoped tool access, Gmail and Calendar actions, ChromaDB retrieval and Mem0-backed memory."
  },
  {
    n: "02", title: "Angel — Realtime Voice", type: "VOICE AI · FULL STACK", year: "2026",
    hook: "Keep the product stable while the model provider changes.",
    description: "A mobile-first voice AI application designed around a unified interface for realtime conversations with switchable model providers.",
    proof: ["Two provider paths", "WebRTC + WebSocket", "Server-side API keys"],
    stack: ["Next.js", "TypeScript", "FastAPI", "OpenAI Realtime", "Gemini Live"],
    repo: github + "/real-time-voice", icon: Mic2,
    detail: "Separates provider-specific realtime connections behind a shared application interface. Permanent API keys remain on the backend; the repository documents frontend/backend setup and deployment."
  },
  {
    n: "03", title: "Document Intelligence", type: "GENAI · DOCUMENT SYSTEMS", year: "2025–26",
    hook: "Extraction is only useful when the result can be trusted.",
    description: "At BluCursor, worked on document extraction and classification workflows with validation and evaluation built into the pipeline.",
    proof: ["97% reported accuracy", "40% less manual effort", "25% lower hallucination rate"],
    stack: ["Python", "LangGraph", "LangChain", "JSON Logic", "LLM Evaluation"],
    repo: "", icon: Layers3,
    detail: "Combined automated extraction and classification with JSON Logic validation, alongside a Python evaluation pipeline. Metrics are reported from the resume; detailed baseline and measurement methodology can be shared when available."
  },
  {
    n: "04", title: "Ransomware Detection", type: "MACHINE LEARNING · EXPLAINABILITY", year: "2025",
    hook: "A prediction is stronger when a person can inspect the reason.",
    description: "A static-feature ML workflow for ransomware detection, with imbalance handling, feature analysis and local explanations.",
    proof: ["Random Forest", "SMOTE-Tomek", "LIME explanations"],
    stack: ["Python", "Scikit-learn", "Streamlit", "LIME", "Pandas"],
    repo: github + "/ransomware-detection", icon: ShieldCheck,
    detail: "The repository describes dataset exploration, class-distribution analysis, IV/WoE feature analysis, correlation review, Random Forest evaluation and LIME explanations for individual predictions."
  },
  {
    n: "05", title: "Email MCP Agent", type: "AGENT SYSTEMS · INTEGRATIONS", year: "2024–25",
    hook: "Turn natural-language intent into controlled business actions.",
    description: "A FastAPI microservice connecting Gemini-driven intent understanding to Gmail and Calendar workflows, with per-user conversation memory.",
    proof: ["OAuth-based Google APIs", "Email + Calendar actions", "Session-scoped memory"],
    stack: ["Python", "FastAPI", "Gemini", "MCP", "SQLite"],
    repo: github + "/Email-MCP-Agent", icon: BrainCircuit,
    detail: "Documents email listing, reading, search, drafting and sending; Calendar event listing and creation; and SQLite-backed conversational context. Its README notes that an upstream caller is expected to handle authentication."
  },
  {
    n: "06", title: "Collaborative Comment System", type: "FULL STACK · REALTIME", year: "2025",
    hook: "A small collaboration feature is a distributed system in miniature.",
    description: "A realtime commenting application with session-based authentication, REST APIs, Socket.IO updates and typing indicators.",
    proof: ["Realtime updates", "PostgreSQL + Redis", "Session-based auth"],
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Redis"],
    repo: github + "/collaborative-comment-system", icon: Terminal,
    detail: "The repository describes a separated frontend/backend architecture, registration and login flows, comment CRUD, cached comment reads, websocket events and live typing indicators."
  }
];

const experience = [
  {
    date: "MAY — OCT 2026", role: "Software Developer Engineer", company: "Data Annotation",
    location: "REMOTE · INDIA",
    copy: "Designed coding tasks and edge cases to evaluate LLM performance on practical software-development problems. Investigated model failures and documented reproducible bugs, reasoning gaps and instruction-following issues."
  },
  {
    date: "DEC 2025 — MAY 2026", role: "Gen AI Developer", company: "BluCursor Infotech Pvt. Ltd.",
    location: "INDORE, MADHYA PRADESH, INDIA · ON-SITE",
    copy: "Built document extraction and classification workflows, added rule-based validation and developed an LLM evaluation pipeline to improve reliability across client requirements."
  },
  {
    date: "DEC 2024 — SEP 2025", role: "Founding Engineer", company: "Advanced Intelligence Ventures",
    location: "ORLANDO, FLORIDA, USA · REMOTE",
    copy: "Built an MCP-based email agent using OAuth-secured Gmail APIs and LLM-driven intent reasoning. Designed modular tools for email and calendar workflows in a multi-agent architecture."
  }
];

const toolkit = [
  { title: "Mathematical foundations", sub: "The quantitative building blocks behind ML.", tags: ["Linear Algebra", "Calculus", "Probability", "Statistics"] },
  { title: "Machine learning algorithms", sub: "Core supervised and unsupervised methods.", tags: ["Linear Regression", "Logistic Regression", "Decision Trees", "Random Forest", "SVM", "KNN", "Naive Bayes", "Gradient Boosting", "XGBoost", "K-Means", "DBSCAN", "PCA"] },
  { title: "Optimization methods", sub: "Methods used to minimize loss and update parameters.", tags: ["Gradient Descent", "SGD", "Mini-batch GD", "Momentum", "RMSProp", "Adam"] },
  { title: "MLOps & production ML", sub: "Self-directed learning in reproducibility, deployment and monitoring.", tags: ["Git & GitHub", "DVC", "AWS S3", "MLflow", "CI/CD", "Docker", "FastAPI", "Kubernetes", "Prometheus", "Grafana", "AWS EKS", "DagsHub"], source: true }
];

export default function Home() {
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <nav className="wrap nav">
          <a className="brand" href="#top">DG<span>.</span></a>
          <div className={`links ${menuOpen ? "open" : ""}`}>
            <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
            <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
            <a href="#toolkit" onClick={() => setMenuOpen(false)}>Toolkit</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </div>
          <a className="nav-cta" href={`mailto:${email}`}>Let’s talk <ArrowUpRight size={14}/></a>
          <button className="mobile-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap">
            <div className="hero-grid">
              <div>
                <div className="eyebrow"><span className="dot"/> SOFTWARE ENGINEER · APPLIED AI · MACHINE LEARNING</div>
                <h1>I build systems<br/>that make work<br/><em>move forward.</em></h1>
                <p className="lead">I work across applied AI, machine learning and backend engineering — turning complex workflows into useful, dependable software.</p>
                <div className="hero-actions">
                  <a className="button" href="#work">Explore selected work <ArrowDown size={15}/></a>
                  <a className="button secondary" href={github} target="_blank" rel="noreferrer">GitHub <Github size={15}/></a>
                </div>
              </div>
              <aside className="hero-note">
                <strong>Currently open to opportunities</strong>
                Looking for engineering roles where I can build practical AI products, reliable services and systems that solve real problems.
                <br/><br/><span className="pill-note"><MapPin size={12}/> Indore, India · Remote-ready</span>
              </aside>
            </div>
            <div className="signal-row">
              <span className="signal"><b>01 /</b> AI & LLM systems</span>
              <span className="signal"><b>02 /</b> Machine learning</span>
              <span className="signal"><b>03 /</b> Backend engineering</span>
              <span className="signal"><b>04 /</b> Product execution</span>
            </div>
          </div>
        </section>

        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head">
              <div><div className="mono section-kicker">01 — Selected work</div><h2>Built to solve<br/>specific problems.</h2></div>
              <p className="section-intro">A closer look at the systems, decisions and engineering behind the work. Open a project to explore its approach and implementation.</p>
            </div>
            <div className="projects">
              {projects.map((p) => {
                const Icon = p.icon;
                return (
                  <article className="project-card" key={p.n}>
                    <div className="project-top"><span className="project-index">/{p.n}</span><span className="project-category">{p.type}</span><span className="project-year">{p.year}</span></div>
                    <div className="project-visual">
                      <div className="visual-orbit"/><div className="visual-orbit orbit-two"/>
                      <div className="visual-core"><Icon size={34} strokeWidth={1.4}/></div>
                      <span className="visual-caption">SYSTEM / {p.n}</span><span className="visual-node node-a"/><span className="visual-node node-b"/><span className="visual-node node-c"/>
                    </div>
                    <div className="project-content">
                      <h3>{p.title}</h3><h4>{p.hook}</h4><p>{p.description}</p>
                      <div className="proof-row">{p.proof.map((item) => <span key={item}>{item}</span>)}</div>
                      <div className="project-bottom">
                        <div className="tag-row">{p.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div>
                        <button className="text-link" onClick={() => setSelected(p)}>Explore project <ArrowUpRight size={15}/></button>
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
              <div><div className="mono section-kicker">02 — Experience</div><h2>Where I’ve<br/>done the work.</h2></div>
              <p className="section-intro">Experience across AI product development, evaluation and early-stage engineering — with distributed teams and on-site collaboration.</p>
            </div>
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={item.company}>
                  <div className="exp-date">{item.date}</div>
                  <div className="exp-main">
                    <div><div className="exp-role">{item.role}</div><div className="exp-company">{item.company}</div></div>
                    <div className="exp-location">{item.location}</div>
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
              <div><div className="mono section-kicker">03 — Capabilities</div><h2>From model logic<br/>to working product.</h2></div>
              <p className="section-intro">I enjoy working across boundaries — understanding the problem, choosing a practical approach and taking it through implementation.</p>
            </div>
            <div className="cap-grid">
              <article className="cap"><div className="cap-num">CAPABILITY / 01</div><h3>AI systems that do work</h3><p>RAG, tool calling, MCP integrations, agent workflows and evaluation — designed around the job the system needs to finish.</p></article>
              <article className="cap"><div className="cap-num">CAPABILITY / 02</div><h3>Backend-first engineering</h3><p>Python, FastAPI, API design, integrations, data flow and the operational details that make a feature dependable.</p></article>
              <article className="cap"><div className="cap-num">CAPABILITY / 03</div><h3>Interfaces that close the loop</h3><p>Next.js, TypeScript and React — turning complex backend capabilities into usable product experiences.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="toolkit">
          <div className="wrap">
            <div className="section-head">
              <div><div className="mono section-kicker">04 — Engineering toolkit</div><h2>Fundamentals, models<br/>and production.</h2></div>
              <p className="section-intro">A foundation in the mathematics and algorithms behind ML, alongside tools used to build and operate software systems.</p>
            </div>
            <div className="toolkit-grid">
              {toolkit.map((group, i) => (
                <article className="tool-card" key={group.title}>
                  <div className="tool-card-head"><span className="tool-number">/0{i + 1}</span><div><h3>{group.title}</h3><p>{group.sub}</p></div></div>
                  <div className="chips">{group.tags.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</div>
                  {group.source && <a className="source-link" href="https://www.youtube.com/playlist?list=PLupK5DK91flV45dkPXyGViMLtHadRr6sp" target="_blank" rel="noreferrer">Learning source: MLOps course playlist <ExternalLink size={13}/></a>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <div className="section-head">
              <div><div className="mono section-kicker">05 — Education</div><h2>Grounded in<br/>computer science.</h2></div>
              <p className="section-intro">Computer Science with a Data Science major — a mix of software engineering, analytical thinking and mathematical foundations.</p>
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
            <div><div className="mono section-kicker">06 — Start a conversation</div><h2>Have a real problem<br/>worth building for?</h2><p>I’m interested in teams that value clear thinking, strong engineering fundamentals and people who take ownership from idea to execution.</p></div>
            <div className="contact-actions">
              <a className="button" href={`mailto:${email}`}>Email me <Mail size={15}/></a>
              <a className="button secondary" href={linkedin} target="_blank" rel="noreferrer">LinkedIn <Linkedin size={15}/></a>
              <a className="button secondary" href={github} target="_blank" rel="noreferrer">GitHub <Github size={15}/></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer wrap"><span>© {new Date().getFullYear()} DEVANSHU GUPTA</span><span>BUILT WITH INTENTION · <a href="#top">BACK TO TOP ↑</a></span></footer>

      {selected && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelected(null)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close project details" onClick={() => setSelected(null)}><X/></button>
            <div className="mono section-kicker">PROJECT / {selected.n} · {selected.type}</div>
            <h2 id="modal-title">{selected.title}</h2><p>{selected.hook}</p><p>{selected.detail}</p>
            <div className="chips">{selected.stack.map((item) => <span className="chip" key={item}>{item}</span>)}</div>
            {selected.repo && <a className="button" href={selected.repo} target="_blank" rel="noreferrer">View source repository <ArrowUpRight size={15}/></a>}
          </section>
        </div>
      )}
    </>
  );
}
