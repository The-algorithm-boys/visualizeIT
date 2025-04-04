"use client"

import React, { createContext, useContext, useState } from 'react';

type CodeContextType = {
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
};

const CodeContext = createContext<CodeContextType | undefined>(undefined);

export const CodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const graphData = {
        nodes: ['a', 'b', 'c', 'd', 'e'],
        edges: [
          { source: 'a', target: 'b', weight: 1 },
          { source: 'b', target: 'c', weight: 1 },
          { source: 'c', target: 'd', weight: 1 },
          { source: 'd', target: 'e', weight: 1 },
          { source: 'e', target: 'a', weight: 10 },
          { source: 'a', target: 'c', weight: 2 },
        ]
      };

    const defaultCode = `function dijkstra(start, end, graph) {
  const distances = {};
  const previous = {};
  const nodes = new Set(graph.nodes);
        
  graph.nodes.forEach(node => {
      distances[node] = node === start ? 0 : Infinity;
      previous[node] = null;
  });
        
  while (nodes.size > 0) {
    let current = null;
    nodes.forEach(node => {
      if (current === null || distances[node] < distances[current]) {
        current = node;
      }
    });
              
    if (current === end) {
      break;
    }
              
    nodes.delete(current);

    graph.edges.forEach(edge => {
      if (edge.source === current || edge.target === current) {
        const neighbor = edge.source === current ? edge.target : edge.source;
        if (nodes.has(neighbor)) {
          const alt = distances[current] + edge.weight;
          if (alt < distances[neighbor]) {
            distances[neighbor] = alt;
            previous[neighbor] = current;
          }
        }
      }
    });
  }
        
  const path = [];
  let cur = end;
  while (cur) {
    path.unshift(cur);
    cur = previous[cur];
  }
  return path;
}

const startNode = 'a';
const endNode = 'd';
const path = dijkstra(startNode, endNode, {
  "nodes": [
    "a",
    "b",
    "c",
    "d",
    "e"
  ],
  "edges": [
    {
      "source": "a",
      "target": "b",
      "weight": 1
    },
    {
      "source": "b",
      "target": "c",
      "weight": 1
    },
    {
      "source": "c",
      "target": "d",
      "weight": 1
    },
    {
      "source": "d",
      "target": "e",
      "weight": 1
    },
    {
      "source": "e",
      "target": "a",
      "weight": 10
    },
    {
      "source": "a",
      "target": "c",
      "weight": 2
    }
  ]
});

if (window.appendLog) {
  window.removeLog();
  window.appendLog("Shortest path from " + startNode + " to " + endNode + " : " + path.join(" -> "));
}

if (window.highlightPath) {
  window.highlightPath(path);
}

console.log("Shortest path computed:", path);`;

    const [code, setCode] = useState(defaultCode);

  return (
    <CodeContext.Provider value={{ code, setCode }}>
      {children}
    </CodeContext.Provider>
  );
};

export const useCode = () => {
  const context = useContext(CodeContext);
  if (!context) throw new Error('useCode must be used within a CodeProvider');
  return context;
};
