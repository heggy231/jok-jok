import { connect } from "react-redux";
import "./dashboard.css"

const Dashboard = ({ favorites }) => {
  const theFavorites = favorites.map((favorite, index) => {
    return (
      <li key={index}>
        <img src={favorite.avatar} alt={favorite.name} />
        <h2>{favorite.name}</h2>
        <div>- {favorite.hobby}</div>
      </li>
    )
  })
  return (
    <>
      <p>Dashboard Page</p>
      <img className="inspire-gif" src="/hug.gif" alt="hug" />
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