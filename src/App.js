import React, { useState } from "react";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import { Route } from "react-router-dom";
import CharacterCard from "./components/CharacterCard.js";


export default function App() {
  
  
  return (
    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/characters/" component={CharacterList} />
      <Route path={`/characters/:id`} render={props => {
        return <CharacterCard {...props} id={props.match.params.id} />
      }} />

    </main>
  );
}
