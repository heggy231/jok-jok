import { Route, Switch } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route 
          exact={true}
          path="/"
          render={() => <p>Landing Page</p>}
        />
        <Route 
          exact={true}
          path="/start"
          render={() => <p>Start Page</p>}
        />
        <Route 
          exact={true}
          path="/decide"
          render={() => <p>Decide Page</p>}
        />
        <Route 
          exact={true}
          path="/dashboard"
          render={() => <p>Dashboard Page</p>}
        />
        <Route 
          exact={true}
          path="/chat"
          render={() => <p>Chat Page</p>}
        />
        <Route 
          exact={true}
          path="/credits"
          render={() => <p>Credits for Footer</p>}
        />
      </Switch>
    </main>
  );
};

export default Main;
