import React from "react";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes"

function App() {
  return (
    <div>
      <Heading />
      {notes.map( props => (<Note
        key={props.key}
      title={props.title}
      content={props.content}
      />))}
      <Footer />
    </div>
  );
}

export default App;
