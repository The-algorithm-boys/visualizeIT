"use client";

import { useState } from "react";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-6 shadow-md rounded-md">Graph</div>
          <div className="bg-white p-6 shadow-md rounded-md">Log tracer</div>
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          <TabBox />
        </div>
      </div>
    </Layout>
  );
}

function TabBox() {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        {["Description", "Pseudo Code", "Code Editor"].map((tab) => (
          <button
            key={tab}
            className={`py-2 px-4 ${activeTab === tab ? "border-b-2 border-blue-500 font-bold" : ""
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>
        {activeTab === "Description" && <div>Content for Tab 1</div>}
        {activeTab === "Pseudo Code" && <div>Content for Tab 2</div>}
        {activeTab === "Code Editor" && <div>Content for Tab 3</div>}
      </div>
    </div>
  );
}