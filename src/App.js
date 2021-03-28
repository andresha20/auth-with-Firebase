import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages
import Login from './Pages/Login/Login';
import Homepage from './Pages/Home/Homepage';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';

function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route component={Login} path='/sign'/>
          <PrivateRoute component={Homepage} exact path='/'/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
