import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";

const defaultCode = `
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      visualizeStep("Comparing: " + arr[j] + " and " + arr[j+1]);
      if (arr[j] > arr[j+1]) {
        // Swap elements
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        visualizeStep("Swapped: " + arr.join(", "));
      }
    }
  }
  return arr;
}

let arr = [5, 3, 8, 4, 2];
visualizeStep("Initial Array: " + arr.join(", "));
let sorted = bubbleSort(arr);
visualizeStep("Sorted Array: " + sorted.join(", "));`;

const CodeEditorWithVisualization: React.FC = () => {
    const [code, setCode] = useState<string>(defaultCode);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    const runCode = () => {
        if (iframeRef.current) {
            const doc = iframeRef.current.contentDocument;
            if (doc) {
                const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Algorithm Visualization</title>
  <style>
    body { font-family: sans-serif; padding: 10px; }
    #visualization { border: 1px solid #ccc; padding: 10px; min-height: 200px; }
    .step { margin-bottom: 10px; }
  </style>
</head>
<body>
  <h2>Algorithm Visualization</h2>
  <div id="visualization"></div>
  <script>
    function visualizeStep(message) {
      var container = document.getElementById("visualization");
      var p = document.createElement("p");
      p.className = "step";
      p.textContent = message;
      container.appendChild(p);
    }
    
    window.onerror = function(message, source, lineno, colno, error) {
      visualizeStep("Error: " + message);
    };

    try {
      ${code}
    } catch (e) {
      visualizeStep("Error: " + e.message);
    }
  </script>
</body>
</html>
        `;
                doc.open();
                doc.write(html);
                doc.close();
            }
        }
    };

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ flex: 1, borderRight: "1px solid #ccc" }}>
                <iframe
                    ref={iframeRef}
                    style={{ width: "100%", height: "100%", border: "none" }}
                    title="Algorithm Visualization"
                />
            </div>

            <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                    <Editor
                        height="100%"
                        defaultLanguage="javascript"
                        theme="vs-dark"
                        value={code}
                        onChange={(value) => setCode(value || "")}
                        options={{ fontSize: 16 }}
                        onMount={(editor) => {
                            const domNode = editor.getDomNode();
                            if (domNode) {
                                domNode.style.transform = "scale(1.2)";
                                domNode.style.transformOrigin = "top left";
                                const wrapper = domNode.parentElement;
                                if (wrapper) {
                                    wrapper.style.width = "calc(100% / 1.2)";
                                    wrapper.style.height = "calc(100% / 1.2)";
                                }
                            }
                        }}
                    />
                </div>
                <button
                    onClick={runCode}
                    style={{
                        padding: "10px",
                        background: "#007bff",
                        color: "white",
                        border: "none",
                        cursor: "pointer"
                    }}
                >
                    Run Code
                </button>
            </div>
        </div>
    );
};

export default CodeEditorWithVisualization;
