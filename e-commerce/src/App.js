import "./App.css";
import Header from "./Header";
import Photos from "./Components/Photos";
import Cart from "./Components/Cart";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Header />

        <Switch>
          <Route exact path="/">
            <Photos />
          </Route>

          <Route>
            <Cart path="/cart" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
