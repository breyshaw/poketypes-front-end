import { useLocation, Link } from "react-router-dom";

const TypeDetails = (props, user) => {
  const location = useLocation()

  return (
    <div className="card m-3">
      <div className="card-body">
        <h2 className="card-text">{location.state.imageUrl}</h2>
        <p className="card-text">Top Strength:{location.state.topStrength} </p>
        <p className="card-text">Top Weakness:{location.state.topWeakness} </p>
        {user ?
          <div className="card-footer">
          </div>
          : ""}
      </div>
      <Link to='/' className="btn btn-sm btn-danger">Back</Link>
    </div>
  )
}

export default TypeDetails