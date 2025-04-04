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


type MovieButtonsProps = {
    icon: React.ReactNode;
    onClick: () => void;
  };

type MovieControlProps = {
    counter: number;
};

  const MovieButtons: React.FC<MovieButtonsProps> = ({ icon, onClick }) => (
  <button
    onClick={onClick}
    className="w-12 h-12 rounded-full border flex items-center justify-center text-xl hover:bg-gray-200"
  >
    {icon}
  </button>
);

export default function MediaControls({
    counter
}:MovieControlProps) {
  const { code } = useCode();
  let isPlaying = false;

  const runCode = () => {
    isPlaying = true;
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
      <MovieButtons icon={<FaStepBackward />} onClick={() => counter = 0} />
      <MovieButtons icon={<FaBackward />} onClick={() => counter--} />
      <MovieButtons icon={<FaPlay />} onClick={runCode} />
      <MovieButtons icon={<FaPause />} onClick={() => isPlaying = false} />
      <MovieButtons icon={<FaForward />} onClick={() => counter++} />
      <MovieButtons icon={<FaStepForward />} onClick={() => console.log('End')} />
    </div>
  );
};
