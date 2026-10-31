import { useState } from 'react';
import { BrainCircuit, ChevronRight, Wrench } from 'lucide-react';

const entries = [
  {
    hurdle: 'Repayment logic returned negative balances on the final payment',
    context: 'The avalanche strategy rounded the last installment up, leaving a tiny overpayment that snowballed across accounts and broke the summary view.',
    prompt: 'In Python, given balances, APRs, and a fixed monthly payment, produce a month-by-month amortization that floors the final principal payment so remaining never goes below zero. Return a list of (month, interest, principal, balance) tuples.',
    fix: 'AI proposed tracking a `remaining` float and, on the loop iteration where `remaining < payment`, setting the principal to `remaining` and breaking. It also caught the off-by-one: interest is charged before the payment, not after.',
    outcome: 'The summary stopped showing phantom overpayments, and the plan stayed within $0.01 of the bank\'s statement across every test case.',
  },
  {
    hurdle: 'AI advice sounded confident when the data was contradictory',
    context: 'Two data sources disagreed on a balance by 12%, and the model still produced a firm recommendation.',
    prompt: 'Design a guardrail for a debt-advisor LLM call: when input values differ by more than 10% across sources, refuse to recommend and instead surface the discrepancy and ask the user to confirm. Give me a system prompt and a validation wrapper.',
    fix: 'AI wrote a `reconcile()` function that returns a confidence flag, and a system prompt that forces the model to label its own uncertainty and never state a single number as fact when the flag is low.',
    outcome: 'Advice now degrades gracefully — it asks before it asserts, which is exactly the behavior I wanted the system to model.',
  },
];

function Card({ entry }: { entry: (typeof entries)[number] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-white/10 bg-panel p-6 sm:p-7">
      <button type="button" aria-expanded={open} onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 text-left">
        <div className="flex items-start gap-3">
          <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-mint/10 text-mint"><Wrench size={15} /></span>
          <span className="font-display text-lg font-medium text-paper">{entry.hurdle}</span>
        </div>
        <ChevronRight size={18} className={`shrink-0 text-muted transition ${open ? 'rotate-90' : ''}`} />
      </button>
      {open && (
        <div className="mt-5 space-y-4 border-t border-white/10 pt-5 text-sm leading-6">
          <p className="text-muted">{entry.context}</p>
          <div>
            <p className="mb-1.5 text-xs uppercase tracking-[0.16em] text-mint">Prompt I used</p>
            <p className="rounded-xl border border-white/10 bg-ink p-4 font-mono text-[13px] leading-6 text-paper">{entry.prompt}</p>
          </div>
          <div>
            <p className="mb-1.5 text-xs uppercase tracking-[0.16em] text-mint">What AI returned</p>
            <p className="text-paper">{entry.fix}</p>
          </div>
          <div>
            <p className="mb-1.5 text-xs uppercase tracking-[0.16em] text-mint">Why it mattered</p>
            <p className="text-muted">{entry.outcome}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function AiCollabLog() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="eyebrow">Under the hood</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">How AI helped <span className="text-mint">— specifically.</span></h2>
          <p className="mt-3 max-w-xl text-sm leading-6 text-muted">Real hurdles from the Debtrix build, with the exact prompt and the fix it produced. AI was a pair-programmer, not an oracle.</p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-mint/20 bg-mint/5 px-3 py-1.5 text-xs text-mint"><BrainCircuit size={14} /> Collab log</span>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {entries.map((e) => <Card key={e.hurdle} entry={e} />)}
      </div>
    </section>
  );
}
