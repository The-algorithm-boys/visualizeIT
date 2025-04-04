"use client";

import LogTracer from "@/components/LogTracer/Tracer";
import GraphPage from "@/components/Graph/GraphPage";
import EditorPage from "@/components/EditorPage/EditorPage";
import MovieButtons from "@/components/MovieButtons/MovieButtons"
import { CodeProvider } from "@/Contexts/CodeContext";
import { VisualizationProvider } from "@/Contexts/VisualizationContext";

export default function Home() {
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-center items-center">
          <div className="text-lg font-semibold">Dijkstra's algorithm visualization</div>
        </nav>
      </header>
      <main>
      <VisualizationProvider>
        <CodeProvider>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex flex-col gap-4">
              
                <div className="bg-white p-6 shadow-md rounded-md w-full h-[30rem]">
                  <GraphPage />
                </div>

                <div className="bg-white p-6 shadow-md rounded-md">
                  <LogTracer />
                </div>
            </div>
            <div className="bg-white shadow-md rounded-md">
              <EditorPage />
            </div>
          </div>
          <div>
            <MovieButtons/>
          </div>
          </CodeProvider>
        </VisualizationProvider>
      </main>
      <footer className="bg-white shadow-md p-4 text-center">
        Footer
      </footer>
    </div>
  );
}
