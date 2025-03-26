import { useState } from 'react';
import { Dropdown } from 'flowbite-react';
import CircleGraph from './circleGraph';
import BreadthfirstGraph from './breadthfirstGraph';
import RandomGraph from './randomGraph';
import EditorPage from '~/src/editor/editorPage';
import LogTracer from '~/src/tracer/tracer.tsx';
import ResizableBox from '~/src/resizable/resizable.tsx';

export default function GraphPage() {
    const [selectedGraph, setSelectedGraph] = useState('Graph 1');

    function renderGraph() {
        switch (selectedGraph) {
            case 'Graph 1':
                return <CircleGraph />;
            case 'Graph 2':
                return <BreadthfirstGraph />;
            case 'Graph 3':
                return <RandomGraph />;
            default:
                return null;
        }
    }

    return (
        <div className="flex h-screen -mt-20 pt-20">
            <div className="flex-1 flex flex-col border-r border-gray-200">
                <div className="p-4">
                    <Dropdown label={selectedGraph}>
                        <Dropdown.Item onClick={() => setSelectedGraph('Graph 1')}>
                            Graph 1
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedGraph('Graph 2')}>
                            Graph 2
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => setSelectedGraph('Graph 3')}>
                            Graph 3
                        </Dropdown.Item>
                    </Dropdown>
                </div>

                <div className="flex-1 basis-2/3">
                    <ResizableBox>
                        {renderGraph()}
                    </ResizableBox>
                </div>

                <div className="flex-1 basis-1/3 border-t border-gray-200 overflow-y-auto">
                    <LogTracer />
                </div>
            </div>

            <div className="flex-1">
                <ResizableBox>
                    <EditorPage />
                </ResizableBox>
            </div>
        </div>
    );
}
