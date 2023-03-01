import type { ConnectionLineType, NodeOrigin, Viewport } from '@reactflow/system';

import type {
  Edge,
  Node,
  NodeTypes,
  KeyDefinition,
  EdgeTypes,
  DefaultEdgeOptions
} from '$lib/types';

export type SvelteFlowProps = {
  nodes: Node[];
  edges: Edge[];

  id?: string;
  nodeTypes?: NodeTypes;
  edgeTypes?: EdgeTypes;
  selectionKey?: KeyDefinition;
  deleteKey?: KeyDefinition;
  fitView?: boolean;
  nodeOrigin?: NodeOrigin;
  minZoom?: number;
  maxZoom?: number;
  initialViewport?: Viewport;
  defaultEdgeOptions?: DefaultEdgeOptions;

  class?: string;
  style?: string;

  connectionLineType?: ConnectionLineType;
};

export type SvelteFlowEvents = {
  'node:click': CustomEvent<Node>;
  'node:mouseenter': CustomEvent<Node>;
  'node:mousemove': CustomEvent<Node>;
  'node:mouseleave': CustomEvent<Node>;
  'edge:click': CustomEvent<Edge>;
  'connect:start': CustomEvent<number>;
  connect: CustomEvent<number>;
  'connect:end': CustomEvent<number>;
  'pane:click': CustomEvent;
  'pane:contextmenu': CustomEvent;
};

export type SvelteFlowSlots = {
  default: { slotValue: string };
};
