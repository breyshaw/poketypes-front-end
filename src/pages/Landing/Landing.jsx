import styles from './Landing.module.css'
import char from './char.png'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Welcome, {user ? user.name : 'Poke-trainer'}!</h1>
      <img src={char} alt="Charizard" />
      <br />
      <h1>All Types:</h1>
    </main>
  )
}

export default Landing
