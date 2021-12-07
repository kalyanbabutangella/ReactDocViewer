import "./App.css";
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';
import DocView from "./docViewer";
import PdfView from "./pdfViewer";
import XlsxView from "./xlsxViewer";
import JpgView from "./jpgViewer";

export default function App() {


  return (
    <div className="App">
      <Router>
            <Switch>
              {/* <Redirect from="/" to="/docxview"/> */}
              <Route exact path='/docxview' component={DocView}></Route>
              <Route exact path='/pdfview' component={PdfView}></Route>
              <Route exact path='/xlsxview' component={XlsxView}></Route>
              <Route exact path='/jpgview' component={JpgView}></Route>
            </Switch>
      </Router>
    </div>
  );
}
