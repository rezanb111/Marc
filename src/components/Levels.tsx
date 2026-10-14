import { Medal } from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { CONFIG } from '@/config';

const levels = [
  { name: 'Bronze', credit: '5 USDT', color: '#cd7f32', glow: 'rgba(205,127,50,0.3)' },
  { name: 'Silver', credit: '10 USDT', color: '#c0c8d0', glow: 'rgba(192,200,208,0.3)' },
  { name: 'Gold', credit: '20 USDT', color: '#f5c451', glow: 'rgba(245,196,81,0.35)' },
  { name: 'Platinum', credit: '40 USDT', color: '#8ae3d5', glow: 'rgba(138,227,213,0.35)' },
  { name: 'Diamond', credit: '60 USDT', color: '#6c7cff', glow: 'rgba(108,124,255,0.35)' },
  { name: 'Master', credit: '80 USDT', color: '#00e5c0', glow: 'rgba(0,229,192,0.4)' },
  { name: 'Legend', credit: '100 USDT', color: '#ff6b9d', glow: 'rgba(255,107,157,0.4)' },
];

export function Levels() {
  return (
    <section id="levels" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Levels"
            title="Climb the ranks, grow your credit"
            subtitle={`Every ${CONFIG.levelUpThreshold} successful loan repayments move you up one level — with a potential credit boost at each tier.`}
          />
        </Reveal>

        {/* Ladder */}
        <div className="mt-16 flex flex-col gap-3">
          {levels.map((level, i) => (
            <Reveal key={level.name} delay={i * 70}>
              <div
                className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:bg-white/[0.04]"
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(90deg, ${level.glow}, transparent 70%)`,
                  }}
                />

                {/* Rank number */}
                <div className="relative z-10 w-8 text-center text-sm font-bold text-white/30">
                  {i + 1}
                </div>

                {/* Medal icon */}
                <div
                  className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: `${level.color}40`,
                    backgroundColor: `${level.color}12`,
                  }}
                >
                  <Medal className="h-5 w-5" style={{ color: level.color }} />
                </div>

                {/* Rank name */}
                <div className="relative z-10 flex-1">
                  <span
                    className="text-base font-bold"
                    style={{ color: level.color }}
                  >
                    {level.name}
                  </span>
                </div>

                {/* Credit limit */}
                <div className="relative z-10 text-right">
                  <div className="text-[11px] font-medium uppercase tracking-wide text-white/35">
                    Credit limit
                  </div>
                  <div className="text-sm font-bold text-white">
                    {level.credit}
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="relative z-10 hidden h-2 w-24 overflow-hidden rounded-full bg-white/8 sm:block">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${((i + 1) / levels.length) * 100}%`,
                      background: `linear-gradient(90deg, ${level.color}, ${level.color}80)`,
                    }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
