import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { reducer, initialState } from "./reducer";
import { Home, NewLinkForm } from './Pages';
import { STORAGE_KEY } from './constants';

const App: React.FC = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state.links));
    window.addEventListener("beforeunload", save);
    return () => {
      window.removeEventListener("beforeunload", save)
    };
  }, [state]);

  return (
    <Router>
      <Switch>
        <Route path="/add">
          <NewLinkForm dispatch={dispatch} />
        </Route>
        <Route path="/">
          <Home state={state} dispatch={dispatch} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
