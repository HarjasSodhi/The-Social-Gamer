import Profile from './Pages/Profile'
import HomePage from './Pages/HomePage'
import SignUp from './Pages/SignUp'
import LoginPage from './Pages/LoginPage'
import Messagebox from './Components/Messagebox'
import { createContext,useState } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export const userContext = createContext();

function App() {
  const [state, setstate] = useState(null);
  return (
    <userContext.Provider value={{state,setstate}}>
      <Router>
        <Switch>
          <Route path="/Home">
            <HomePage />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/chat">
            <Messagebox />
          </Route>
          <Route path="/">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}
export default App;