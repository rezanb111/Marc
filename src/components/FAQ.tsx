import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { CONFIG } from '@/config';

const faqs = [
  {
    q: 'What is the minimum and maximum loan?',
    a: `You can request loans from ${CONFIG.minLoan} USDT up to ${CONFIG.maxLoan} USDT. Your starting credit limit is ${CONFIG.startingCredit} USDT and grows as you successfully repay loans.`,
  },
  {
    q: 'How does the 1% interest work?',
    a: `Each loan carries a ${CONFIG.interestRate} interest fee on top of the principal. When you repay, the interest is distributed proportionally to investors in the community fund — not to the platform.`,
  },
  {
    q: 'Who receives the interest payments?',
    a: 'The interest goes to investors who have deposited USDT into the investment fund. Each investor receives a share proportional to their stake in the total pool.',
  },
  {
    q: 'How do levels work?',
    a: `Every ${CONFIG.levelUpThreshold} successful loan repayments move you up one level — from Bronze all the way to Legend. Each level-up can unlock a higher credit limit, doubling progressively up to ${CONFIG.maxLoan} USDT.`,
  },
  {
    q: 'Do I need an xRocket Pay wallet?',
    a: 'Yes. All payouts and repayments are processed through xRocket Pay inside Telegram. If you do not have one yet, the bot will guide you through setup.',
  },
  {
    q: 'What languages does the bot support?',
    a: `Marcenzo supports ${CONFIG.languages} languages, making it accessible to a global community of borrowers and investors.`,
  },
  {
    q: 'Is a password required to use the bot?',
    a: 'No. The password is entirely optional. If you choose to set one, it is stored as a hash — never in plain text. You can use the bot fully without it.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Questions, answered"
            subtitle="Everything you need to know before opening the bot."
          />
        </Reveal>

        <div className="mt-12 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen
                      ? 'border-accent-cyan/20 bg-white/[0.04]'
                      : 'border-white/8 bg-white/[0.02] hover:border-white/15'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-sm font-semibold text-white sm:text-base">
                      {faq.q}
                    </span>
                    <span className="shrink-0">
                      {isOpen ? (
                        <Minus className="h-5 w-5 text-accent-cyan" />
                      ) : (
                        <Plus className="h-5 w-5 text-white/40" />
                      )}
                    </span>
                  </button>

                  <div
                    className="grid transition-all duration-300 ease-in-out"
                    style={{
                      gridTemplateRows: isOpen ? '1fr' : '0fr',
                    }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-white/55">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
