import React from "react";
import {TextField} from "./TextField"
const App:React.FC = () => {
  return (
    <div className="main-container">
      <h1>This is a react application using typescript.</h1>
      <TextField text="hello"/>
    </div>
  )
}
export default App;
