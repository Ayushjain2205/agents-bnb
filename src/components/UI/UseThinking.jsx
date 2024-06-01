import React from "react";

const UseThinking = ({ question, stopped = false }) => {
  return (
    <div>
      <p className={`text-[18px] font-[500] ${stopped ? "" : "animate-pulse"}`}>
        {question}
      </p>
    </div>
  );
};

export default UseThinking;