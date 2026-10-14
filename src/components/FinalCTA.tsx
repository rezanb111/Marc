import { Send } from 'lucide-react';
import { CONFIG } from '@/config';
import { Reveal } from '@/components/Reveal';

export function FinalCTA() {
  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 p-10 text-center sm:p-16">
            {/* Gradient panel background */}
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  'linear-gradient(135deg, rgba(0,229,192,0.15) 0%, rgba(108,124,255,0.15) 50%, rgba(245,196,81,0.10) 100%)',
              }}
            />
            <div
              className="absolute inset-0 -z-10 opacity-50"
              style={{
                background:
                  'radial-gradient(ellipse 60% 80% at 50% 0%, rgba(0,229,192,0.2), transparent 60%)',
              }}
            />

            <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent-cyan/80">
              Ready to begin?
            </div>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Start in Telegram
              <br />
              <span className="gradient-text">in under a minute</span>
            </h2>

            <p className="mx-auto mt-4 max-w-md text-base text-white/55">
              Open the bot, pass the captcha, and request your first loan or
              start investing — no download required.
            </p>

            <a
              href={CONFIG.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow mt-8 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-accent-cyan to-accent-indigo px-10 py-4 text-base font-bold text-base-900 shadow-xl shadow-accent-indigo/20"
            >
              <Send className="h-5 w-5" />
              Open Bot
            </a>

            <div className="mt-8 flex items-center justify-center gap-3 text-xs text-white/35">
              <span className="h-px w-8 bg-white/15" />
              Powered by Telegram &amp; xRocket Pay
              <span className="h-px w-8 bg-white/15" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
