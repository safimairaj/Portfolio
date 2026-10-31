import { Check, GitBranch, Layers3, Receipt, UsersRound } from 'lucide-react';

type FeatureGroup = {
  title: string;
  icon: typeof UsersRound;
  items: string[];
};

const groups: FeatureGroup[] = [
  {
    title: 'Groups',
    icon: UsersRound,
    items: [
      'Create groups with Trip, Home, Food, Work, Event, and Other categories',
      'Add registered members by email or external members by name',
      'Real-time group sync',
    ],
  },
  {
    title: 'Expenses',
    icon: Receipt,
    items: [
      'Equal, Percentage, Custom, and Exact Amount split modes',
      'Eight expense categories with visual icons',
      'Who paid selector, notes, and swipe-to-delete',
      'Real-time expense updates',
    ],
  },
  {
    title: 'Settlements',
    icon: GitBranch,
    items: [
      'Greedy net-balance algorithm simplifies debts',
      'Naive versus optimized transaction count comparison',
      'Interactive settlement cards with Mark Paid',
      'Spend distribution chart and balance summary table',
      'Copyable reports and Firestore settlement history',
    ],
  },
  {
    title: 'UI / UX',
    icon: Layers3,
    items: [
      'Dark theme with purple gradient and Sora typography',
      'Fluid animations, shimmer loading, and thoughtful empty states',
      'Snackbar feedback for clear action confirmation',
    ],
  },
];

export default function DebtrixFeatureList() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {groups.map((group) => {
        const Icon = group.icon;
        return (
          <div key={group.title} className="rounded-2xl border border-white/10 bg-panel p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-medium text-paper">
              <Icon size={16} className="text-mint" />
              {group.title}
            </div>
            <ul className="space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-muted">
                  <Check size={15} className="mt-1 shrink-0 text-mint" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
