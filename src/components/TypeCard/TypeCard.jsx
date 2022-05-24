import { Link } from "react-router-dom"

function TypeCard({ type, handleDeleteType, user }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{type.title}</h2>
        <p className="card-text">Top Strength:{type.topStrength} </p>
        <p className="card-text">Top Weakness:{type.topWeakness} </p>
        {user ?
          <div className="card-footer">
            <Link
              className="btn btn-sm btn-warning"
              to='/edit'
              state={{ type }}
            >
              Edit
            </Link>
            <button className="btn btn-sm btn-danger m-left" onClick={() => handleDeleteType(type._id)}>Delete</button>
          </div>
          : ""}
      </div>
    </div>
  )
}

export default TypeCard