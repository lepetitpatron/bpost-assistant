# 🚀 Bpost Assistant — Complete Project Specification

**Bpost Assistant** is a developer knowledge hub and daily operations workstation designed specifically to assist with day-to-day operations at Bpost. It keeps track of tasks and provides automation tools for recurring tasks, while serving as a centralized workspace for snippets, commands, prompts, notes, context files, images, links, and custom types.

---

### 🎯 Problem Statement & Value Proposition

##### The Problem
Daily postal, logistical, and automation operational workflows at Bpost involve constant context switching and fragmented tracking:
* 📋 **Operational Checklist Overhead**: Tracking mandatory vs. optional daily operational checkpoints across manual notes leads to missed verification steps.
* 📝 **Fragmented Knowledge & Snippets**: Scripts, shell commands, prompt templates, and shift handover notes are scattered across local text files and terminal histories.
* 🔄 **Repetitive Task Automation**: Common recurring tasks at Bpost are performed manually rather than through streamlined, automated workflows.

##### The Solution
**Bpost Assistant** provides a unified, fast, single-user developer and operational workstation built with modern Angular v22:
* **Task Tracker**: Daily operational checklist managing mandatory and optional tasks with local JSON persistence (`tasks.json`).
* **Notebook & Freeform Canvas**: Unstructured scratchpad for shift notes, handovers, and quick calculations.
* **Developer Knowledge Hub**: Centralized repository for snippets, commands, prompts, notes, files, links, and custom operational types to automate daily Bpost workflows.

---

### 👥 Target Audience & Persona Mapping

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     Bpost Assistant User Persona                        │
├─────────────────────────────────────────────────────────────────────────┤
│ 📮 Bpost Operational Specialist & Developer                            │
│ Direct, friction-free personal workstation to track daily checklists,   │
│ store technical snippets/prompts, and automate recurring Bpost tasks.    │
└─────────────────────────────────────────────────────────────────────────┘
```

* **Target User**: Single-user internal productivity tool tailored for Bpost daily operations and automation tasks.
* **Core Drivers**: Angular v22 modern reactive performance, clean dark/light UI tokens, local JSON/file persistence, zero clutter, instant search and task management.

---

### 🏗️ Architecture & Component Diagram

```
                               ┌──────────────────────────────────────────────┐
                               │             Angular v22 App                  │
                               │    (Standalone Components / Signals / RxJS)  │
                               └──────┬───────────────────────────────┬───────┘
                                      │                               │
                      ┌───────────────┴───────────────┐               │
                      ▼                               ▼               ▼
           ┌─────────────────────┐         ┌────────────────────┐ ┌───────────────┐
           │   Task Management   │         │  Notebook Canvas   │ │ Developer Hub │
           │  - Mandatory/Opt    │         │  - Freeform Notes  │ │ - Snippets    │
           │  - Daily Auto Reset │         │  - Local Save      │ │ - Commands    │
           └──────────┬──────────┘         └────────────────────┘ │ - Prompts     │
                      │                                           └───────┬───────┘
                      ▼                                                   │
           ┌─────────────────────┐                                        ▼
           │     tasks.json      │                             ┌────────────────────┐
           │  (JSON Persistence) │                             │   Local Storage /  │
           └─────────────────────┘                             │   IndexedDB Engine │
                                                               └────────────────────┘
```

---

### 💎 Feature Breakdown

##### A. Core Modules Overview
| Module | Interface Element | Storage Engine | Description / Primary Function |
| ------ | ------ | ------ | ------ |
| **To-Do List** | Reactive Task Checklist | `tasks.json` | Tracks daily mandatory and optional operational checklist items. |
| **Notebook** | Freeform Multi-line Canvas | Local Text / Storage | Workspace for shift handovers, process notes, and scratchpad calculations. |
| **Knowledge Hub** | Filterable Resource Cards | Local File / Database | Manages snippets, shell commands, AI prompts, custom types, files, and links. |
| **Task Automation** | Automation Action Panel | Bpost Assistant Engine | Automates recurring daily operations and repetitive workflows at Bpost. |

##### B. Task Breakdown
* **Mandatory vs. Optional Flags**: Distinct visual tags distinguishing critical operational tasks from optional daily routines.
* **Data Fields**: Each task consists of three exact fields: `label` (string), `mandatory` (boolean), and `completed` (boolean).
* **Storage Engine**: Persists data directly to `tasks.json`.

##### C. Developer Knowledge Hub & Custom Types
* **Categorized Entries**: Direct management of Snippets (`#3b82f6`), Prompts (`#8b5cf6`), Commands (`#f97316`), Notes (`#fde047`), Links (`#10b981`), Files (`#6b7280`), and Images (`#ec4899`).
* **Custom Types**: Support for user-defined custom categories tailored to specific Bpost internal tools and APIs.

---

### 🗄️ Database & File Data Schema

#### `tasks.json` Structure
```json
[
  {
    "label": "Verify morning sorting dispatch",
    "mandatory": true,
    "completed": true
  },
  {
    "label": "Check shift handover log",
    "mandatory": true,
    "completed": false
  },
  {
    "label": "Clean and re-stock label printer",
    "mandatory": false,
    "completed": false
  }
]
```

#### TypeScript Data Interfaces (Angular v22)
```typescript
export interface Task {
  label: string;
  mandatory: boolean;
  completed: boolean;
}

export type ResourceType = 'snippet' | 'prompt' | 'command' | 'note' | 'link' | 'file' | 'image' | string;

export interface KnowledgeItem {
  id: string;
  title: string;
  type: ResourceType;
  content: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
```

---

### 🛠️ Technical Stack & Operational Guidelines

| Layer | Technology Chosen | Purpose / Guidelines |
| ------ | ------ | ------ |
| **Framework** | **Angular v22** | Modern standalone components, Signals, control flow syntax (`@if`, `@for`), typed reactive forms |
| **Language** | **TypeScript 5.x** | Strict typing for operational models, task status, and resource items |
| **Styling** | **Tailwind CSS / SCSS** | Clean Bpost branding palette with modern dark/light contrast |
| **Data Persistence** | **`tasks.json` + Local File Engine** | Lightweight file-based reading and writing for tasks and shift data |
| **Build & Tooling** | **Angular CLI / Vite** | `npm run dev`, `npm run build`, `npm run lint` |

---

### 💰 Monetization Structure

```
                  ┌─────────────────────────────────────────┐
                  │            Bpost Assistant              │
                  ├─────────────────────────────────────────┤
                  │ Internal / Single-User Personal Tool    │
                  │ Cost: $0 (Internal Bpost Workstation)   │
                  └─────────────────────────────────────────┘
```
* **Internal Workstation**: Non-commercial internal utility dedicated exclusively to assisting daily operations at Bpost.

---

### 🎨 UI/UX Specifications

##### Visual Design & Bpost Branding
* **Color Palette**: Bpost Red (`#DA291C`) primary accent, deep slate background (`#0f172a`), clean card surfaces (`#1e293b`), and vibrant category badges.
* **Layout Structure**:
  * **Sidebar**: Quick switching between To-Do Checklist, Freeform Notebook, Knowledge Hub, and Automation Tools.
  * **To-Do View**: Clear visual split between mandatory items (highlighted red badges) and optional items.
  * **Notebook Canvas**: Full-height, distraction-free auto-saving textarea.
  * **Knowledge Hub Grid**: High-contrast cards with syntax-highlighted code blocks, quick-copy commands, and type-based accent borders.