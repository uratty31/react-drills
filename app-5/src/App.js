import React, {Component} from 'react';
import './App.css';
//remember to be pointing at the right folder. in this case Component/Image
import Image from "./Component/Image";

class App extends Component { 
  render() {
  return (
    <div className = "App">
      <Image url = {"https://d4f29v9wclo2e.cloudfront.net/albumimages/16060_cover.jpg"}/>
    </div>
    );
  }
}

export default App;
