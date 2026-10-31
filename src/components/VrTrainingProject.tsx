import { BrainCircuit, Check, Gamepad2, Layers3, Sparkles } from 'lucide-react';

const learningLevels = [
  { level: '01', title: 'Addition', detail: 'Count concrete objects and combine quantities in a meadow environment.' },
  { level: '02', title: 'Subtraction', detail: 'Remove objects from a group and connect the action to the numerical result.' },
  { level: '03', title: 'Multiplication', detail: 'Build repeated groups to make multiplication a spatial, visible idea.' },
];

const principles = [
  'Non-punitive scoring increases points for correct answers and never removes points for mistakes.',
  'Interaction time and accuracy become performance signals for the readiness classifier.',
  'The learner progresses when the model indicates they are ready, not after a rigid number of attempts.',
  'Concrete 3D objects turn abstract numerical symbols into actions the learner can see and control.',
];

export default function VrTrainingProject() {
  return (
    <section className="border-y border-white/[0.07] bg-[#0d1210]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">Major project / VR education</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">VR-based training modules <span className="text-mint">for real-world learning.</span></h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted">This project presents the design and development of “VR Based Training Modules to Simulate Real-World Scenarios”, created to help children with autism learn fundamental mathematics through immersive, interactive, and spatial experiences.</p>
          </div>
          <div className="flex flex-wrap gap-2 lg:justify-end">
            {['Unity', 'C#', 'Virtual Reality', 'Machine Learning', 'Spatial learning'].map((tag) => <span key={tag} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-paper">{tag}</span>)}
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-panel">
            <img src="/assets/images/Screenshot_(237).png" alt="Unity terrain and grass environment used for the VR mathematics training module" loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover object-center transition duration-500 hover:scale-[1.02]" />
            <figcaption className="border-t border-white/10 px-5 py-3 text-xs leading-5 text-muted">Environment research: a calm meadow setting built to make spatial practice feel familiar.</figcaption>
          </figure>
          <figure className="overflow-hidden rounded-2xl border border-white/10 bg-panel">
            <img src="/assets/images/Screenshot_(238).png" alt="Unity editor scene showing the meadow environment and fenced training area" loading="lazy" decoding="async" className="aspect-[16/10] w-full object-cover object-center transition duration-500 hover:scale-[1.02]" />
            <figcaption className="border-t border-white/10 px-5 py-3 text-xs leading-5 text-muted">Development view: the Level 1 addition scene with the interactive training area in Unity.</figcaption>
          </figure>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.1fr]">
          <div className="rounded-2xl border border-mint/20 bg-mint/5 p-7">
            <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-mint"><BrainCircuit size={16} /> The learning problem</div>
            <p className="leading-7 text-paper">Traditional lessons and static 2D apps can make abstract numerical symbols overwhelming for neurodiverse learners. This module transforms those symbols into concrete actions, such as counting 3D sheep in a meadow, while keeping feedback encouraging and predictable.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-panel p-7">
            <div className="mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-paper"><Gamepad2 size={16} className="text-mint" /> What makes it adaptive</div>
            <p className="leading-7 text-muted">An intelligent backend classification algorithm evaluates accuracy and interaction time to assess state readiness. It helps decide when a learner can progress, replacing rigid scoring gates with a more supportive path.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-2xl border border-white/10 bg-panel p-7 sm:p-8">
            <div className="mb-7 flex items-center gap-3"><Layers3 size={18} className="text-mint" /><h3 className="font-display text-2xl font-semibold text-paper">Three structured levels</h3></div>
            <div className="grid gap-3 sm:grid-cols-3">
              {learningLevels.map((level) => <div key={level.level} className="rounded-xl border border-white/10 bg-ink p-4"><span className="font-mono text-xs text-mint">{level.level}</span><h4 className="mt-3 font-display text-lg text-paper">{level.title}</h4><p className="mt-2 text-sm leading-6 text-muted">{level.detail}</p></div>)}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-panel p-7 sm:p-8">
            <div className="mb-5 flex items-center gap-3"><Sparkles size={18} className="text-mint" /><h3 className="font-display text-2xl font-semibold text-paper">Design principles</h3></div>
            <ul className="space-y-3">
              {principles.map((principle) => <li key={principle} className="flex gap-2 text-sm leading-6 text-muted"><Check size={15} className="mt-1 shrink-0 text-mint" /><span>{principle}</span></li>)}
            </ul>
          </div>
        </div>

        <p className="mt-8 max-w-4xl text-base leading-7 text-muted">Overall, the VR-based training module combines spatial learning, gamification, and adaptive machine learning to create a non-intimidating, supportive, and effective mathematics tool for children with autism.</p>
      </div>
    </section>
  );
}
