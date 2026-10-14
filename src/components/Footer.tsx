import { Send, Github } from 'lucide-react';
import { CONFIG } from '@/config';

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Logo */}
          <div className="text-lg font-extrabold tracking-tight gradient-text-cyan">
            MARCENZO
          </div>

          {/* Links */}
          <div className="flex items-center gap-5">
            <a
              href={CONFIG.botUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
            >
              <Send className="h-4 w-4" />
              Telegram
            </a>
            <a
              href={CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={CONFIG.supportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-white/50 transition-colors hover:text-white"
            >
              <Send className="h-4 w-4" />
              Support
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs leading-relaxed text-white/30">
            Marcenzo · Powered by Telegram &amp; xRocket Pay. Not financial
            advice. Admin-managed P2P tooling.
          </p>
        </div>
      </div>
    </footer>
  );
}
