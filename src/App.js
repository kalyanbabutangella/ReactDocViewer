import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DocView from "./docViewer";

export default function App() {


  return (
    <div className="App">
      <Router>
            <Switch>
              <Route exact path='/' component={DocView}></Route>
            </Switch>
       </Router>
    </div>
  );
}
