import { FileText, CheckSquare, Wallet, Repeat } from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';

const steps = [
  {
    num: '01',
    icon: FileText,
    title: 'Request amount & installments',
    desc: 'Choose how much you need (from 0.10 USDT) and how many installments fit you (3–10).',
    accent: 'text-accent-cyan',
    ring: 'from-accent-cyan to-accent-indigo',
  },
  {
    num: '02',
    icon: CheckSquare,
    title: 'Admin approves',
    desc: 'A human admin reviews your request. Nothing moves until it is approved.',
    accent: 'text-accent-indigo',
    ring: 'from-accent-indigo to-accent-cyan',
  },
  {
    num: '03',
    icon: Wallet,
    title: 'USDT payout to xRocket',
    desc: 'Approved funds are sent straight to your xRocket Pay wallet — instantly and securely.',
    accent: 'text-accent-gold',
    ring: 'from-accent-gold to-accent-indigo',
  },
  {
    num: '04',
    icon: Repeat,
    title: 'Repay & interest distributed',
    desc: 'Repay principal plus 1% interest. The interest is distributed proportionally to investors.',
    accent: 'text-accent-cyan',
    ring: 'from-accent-cyan to-accent-gold',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="From request to repayment in four steps"
            subtitle="A straightforward, admin-overseen process that keeps everyone protected."
          />
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.num} delay={i * 120}>
                  <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                    {/* Number badge */}
                    <div className="relative z-10 mb-6 flex h-22 w-22 items-center justify-center">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-base-800 bg-gradient-to-br ${step.ring} p-px`}
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-base-800">
                          <Icon className={`h-7 w-7 ${step.accent}`} />
                        </div>
                      </div>
                    </div>

                    <div className="mb-2 text-xs font-bold uppercase tracking-widest text-white/30">
                      {step.num}
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
