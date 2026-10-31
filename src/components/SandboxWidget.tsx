import { useMemo, useState } from 'react';
import { ArrowRight, BrainCircuit, LoaderPinwheel, Sparkles } from 'lucide-react';

type Person = 'Safaa' | 'Alex' | 'Maya';
type Balances = Record<Person, string>;
type Transfer = { from: string; to: string; amount: number };

const people: Person[] = ['Safaa', 'Alex', 'Maya'];

function simplifyDebts(balances: Record<Person, number>): Transfer[] {
  const creditors = people.filter((person) => balances[person] > 0.01).map((person) => ({ person, amount: balances[person] }));
  const debtors = people.filter((person) => balances[person] < -0.01).map((person) => ({ person, amount: Math.abs(balances[person]) }));
  const transfers: Transfer[] = [];
  let creditorIndex = 0;
  let debtorIndex = 0;

  while (creditorIndex < creditors.length && debtorIndex < debtors.length) {
    const creditor = creditors[creditorIndex];
    const debtor = debtors[debtorIndex];
    const amount = Math.min(creditor.amount, debtor.amount);
    transfers.push({ from: debtor.person, to: creditor.person, amount });
    creditor.amount -= amount;
    debtor.amount -= amount;
    if (creditor.amount < 0.01) creditorIndex += 1;
    if (debtor.amount < 0.01) debtorIndex += 1;
  }
  return transfers;
}

function formatMoney(amount: number) {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function insight(transfers: Transfer[], entered: number) {
  if (!entered) return 'Add the net balance for each person to run the settlement algorithm.';
  if (transfers.length === 0) return 'This group is already settled — no payment transactions are needed.';
  return `The greedy net-balance algorithm reduced ${entered} individual obligations to ${transfers.length} payment${transfers.length === 1 ? '' : 's'}. Each transfer sends money directly from someone who owes to someone who is owed.`;
}

export default function SandboxWidget() {
  const [balances, setBalances] = useState<Balances>({ Safaa: '-60', Alex: '100', Maya: '-40' });
  const [running, setRunning] = useState(false);

  const numericBalances = useMemo(() => ({
    Safaa: parseFloat(balances.Safaa) || 0,
    Alex: parseFloat(balances.Alex) || 0,
    Maya: parseFloat(balances.Maya) || 0,
  }), [balances]);
  const transfers = useMemo(() => simplifyDebts(numericBalances), [numericBalances]);
  const entered = Object.values(numericBalances).filter((amount) => amount !== 0).length;
  const aiText = useMemo(() => insight(transfers, entered), [entered, transfers]);

  const runAi = () => {
    setRunning(true);
    setTimeout(() => setRunning(false), 700);
  };

  return (
    <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-[#111916] p-4 shadow-2xl sm:p-6">
      <div className="mb-7 flex items-center justify-between">
        <div>
          <div className="text-xs text-muted">Settlement sandbox</div>
          <div className="mt-1 font-display text-xl font-medium">Simplify a group&apos;s debts</div>
        </div>
        <div className="grid h-9 w-9 place-items-center rounded-full bg-mint/10 text-mint"><Sparkles size={16} /></div>
      </div>
      <p className="mb-5 text-sm leading-6 text-muted">Enter each person&apos;s net balance. Positive means they should receive money; negative means they owe it.</p>

      <div className="grid gap-3 sm:grid-cols-3">
        {people.map((person) => (
          <label key={person} className="block">
            <span className="mb-1.5 block text-[11px] uppercase tracking-[0.12em] text-muted">{person}</span>
            <div className="flex items-center rounded-xl border border-white/10 bg-[#18211d] px-3 focus-within:border-mint">
              <span className="text-sm text-muted">$</span>
              <input
                type="number"
                inputMode="decimal"
                value={balances[person]}
                aria-label={`${person} net balance`}
                onChange={(event) => setBalances((current) => ({ ...current, [person]: event.target.value }))}
                className="w-full bg-transparent px-2 py-2.5 text-sm text-paper outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />
            </div>
          </label>
        ))}
      </div>

      <div className="mt-4 rounded-xl border border-white/10 bg-[#18211d] p-4">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.12em] text-muted">Optimized settlement</span>
          <span className="rounded-full bg-mint/10 px-2 py-1 text-xs text-mint">{transfers.length} transaction{transfers.length === 1 ? '' : 's'}</span>
        </div>
        <div className="space-y-2">
          {transfers.length > 0 ? transfers.map((transfer) => (
            <div key={`${transfer.from}-${transfer.to}`} className="flex items-center justify-between rounded-lg border border-white/10 bg-ink px-3 py-2.5 text-sm">
              <span className="text-paper">{transfer.from}</span>
              <ArrowRight size={14} className="text-mint" />
              <span className="text-paper">{transfer.to}</span>
              <span className="font-medium text-mint">{formatMoney(transfer.amount)}</span>
            </div>
          )) : <p className="text-sm text-muted">Add a balance to preview the minimum payment path.</p>}
        </div>
      </div>

      <div className="mt-3 rounded-xl border border-mint/20 bg-mint/5 p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs text-mint">AI-assisted explanation</div>
          <button type="button" onClick={runAi} className="flex items-center gap-1.5 text-xs text-mint transition hover:text-paper">
            {running ? <LoaderPinwheel size={13} className="animate-spin" /> : <BrainCircuit size={13} />}
            {running ? 'Analyzing…' : 'Explain result'}
          </button>
        </div>
        <p role="status" className="mt-2 text-xs leading-5 text-mint">{aiText}</p>
      </div>

      <div className="mt-5 flex items-center justify-between px-1">
        <span className="flex items-center gap-2 text-xs text-muted"><span className="h-2 w-2 rounded-full bg-mint" /> Live algorithm, no backend</span>
        <span className="text-xs text-muted">Runs in your browser</span>
      </div>
    </div>
  );
}
