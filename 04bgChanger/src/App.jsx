import React, { useState } from "react";

export default function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center px-2">
        <div className="flex flex-wrap gap-4 justify-center rounded-lg bg-slate-500 px-3 py-2">
          <button
            className="rounded-lg bg-red-500 px-2 py-1 text-white font-mono text-xl"
            onClick={() => setColor("red")}
          >
            RED
          </button>
          <button
            className="rounded-lg bg-blue-500 px-2 py-1 text-white font-mono text-xl"
            onClick={() => setColor("blue")}
          >
            BLUE
          </button>
          <button
            className="rounded-lg bg-green-500 px-2 py-1 text-white font-mono text-xl"
            onClick={() => setColor("green")}
          >
            GREEN
          </button>
          <button
            className="rounded-lg bg-orange-500 px-2 py-1 text-white font-mono text-xl"
            onClick={() => setColor("orange")}
          >
            ORANGE
          </button>
          <button
            className="rounded-lg bg-black px-2 py-1 text-white font-mono text-xl"
            onClick={() => setColor("black")}
          >
            BLACK
          </button>
          <button
            className="rounded-lg bg-pink-500 px-2 py-1 text-white font-mono text-xl"
            onClick={() => setColor("pink")}
          >
            PINK
          </button>
          <button
            className="rounded-lg bg-purple-500 px-2 py-1 text-white font-mono text-xl"
            onClick={() => setColor("purple")}
          >
            PURPLE
          </button>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => setColor("black")}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}
