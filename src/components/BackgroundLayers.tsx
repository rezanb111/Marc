/**
 * Decorative animated background layers.
 * Fixed position, pointer-events: none, performance-safe.
 */
export function BackgroundLayers() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base radial gradients */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 15% 0%, rgba(108,124,255,0.12), transparent 50%), radial-gradient(ellipse 70% 50% at 85% 10%, rgba(0,229,192,0.10), transparent 50%), radial-gradient(ellipse 60% 50% at 50% 100%, rgba(108,124,255,0.08), transparent 60%)',
        }}
      />

      {/* Grid overlay */}
      <div className="grid-overlay absolute inset-0 opacity-60" />

      {/* Floating orbs */}
      <div
        className="animate-float-slow absolute left-[8%] top-[20%] h-72 w-72 rounded-full opacity-30 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(0,229,192,0.5), transparent 70%)' }}
      />
      <div
        className="animate-float-med absolute right-[12%] top-[35%] h-80 w-80 rounded-full opacity-25 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(108,124,255,0.5), transparent 70%)' }}
      />
      <div
        className="animate-pulse-glow absolute left-[40%] bottom-[10%] h-64 w-64 rounded-full opacity-20 blur-[90px]"
        style={{ background: 'radial-gradient(circle, rgba(245,196,81,0.4), transparent 70%)' }}
      />
    </div>
  );
}
