import React from "react";
import Cats from "./components/Cats";
import Footer from "./components/Footer";
import Header from "./components/Header";


import "./index.css";


export default function App() {
  const catsData = [
    {
      img: "./imgs/mr-whiskerson.png",
      name: "Mr. Whiskerson",
      phone: "(212) 555-1234",
      email: "whiskerson@catnap.com",
    },
    {
      img: "./imgs/fluffykins.png",
      name: "Fluffykins",
      phone: "(212) 555-2345",
      email: "fluff@me.com",
    },
    {
      img: "./imgs/felix.png",
      name: "Felix",
      phone: "+62812341234",
      email: "thecat@hotmail.com",
    },
    {
      img: "./imgs/pumpkin.png",
      name: "Pumpkin",
      phone: "(0800) CAT KING",
      email: "pumpkin@scrimba.com",
    },
  ];

  return (
    <div>
      <Header />
      
      <div className="contacts">
        {catsData.map((cat, index) => (
          <Cats
            key={index}
            img={cat.img}
            name={cat.name}
            phone={cat.phone}
            email={cat.email}
          />
        ))}
      </div>

      <Footer />
    </div>
     
    
    
    )
  
}
