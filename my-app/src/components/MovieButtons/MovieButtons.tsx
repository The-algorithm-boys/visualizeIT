import React from 'react';
import {
  FaPlay,
  FaPause,
  FaBackward,
  FaForward,
  FaStepBackward,
  FaStepForward,
} from 'react-icons/fa';

import { useCode } from "@/components/Contexts/CodeContext"

import { useVisualization } from "@/components/Contexts/VisualizationContext";


type MovieButtonsProps = {
    icon: React.ReactNode;
    onClick: () => void;
  };

  const MovieButtons: React.FC<MovieButtonsProps> = ({ icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-12 h-12 rounded-full border flex items-center justify-center text-xl hover:bg-gray-200"
  >
    {icon}
  </button>
);

export default function MediaControls() {
  const { code } = useCode();
  const { isPlaying, setIsPlaying, steps, setSteps } = useVisualization();

  const runCode = () => {
    setIsPlaying(true);
    try {
        const originalLog = console.log;
        const func = new Function(code);
        func();
        console.log = originalLog;
    } catch (e) {
        console.error(e);
    }
};
  
  return (
    <div className="flex gap-3">
      <MovieButtons icon={<FaStepBackward />} onClick={() => setSteps(0)} />
      <MovieButtons icon={<FaBackward />} onClick={() => setSteps(steps-1)} />
      <MovieButtons icon={<FaPlay />} onClick={runCode} />
      <MovieButtons icon={<FaPause />} onClick={() => setIsPlaying(false)} />
      <MovieButtons icon={<FaForward />} onClick={() => setSteps(steps+1)} />
      <MovieButtons icon={<FaStepForward />} onClick={() => console.log('End')} />
    </div>
  );
};
