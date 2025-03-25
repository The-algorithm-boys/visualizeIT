import React, { useState, useRef, useEffect } from "react";
import type { ReactNode } from "react";
import { Rnd } from "react-rnd";

interface ScalableBoxProps {
  children: ReactNode;
}

const ScalableBox: React.FC<ScalableBoxProps> = ({ children }) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 500, height: 300 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (parentRef.current) {
      const { offsetWidth, offsetHeight } = parentRef.current;
      setSize({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  const scaleX = size.width / 500;
  const scaleY = size.height / 300;

  return (
    <div ref={parentRef} style={{ width: "100%", height: "100%", position: "relative" }}>
      <Rnd
        size={size}
        position={position}
        minWidth={300}
        minHeight={200}
        bounds="parent"
        disableDragging={true}
        
        onResizeStart={() => {
          document.body.style.userSelect = 'none';
        }}
        onResize={(e, direction, ref, delta, newPosition) => {
          setSize({
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height),
          });
          setPosition(newPosition);
        }}  
        onResizeStop={() => {
          document.body.style.userSelect = 'auto';
        }}
        enableResizing={{
          top: true,
          right: true,
          bottom: true,
          left: true,
          topRight: true,
          bottomRight: true,
          bottomLeft: true,
          topLeft: true,
        }}
        style={{
          border: "1px solid #ccc",
          background: "#fff",
          boxSizing: "border-box",
          overflow: "hidden",
          boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            width: 500,
            height: 300,
            transform: `scale(${scaleX}, ${scaleY})`,
            transformOrigin: "top left",
          }}
        >
          {children}
        </div>
      </Rnd>
    </div>
  );
};

export default ScalableBox;
