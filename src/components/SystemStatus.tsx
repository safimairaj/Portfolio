export default function SystemStatus() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-panel px-3 py-1.5 text-xs text-muted">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
      </span>
      System online <span className="text-paper">v1.0.0</span>
    </span>
  );
}
