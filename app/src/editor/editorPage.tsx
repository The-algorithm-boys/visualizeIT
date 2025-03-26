import { useState, lazy, Suspense } from "react";
const Editor = lazy(() =>
  import("@monaco-editor/react").then(module => ({ default: module.Editor }))
);


const graphData = {
    nodes: ['a', 'b', 'c', 'd', 'e'],
    edges: [
        { source: 'a', target: 'b', weight: 1 },
        { source: 'b', target: 'c', weight: 1 },
        { source: 'c', target: 'd', weight: 1 },
        { source: 'd', target: 'e', weight: 1 },
        { source: 'e', target: 'a', weight: 1 },
        { source: 'a', target: 'c', weight: 2 },
    ]
};

const defaultCode = `
function dijkstra(start, end, graph) {
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
const path = dijkstra(startNode, endNode, ${JSON.stringify(graphData, null, 2)});

if (window.appendLog) {
  window.appendLog("Shortest path from " + startNode + " to " + endNode + " : " + path.join(" -> "));
}

if (window.highlightPath) {
  window.highlightPath(path);
}

console.log("Shortest path computed:", path);
`;

export default function EditorPage() {
    const [code, setCode] = useState<string>(defaultCode);

    const runCode = () => {
        try {
            const originalLog = console.log;

            const func = new Function(code);
            func();

            console.log = originalLog;
        } catch (e: any) {

            console.error(e);
        }
    };

    return (
        <div className="h-full flex flex-col">
            <div className="flex-1 relative">
                <Suspense fallback={<div>Loading Editor...</div>}>
                    <Editor
                        height="100%"
                        defaultLanguage="javascript"
                        theme="vs-dark"
                        value={code}
                        onChange={(value) => setCode(value || "")}
                        options={{ fontSize: 16 }}
                    />
                </Suspense>
            </div>

            <button
                onClick={runCode}
                className="p-2 bg-blue-600 text-white"
            >
                Run Code
            </button>
        </div>
    );
};