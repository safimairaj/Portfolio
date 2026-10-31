import { Code2, Database, Layers3, BrainCircuit } from 'lucide-react';

type Item = { name: string; role: string };

const groups: { category: string; icon: typeof Code2; items: Item[] }[] = [
  {
    category: 'Languages',
    icon: Code2,
    items: [
      { name: 'Python', role: 'Scripting & data pipelines' },
      { name: 'TypeScript', role: 'Typed frontends' },
      { name: 'Dart', role: 'Mobile apps via Flutter' },
      { name: 'SQL', role: 'Queries & analytics' },
    ],
  },
  {
    category: 'Frameworks',
    icon: Layers3,
    items: [
      { name: 'React', role: 'Component UIs' },
      { name: 'Streamlit', role: 'Python data apps' },
      { name: 'Flutter', role: 'Cross-platform UI' },
      { name: 'Unity', role: '3D & VR experiences' },
    ],
  },
  {
    category: 'AI / ML Toolsets',
    icon: BrainCircuit,
    items: [
      { name: 'Hugging Face', role: 'Model integration' },
      { name: 'scikit-learn', role: 'Classical ML' },
      { name: 'TextBlob', role: 'Lightweight NLP' },
      { name: 'AI APIs', role: 'LLM calls & guardrails' },
    ],
  },
  {
    category: 'Databases',
    icon: Database,
    items: [
      { name: 'SQLite', role: 'Embedded storage' },
      { name: 'Supabase', role: 'Auth & Postgres' },
      { name: 'Data modeling', role: 'Schema design' },
      { name: 'Analytics', role: 'Metrics & insight' },
    ],
  },
];

export default function SkillBadges() {
  return (
    <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
      {groups.map((g) => {
        const Icon = g.icon;
        return (
          <div key={g.category} className="border-t border-white/10 pt-5">
            <div className="mb-5 flex items-center gap-3 text-sm font-medium text-paper">
              <Icon size={17} className="text-mint" />
              {g.category}
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {g.items.map((item) => (
                <li key={item.name} className="group relative">
                  <span className="inline-flex cursor-default items-center rounded-full border border-white/10 bg-panel px-3 py-1.5 text-sm text-paper transition group-hover:border-mint group-hover:text-mint">
                    {item.name}
                  </span>
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute left-1/2 bottom-full z-20 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg border border-mint/20 bg-ink px-2.5 py-1.5 text-xs text-mint shadow-xl group-hover:block group-focus-within:block"
                  >
                    {item.role}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
