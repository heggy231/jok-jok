import { Route } from "react-router-dom";
import Chat from "./chat/chat";
import Credits from "./credits/credits";
import Dashboard from "./dashboard/dashboard";
import Decide from "./decide/decide";
import Gender from "./gender/Gender";
import Login from "./login/Login";
import Start from "./start/start";
import ErrorBoundry from "../components/ErrorBoundry";
import Signup from "./signup/Signup";

const Routes = () => {
  return (
    <>
      <Route exact={true} path="/signup" render={() => <Signup />} />
      <Route exact={true} path="/" render={() => <Login />} />
      <Route exact={true} path="/start" render={() => <Start />} />
      <Route
        exact={true}
        path="/decide"
        render={() => (
          <ErrorBoundry>
            <Decide />
          </ErrorBoundry>
        )}
      />
      <Route exact path="/gender" render={() => <Gender />} />
      <Route exact={true} path="/dashboard" render={() => <Dashboard />} />
      <Route exact={true} path="/chat" render={() => <Chat />} />
      <Route exact={true} path="/credits" render={() => <Credits />} />
    </>
  );
};

export default Routes;
