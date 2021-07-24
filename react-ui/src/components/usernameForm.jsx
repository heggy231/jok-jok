import { connect } from "react-redux";
import { updateUsername } from "../redux/actions";

const UsernameForm = ({ updateUsername, username }) => {

  const handleChange = (event) => {
    const username = event.target.value;
    updateUsername(username);
  };

  return <input onChange={handleChange} value={username} />;
};

const mapStateToProps = (state) => ({
  username: state.username
});

const mapDispatchToProps = (dispatch) => ({
  updateUsername: (username) => dispatch(updateUsername(username)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsernameForm);
