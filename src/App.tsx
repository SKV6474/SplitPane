import React from "react";
import "./App.css";
import SplitPane from "react-split-pane";

function App() {
  const splitChildren = () => {
    return (
      <>
        <div>Hii</div>
        <div>Hello</div>
      </>
    );
  };

  return (
    //@ts-ignore
    <SplitPane split="vertical" minSize={200} defaultSize={200} maxSize={800}>
      <div>Div 1</div>
      <div>Div 2</div>
    </SplitPane>
  );
}

export default App;
