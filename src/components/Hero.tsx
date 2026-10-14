import { Send, ArrowDown, Zap, TrendingUp, Trophy, Globe } from 'lucide-react';
import { CONFIG } from '@/config';
import { GradientButton, Chip } from '@/components/ui';
import { Reveal } from '@/components/Reveal';

const heroStats = [
  {
    icon: Zap,
    label: 'Loan range',
    value: `${CONFIG.minLoan}–${CONFIG.maxLoan} USDT`,
    accent: 'text-accent-cyan',
  },
  {
    icon: TrendingUp,
    label: 'Investor interest',
    value: `${CONFIG.interestRate} per loan`,
    accent: 'text-accent-indigo',
  },
  {
    icon: Trophy,
    label: 'Level up',
    value: `Every ${CONFIG.levelUpThreshold} repayments`,
    accent: 'text-accent-gold',
  },
  {
    icon: Globe,
    label: 'Languages',
    value: `${CONFIG.languages} supported`,
    accent: 'text-accent-cyan',
  },
];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen items-center justify-center px-5 pt-32 pb-16 sm:px-8 lg:flex">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-8">
        {/* Left: copy */}
        <div className="flex flex-col items-start">
          <Reveal>
            <Chip>
              <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
              Telegram · xRocket Pay · Multi-language
            </Chip>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
              Peer loans with
              <br />
              <span className="gradient-text">smart credit</span> &amp;
              <br />
              <span className="gradient-text-cyan">investor yield</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg">
              Borrow from {CONFIG.minLoan} USDT with progressive limits and{' '}
              {CONFIG.interestRate} interest shared with the community fund.
              Admin-approved payouts via xRocket Pay — all inside Telegram.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <GradientButton href={CONFIG.botUrl}>
                <Send className="h-4 w-4" />
                Open in Telegram
              </GradientButton>
              <GradientButton href="#how-it-works" variant="secondary">
                How it works
                <ArrowDown className="h-4 w-4" />
              </GradientButton>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-10 flex items-center gap-3 text-xs text-white/35">
              <span className="h-px w-8 bg-white/15" />
              Powered by Telegram &amp; xRocket Pay
            </div>
          </Reveal>
        </div>

        {/* Right: 3D glass product card */}
        <Reveal delay={300} className="flex justify-center lg:justify-end">
          <div
            className="glass noise relative w-full max-w-md p-8"
            style={{
              transform: 'perspective(1000px) rotateY(-6deg) rotateX(3deg)',
            }}
          >
            {/* Glow behind card */}
            <div
              className="absolute -inset-4 -z-10 rounded-3xl opacity-40 blur-2xl"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,229,192,0.3), rgba(108,124,255,0.3))',
              }}
            />

            {/* Card header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  Live Snapshot
                </div>
                <div className="mt-1 text-xl font-bold text-white">
                  Marcenzo Bot
                </div>
              </div>
              <div className="flex items-center gap-1.5 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 px-3 py-1">
                <span className="h-2 w-2 animate-pulse rounded-full bg-accent-cyan" />
                <span className="text-xs font-medium text-accent-cyan">Active</span>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {heroStats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-white/15"
                  >
                    <Icon className={`h-5 w-5 ${stat.accent}`} />
                    <div className="mt-3 text-[11px] font-medium uppercase tracking-wide text-white/40">
                      {stat.label}
                    </div>
                    <div className="mt-0.5 text-sm font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom bar */}
            <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-3">
              <span className="text-xs text-white/45">Starting credit</span>
              <span className="text-sm font-bold text-accent-gold">
                {CONFIG.startingCredit} USDT
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
