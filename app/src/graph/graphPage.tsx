import Graph from './graph';
import EditorPage from '~/src/editor/editorPage';
import LogTracer from '~/src/tracer/tracer.tsx';
import ResizableBox from '~/src/resizable/resizable.tsx'

export default function GraphPage() {
    return (
        <div className="flex h-screen -mt-20 pt-20">
            <div className="flex-1 flex flex-col border-r border-gray-200">
                <div className="flex-1 basis-2/3">
                    <ResizableBox>
                        <Graph />
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
