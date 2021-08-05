import { connect } from "react-redux";

const Dashboard = ({ favorites }) => {
  const theFavorites = favorites.map((favorite, index) => {
    return (
      <li key={index}>
        {console.log('imge? =>>>', favorite.avatar)}
        <img src={favorite.avatar} alt={favorite.name} />
        <h2>{favorite.name}</h2>
        <div>- {favorite.hobby}</div>
      </li>
    )
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
