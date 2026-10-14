import { ShieldCheck, KeyRound, UserCheck, Calculator, Smile, ListOrdered, Type } from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';

const captchaTypes = [
  { icon: Calculator, label: 'Math' },
  { icon: Smile, label: 'Emoji' },
  { icon: ListOrdered, label: 'Sequence' },
  { icon: Type, label: 'Word' },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Captcha on entry',
    desc: 'Every session starts with a captcha challenge to keep bots and abusers out.',
    accent: 'text-accent-cyan',
    border: 'border-accent-cyan/20',
    bg: 'bg-accent-cyan/8',
  },
  {
    icon: KeyRound,
    title: 'Optional password',
    desc: 'Set a personal password for extra protection. It is hashed, optional, and never required to use the bot.',
    accent: 'text-accent-indigo',
    border: 'border-accent-indigo/20',
    bg: 'bg-accent-indigo/8',
  },
  {
    icon: UserCheck,
    title: 'Admin approval',
    desc: 'No money moves without a human admin reviewing and approving the transaction first.',
    accent: 'text-accent-gold',
    border: 'border-accent-gold/20',
    bg: 'bg-accent-gold/8',
  },
];

export function Security() {
  return (
    <section id="security" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Security"
            title="Protection at every layer"
            subtitle="From bot entry to fund disbursement — multiple gates keep the ecosystem safe."
          />
        </Reveal>

        {/* Pillars */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 100}>
                <div className="glass glass-hover h-full p-7">
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${pillar.border} ${pillar.bg}`}
                  >
                    <Icon className={`h-6 w-6 ${pillar.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    {pillar.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Captcha types showcase */}
        <Reveal delay={200}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-white/8 bg-white/[0.02] px-6 py-6">
            <span className="mr-2 text-sm font-medium text-white/40">
              Captcha types:
            </span>
            {captchaTypes.map((type) => {
              const Icon = type.icon;
              return (
                <span
                  key={type.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70"
                >
                  <Icon className="h-4 w-4 text-accent-cyan" />
                  {type.label}
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
