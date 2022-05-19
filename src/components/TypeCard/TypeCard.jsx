function TypeCard({ type, handleDeleteType }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{type.title}</h2>
        <p className="card-text">Top Strength:{type.topStrength} </p>
        <p className="card-text">Top Weakness:{type.topWeakness} </p>
        <div className="card-footer">
          <button className="btn btn-sm btn-danger m-left" onClick={() => handleDeleteType(type._id)}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default TypeCard