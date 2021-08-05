import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";
import Chat from "./chat/chat";
import Credits from "./credits/credits";
import Dashboard from "./dashboard/dashboard";
import Decide from "./decide/decide";
import Gender from "./gender/Gender";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import Submission from "./submission/Submission";
import ErrorBoundry from "../components/ErrorBoundry";

const Routes = ({ gender, isSubmitted }) => {
  return (
    <>
      <Route exact={true} path="/signup" render={() => <Signup />} />
      <Route exact path="/submission" render={() => <Submission />} />
      <Route exact={true} path="/" render={() => <Login />} />
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
      <Route exact path="/gender" render={() => <Gender />}>
        {gender ? <Redirect to="/decide" /> : <Redirect to="/gender" />}
      </Route>

      <Route exact={true} path="/dashboard" render={() => <Dashboard />} />
      <Route exact={true} path="/chat" render={() => <Chat />} />
      <Route exact={true} path="/credits" render={() => <Credits />} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isSubmitted: state.formData.isSubmitted,
  gender: state.gender,
});

export default connect(mapStateToProps)(Routes);
