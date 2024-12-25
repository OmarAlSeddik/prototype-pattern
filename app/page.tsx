"use client";

import { Circle, Rectangle, Shape, Triangle } from "@/lib/shapes";
import { useState } from "react";

export default function Home() {
  const [shapes, setShapes] = useState<Shape[]>([
    new Circle("red", 50),
    new Rectangle("blue", 100, 100),
    new Triangle("green", 100),
  ]);

  const cloneShape = (index: number) => {
    const newShapes = [...shapes];
    const clonedShape = newShapes[index].clone();
    newShapes.push(clonedShape);
    setShapes(newShapes);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Prototype Pattern Demo</h1>
      <div className="flex flex-wrap">
        {shapes.map((shape, index) => (
          <div key={index} className="flex flex-col items-center">
            {shape.render()}
            <button
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={() => cloneShape(index)}
            >
              Clone
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
