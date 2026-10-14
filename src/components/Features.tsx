import {
  HandCoins,
  TrendingUp,
  Trophy,
  PiggyBank,
  ShieldCheck,
  Headset,
} from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { CONFIG } from '@/config';

const features = [
  {
    icon: HandCoins,
    title: 'Request Loan',
    desc: `Free amounts from ${CONFIG.minLoan} USDT, ${CONFIG.installmentMin}–${CONFIG.installmentMax} installments. Admin approves before any payout.`,
    accent: 'text-accent-cyan',
    glow: 'group-hover:border-accent-cyan/30',
  },
  {
    icon: TrendingUp,
    title: 'Progressive Credit',
    desc: `Start at ${CONFIG.startingCredit} USDT. Your limit can double after every ${CONFIG.levelUpThreshold} successful loans — up to ${CONFIG.maxLoan} USDT.`,
    accent: 'text-accent-indigo',
    glow: 'group-hover:border-accent-indigo/30',
  },
  {
    icon: Trophy,
    title: 'Levels',
    desc: 'Bronze → Silver → Gold → Platinum → Diamond → Master → Legend. Climb the ranks with every successful repayment.',
    accent: 'text-accent-gold',
    glow: 'group-hover:border-accent-gold/30',
  },
  {
    icon: PiggyBank,
    title: 'Investment Fund',
    desc: 'Deposit USDT and earn a proportional share of borrower interest. Transparent, on-loan-completion payouts.',
    accent: 'text-accent-cyan',
    glow: 'group-hover:border-accent-cyan/30',
  },
  {
    icon: ShieldCheck,
    title: 'Security Gate',
    desc: 'Advanced captcha on entry — math, emoji, sequence, and word challenges. Optional user password for extra protection.',
    accent: 'text-accent-indigo',
    glow: 'group-hover:border-accent-indigo/30',
  },
  {
    icon: Headset,
    title: 'Admin & Support',
    desc: 'Admins approve or reject loans, block bad actors, and handle support tickets. Human oversight on every transaction.',
    accent: 'text-accent-gold',
    glow: 'group-hover:border-accent-gold/30',
  },
];

export function Features() {
  return (
    <section id="features" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Features"
            title={
              <>
                Everything the bot does,
                <br className="hidden sm:block" /> in one place
              </>
            }
            subtitle="A complete P2P lending toolkit inside Telegram — borrowing, investing, security, and admin tools."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={i * 80}>
                <div
                  className={`glass glass-hover group h-full p-6 ${feature.glow}`}
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03]">
                    <Icon className={`h-6 w-6 ${feature.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
