import { Route } from "react-router-dom";
import Chat from "./chat/chat";
import Credits from "./credits/credits";
import Dashboard from "./dashboard/dashboard";
import Decide from "./decide/decide";
import Signup from "./signup/signup";
import Start from "./start/start";

const Routes = () => {
  return (
    <>
      <Route exact={true} path="/" render={() => <Signup />} />
      <Route exact={true} path="/start" render={() => <Start />} />
      <Route exact={true} path="/decide" render={() => <Decide />} />
      <Route
        exact={true}
        path="/dashboard"
        render={() => <Dashboard />}
      />
      <Route exact={true} path="/chat" render={() => <Chat />} />
      <Route
        exact={true}
        path="/credits"
        render={() => <Credits />}
      />
    </>
  );
};

export default Routes;