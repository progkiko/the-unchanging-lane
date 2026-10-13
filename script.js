* {
  box-sizing: border-box;
}

:root {
  --bg: #071119;
  --bg-2: #0d1720;
  --panel: rgba(13, 23, 32, 0.82);
  --panel-hover: rgba(16, 30, 40, 0.95);
  --line: rgba(200, 225, 255, 0.14);
  --text: #ebf6ff;
  --muted: #9db4c4;
  --cyan: #5fe0ff;
  --amber: #ffbf69;
  --gold: #f6d77a;
  --shadow-cyan: rgba(95, 224, 255, 0.28);
  --shadow-amber: rgba(255, 191, 105, 0.26);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at top left, rgba(95, 224, 255, 0.14), transparent 26%),
    radial-gradient(circle at bottom right, rgba(255, 191, 105, 0.12), transparent 32%),
    linear-gradient(180deg, var(--bg), var(--bg-2));
  min-height: 100vh;
}

.background-glow {
  position: fixed;
  width: 30rem;
  height: 30rem;
  border-radius: 50%;
  filter: blur(90px);
  opacity: 0.2;
  pointer-events: none;
}

.background-glow.cyan {
  background: var(--cyan);
  top: -8rem;
  left: -8rem;
}

.background-glow.amber {
  background: var(--amber);
  right: -8rem;
  bottom: -8rem;
}

header,
main {
  position: relative;
  z-index: 1;
}

.topbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  font-weight: 800;
  background: linear-gradient(135deg, rgba(95,224,255,0.18), rgba(246,215,122,0.32));
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 0 18px rgba(95,224,255,0.2);
}

h1, h2, h3, p {
  margin-top: 0;
}

h1 {
  font-size: 1.2rem;
  margin-bottom: 0;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.7rem;
  color: var(--muted);
  margin-bottom: 0.35rem;
}

.topnav {
  display: flex;
  gap: 1rem;
}

.topnav a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

.topnav a:hover {
  color: var(--text);
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem 4rem;
}

.hero {
  display: grid;
  grid-template-columns: 1.7fr 0.9fr;
  gap: 1.5rem;
  padding: 2rem 0 1.25rem;
}

.hero-copy,
.stat-panel,
.spec-card,
.timeline-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  backdrop-filter: blur(14px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
}

.hero-copy {
  padding: 2rem;
}

.kicker {
  color: var(--gold);
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.72rem;
}

.hero-copy h2 {
  font-size: clamp(2.3rem, 3vw, 4rem);
  line-height: 1.06;
  margin-bottom: 1rem;
}

.lead {
  color: var(--muted);
  line-height: 1.7;
  max-width: 62ch;
}

.cta-row {
  margin-top: 1.4rem;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.3rem;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button.primary {
  color: #041823;
  background: linear-gradient(135deg, var(--cyan), var(--gold));
  box-shadow: 0 8px 30px rgba(95, 224, 255, 0.2);
}

.button.secondary {
  border: 1px solid rgba(255,255,255,0.12);
  color: var(--text);
  background: rgba(255,255,255,0.02);
}

.stat-panel {
  padding: 1.2rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 0.9rem;
}

.stat-box {
  padding: 1rem;
  border-radius: 14px;
  background: rgba(255,255,255,0.02);
  border: 1px solid rgba(255,255,255,0.06);
}

.label {
  display: block;
  color: var(--muted);
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
}

.stat-box strong {
  font-size: 1.15rem;
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.spec-card {
  padding: 1.3rem;
}

.spec-card h3 {
  margin-bottom: 0.7rem;
  font-size: 1.35rem;
}

.spec-card p:last-child {
  color: var(--muted);
  line-height: 1.6;
  margin-bottom: 0;
}

.timeline-section {
  margin-top: 2.5rem;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
}

.section-heading h3 {
  margin-bottom: 0;
  font-size: 1.8rem;
}

.legend {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  color: var(--muted);
}

.dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 0.45rem;
  vertical-align: middle;
}

.dot.cyan { background: var(--cyan); }
.dot.amber { background: var(--amber); }
.dot.gold { background: var(--gold); }

.timeline-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(220px, 1fr));
  gap: 1rem;
}

.timeline-card {
  padding: 1rem 1rem 1.1rem;
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease;
}

.timeline-card:hover {
  transform: translateY(-2px);
  border-color: rgba(95, 224, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.card-header {
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 0.7rem;
  margin-bottom: 0.9rem;
}

.card-header h4 {
  margin: 0;
  font-size: 1.05rem;
}

.card-chip {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.32rem 0.52rem;
  border-radius: 999px;
  width: fit-content;
  font-size: 0.62rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: 1px solid rgba(255,255,255,0.08);
  background: rgba(255,255,255,0.03);
  color: var(--text);
}

.card-meta {
  color: var(--muted);
  font-size: 0.82rem;
  margin-bottom: 0.7rem;
}

.card-style {
  display: inline-block;
  font-size: 0.74rem;
  padding: 0.25rem 0.35rem;
  border-radius: 6px;
  margin-bottom: 0.8rem;
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
}

.card-notes {
  color: #dfeef7;
  line-height: 1.6;
  margin: 0;
  font-size: 0.9rem;
}

.card-cyan { border-color: rgba(95, 224, 255, 0.18); }
.card-amber { border-color: rgba(255, 191, 105, 0.18); }
.card-gold { border-color: rgba(246, 215, 122, 0.18); }

@media (max-width: 920px) {
  .hero,
  .spec-grid,
  .timeline-grid {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .topnav {
    flex-wrap: wrap;
  }
}

@media (max-width: 560px) {
  .topbar,
  main {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .stat-panel {
    grid-template-columns: 1fr 1fr;
  }

  .hero-copy {
    padding: 1.25rem;
  }
}
