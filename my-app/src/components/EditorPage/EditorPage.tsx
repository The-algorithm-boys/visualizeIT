import {useState} from 'react';
import Description from './Description';
import PsuedoCode from './PseudoCode';
import CodeEditor from './CodeEditor';

export default function EditorPage() {
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
          {activeTab === "Description" && 
          <div>
            <Description/>
          </div>}
          
          {activeTab === "Pseudo Code" && 
          <div>
            <PsuedoCode/>
          </div>}
          {activeTab === "Code Editor" && 
          <div>
            <CodeEditor/>
          </div>}
        </div>
      </div>
    );
  }