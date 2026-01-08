"use client";

import { useTranslations } from "next-intl";
import {
  ReactFlow,
  Node,
  Edge,
  Position,
  MarkerType,
} from "@reactflow/core";
import { Background } from "@reactflow/background";
import "@reactflow/core/dist/style.css";
import { useMemo } from "react";

function CustomNode({ data }: { data: { label: string; isHighlight?: boolean } }) {
  return (
    <div
      className={`px-4 py-3 rounded-lg border shadow-lg min-w-[140px] text-center ${
        data.isHighlight
          ? "bg-violet-600 border-violet-500 text-white"
          : "bg-zinc-800 border-zinc-700 text-zinc-100"
      }`}
    >
      <span className="font-medium text-sm">{data.label}</span>
    </div>
  );
}

const nodeTypes = {
  custom: CustomNode,
};

export default function PipelineFlow() {
  const t = useTranslations("pipeline");

  const nodes: Node[] = useMemo(
    () => [
      {
        id: "intent",
        type: "custom",
        position: { x: 0, y: 100 },
        data: { label: t("nodes.intent") },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      },
      {
        id: "clarify",
        type: "custom",
        position: { x: 200, y: 100 },
        data: { label: t("nodes.clarify"), isHighlight: true },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      },
      {
        id: "decisions",
        type: "custom",
        position: { x: 400, y: 30 },
        data: { label: t("nodes.decisions") },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      },
      {
        id: "executionPlan",
        type: "custom",
        position: { x: 400, y: 170 },
        data: { label: t("nodes.executionPlan") },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      },
      {
        id: "aiImplementation",
        type: "custom",
        position: { x: 620, y: 100 },
        data: { label: t("nodes.aiImplementation") },
        sourcePosition: Position.Right,
        targetPosition: Position.Left,
      },
    ],
    [t]
  );

  const edges: Edge[] = useMemo(
    () => [
      {
        id: "e-intent-clarify",
        source: "intent",
        target: "clarify",
        animated: true,
        style: { stroke: "#8b5cf6" },
        markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
      },
      {
        id: "e-clarify-decisions",
        source: "clarify",
        target: "decisions",
        label: "structural",
        labelStyle: { fill: "#a1a1aa", fontSize: 10 },
        labelBgStyle: { fill: "#09090b" },
        style: { stroke: "#6366f1" },
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
      },
      {
        id: "e-clarify-executionPlan",
        source: "clarify",
        target: "executionPlan",
        style: { stroke: "#8b5cf6" },
        markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
      },
      {
        id: "e-decisions-executionPlan",
        source: "decisions",
        target: "executionPlan",
        label: "context",
        labelStyle: { fill: "#a1a1aa", fontSize: 10 },
        labelBgStyle: { fill: "#09090b" },
        style: { stroke: "#6366f1", strokeDasharray: "5,5" },
        markerEnd: { type: MarkerType.ArrowClosed, color: "#6366f1" },
      },
      {
        id: "e-executionPlan-ai",
        source: "executionPlan",
        target: "aiImplementation",
        animated: true,
        style: { stroke: "#8b5cf6" },
        markerEnd: { type: MarkerType.ArrowClosed, color: "#8b5cf6" },
      },
    ],
    []
  );

  return (
    <div className="h-[300px] w-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
      >
        <Background color="#27272a" gap={20} />
      </ReactFlow>
    </div>
  );
}
