# 🚀 Development Workspace - AI Agency Funnel

**Development environment for the AI Agency Mentorship funnel page.**

---

## 🏃 Quick Start

```bash
# Install dependencies (one-by-one on slow machine)
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Export static site
npm run export
```

---

## 📁 Folder Structure

```
dev/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main funnel page
│   │   ├── enroll/
│   │   │   └── page.tsx        # CTA landing page
│   │   └── globals.css         # Global styles
│   │
│   ├── components/
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── Proof.tsx
│   │   │   ├── ValueLadder.tsx
│   │   │   ├── Guarantee.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── OfferRecap.tsx
│   │   │   └── Footer.tsx
│   │   │
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── accordion.tsx
│   │   │   └── card.tsx
│   │   │
│   │   └── shared/             # Shared components
│   │       ├── StickyCTA.tsx
│   │       ├── VideoPlayer.tsx
│   │       └── Countdown.tsx
│   │
│   ├── lib/
│   │   ├── utils.ts            # Utility functions
│   │   └── analytics.ts        # Tracking events
│   │
│   └── styles/
│       └── theme.ts            # Color theme config
│
├── public/
│   └── images/                 # Static assets
│       ├── group.webp
│       ├── jadyn.webp
│       └── eric.webp
│
├── docs/
│   ├── starthere.md            # ⭐ Recovery & quick start
│   ├── claude.md               # Claude Code integration
│   └── architecture.md         # System architecture
│
├── .logs/                      # Session logs
│   ├── session-YYYY-MM-DD.log
│   └── error-YYYY-MM-DD.log
│
├── .state/                     # State tracking
│   ├── current-state.json      # Current project state
│   └── todolist.json           # Todo persistence
│
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md                   # This file
```

---

## 🛠️ Development Commands

### Server Management
```bash
# Start dev server
npm run dev

# Start on different port (if 3000 is in use)
npm run dev -- -p 3001

# Check running processes
ps aux | grep node

# Kill process on port 3000
lsof -i :3000
kill -9 <PID>
```

### Build Commands
```bash
# Development build
npm run dev

# Production build
npm run build

# Export static site (for Netlify)
npm run export

# Type checking
npx tsc --noEmit

# Lint
npm run lint
```

### Logging
```bash
# View current session log
tail -f .logs/session-$(date +%Y-%m-%d).log

# View error log
tail -f .logs/error-$(date +%Y-%m-%d).log

# Add manual log entry
echo "$(date '+%Y-%m-%d %H:%M:%S') - [INFO] Your message" >> .logs/session-$(date +%Y-%m-%d).log
```

---

## 🎨 Color Theme

```typescript
// Tailwind config colors
{
  light: '#F9F9FB',        // Backgrounds
  primary: '#01355A',      // Main brand
  primaryDark: '#01303E',  // Darker accent
  accent: '#01F1EB',       // CTAs, highlights
  secondary: '#267090'     // Supporting
}
```

---

## 📦 Dependencies

**Core**:
- `next` - Next.js 14
- `react` - React 18
- `typescript` - TypeScript

**Styling**:
- `tailwindcss` - Utility CSS
- `framer-motion` - Animations

**UI Components**:
- `shadcn/ui` components
- `lucide-react` - Icons

**Additional**:
- `react-youtube` - YouTube embeds
- `@vercel/analytics` - Analytics (optional)

---

## 🚨 Troubleshooting

### Slow Installation (Expected on WSL + old hardware)
- Install dependencies **one-by-one**
- Wait for each to complete (may take 2-3 min per package)
- This is normal for your environment

### Port Already in Use
```bash
# Find and kill
lsof -i :3000
kill -9 <PID>

# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

---

## 📚 Documentation

- **Recovery Guide**: `docs/starthere.md`
- **Claude Integration**: `docs/claude.md`
- **PRD**: `../../prd.md`

---

## 🤖 AI-Powered Development

This project is built with **Claude Code** using:
- Frontend Persona (UI/UX focus)
- Scribe Persona (Alex Hormozi copywriting)
- DevOps Persona (deployment automation)
- Context7 MCP (latest packages)
- Magic MCP (UI components)

See `docs/claude.md` for full integration details.

---

**💡 Pro Tip**: Always check `docs/starthere.md` if you lose context or power!
