import { connect } from 'react-redux';

const Greeting = ( {username} ) => {
  return <p>Hello {username}</p>
}

const mapStateToProps = (state) => ({
  username: state.username
})

export default connect(mapStateToProps)(Greeting);