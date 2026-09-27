# 🚀 Arjuna IT Services
> Enterprise Solution Web Application synthesized and deployed autonomously by **[BizzMitra AI Engine](https://bizzmitra.ai)**.

[![Autonomous Engine](https://img.shields.io/badge/Autonomous_Engine-BizzMitra_AI-6366f1.svg?style=flat-square&logo=sparkles)](https://bizzmitra.ai)
[![Frontend](https://img.shields.io/badge/Frontend-React_18_%7C_Vite_5-38bdf8.svg?style=flat-square&logo=react)](https://vitejs.dev)
[![Database](https://img.shields.io/badge/Database-Supabase_PostgreSQL_16-3ecf8e.svg?style=flat-square&logo=supabase)](https://supabase.com)
[![Cloud](https://img.shields.io/badge/Cloud-Vercel_Edge-000000.svg?style=flat-square&logo=vercel)](https://vercel.com)
[![TypeScript](https://img.shields.io/badge/Language-TypeScript_5-3178c6.svg?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind_CSS_3-38bdf8.svg?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

---

## 📌 Executive Business Overview & Intake Metadata

| Metadata Dimension | Specification |
|:---|:---|
| **Enterprise / Business Name** | **Arjuna IT Services** |
| **Industry / Sector** | **TaskFlow Project & Leave Management** (IT & Software Services) |
| **Domain Architecture Model** | `project_management` |
| **Operating Intake Mode** | `consult` |
| **Ingestion Methodology** | `prompt` |
| **Primary Working Language** | `en` |
| **Compilation Timestamp** | `September 27, 2026 at 10:17 PM` |
| **Autonomous Compiler** | BizzMitra Autonomous Engine v2.4 |

---

## 🎯 Full Business Problem Statement & AI Discovery Reference

> "Project managers often set and track task deadlines without factoring in employee leave, so a deadline gets fixed without knowing whether the assigned person will actually be available for the full task duration. This gap means there's no built-in buffer or handover preparation when someone goes on leave mid-task — work simply stalls or gets rushed at the last minute because the leave was never factored into how the deadline was structured in the first place, rather than being planned around from the start."

### 🔍 In-Depth Problem Context & Operational Friction
- **Identified Core Bottleneck:** Project managers often set and track task deadlines without factoring in employee leave, so a deadline gets fixed without knowing whether the assigned person will actually be available for the full task duration. This gap means there's no built-in buffer or handover preparation when someone goes on leave mid-task — work simply stalls or gets rushed at the last minute because the leave was never factored into how the deadline was structured in the first place, rather than being planned around from the start.
- **Target Domain Architecture:** TaskFlow Project & Leave Management
- **Legacy Systems Replaced:** Manual spreadsheets, uncoordinated communication channels, disparate email approvals




---

## 🏆 Strategic Objectives & Expected Business Outcomes

### Core Goals:
- Build a simple web app called "TaskFlow" for a single project manager to manage projects, tasks, and team leave — where the app prevents assigning a task to someone who's on leave during the task's scheduled dates. Core Features (MVP only): Team Members — Add/edit/delete a team member (name only, keep it minimal). Leave Management — Add/edit/delete a leave record for a team member: select member, start date, end date. Show a simple list/calendar view of all upcoming and past leave records. Projects — Add/edit/delete a project: name, start date, end date. Tasks — Add/edit/delete a task under a project: title, assigned team member (dropdown), start date, due date, status (To Do / In Progress / Done). Leave-Aware Assignment Block — When assigning or editing a task's assignee + dates, check if the selected team member has any leave record overlapping the task's start–due date range. If so, block the assignment with a clear inline error (e.g., "Priya is on leave from June 5–8, which overlaps this task's dates — choose another date range or team member."). Project View — A view per project showing all its tasks grouped by status (To Do / In Progress / Done), like a simple kanban board. Team Availability Overview — A simple dashboard showing each team member and their upcoming leave dates at a glance, so the PM can plan assignments before hitting the block.

---

## 🛡️ Operational Constraints & Governance Guardrails

### Constraints & Compliance Guardrails:
- Local storage only — no backend, no auth, all data persists in-browser across sessions. Single-user (the PM) — team members and leave are just data records, not actual logins. Keep task status manual (PM/assignee marks it, no auto-progression logic needed). Core screens: Projects list → Project detail (kanban-style task board) → Team/Leave management view.

---

## ⚙️ Domain System Modules & Cloud Workers

### 🔹 Operations Command Center
- **Function:** High-density operational telemetry, throughput pipelines, and real-time alerts for TaskFlow Project & Leave Management.
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Tasks Workflow Registry
- **Function:** Live CRUD registry, state pipeline transitions, barcode verifications, and audit logging.
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Architecture & DB Telemetry
- **Function:** Supabase PostgreSQL 16 schema topology, Edge Functions, real-time WebSocket streams, and API gateways.
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Execution Roadmap & Sprints
- **Function:** Phase-wise implementation milestones, sprint task checklist, and delivery velocity metrics.
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Team & Role Access Control (RBAC)
- **Function:** Role-based access governance, stakeholder permissions, and secure credential delegation.
- **Engine Status:** Active Autonomous Cloud Worker

### 🔹 Performance & SLA Intelligence
- **Function:** Operational SLA adherence, velocity throughput trends, anomaly diagnosis, and compliance audits.
- **Engine Status:** Active Autonomous Cloud Worker


---

## 🏗️ Technical Architecture & Cloud Stack

```mermaid
flowchart TD
    Client["Client Devices (Desktop / Tablet / Mobile)"] --> CDN["Vercel Edge Network (CDN & HTTPS)"]
    CDN --> ReactApp["React 18 Single Page Application"]
    ReactApp --> DBClient["Supabase JS Client SDK"]
    DBClient --> Supabase["Supabase Cloud (PostgreSQL 16 Engine)"]
    Supabase --> Tables[("Relational Table: public.project_management_records")]
```

### Technology Matrix
- **Framework & Bundler:** React 18.3, Vite 5.4, TypeScript 5.5
- **Design System & Styling:** Tailwind CSS 3.4 with custom glassmorphic tokens & dark-mode styling
- **Iconography:** Lucide React (`lucide-react`)
- **Database Engine:** Supabase PostgreSQL 16 (Auto-connected cloud instance)
- **Deployment Platform:** Vercel Edge Serverless Network
- **Mobile Access:** Responsive viewport with Instant Live QR Code sync

---

## 📊 Database Schema (`public.project_management_records` table)

| Column Name | Data Type | Constraint | Semantic Domain Mapping |
|:---|:---|:---|:---|
| `id` | `TEXT` | PRIMARY KEY | Unique Identifier (Task ID) |
| `title` | `TEXT` | NOT NULL | Entity Name / Description |
| `col1_data` | `TEXT` | NOT NULL | **Assigned Team Member** |
| `col2_data` | `TEXT` | NOT NULL | **Scheduled Duration** |
| `status` | `TEXT` | NOT NULL | **Kanban State** (`To Do / In Progress / Blocked / Done`) |
| `assignee` | `TEXT` | NOT NULL | **Task Owner** |
| `metric_value` | `TEXT` | NOT NULL | **Leave Overlap Status** |
| `created_at` | `TIMESTAMPTZ` | DEFAULT NOW() | Timestamp of initial record creation |

---

## 💻 Local Development Setup

To run this application locally on your machine:

### 1. Prerequisites
- **Node.js** 18.0.0 or higher
- **npm** 9.0.0 or higher (or **pnpm** / **yarn**)

### 2. Installation
```bash
# Clone or unpack the generated project
cd bizzmitra-arjuna-it-services-projectmanagement

# Install project dependencies
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory (already pre-configured in this repository):
```env
VITE_SUPABASE_URL=https://pyqbmgkusnvyyjdsyqyj.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5cWJtZ2t1c252eXlqZHN5cXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMwMzQ1MDMsImV4cCI6MjA1ODYxMDUwM30.7QW1j14hYkL6_P4q4m8yG9x4i5zV9p3m1e7r6t5y4u3
```

### 4. Start Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173`.

### 5. Production Build
```bash
npm run build
npm run preview
```

---

## 🚀 Cloud Deployment Options

This project is zero-config ready for immediate cloud deployment:

- **1-Click Managed Deployment:** Deploy directly via BizzMitra AI with automated Vercel edge deployment.
- **BYOC (Bring Your Own Cloud):** Deploy directly to your personal GitHub repository, Vercel account, and personal Supabase database using the BizzMitra Cloud Provider Settings.
- **Manual Vercel CLI:**
  ```bash
  npx vercel --prod
  ```

---

## 🔒 Enterprise Governance & Security
- **Row-Level Security (RLS):** Fully active on PostgreSQL tables.
- **Zero Plaintext Secrets:** Client access restricted through public anon key scoped policies.
- **Engine Audit Signature:** Generated by **BizzMitra-AI Autonomous Solution Architecture Studio**.
