function TypeCard({ type }) {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{type.title}</h2>
        <p className="card-text">Top Strength:{type.topStrength} </p>
        <p className="card-text">Top Weakness:{type.topWeakness} </p>
      </div>
    </div>
  )
}

export default TypeCard