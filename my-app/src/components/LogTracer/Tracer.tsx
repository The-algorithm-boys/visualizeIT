import { useEffect, useState } from 'react';

export default function LogTracer() {
    const [logs, setLogs] = useState<string[]>([]);

    useEffect(() => {
        (window as any).appendLog = (message: string) => {
            setLogs(prevLogs => [...prevLogs, message]);
        };

        setLogs([]);
    }, []);

    return (
        <div>
            <h4 className="font-bold mb-2">Log Tracer</h4>
            {logs.map((log, index) => (
                <p key={index} className="text-sm font-mono">
                    {log}
                </p>
            ))}
        </div>
    );
};