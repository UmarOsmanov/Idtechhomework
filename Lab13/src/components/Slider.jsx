import React from "react";
import { useState } from "react";

export const Slider = ({ slider }) => {
  const [current, setCurrent] = useState(0);

  const toPrev = () =>
    setCurrent((prev) => (prev === 0 ? slider.length - 1 : prev - 1));
  const toNext = () => setCurrent((prev) => (prev + 1) % slider.length);

  const currentImg = slider[current];

  return (
    <div class = "container">
      <button class="prev" onClick={toPrev}>‹</button>
      <img height={550} width={850} heig src={currentImg} alt="" />
      <button class="next" onClick={toNext}>›</button>
    </div>
  );
};
