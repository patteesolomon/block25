import React, { useState } from "react";

// Write your Color component here

const Color = ({ color, setSelectedColor }) => {
  return (
      <div className={color}
            onClick={() => setSelectedColor(color)} 
      >
      </div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState();
  return (
    <div id="container">
      <div id="navbar">
        <div className={selectedColor}>
          <div> Currently selected: </div>
          <div>{selectedColor}</div>
          <div className={selectedColor}></div>
        </div>
        {/* create a way to make that shadow selector using these hints. 
        Hint 1
          How do we tell if a certain color is selected? How could each individual Color component tell what color is selected?

          Hint 2
          You do not need any new state, but your Color components will need more information passed to it.

          Hint 3
          Compare the "selectedColor" on state to the "color" prop that each Color receives.

          Hint 4
          The class name that you give to className is just a string. For more than one class name, it should just be a string with spaces separating each class's name.

          Hint 5
          Think Ternary Operator!
        
        */}
      </div>
        <div id="colors-list">
          <Color color="red" className="selected" setSelectedColor={setSelectedColor} />
          <Color color="blue" setSelectedColor={setSelectedColor}/>
        <Color color="green" setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App;
