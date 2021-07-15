import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Auth from "./pages/Auth";
import Home from "./pages/Home"
import Qr from "./pages/Qr";

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth/>
          </Route>
          <Route exact path="/qrcode">
            <Qr/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
