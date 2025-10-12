# 🤖 Claude Code Integration Guide

## SuperClaude Framework Integration

This project is built with **Claude Code** using the **SuperClaude** framework with specialized personas and MCP server integration.

---

## 🎭 **ACTIVE PERSONAS**

### 1. **Frontend Persona** (`--persona-frontend`)
**Priority**: User experience > Accessibility > Performance > Technical elegance

**Responsibilities**:
- Build stunning UI components with Framer Motion animations
- Ensure WCAG 2.1 AA accessibility compliance
- Optimize Core Web Vitals (LCP <2.5s, FID <100ms, CLS <0.1)
- Implement responsive design across all breakpoints

**MCP Preferences**:
- Primary: Magic (UI component generation)
- Secondary: Playwright (interaction testing)

---

### 2. **Scribe Persona** (`--persona-scribe=en`)
**Priority**: Clarity > Audience needs > Completeness > Brevity

**Copywriting Style**: **Alex Hormozi**
- Direct, no-fluff language
- Value-first messaging
- Urgency and scarcity (price doubling)
- Action-oriented CTAs
- Pain → Solution → Value framework

**Responsibilities**:
- Craft compelling headlines and CTAs
- Write benefit-driven copy
- Maintain Hormozi's "blunt, direct" style
- Ensure copy drives conversion

---

### 3. **DevOps Persona** (`--persona-devops`)
**Priority**: Automation > Observability > Reliability > Scalability

**Responsibilities**:
- Manage dev server lifecycle
- Handle port conflicts and restarts
- Optimize build process for Netlify
- Implement logging and state tracking

---

## 🔧 **MCP SERVER INTEGRATION**

### Context7 (`--c7`)
**Purpose**: Get latest package versions and framework patterns

**Usage**:
```bash
# Claude will auto-activate Context7 when:
# - Installing dependencies
# - Checking framework best practices
# - Looking up Next.js 14 patterns
```

**Example**:
- "What's the latest version of Next.js?"
- "Show me Next.js App Router best practices"
- "How to integrate Framer Motion with Next.js 14?"

---

### Magic (`--magic`)
**Purpose**: Modern UI component generation with design system integration

**Usage**:
```bash
# Claude will auto-activate Magic for:
# - Building UI components
# - Creating animated sections
# - Implementing design system
```

**Example**:
- "Create a Hero section with smooth animations"
- "Build an accordion FAQ component"
- "Design a sticky CTA button with hover effects"

---

### Playwright (`--play`)
**Purpose**: Browser automation, visual testing, performance validation

**Usage**:
```bash
# Use Playwright to:
# - Test responsive design
# - Validate animations
# - Check cross-browser compatibility
```

**Example**:
- "Test the funnel page in different viewport sizes"
- "Validate CTA button interactions"
- "Check video embed playback"

---

## 🚀 **SLASH COMMANDS**

### Development Commands
```bash
# Build the project
/build

# Implement a new feature
/implement "Hero section with VSL embed"

# Improve existing code
/improve --focus performance

# Test the application
/test --type e2e
```

### Analysis Commands
```bash
# Analyze the codebase
/analyze --scope project

# Troubleshoot issues
/troubleshoot "Build failing on Netlify"

# Explain concepts
/explain "Next.js App Router vs Pages Router"
```

### Documentation Commands
```bash
# Generate documentation
/document components/sections

# Create deployment guide
/document deployment
```

---

## 🎯 **TASK MANAGEMENT**

### TodoWrite System
Claude Code uses TodoWrite to track progress across sessions.

**Task States**:
- `pending` 📋 - Ready to start
- `in_progress` 🔄 - Currently working on
- `completed` ✅ - Finished successfully
- `blocked` 🚧 - Waiting on dependency

**Location**: `.state/todolist.json`

**View Current Tasks**:
```bash
cat .state/todolist.json | jq '.todos[] | select(.status != "completed")'
```

---

## 🧠 **THINKING MODES**

### `--think` (4K tokens)
Multi-file analysis, recommended for:
- Planning component architecture
- Analyzing import chains
- Reviewing cross-module dependencies

### `--think-hard` (10K tokens)
Deep architectural analysis for:
- System-wide refactoring
- Performance optimization planning
- Security audits

### `--ultrathink` (32K tokens) ⚡ **ACTIVE**
Maximum depth analysis for:
- Complex system redesign
- Critical project decisions
- Comprehensive planning

**Current Usage**: Project architecture and initial setup

---

## 🎨 **COLOR THEME REFERENCE**

```typescript
// Theme colors (already configured in tailwind.config.ts)
{
  light: '#F9F9FB',        // Backgrounds
  primary: '#01355A',      // Main brand color
  primaryDark: '#01303E',  // Darker brand
  accent: '#01F1EB',       // CTAs, highlights
  secondary: '#267090'     // Supporting elements
}
```

---

## 📊 **LOGGING & STATE MANAGEMENT**

### Session Logs
**Location**: `.logs/session-YYYY-MM-DD.log`

**Format**:
```
2025-10-10 12:34:56 - [INFO] Session started
2025-10-10 12:35:01 - [TASK] Installing Next.js dependencies
2025-10-10 12:40:12 - [SUCCESS] Dependencies installed
```

### Error Logs
**Location**: `.logs/error-YYYY-MM-DD.log`

**Auto-logged**:
- Build failures
- Runtime errors
- Dependency installation issues

### State Tracking
**Location**: `.state/current-state.json`

**Schema**:
```json
{
  "timestamp": "2025-10-10T12:34:56Z",
  "phase": "setup|development|testing|deployment",
  "status": "in_progress|completed|blocked",
  "currentTask": "Task description",
  "completedMilestones": [],
  "nextSteps": []
}
```

---

## 🔄 **RECOVERY PROTOCOL**

If Claude Code loses context or power interrupts:

1. **Read** `starthere.md` for current project state
2. **Check** `.state/current-state.json` for last known position
3. **Review** `.state/todolist.json` for pending tasks
4. **Scan** `.logs/session-YYYY-MM-DD.log` for recent activity
5. **Resume** from last in_progress or next pending task

---

## 🚨 **FLAG REFERENCE**

### Auto-Activated Flags
- `--persona-frontend` - UI/UX focus
- `--persona-scribe=en` - Hormozi-style copywriting
- `--persona-devops` - Deployment & infrastructure
- `--ultrathink` - Maximum analysis depth
- `--c7` - Context7 for package lookups
- `--magic` - UI component generation

### Manual Flags (when needed)
```bash
# Compress output for large responses
--uc

# Validate before execution
--validate

# Enable Playwright testing
--play

# Loop mode for iterative improvements
--loop
```

---

## 📞 **CONTACT & RESOURCES**

**Project Owner**: alt@altcutman.com
**WhatsApp**: +64 21 255 0493
**PRD**: `/mnt/c/project/skoolmonymodule2/prd.md`
**Framework Docs**: https://nextjs.org/docs
**Deployment**: Netlify (static export)

---

## 💡 **BEST PRACTICES**

1. **Dependencies**: Install one-by-one (slow machine)
2. **Commits**: Create after each major milestone
3. **Testing**: Use Playwright for visual validation
4. **Logs**: Check logs before troubleshooting
5. **State**: Update `.state/current-state.json` after phase changes
6. **Recovery**: Reference `starthere.md` if context lost

---

**⚡ Quick Start After Recovery**:
```bash
cd /mnt/c/project/skoolmonymodule2/ai-agency-funnel/dev
cat docs/starthere.md
cat .state/current-state.json
npm run dev
```
