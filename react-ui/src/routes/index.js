import { Route } from "react-router-dom";
import Chat from "./chat/chat";
import Credits from "./credits/credits";
import Dashboard from "./dashboard/dashboard";
import Decide from "./decide/decide";
import Landing from "./landing/landing";
import Start from "./start/start";

const Routes = () => {
  return (
    <>
      <Route exact={true} path="/" render={() => <p>Landing Page</p>} />
      <Route exact={true} path="/start" render={() => <p>Start Page</p>} />
      <Route exact={true} path="/decide" render={() => <p>Decide Page</p>} />
      <Route
        exact={true}
        path="/dashboard"
        render={() => <p>Dashboard Page</p>}
      />
      <Route exact={true} path="/chat" render={() => <p>Chat Page</p>} />
      <Route
        exact={true}
        path="/credits"
        render={() => <p>Credits for Footer</p>}
      />
    </>
  );
};

export default Routes;