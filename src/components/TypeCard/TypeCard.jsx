import { Link } from "react-router-dom"

function TypeCard({ type, handleDeleteType, user }) {
  return (
    <div className="card m-3">
      <div className="card-body">
        <Link
          to='/typeDetails'
          state={type}
        >
          <h2 className="card-text">{type.imageUrl}</h2>
        </Link>
        {user ?
          <div className="card-footer">
            <Link
              className="btn btn-sm btn-warning"
              to='/edit'
              state={{ type }}
            >
              Edit
            </Link>
            <button
              className="btn btn-sm btn-danger m-left"
              onClick={() => handleDeleteType(type._id)}>Delete</button>
          </div>
          : ""}
      </div>
    </div>
  )
}

export default TypeCard