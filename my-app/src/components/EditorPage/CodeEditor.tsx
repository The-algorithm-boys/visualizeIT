import { lazy, Suspense } from "react";
import { useCode } from "@/components/Contexts/CodeContext"

const Editor = lazy(() =>
  import("@monaco-editor/react").then(module => ({ default: module.Editor }))
);



export default function CodeEditor() {
  const { code, setCode } = useCode();


  return (
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
  )
}