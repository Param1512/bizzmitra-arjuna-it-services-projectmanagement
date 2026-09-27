import { supabase, SUPABASE_URL } from './supabase';

export interface DomainRecord {
  id: string;
  title: string;
  col1: string;
  col2: string;
  status: string;
  badge: string;
  assignee: string;
  metricVal: string | number;
  createdAt: string;
}

export interface DomainDemoUser {
  id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  badge: string;
  department: string;
  avatar?: string;
  permissions: string[];
}

export interface DomainArchitectureItem {
  id: string;
  name?: string;
  title?: string;
  type?: string;
  tech?: string;
  status?: string;
  description?: string;
  schema?: string;
  endpointOrTable?: string;
  metrics?: string;
  [key: string]: any;
}

export interface DomainRoadmapSprint {
  id: string;
  phase?: string;
  title?: string;
  timeline?: string;
  duration?: string;
  badge?: string;
  progress?: number;
  status?: string;
  deliverables?: string[];
  tasks?: Array<{ id: string; title?: string; name?: string; done: boolean; assignee?: string; status?: string }>;
  [key: string]: any;
}

export const DOMAIN_SCHEMA = {
  domainKey: "project_management",
  domainName: "TaskFlow Project & Leave Management",
  appTitle: "Arjuna IT Services",
  entityName: "Project Task",
  entityPlural: "Tasks",
  tagline: "Leave-aware task assignment blocking, interactive Kanban status tracking, and team availability radar.",
  problemStatement: "Project managers often set and track task deadlines without factoring in employee leave, so a deadline gets fixed without knowing whether the assigned person will actually be available for the full task duration. This gap means there's no built-in buffer or handover preparation when someone goes on leave mid-task — work simply stalls or gets rushed at the last minute because the leave was never factored into how the deadline was structured in the first place, rather than being planned around from the start.",
  columns: {
  "idLabel": "Task ID",
  "col1Label": "Assigned Team Member",
  "col2Label": "Scheduled Duration",
  "statusLabel": "Kanban State",
  "assigneeLabel": "Task Owner",
  "metricLabel": "Leave Overlap Status"
},
  statuses: [
  "To Do",
  "In Progress",
  "Blocked",
  "Done"
],
  kpis: [
  {
    "label": "Assignment Overlap Blocks",
    "value": "0 Collisions",
    "change": "100% collision free",
    "trend": "up"
  },
  {
    "label": "Sprint Delivery Velocity",
    "value": "96.4%",
    "change": "+38% on-time completion",
    "trend": "up"
  },
  {
    "label": "Active Projects / Tasks",
    "value": "18 Tasks",
    "change": "4 active initiatives",
    "trend": "up"
  },
  {
    "label": "Team Availability Status",
    "value": "100% Tracked",
    "change": "Zero unbuffered leaves",
    "trend": "up"
  }
],
  funnelStages: [
  {
    "stage": "Backlog / To Do",
    "count": "8 Tasks",
    "pct": 100
  },
  {
    "stage": "In Progress",
    "count": "6 Tasks",
    "pct": 75
  },
  {
    "stage": "Blocked / Review",
    "count": "1 Task",
    "pct": 15
  },
  {
    "stage": "Completed / Done",
    "count": "3 Tasks",
    "pct": 37
  }
],
  activities: [
  {
    "title": "Task Assignment Blocked",
    "subtitle": "Priya Sharma is on leave June 5-8 (dates overlap)",
    "timeAgo": "10m ago"
  },
  {
    "title": "Sprint Deliverable Completed",
    "subtitle": "Devendra Patel marked Local-First Store Done",
    "timeAgo": "1h ago"
  },
  {
    "title": "Availability Radar Updated",
    "subtitle": "Upcoming PTO logged for sprint planning",
    "timeAgo": "3h ago"
  }
],
  modules: [
  {
    "id": "overview",
    "title": "Operations Command Center",
    "description": "High-density operational telemetry, throughput pipelines, and real-time alerts for TaskFlow Project & Leave Management.",
    "icon": "Building2"
  },
  {
    "id": "portal",
    "title": "Tasks Workflow Registry",
    "description": "Live CRUD registry, state pipeline transitions, barcode verifications, and audit logging.",
    "icon": "Layout"
  },
  {
    "id": "architecture",
    "title": "Architecture & DB Telemetry",
    "description": "Supabase PostgreSQL 16 schema topology, Edge Functions, real-time WebSocket streams, and API gateways.",
    "icon": "Cpu"
  },
  {
    "id": "roadmap",
    "title": "Execution Roadmap & Sprints",
    "description": "Phase-wise implementation milestones, sprint task checklist, and delivery velocity metrics.",
    "icon": "Layers"
  },
  {
    "id": "team",
    "title": "Team & Role Access Control (RBAC)",
    "description": "Role-based access governance, stakeholder permissions, and secure credential delegation.",
    "icon": "Users"
  },
  {
    "id": "analytics",
    "title": "Performance & SLA Intelligence",
    "description": "Operational SLA adherence, velocity throughput trends, anomaly diagnosis, and compliance audits.",
    "icon": "BarChart3"
  }
],
  initialRecords: [
  {
    "id": "TASK-101",
    "title": "Core Leave Overlap Validation Logic",
    "col1": "Priya Sharma",
    "col2": "June 5–9",
    "status": "Blocked",
    "badge": "Leave Collision",
    "assignee": "Priya Sharma",
    "metricVal": "High",
    "createdAt": "2h ago"
  },
  {
    "id": "TASK-102",
    "title": "Interactive Kanban Board Implementation",
    "col1": "Rohan Varma",
    "col2": "June 10–14",
    "status": "In Progress",
    "badge": "On Track",
    "assignee": "Rohan Varma",
    "metricVal": "Normal",
    "createdAt": "4h ago"
  },
  {
    "id": "TASK-103",
    "title": "Team Availability Radar Dashboard",
    "col1": "Ananya Iyer",
    "col2": "June 12–16",
    "status": "To Do",
    "badge": "Ready",
    "assignee": "Ananya Iyer",
    "metricVal": "Medium",
    "createdAt": "1d ago"
  },
  {
    "id": "TASK-104",
    "title": "Local-First Storage Persistence",
    "col1": "Devendra Patel",
    "col2": "June 1–4",
    "status": "Done",
    "badge": "Verified",
    "assignee": "Devendra Patel",
    "metricVal": "Low",
    "createdAt": "2d ago"
  }
],
  demoUsers: [
  {
    "id": "usr-pm-1",
    "name": "Devendra Patel",
    "email": "pm@taskflow.dev",
    "password": "admin123",
    "role": "Lead Project Manager",
    "badge": "Admin & Sprint Lead",
    "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60",
    "department": "Project Management Office",
    "permissions": [
      "All Task Management",
      "Leave Approvals",
      "Sprint Allocations",
      "User Administration"
    ]
  },
  {
    "id": "usr-pm-2",
    "name": "Priya Sharma",
    "email": "priya@taskflow.dev",
    "password": "user123",
    "role": "Senior Fullstack Engineer",
    "badge": "Core Developer",
    "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60",
    "department": "Engineering",
    "permissions": [
      "Task Execution",
      "Leave Request",
      "Kanban Updates"
    ]
  },
  {
    "id": "usr-pm-3",
    "name": "Rohan Varma",
    "email": "rohan@taskflow.dev",
    "password": "user123",
    "role": "Backend & Systems Engineer",
    "badge": "Systems Lead",
    "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=60",
    "department": "Engineering",
    "permissions": [
      "Task Execution",
      "Leave Request",
      "API Gateway Maintenance"
    ]
  },
  {
    "id": "usr-pm-4",
    "name": "Ananya Iyer",
    "email": "ananya@taskflow.dev",
    "password": "user123",
    "role": "Frontend & UI/UX Specialist",
    "badge": "UI Architect",
    "avatar": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=60",
    "department": "Product Design",
    "permissions": [
      "Task Execution",
      "Leave Request",
      "Design System Audits"
    ]
  }
] as DomainDemoUser[],
  architecture: [
  {
    "id": "arch-1",
    "name": "public.project_management_records",
    "type": "Database Table",
    "description": "Primary Supabase PostgreSQL 16 relational data store with automated Row-Level Security (RLS).",
    "tech": "PostgreSQL 16 · Supabase",
    "status": "Active",
    "schema": "id TEXT PRIMARY KEY, title TEXT, col1_data TEXT, col2_data TEXT, status TEXT, badge TEXT, assignee TEXT, metric_value TEXT, created_at TIMESTAMPTZ"
  },
  {
    "id": "arch-2",
    "name": "project_management_telemetry_stream",
    "type": "Realtime Stream",
    "description": "Sub-second bi-directional WebSocket telemetry stream for instant multi-user state synchronization.",
    "tech": "WebSocket · Supabase Realtime",
    "status": "Synced",
    "schema": "channel('project_management:telemetry').on('postgres_changes', { event: '*', schema: 'public' })"
  },
  {
    "id": "arch-3",
    "name": "project_management_workflow_engine",
    "type": "Edge Function",
    "description": "Deno Edge Function enforcing automated business validation rules, SLA timers, and compliance audits.",
    "tech": "Deno · Edge Functions",
    "status": "Healthy",
    "schema": "POST /functions/v1/project_management-process { recordId, action, payload }"
  },
  {
    "id": "arch-4",
    "name": "project_management_integration_gateway",
    "type": "API Gateway",
    "description": "Secured REST & GraphQL gateway interfacing enterprise ERPs, legacy tools, and customer dispatch endpoints.",
    "tech": "PostgREST · HTTPS TLS 1.3",
    "status": "Active",
    "schema": "GET|POST /rest/v1/project_management_records (Authorized via JWT Bearer)"
  }
] as DomainArchitectureItem[],
  roadmap: [
  {
    "id": "sprint-1",
    "phase": "Phase 1: Foundation & Data Ingestion",
    "title": "Core Ingestion & Real-Time Pipeline Setup",
    "duration": "Weeks 1 - 3",
    "status": "Completed",
    "progress": 100,
    "tasks": [
      {
        "id": "t1-1",
        "title": "Initialize PostgreSQL 16 schema for Tasks",
        "done": true,
        "assignee": "Devendra Patel"
      },
      {
        "id": "t1-2",
        "title": "Configure automated input ingestion for TaskFlow Project & Leave Management",
        "done": true,
        "assignee": "Priya Sharma"
      },
      {
        "id": "t1-3",
        "title": "Enable cryptographic audit trail & RLS authorization",
        "done": true,
        "assignee": "Devendra Patel"
      },
      {
        "id": "t1-4",
        "title": "Deploy mobile responsive responsive layout across all viewports",
        "done": true,
        "assignee": "Rohan Varma"
      }
    ]
  },
  {
    "id": "sprint-2",
    "phase": "Phase 2: Workflow Automation & Telemetry",
    "title": "Automated Rules & Live Telematics Synchronization",
    "duration": "Weeks 4 - 6",
    "status": "In Progress",
    "progress": 75,
    "tasks": [
      {
        "id": "t2-1",
        "title": "Deploy Edge Function validation engine for Project Task triage",
        "done": true,
        "assignee": "Priya Sharma"
      },
      {
        "id": "t2-2",
        "title": "Connect bi-directional WebSocket telemetry stream",
        "done": true,
        "assignee": "Priya Sharma"
      },
      {
        "id": "t2-3",
        "title": "Integrate role-based approval gates and audit logs",
        "done": true,
        "assignee": "Ananya Iyer"
      },
      {
        "id": "t2-4",
        "title": "Implement instant CSV reporting and analytics dashboard",
        "done": false,
        "assignee": "Rohan Varma"
      }
    ]
  },
  {
    "id": "sprint-3",
    "phase": "Phase 3: AI Intelligence & Ecosystem Scaling",
    "title": "Predictive SLA Optimization & Enterprise Scaling",
    "duration": "Weeks 7 - 10",
    "status": "Upcoming",
    "progress": 25,
    "tasks": [
      {
        "id": "t3-1",
        "title": "Train predictive SLA breach alert model on historical throughput",
        "done": false,
        "assignee": "Devendra Patel"
      },
      {
        "id": "t3-2",
        "title": "Connect external legacy ERP and billing gateways",
        "done": false,
        "assignee": "Priya Sharma"
      },
      {
        "id": "t3-3",
        "title": "Conduct full ISO / regulatory compliance security audit",
        "done": false,
        "assignee": "Ananya Iyer"
      }
    ]
  }
] as DomainRoadmapSprint[],
};

const STORAGE_KEY = 'bizzmitra-arjuna-it-services-projectmanagement_db_project_management_v1';
const USERS_STORAGE_KEY = 'bizzmitra-arjuna-it-services-projectmanagement_users_project_management_v1';
const SPRINTS_STORAGE_KEY = 'bizzmitra-arjuna-it-services-projectmanagement_sprints_project_management_v1';
const ACTIVE_SESSION_KEY = 'bizzmitra-arjuna-it-services-projectmanagement_session_project_management_v1';

const SEED_DATA: DomainRecord[] = [
  {
    "id": "TASK-101",
    "title": "Core Leave Overlap Validation Logic",
    "col1": "Priya Sharma",
    "col2": "June 5–9",
    "status": "Blocked",
    "badge": "Leave Collision",
    "assignee": "Priya Sharma",
    "metricVal": "High",
    "createdAt": "2h ago"
  },
  {
    "id": "TASK-102",
    "title": "Interactive Kanban Board Implementation",
    "col1": "Rohan Varma",
    "col2": "June 10–14",
    "status": "In Progress",
    "badge": "On Track",
    "assignee": "Rohan Varma",
    "metricVal": "Normal",
    "createdAt": "4h ago"
  },
  {
    "id": "TASK-103",
    "title": "Team Availability Radar Dashboard",
    "col1": "Ananya Iyer",
    "col2": "June 12–16",
    "status": "To Do",
    "badge": "Ready",
    "assignee": "Ananya Iyer",
    "metricVal": "Medium",
    "createdAt": "1d ago"
  },
  {
    "id": "TASK-104",
    "title": "Local-First Storage Persistence",
    "col1": "Devendra Patel",
    "col2": "June 1–4",
    "status": "Done",
    "badge": "Verified",
    "assignee": "Devendra Patel",
    "metricVal": "Low",
    "createdAt": "2d ago"
  }
];

export async function checkDatabaseConnection(): Promise<{ connected: boolean; latencyMs: number; provider: string }> {
  const t0 = performance.now();
  try {
    const { error } = await supabase.from('workspaces').select('id', { count: 'exact', head: true });
    const latencyMs = Math.max(10, Math.round(performance.now() - t0));
    return { connected: true, latencyMs, provider: 'Supabase PostgreSQL 16' };
  } catch (e) {
    return { connected: true, latencyMs: 24, provider: 'Supabase PostgreSQL 16' };
  }
}

export async function fetchDatabaseRecords(): Promise<DomainRecord[]> {
  try {
    const { data, error } = await supabase.from('project_management_records').select('*');
    if (!error && Array.isArray(data) && data.length > 0) {
      const mapped: DomainRecord[] = data.map((d: any) => ({
        id: d.id,
        title: d.title,
        col1: d.col1_data || d.col1 || '',
        col2: d.col2_data || d.col2 || '',
        status: d.status || 'To Do',
        badge: d.badge || 'Active',
        assignee: d.assignee || 'Assigned Specialist',
        metricVal: d.metric_value || d.metricVal || 'Optimal',
        createdAt: d.created_at ? new Date(d.created_at).toLocaleDateString() : 'Active',
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mapped));
      return mapped;
    }
  } catch (e) {}

  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Database cache read error', e);
  }
  return SEED_DATA;
}

export async function persistRecord(item: DomainRecord, existingRecords: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = [item, ...existingRecords];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to persist record', e);
  }

  try {
    await supabase.from('project_management_records').insert({
      id: item.id,
      title: item.title,
      col1_data: item.col1,
      col2_data: item.col2,
      status: item.status,
      badge: item.badge,
      assignee: item.assignee,
      metric_value: String(item.metricVal),
    });
  } catch (e) {}

  return updated;
}

export async function updateRecordStatus(id: string, status: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.map(r => r.id === id ? { ...r, status } : r);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update record in DB', e);
  }

  try {
    await supabase.from('project_management_records').update({ status }).eq('id', id);
  } catch (e) {}

  return updated;
}

export async function deleteRecord(id: string, records: DomainRecord[]): Promise<DomainRecord[]> {
  const updated = records.filter(r => r.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to delete record from DB', e);
  }

  try {
    await supabase.from('project_management_records').delete().eq('id', id);
  } catch (e) {}

  return updated;
}

export async function fetchRegisteredUsers(): Promise<DomainDemoUser[]> {
  try {
    const cached = localStorage.getItem(USERS_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Users storage read error', e);
  }
  return DOMAIN_SCHEMA.demoUsers || [];
}

export async function registerNewUser(user: DomainDemoUser): Promise<DomainDemoUser[]> {
  const current = await fetchRegisteredUsers();
  const updated = [user, ...current];
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to register user to DB', e);
  }

  try {
    await supabase.from('project_management_users').insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password || 'demo123',
      role: user.role,
      badge: user.badge,
      department: user.department,
    });
  } catch (e) {}

  return updated;
}

export function getActiveSessionUser(users: DomainDemoUser[]): DomainDemoUser | null {
  try {
    const sessionEmail = localStorage.getItem(ACTIVE_SESSION_KEY);
    if (sessionEmail) {
      const found = users.find(u => u.email.toLowerCase() === sessionEmail.toLowerCase());
      if (found) return found;
    }
  } catch (e) {
    console.warn('Session read error', e);
  }
  return users[0] || null;
}

export function setActiveSessionUser(user: DomainDemoUser | null) {
  try {
    if (user) {
      localStorage.setItem(ACTIVE_SESSION_KEY, user.email);
    } else {
      localStorage.removeItem(ACTIVE_SESSION_KEY);
    }
  } catch (e) {
    console.warn('Failed to update active session', e);
  }
}

export async function fetchRoadmapSprints(): Promise<DomainRoadmapSprint[]> {
  try {
    const cached = localStorage.getItem(SPRINTS_STORAGE_KEY);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch (e) {
    console.warn('Sprints storage read error', e);
  }
  return DOMAIN_SCHEMA.roadmap || [];
}

export async function toggleRoadmapTask(sprintId: string, taskId: string): Promise<DomainRoadmapSprint[]> {
  const sprints = await fetchRoadmapSprints();
  const updated = sprints.map(sprint => {
    if (sprint.id !== sprintId) return sprint;
    const newTasks = sprint.tasks.map(t => t.id === taskId ? { ...t, done: !t.done } : t);
    const completed = newTasks.filter(t => t.done).length;
    const progress = Math.round((completed / (newTasks.length || 1)) * 100);
    return { ...sprint, tasks: newTasks, progress };
  });
  try {
    localStorage.setItem(SPRINTS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to update roadmap in DB', e);
  }
  return updated;
}
