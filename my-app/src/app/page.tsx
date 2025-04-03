"use client";

import Layout from "@/components/Layout";
import LogTracer from "@/components/LogTracer/Tracer";
import DefaultGraph from "@/components/Graph/CircleGraph"
import EditorPage from "@/components/EditorPage/EditorPage";

export default function Home() {
  return (
    <Layout>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col gap-4">
          <div className="bg-white p-6 shadow-md rounded-md h-72 w-full">
            <DefaultGraph/>
          </div>
          <div className="bg-white p-6 shadow-md rounded-md">
            <LogTracer/>
          </div>  
        </div>
        <div className="bg-white p-6 shadow-md rounded-md">
          <EditorPage />
        </div>
      </div>
    </Layout>
  );
}