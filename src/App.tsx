import { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Check,
  CircleDollarSign,
  Code2,
  ExternalLink,
  Github,
  Linkedin,
  Menu,
  Terminal,
  X,
  Zap,
} from 'lucide-react';
import SandboxWidget from '@/components/SandboxWidget';
import AiCollabLog from '@/components/AiCollabLog';
import SystemStatus from '@/components/SystemStatus';
import SkillBadges from '@/components/SkillBadges';
import DebtrixFeatureList from '@/components/DebtrixFeatureList';
import VrTrainingProject from '@/components/VrTrainingProject';

const otherProjects = [
  { number: '01', title: 'smart-city-climate-monitor', type: 'AI / Data', description: 'Flood-risk and climate intelligence dashboard built for fast, informed decisions.', tags: ['Python', 'NLP', 'Dashboards'] },
  { number: '02', title: 'Mind-space', type: 'Product concept', description: 'A digital mental health and psychological support system designed around students.', tags: ['TypeScript', 'UX', 'Systems'] },
  { number: '03', title: 'VR-based training modules', type: 'Immersive learning', description: 'Real-world safety and technical training translated into interactive 3D experiences.', tags: ['Unity', 'VR / 3D', 'Education'] },
];

const githubUrl = 'https://github.com/safimairaj';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-paper selection:bg-mint selection:text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-ink/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-ink"><Terminal size={18} strokeWidth={2.5} /></span>
            <span className="font-display text-lg font-semibold tracking-tight">SM<span className="text-mint">.</span></span>
          </a>
          <nav id="primary-navigation" className={`${menuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-[76px] flex-col gap-1 rounded-2xl border border-white/10 bg-panel p-3 shadow-2xl md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
            {['Work', 'Approach', 'About'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu} className="rounded-lg px-3 py-3 text-sm text-muted transition hover:bg-white/5 hover:text-paper md:px-0 md:py-2">{item}</a>)}
            <a href="#contact" onClick={closeMenu} className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-paper px-4 py-3 text-sm font-medium text-ink transition hover:bg-mint md:mt-0">Let&apos;s talk <ArrowUpRight size={15} /></a>
          </nav>
          <button type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)} className="rounded-lg p-2 text-paper md:hidden">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </header>

      <main id="top">
        <section className="relative mx-auto max-w-7xl px-6 pb-28 pt-40 lg:px-10 lg:pb-40 lg:pt-52">
          <div className="hero-grid absolute inset-0 -z-0 opacity-70" />
          <div className="relative z-10 max-w-5xl">
            <div className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-mint"><span className="h-px w-10 bg-mint" /> Available for meaningful problems</div>
            <p className="mb-5 font-display text-sm font-medium uppercase tracking-[0.18em] text-paper sm:text-base">Safaa Mairaj</p><h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.05em] text-paper sm:text-7xl lg:text-[6.7rem]">AI-focused builder creating <span className="text-mint">useful systems.</span></h1>
            <div className="mt-10 flex max-w-2xl flex-col justify-between gap-8 border-t border-white/10 pt-7 sm:flex-row sm:items-end"><p className="max-w-lg text-lg leading-8 text-muted">Undergraduate Computer Science student pursuing an AI-focused career, with hands-on experience building data-driven, user-centered applications using Python, Pandas, Hugging Face, and Streamlit.</p><a href="#work" className="group flex shrink-0 items-center gap-3 text-sm font-semibold text-paper">View my live work <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition group-hover:border-mint group-hover:bg-mint group-hover:text-ink"><ArrowDown size={16} /></span></a></div>
          </div>
          <div className="relative z-10 mt-24 flex flex-wrap items-center gap-x-12 gap-y-6 text-sm text-muted"><span>Currently exploring <strong className="font-medium text-paper">agentic workflows</strong></span><span className="hidden h-1 w-1 rounded-full bg-mint sm:block" /><span>Based in <strong className="font-medium text-paper">the real world</strong></span></div>
          <div className="relative z-10 mt-8"><SystemStatus /></div>
        </section>

        <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow">Featured build / 001</p><h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">Debtrix<span className="text-mint">.</span></h2></div><p className="max-w-sm text-sm leading-6 text-muted">A cross-platform Flutter app that helps groups split shared expenses and settle every debt with fewer payments.</p></div>
          <div className="project-shell grid overflow-hidden rounded-3xl border border-white/10 bg-panel lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12"><div><div className="mb-9 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-amber"><CircleDollarSign size={16} /> Flutter / Fintech</div><h3 className="max-w-md font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Shared spending, <span className="text-muted">settled simply.</span></h3><p className="mt-6 max-w-md leading-7 text-muted">Debtrix lets groups track shared expenses, choose how each cost is split, and automatically calculate the minimum payment transactions needed to settle all debts with a greedy net-balance algorithm.</p></div><div className="mt-12"><p className="mb-4 text-xs uppercase tracking-[0.18em] text-muted">Built with</p><div className="flex flex-wrap gap-2">{['Flutter', 'Dart', 'Firebase', 'Firestore', 'Sora', 'flutter_animate'].map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-paper">{tag}</span>)}</div><a href={githubUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-paper transition hover:text-mint">Explore on GitHub <ArrowUpRight size={15} /></a></div></div>
            <div className="mockup-bg min-h-[480px] border-t border-white/10 p-4 sm:p-8 lg:border-l lg:border-t-0"><SandboxWidget /></div>
          </div>
          <DebtrixFeatureList />
          <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_1.5fr]"><div className="rounded-2xl border border-mint/20 bg-mint/5 p-7"><div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-mint"><BrainCircuit size={16} /> Where AI did the heavy lifting</div><p className="leading-7 text-paper">AI helped reason through settlement edge cases, validate the greedy net-balance logic, and turn a dense financial workflow into a calmer group experience.</p></div><div className="flex items-center justify-between rounded-2xl border border-white/10 bg-panel p-7"><div><p className="text-xs uppercase tracking-[0.16em] text-muted">The outcome</p><p className="mt-3 font-display text-2xl text-paper">Fewer payments. Clearer groups.</p></div><a href="#contact" className="grid h-11 w-11 place-items-center rounded-full border border-white/15 transition hover:border-mint hover:bg-mint hover:text-ink"><ExternalLink size={17} /></a></div></div>
        </section>

        <section id="approach" className="border-y border-white/[0.07] bg-[#0d1210] scroll-mt-24"><div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="eyebrow">The toolkit</p><h2 className="mt-4 max-w-sm font-display text-4xl font-semibold tracking-tight sm:text-5xl">Tools are only useful when they serve the idea.</h2><p className="mt-4 max-w-xs text-sm leading-6 text-muted">Hover any badge for the role it plays in the build.</p></div><SkillBadges /></div></div></section>

        <AiCollabLog />

        <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 lg:px-10 lg:py-32"><div className="grid gap-14 lg:grid-cols-[1fr_0.75fr] lg:gap-28"><div><p className="eyebrow">Build in public</p><h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold tracking-tight sm:text-5xl">Curiosity is my unfair advantage.</h2><div className="mt-8 max-w-xl space-y-5 text-lg leading-8 text-muted"><p>I am Safaa Mairaj, an undergraduate Computer Science student following the questions that turn data and emerging AI tools into useful experiences.</p><p>My work sits at the intersection of analytical thinking and hands-on engineering — from preprocessing real-world data with Pandas to integrating Generative AI into dependable Streamlit applications.</p></div></div><div className="space-y-8"><div className="border-l border-mint pl-6"><p className="text-xs uppercase tracking-[0.18em] text-mint">A hurdle I overcame</p><p className="mt-4 leading-7 text-paper">When data sources disagreed, the first version confidently gave the wrong answer. I learned to make the system show its work — validating inputs, surfacing uncertainty, and keeping the human in control.</p></div><div className="border-l border-white/20 pl-6"><p className="text-xs uppercase tracking-[0.18em] text-muted">Building next</p><p className="mt-4 leading-7 text-paper">Small AI agents with strong boundaries: useful enough to act, transparent enough to trust.</p></div></div></div></section>

        <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32"><div className="mb-10 flex items-end justify-between"><div><p className="eyebrow">More experiments</p><h2 className="mt-3 font-display text-3xl font-semibold tracking-tight">A wider field of play</h2></div><span className="hidden text-sm text-muted sm:block">Selected work / 2022—24</span></div><div className="grid border-t border-white/10">{otherProjects.map((project) => <a key={project.number} href={githubUrl} target="_blank" rel="noreferrer" aria-label={`${project.title} on GitHub`} className="group grid gap-4 border-b border-white/10 py-7 transition hover:bg-white/[0.025] sm:grid-cols-[70px_1fr_1.3fr_auto] sm:items-center"><span className="font-mono text-xs text-mint">{project.number}</span><div><p className="font-display text-xl text-paper transition group-hover:text-mint">{project.title}</p><p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">{project.type}</p></div><p className="max-w-md text-sm leading-6 text-muted">{project.description}</p><div className="flex items-center gap-2">{project.tags.map((tag) => <span key={tag} className="hidden rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted lg:block">{tag}</span>)}<ArrowUpRight size={17} className="ml-2 text-muted transition group-hover:text-mint" /></div></a>)}</div></section>

        <VrTrainingProject />

      </main>

      <footer id="contact" className="border-t border-white/[0.07] bg-[#0d1210]"><div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20"><div className="flex flex-col justify-between gap-12 md:flex-row"><div><p className="eyebrow">Have a hard problem?</p><h2 className="mt-4 max-w-lg font-display text-4xl font-semibold tracking-tight sm:text-5xl">Let&apos;s make something <span className="text-mint">matter.</span></h2><a href="mailto:safaamairaj@gmail.com" className="mt-7 inline-flex items-center gap-2 border-b border-mint pb-2 text-sm text-paper transition hover:text-mint">safaamairaj@gmail.com <ArrowUpRight size={15} /></a></div><div className="flex flex-col items-start gap-8 md:items-end"><div className="flex gap-3"><a aria-label="GitHub" href="https://github.com/safimairaj" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition hover:border-mint hover:text-mint"><Github size={17} /></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/safaa-mairaj-615650355/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition hover:border-mint hover:text-mint"><Linkedin size={17} /></a><a aria-label="LeetCode" href="https://leetcode.com/u/safimairaj/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition hover:border-mint hover:text-mint"><Code2 size={17} /></a></div><a id="flyrank-verification" href="https://internship.flyrank.ai/intern/assignments/fl-cap" target="_blank" rel="noreferrer" className="group flex max-w-xs items-center gap-3 rounded-xl border border-white/10 bg-panel px-4 py-3 transition hover:border-mint/50"><span className="grid h-9 w-9 place-items-center rounded-lg bg-amber text-ink"><Check size={17} strokeWidth={3} /></span><span><span className="block text-xs font-medium text-paper">Built during FlyRank</span><span className="mt-0.5 block text-[10px] text-muted">Graduate verification badge <ArrowUpRight size={11} className="ml-1 inline transition group-hover:text-mint" /></span></span></a></div></div><div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-xs text-muted sm:flex-row"><span>© 2026 Safaa Mairaj. Crafted with intent.</span><span className="flex items-center gap-2"><Zap size={13} className="text-mint" /> Always learning, always shipping.</span></div></div></footer>
    </div>
  );
}

export default App;
