import "./App.css";
import { BrowserRouter as Router, Route, Switch,Redirect,Link } from 'react-router-dom';
import DocView from "./docViewer";
import PdfView from "./pdfViewer";
import XlsxView from "./xlsxViewer";
import JpgView from "./jpgViewer";

export default function App() {


  return (
    <div className="App">
      <Router>
      <nav>
            <ul>
              <li>
                <Link to='/docxview'>Document</Link>
              </li>
              <li>
                <Link to='/pdfview'>PDF</Link>
              </li>
              <li>
                <Link to='/xlsxview'>XLSX</Link>
              </li>
              <li>
                <Link to='/jpgview'>JPG</Link>
              </li>
            </ul>
          </nav>
            <Switch>
              <Route exact path='/docxview' component={DocView}></Route>
              <Route exact path='/pdfview' component={PdfView}></Route>
              <Route exact path='/xlsxview' component={XlsxView}></Route>
              <Route exact path='/jpgview' component={JpgView}></Route>
              <Redirect from="/" to="/docxview"/>
            </Switch>
      </Router>
    </div>
  );
}
