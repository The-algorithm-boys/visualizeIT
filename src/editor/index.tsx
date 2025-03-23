import MonacoEditor from "react-monaco-editor/lib/editor";
import {useEffect, useRef, useState} from "react";

const defaultCode = `// Write your HTML + JS here
<html>
  <head>
    <script>
      function sayHello() {
        document.getElementById('output').innerText = "Hello, world!";
      }
    </script>
  </head>
  <body>
    <button onclick="sayHello()">Click me</button>
    <p id="output"></p>
  </body>
</html>`;

const CodeEditorWithPreview: React.FC = () => {
    const [code, setCode] = useState<string>(defaultCode);
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Function to update the iframe with the new code
    const updatePreview = () => {
        if (iframeRef.current) {
            const doc = iframeRef.current.contentDocument;
            if (doc) {
                doc.open();
                doc.write(code);
                doc.close();
            }
        }
    };

    // Update the preview when the code changes
    useEffect(() => {
        updatePreview();
    }, [code]);

    return (
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Code Editor */}
            <div style={{ width: "50%", borderRight: "1px solid #ccc" }}>
                <MonacoEditor
                    height="100%"
                    language="html"
                    theme="vs-dark"
                    value={code}
                    onChange={(newCode) => setCode(newCode || "")}
                    options={{ fontSize: 14 }}
                />
            </div>

            {/* Preview Window */}
            <div style={{ width: "50%", display: "flex", flexDirection: "column" }}>
                <button
                    onClick={updatePreview}
                    style={{
                        padding: "10px",
                        background: "#007bff",
                        color: "white",
                        border: "none",
                        cursor: "pointer",
                    }}
                >
                    Run Code
                </button>
                <iframe ref={iframeRef} style={{ flex: 1, border: "none" }} />
            </div>
        </div>
    );
};

export default CodeEditorWithPreview;