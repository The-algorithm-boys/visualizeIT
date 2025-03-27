import { useState, lazy, Suspense } from "react";
import { Tabs } from "flowbite-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

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
        { source: 'e', target: 'a', weight: 10 },
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

const pseudoCode = `
function Dijkstra(start, end, graph):
    initialize distances for all nodes to Infinity (0 for start)
    initialize previous node for each node as null
    while unvisited nodes exist:
        // Select the node with the smallest distance
        select the node with the smallest distance (current)
        if current is the end, break out of the loop
        for each neighbor of current:
            calculate alternative path distance
            if alternative is shorter:
                update distance and previous node for the neighbor
    construct the shortest path from end to start using previous nodes
    return the path
`;

export default function EditorPage() {
    const [code, setCode] = useState(defaultCode);

    const runCode = () => {
        try {
            const originalLog = console.log;
            const func = new Function(code);
            func();
            console.log = originalLog;
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="h-full flex flex-col">
            <Tabs aria-label="Code Editor Tabs" variant={"underline"}>
                <Tabs.Item active={true} title="Description">
                    <div className="p-4 space-y-4">
                        <h2 className="text-xl font-semibold">Dijkstra's Algorithm Overview</h2>
                        <p>
                            Dijkstra's algorithm is used to find the shortest paths between nodes in a graph,
                            which can represent road networks or other systems.
                        </p>
                        <ul className="list-disc list-inside">
                            <li>It starts with a source node and calculates the shortest path to every other node.</li>
                            <li>The algorithm selects the unvisited node with the smallest tentative distance.</li>
                            <li>
                                It then calculates alternative path distances through that node, updating if a shorter path is found.
                            </li>
                            <li>The process continues until the shortest path to the destination node is determined.</li>
                        </ul>
                        <p>
                            This implementation demonstrates how Dijkstra's algorithm computes the shortest path between nodes <code>a</code> and <code>d</code>.
                        </p>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Pseudo Code">
                    <div className="p-4">
                        <SyntaxHighlighter language="javascript" >
                            {pseudoCode}
                        </SyntaxHighlighter>
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Code Editor">
                    <div className="flex flex-col h-full">
                        <div className="flex-1 relative">
                            <Suspense fallback={<div>Loading Editor...</div>}>
                                <Editor
                                    height="750px"
                                    defaultLanguage="javascript"
                                    theme="vs-dark"
                                    value={code}
                                    onChange={(value) => setCode(value || "")}
                                    options={{ fontSize: 16 }}
                                />
                            </Suspense>
                        </div>

                    </div>
                </Tabs.Item>
            </Tabs>
            <button
                onClick={runCode}
                className="p-2 bg-blue-600 text-white"
            >
                Run Code
            </button>
        </div>
    );
}
