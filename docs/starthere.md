# 🚀 START HERE - AI Agency Funnel Recovery Protocol

**Last Updated**: {{TIMESTAMP}}
**Project Status**: {{STATUS}}
**Current Phase**: {{PHASE}}

---

## 🔄 **RECOVERY PROTOCOL** (If context lost or power interrupted)

### Step 1: Check Project State
```bash
cd /mnt/c/project/skoolmonymodule2/ai-agency-funnel/dev
cat .state/current-state.json
```

### Step 2: Review Recent Logs
```bash
tail -n 50 .logs/session-$(date +%Y-%m-%d).log
```

### Step 3: Check Todo List Status
```bash
cat .state/todolist.json
```

### Step 4: Review What's Been Completed
- Check `docs/progress.md` for completed milestones
- Review git history if initialized: `git log --oneline -10`
- Check running processes: `ps aux | grep node`

### Step 5: Resume Work
- Use the todo list from `.state/todolist.json`
- Continue from the last "in_progress" or first "pending" task
- Update logs when resuming: `echo "SESSION RESUMED: $(date)" >> .logs/session-$(date +%Y-%m-%d).log`

---

## 📋 **PROJECT OVERVIEW**

**Project**: AI Agency Mentorship Funnel Page
**Framework**: Next.js 14 + TypeScript + Tailwind CSS + Framer Motion
**Deployment**: Netlify (static export)
**Environment**: WSL Ubuntu on Windows (slow machine - install dependencies one-by-one)

**Color Theme**:
- `#F9F9FB` - Light background
- `#01355A` - Primary dark blue
- `#01303E` - Darker blue
- `#01F1EB` - Accent cyan
- `#267090` - Mid blue

---

## 🎯 **CURRENT STATE TRACKER**

| Component | Status | Location | Notes |
|-----------|--------|----------|-------|
| Project Structure | ✅ | `/dev/` | Folders created |
| Images | ✅ | `/dev/public/images/` | group, jadyn, eric copied |
| Next.js Init | ⏳ | `/dev/` | Pending |
| Dependencies | ⏳ | `/dev/package.json` | Install one-by-one |
| Hero Section | ❌ | `/dev/src/components/sections/Hero.tsx` | Not started |
| Proof Section | ❌ | `/dev/src/components/sections/Proof.tsx` | Not started |
| Value Ladder | ❌ | `/dev/src/components/sections/ValueLadder.tsx` | Not started |
| Guarantee | ❌ | `/dev/src/components/sections/Guarantee.tsx` | Not started |
| Testimonials | ❌ | `/dev/src/components/sections/Testimonials.tsx` | Not started |
| FAQ | ❌ | `/dev/src/components/sections/FAQ.tsx` | Not started |
| Offer Recap | ❌ | `/dev/src/components/sections/OfferRecap.tsx` | Not started |
| Footer | ❌ | `/dev/src/components/sections/Footer.tsx` | Not started |
| Page 2 (CTA) | ❌ | `/dev/src/app/enroll/page.tsx` | Not started |
| Dev Server | ❌ | Port 3000 | Not running |
| Production Build | ❌ | `/dist/` | Not built |

---

## 🛠️ **COMMON COMMANDS**

### Development
```bash
# Navigate to dev folder
cd /mnt/c/project/skoolmonymodule2/ai-agency-funnel/dev

# Install dependencies (ONE AT A TIME on slow machine)
npm install next@latest
npm install react react-dom
npm install typescript @types/react @types/node
# ... etc

# Start dev server (may be slow on first run)
npm run dev

# Check if port 3000 is in use
lsof -i :3000 || netstat -tuln | grep 3000

# Kill process on port if needed
kill -9 $(lsof -t -i :3000)

# Build for production
npm run build

# Export static site for Netlify
npm run export
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

### State Management
```bash
# Update current state
node scripts/update-state.js "STATUS" "PHASE"

# Save todo snapshot
cp .state/todolist.json .state/todolist-backup-$(date +%Y%m%d-%H%M%S).json
```

---

## 📦 **DEPENDENCIES TO INSTALL** (One-by-one, slow machine)

### Core (Phase 1)
1. `next@latest` - Next.js framework
2. `react@latest` - React library
3. `react-dom@latest` - React DOM
4. `typescript` - TypeScript compiler
5. `@types/react` - React types
6. `@types/node` - Node types

### Styling (Phase 2)
7. `tailwindcss` - Utility CSS framework
8. `postcss` - CSS processor
9. `autoprefixer` - CSS vendor prefixing
10. `@tailwindcss/typography` - Typography plugin

### Animation (Phase 3)
11. `framer-motion` - Animation library

### UI Components (Phase 4)
12. `class-variance-authority` - For shadcn/ui
13. `clsx` - Classname utility
14. `tailwind-merge` - Tailwind class merging
15. `lucide-react` - Icons

### Additional (Phase 5)
16. `@vercel/analytics` - Analytics (optional)
17. `react-youtube` - YouTube embed

---

## 🎨 **PAGE SECTIONS** (Build Order)

1. **Hero** - VSL video + headline + CTA (priority 1)
2. **Sticky CTA** - Floating CTA button (priority 1)
3. **Proof** - 3 result images with captions (priority 2)
4. **Value Ladder** - What's included list (priority 2)
5. **Guarantee** - 30-day action guarantee (priority 2)
6. **Testimonials** - 6 VideoAsk embeds in grid (priority 3)
7. **FAQ** - Accordion with 7 questions (priority 3)
8. **Offer Recap** - Final pricing card + CTA (priority 2)
9. **Footer** - Contact, legal links (priority 4)
10. **Page 2** - Enrollment placeholder (priority 4)

---

## 🚨 **TROUBLESHOOTING**

### Port Already in Use
```bash
# Find and kill process
lsof -i :3000
kill -9 <PID>

# Or use alternative port
npm run dev -- -p 3001
```

### Slow Installation
- **Expected**: WSL on old hardware is slow
- **Solution**: Install dependencies one at a time, wait for completion
- **Don't panic**: Even if it takes 2-3 minutes per package

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Build Errors
```bash
# Check TypeScript errors
npx tsc --noEmit

# Check Next.js config
cat next.config.js
```

---

## 📞 **EXTERNAL RESOURCES**

- **VSL Video**: `https://www.youtube.com/watch?v=qVLv8agBFnA`
- **Testimonial Videos**: See `prd.md` lines 200-210 for VideoAsk URLs
- **PRD Document**: `/mnt/c/project/skoolmonymodule2/prd.md`
- **Images**: `/dev/public/images/` (group.webp, jadyn.webp, eric.webp)

---

## 🎯 **SUCCESS CRITERIA**

- ✅ Stunning UI/UX with smooth animations
- ✅ All 9 sections implemented per PRD
- ✅ Responsive on all breakpoints (320px - 1440px+)
- ✅ VSL video embedded and playable
- ✅ 6 testimonial videos embedded
- ✅ All CTAs link to `/enroll` page
- ✅ Color theme applied throughout
- ✅ Production build exported to `/dist/`
- ✅ Ready for Netlify deployment

---

**💡 Pro Tip**: Before making major changes, snapshot the current state:
```bash
./scripts/snapshot.sh "Before [description]"
```

**🔥 Emergency Reset**: If everything breaks:
```bash
cd /mnt/c/project/skoolmonymodule2/ai-agency-funnel/dev
rm -rf node_modules .next
npm install
npm run dev
```
