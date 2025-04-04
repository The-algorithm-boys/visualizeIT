"use client"

import React, { createContext, useContext, useState } from 'react';

type VisualizationContextType = {
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  steps: number;
  setSteps: React.Dispatch<React.SetStateAction<number>>;
};

const VisualizationContext = createContext<VisualizationContextType | undefined>(undefined);

export const VisualizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [steps, setSteps] = useState(0); 

  return (
    <VisualizationContext.Provider value={{ isPlaying, setIsPlaying, steps, setSteps }}>
      {children}
    </VisualizationContext.Provider>
  );
};

export const useVisualization = () => {
  const context = useContext(VisualizationContext);
  if (!context) throw new Error('useVisualization must be used within a VisualizationProvider');
  return context;
};
