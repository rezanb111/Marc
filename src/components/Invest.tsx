import { PiggyBank, CheckCircle2, Percent } from 'lucide-react';
import { SectionHeading } from '@/components/ui';
import { Reveal } from '@/components/Reveal';

export function Invest() {
  return (
    <section id="invest" className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            eyebrow="Invest & Earn"
            title="Put your USDT to work"
            subtitle="Deposit into the investment fund and earn a proportional share of every borrower's interest payment."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Formula card */}
          <Reveal>
            <div className="glass noise h-full p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-cyan/20 bg-accent-cyan/10">
                <Percent className="h-6 w-6 text-accent-cyan" />
              </div>

              <h3 className="text-xl font-bold text-white">The formula</h3>
              <p className="mt-2 text-sm text-white/50">
                Transparent and proportional — no black boxes.
              </p>

              {/* Formula display */}
              <div className="mt-6 rounded-2xl border border-white/8 bg-base-900/60 p-6 text-center">
                <div className="text-sm font-medium text-white/60">
                  Investor reward
                </div>
                <div className="mt-3 text-lg font-bold text-white sm:text-xl">
                  Loan interest
                  <span className="mx-2 text-accent-cyan">×</span>
                  <span className="inline-block">
                    <span className="block border-b border-white/20 pb-1">
                      Your stake
                    </span>
                    <span className="block pt-1">Total pool</span>
                  </span>
                </div>
              </div>

              {/* Example */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-cyan" />
                  <p className="text-sm text-white/55">
                    If you hold <span className="font-semibold text-white">10% of the pool</span>, you earn <span className="font-semibold text-white">10% of each loan's 1% fee</span>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-indigo" />
                  <p className="text-sm text-white/55">
                    Staking <span className="font-semibold text-white">25% of the pool</span> earns you <span className="font-semibold text-white">25% of each loan's interest</span>.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-gold" />
                  <p className="text-sm text-white/55">
                    Payouts happen <span className="font-semibold text-white">on loan completion</span> — when the borrower repays in full.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Trust / overview card */}
          <Reveal delay={150}>
            <div className="glass noise h-full p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-indigo/20 bg-accent-indigo/10">
                <PiggyBank className="h-6 w-6 text-accent-indigo" />
              </div>

              <h3 className="text-xl font-bold text-white">Why it works</h3>
              <p className="mt-2 text-sm text-white/50">
                Real mechanics, not promises.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                  <div className="text-3xl font-extrabold gradient-text-cyan">
                    1%
                  </div>
                  <div className="mt-1 text-sm text-white/50">
                    Interest per loan, distributed to investors
                  </div>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                  <div className="text-3xl font-extrabold gradient-text-cyan">
                    100%
                  </div>
                  <div className="mt-1 text-sm text-white/50">
                    Proportional — your share = your reward
                  </div>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                  <div className="text-3xl font-extrabold gradient-text-cyan">
                    0%
                  </div>
                  <div className="mt-1 text-sm text-white/50">
                    Hidden fees or guaranteed returns
                  </div>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                  <div className="text-3xl font-extrabold gradient-text-cyan">
                    USDT
                  </div>
                  <div className="mt-1 text-sm text-white/50">
                    Deposit and withdraw via xRocket Pay
                  </div>
                </div>
              </div>

              <p className="mt-6 text-xs leading-relaxed text-white/35">
                Not financial advice. Rewards depend on loan volume and pool size. Admin-managed P2P tooling.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
