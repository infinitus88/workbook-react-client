import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import CanvasDraw from "react-canvas-draw";
import classNames from "classnames";

type CanvasProps = {
  width: number,
  height: number,
  color: string,
  img_src: string | undefined
}

const SimpleDrawCanvas = (props: CanvasProps) => {
  const [canvas, setCanvas] = useState({});
  const [brushRad, setBrushRad] = useState(4);

  return (
  <div>
  <div>
    <div className="pb-3">
      <label className="text-xl pr-3">Радиус кисти:</label>
      <input
        type="number"
        value={brushRad}
        onChange={e => {
          if (parseInt(e.target.value) > 0) {
            setBrushRad(parseInt(e.target.value));
          } else if (parseInt(e.target.value) <= 0) {
            setBrushRad(1)
          }
        }}
      />
    </div>
    </div>
    <CanvasDraw
      brushColor={props.color}
      brushRadius={brushRad}
      imgSrc={props.img_src}
      enablePanAndZoom={false}
      mouseZoomFactor={0.01}
      canvasWidth={541}
      canvasHeight={310}
    />
    </div>
  );
};

export default SimpleDrawCanvas;
