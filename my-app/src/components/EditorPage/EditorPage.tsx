import { useState } from "react";
import Description from "./Description";
import PsuedoCode from "./PseudoCode";
import CodeEditor from "./CodeEditor";
import { TabItem, Tabs } from "flowbite-react";

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="p-4">
      <Tabs variant="pills">
        <TabItem
          title="Description"
          active={activeTab === "Description"}
          onClick={() => setActiveTab("Description")}
        >
          <Description />
        </TabItem>
        <TabItem
          title="Pseudo Code"
          active={activeTab === "Pseudo Code"}
          onClick={() => setActiveTab("Pseudo Code")}
        >
          <PsuedoCode />
        </TabItem>
        <TabItem
          title="Code Editor"
          active={activeTab === "Code Editor"}
          onClick={() => setActiveTab("Code Editor")}
        >
          <CodeEditor />
        </TabItem>
      </Tabs>
    </div>
  );
}
