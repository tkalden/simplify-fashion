import React from 'react';
import RouterFunction from '../router/Router';
import ClothProvider from "../../context/clothProvider";


const App = () => {


  return (
    <ClothProvider>
      <div className="App">
        <RouterFunction />
      </div>
    </ClothProvider>
  );
}

export default App;
