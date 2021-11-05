import './App.css';
import Home from './routes/home-page/Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
