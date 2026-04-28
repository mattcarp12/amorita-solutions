import React from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  Handle,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";

// 1. Custom Node: Cloud (For Remote Repos)
const CloudNode = ({ data }) => (
  <div
    style={{
      background: "#f0f8ff",
      border: `2px solid ${data.borderColor || "#add8e6"}`,
      borderRadius: "40px",
      padding: "20px 30px",
      textAlign: "center",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      minWidth: "160px",
    }}
  >
    <Handle
      type="target"
      position={Position.Left}
      id="left-t"
      style={{ opacity: 0 }}
    />
    <Handle
      type="target"
      position={Position.Right}
      id="right-t"
      style={{ opacity: 0 }}
    />
    <Handle
      type="target"
      position={Position.Bottom}
      id="bottom-t"
      style={{ opacity: 0 }}
    />

    <div style={{ fontSize: "28px", marginBottom: "4px" }}>☁️</div>
    <div style={{ fontWeight: "bold", color: "#333" }}>{data.label}</div>
    <div style={{ fontSize: "12px", color: "#666" }}>{data.sub}</div>

    <Handle
      type="source"
      position={Position.Left}
      id="left-s"
      style={{ opacity: 0 }}
    />
    <Handle
      type="source"
      position={Position.Right}
      id="right-s"
      style={{ opacity: 0 }}
    />
    <Handle
      type="source"
      position={Position.Bottom}
      id="bottom-s"
      style={{ opacity: 0 }}
    />
  </div>
);

// 2. Custom Node: Desktop (For Local Machine)
const DesktopNode = ({ data }) => (
  <div
    style={{
      background: "#eef2f5",
      border: "3px solid #4a5568",
      borderRadius: "8px 8px 2px 2px",
      padding: "20px 40px",
      textAlign: "center",
      boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
      borderBottomWidth: "12px",
      minWidth: "220px",
    }}
  >
    <Handle
      type="target"
      position={Position.Top}
      id="top-left-t"
      style={{ left: "30%", opacity: 0 }}
    />
    <Handle
      type="source"
      position={Position.Top}
      id="top-right-s"
      style={{ left: "70%", opacity: 0 }}
    />

    <div style={{ fontSize: "36px" }}>💻</div>
    <div style={{ fontWeight: "bold", color: "#333", marginTop: "8px" }}>
      {data.label}
    </div>
    <div style={{ fontSize: "12px", color: "#666" }}>{data.sub}</div>
  </div>
);

// 3. Custom Node: Sticky Note (Rich Text formatting, Left Justified)
const NoteNode = ({ data }) => (
  <div
    style={{
      background: "#fffef0",
      border: "1px solid #f2d06b",
      borderRadius: "4px 12px 12px 4px",
      padding: "24px",
      boxShadow: "6px 6px 16px rgba(0,0,0,0.06)",
      minWidth: "380px",
      color: "#333",
      textAlign: "left", // Ensures text is explicitly left-aligned
      fontFamily: "system-ui, -apple-system, sans-serif",
    }}
  >
    <div
      style={{
        fontWeight: "800",
        fontSize: "16px",
        marginBottom: "16px",
        borderBottom: "2px dotted #f2d06b",
        paddingBottom: "10px",
        color: "#b78d12",
      }}
    >
      📝 Triangle Workflow Cheat Sheet
    </div>

    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      {data.steps.map((step, idx) => (
        <div key={idx}>
          <div
            style={{ fontSize: "14px", fontWeight: "600", color: "#2c3e50" }}
          >
            {step.title}
          </div>

          {step.command && (
            <div
              style={{
                fontFamily: "SFMono-Regular, Consolas, monospace",
                background: "#f8f9fa",
                border: "1px solid #e9ecef",
                padding: "6px 10px",
                borderRadius: "6px",
                marginTop: "6px",
                fontSize: "13px",
                color: "#d63384",
              }}
            >
              > {step.command}
            </div>
          )}

          <div
            style={{
              fontSize: "13px",
              color: "#6c757d",
              marginTop: "6px",
              lineHeight: "1.5",
            }}
          >
            {step.desc}
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Map custom nodes
const nodeTypes = { cloud: CloudNode, desktop: DesktopNode, note: NoteNode };

// 4. Define the Nodes
const initialNodes = [
  {
    id: "upstream",
    type: "cloud",
    position: { x: 100, y: 50 },
    data: {
      label: "Upstream",
      sub: "(Official Project)",
      borderColor: "#ff9933",
    },
  },
  {
    id: "origin",
    type: "cloud",
    position: { x: 500, y: 50 },
    data: { label: "Origin", sub: "(Your Fork)", borderColor: "#3399ff" },
  },
  {
    id: "local",
    type: "desktop",
    position: { x: 265, y: 320 },
    data: { label: "Local Machine", sub: "(main & feature branches)" },
  },
  {
    id: "commands-note",
    type: "note",
    position: { x: 800, y: 20 },
    data: {
      steps: [
        {
          title: "1. Sync Local (The Bridge)",
          command: "git fetch upstream && git rebase upstream/main",
          desc: "Pulls the latest official code and replays your local work cleanly on top, avoiding messy merge commits.",
        },
        {
          title: "2. Update Fork (Optional)",
          command: "git push origin main",
          desc: "Keeps your personal GitHub fork's main branch perfectly synced with the official project.",
        },
        {
          title: "3. Branch for Work",
          command: "git checkout -b feature-name",
          desc: "Never work directly on main! Isolate your new code in a dedicated feature branch.",
        },
        {
          title: "4. Push Your Branch",
          command: "git push -u origin feature-name",
          desc: "Uploads your new feature branch to your personal fork.",
        },
        {
          title: "5. Propose Changes",
          command: null, // No command, just a description
          desc: "Go to the official project's GitHub page and click 'Compare & Pull Request' to submit your work.",
        },
      ],
    },
  },
];

// 5. Define the Connections (Edges)
const markerEnd = { type: MarkerType.ArrowClosed, color: "#888" };

const initialEdges = [
  {
    id: "e-up-to-local",
    source: "upstream",
    target: "local",
    sourceHandle: "bottom-s",
    targetHandle: "top-left-t",
    animated: true,
    label: "1. Pull / Sync",
    style: { strokeWidth: 2, stroke: "#888" },
    markerEnd,
  },
  {
    id: "e-local-to-origin",
    source: "local",
    target: "origin",
    sourceHandle: "top-right-s",
    targetHandle: "bottom-t",
    animated: true,
    label: "2 & 4. Push Updates",
    style: { strokeWidth: 2, stroke: "#888" },
    markerEnd,
  },
  {
    id: "e-origin-to-up",
    source: "origin",
    target: "upstream",
    sourceHandle: "left-s",
    targetHandle: "right-t",
    label: "5. Pull Request",
    animated: true,
    style: { strokeWidth: 2, stroke: "#d947ba" },
    markerEnd: { type: MarkerType.ArrowClosed, color: "#d947ba" },
  },
];

// 6. Main Component
export default function TriangleGitWorkflow() {
  return (
    // {/* 100vw = 100% of window width, 100vh = 100% of window height */}
    <div style={{ width: "100vw", height: "100vh", background: "#fafafa" }}>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.15 }}
        attributionPosition="bottom-right"
      >
        <Background color="#ddd" gap={20} size={1} />
        <Controls />
      </ReactFlow>
    </div>
  );
}
