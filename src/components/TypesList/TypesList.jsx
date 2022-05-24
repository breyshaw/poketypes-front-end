import styles from './TypesList.module.css'
import char from './char.png'
import TypeCard from '../TypeCard/TypeCard'

const TypesList = (props) => {
  return (
    <main className={styles.container}>
      <h1>Welcome, {props.user ? props.user.name : 'Poke-trainer'}!</h1>
      <img src={char} alt="Charizard" />
      <br />
      <h1>All Types:</h1>
      <div>
        {props.types.map(type => (
          <TypeCard 
          key={type._id} 
          type={type} 
          handleUpdateType={props.handleUpdateType}
          handleDeleteType={props.handleDeleteType}
          user={props.user}
          />
        ))}
      </div>
    </main>
  )
}

export default TypesList
