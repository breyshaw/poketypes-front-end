import styles from './TypesList.module.css'
import char from './char.png'

const TypesList = (props) => {
  return (
    <main className={styles.container}>
      <h1>Welcome, {props.user ? props.user.name : 'Poke-trainer'}!</h1>
      <img src={char} alt="Charizard" />
      <br />
      <h1>All Types:</h1>
      <div>
        {props.types.map(type => (
          <div key={type._id}>
            <p>Type: {type.title}</p>
            <p>Strongest Against: {type.topStrength}</p>
            <p>Top Weakness: {type.topWeakness}</p>
            <br />
          </div>
        ))}
      </div>
    </main>
  )
}

export default TypesList
