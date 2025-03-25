import React, { ReactNode, useState } from "react";
import { Rnd } from "react-rnd";

interface ScalableBoxProps {
  children: ReactNode;
}

const BASE_WIDTH = 500;
const BASE_HEIGHT = 300;

const ScalableBox: React.FC<ScalableBoxProps> = ({ children }) => {
  const [size, setSize] = useState({ width: BASE_WIDTH, height: BASE_HEIGHT });
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const scaleX = size.width / BASE_WIDTH;
  const scaleY = size.height / BASE_HEIGHT;

  return (
    <Rnd
      size={size}
      position={position}
      minWidth={300}
      minHeight={200}
      bounds="window"
      disableDragging={true}
      onResizeStop={(e, direction, ref, delta, newPosition) => {
        setSize({
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
        });
        setPosition(newPosition);
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
          width: BASE_WIDTH,
          height: BASE_HEIGHT,
          transform: `scale(${scaleX}, ${scaleY})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </Rnd>
  );
};

export default ScalableBox;
