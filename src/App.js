import React, { Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImagelinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* TODO - Configurate background animation with tsparticles */}
        <Navigation />
        <Logo />
        <Rank />
        <ImagelinkForm />
        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
