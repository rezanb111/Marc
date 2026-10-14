# Marcenzo Landing (Bolt / Vite + React)

Premium dark landing page for the **Marcenzo** Telegram loan bot.

- **Live (after Pages is on):** https://rezanb111.github.io/Marc/
- **Bot code:** https://github.com/rezanb111/marcenzo-loan-bot
- **Bolt:** [Open in Bolt](https://bolt.new/~/sb1-xfg6wyyp)

## Config

Edit `src/config.ts`:

| Key | Current |
|-----|---------|
| `botUrl` | `https://t.me/marcenzo` |
| `supportUrl` | `https://t.me/marcenzo` |
| `githubUrl` | loan-bot repo |

If your real bot username is different, change `botUrl` only.

## Local

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

`vite.config.ts` uses `base: '/Marc/'` for GitHub Pages project site.

## Enable GitHub Pages (one-time)

1. Repo **Settings → Pages**
2. Source: **GitHub Actions**
3. Push to `main` (or run workflow **Deploy GitHub Pages**)
4. Site URL: `https://rezanb111.github.io/Marc/`

Make the repo **Public** if Pages is restricted on private plans.
