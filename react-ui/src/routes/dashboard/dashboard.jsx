import { connect } from "react-redux";

const Dashboard = ({ favorites }) => {
  const theFavorites = favorites.map((favorite, index) => {
    return <li>{favorite.name}</li>
  })
  return (
    <>
      <p>Dashboard Page</p>
      <ul>
        {theFavorites}
      </ul>
    </>  
    );
};

const mapStateToProps = state => ({
  favorites: state.favorites
});

export default connect(mapStateToProps)(Dashboard);
