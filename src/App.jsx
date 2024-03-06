import React, { Component } from "react";
import {useState} from 'react';
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";


import Example from "./components/Example/Example.jsx";

function App() {
  
      return (

    <div>

      <Header />


      <main>
       <CoreConcepts/>
        <Example/>



      </main>
    </div>

  );
}

export default App;
