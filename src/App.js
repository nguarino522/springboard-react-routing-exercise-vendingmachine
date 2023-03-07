import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Candy from "./Candy";

const App = () => {
  return (
    <BrowserRouter>
        <Route path="/" exact>
          <VendingMachine />
        </Route>
        <Route path="/soda" exact>
          <Soda />
        </Route>
        <Route path="/chips" exact>
          <Chips />
        </Route>
        <Route path="/candy" exact>
          <Candy />
        </Route>
    </BrowserRouter>
  )
}

export default App;