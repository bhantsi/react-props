import React from "react";
import Cats from "./components/Cats";
// import profileImage from './components/imgs';

import "./index.css";


export default function App() {
  return (
    <div className="lead--txt">
      <h1>React Props Example </h1>
      <p>
        This is a simple react props example, you can see the code
      </p>
      <div className="contacts">
      {/* <h1>Hello Dunia</h1> */}
      <Cats
        img='./imgs/mr-whiskerson.png'
        name='Mr. Whiskerson'
        phone='(212) 555-1234'
        email='whiskerson@catnap.com'
      />
      <Cats 
                img="./imgs/fluffykins.png"
                name="Fluffykins"
                phone="(212) 555-2345"
                email="fluff@me.com"
      />
    
      <Cats 
        img="./imgs/felix.png"
        name="Felix"
        phone="+62812341234"
        email="thecat@hotmail.com"
      />

      <Cats 
                img="./imgs/pumpkin.png"
                name="Pumpkin"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
      />
    </div>
    <footer>
      <p>
        Copyright &copy; {new Date().getFullYear()} Bala Hantsi 
      </p>
    </footer>
    </div>
    
    
    )
  
}
// export default App;