import "./App.css";
import Header from "./Header";
import Photos from "./Components/Photos";
import Cart from "./Components/Cart";

import {  Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />

        <Switch>
          <Route exact path="/">
            <Photos />
          </Route>

          <Route>
            <Cart path="/cart" />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
