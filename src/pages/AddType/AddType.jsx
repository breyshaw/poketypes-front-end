import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './AddType.module.css'

//Keep track of state
//Check to make sure the data in the form is valid
//Control what happens when the form is submitted

function AddType(props) {
  const [formData, setFormData] = useState({
    title: '',
    imageUrl: 'test state',
    topWeakness: '',
    weakness2: '',
    weakness3: '',
    topStrength: '',
    strength2: '',
    strength3: '',
  })

  const handleChange = evt => {
    setFormData({
      ...formData, [evt.target.name]: evt.target.value,
    })
  }

  return (
    <main className='text-center'>
      <h1 className='mt-4 mb-0'>Add a Pokemon Type!</h1>
      <form
        autoComplete="off"
        // onSubmit={handleSubmit}
        className={styles.form}
      >
        <div className="col-4">
          <p className='form-label'>Type Name:</p>
          <input
            className='form-control border border-dark'
            type="text"
            value={formData.title}
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="col-8">
          <p className='form-label'>Image Url</p>
          <input type="text"
            className='form-control border border-dark'
            value={formData.imageUrl}
            name="imageUrl"
            onChange={handleChange}
          />
        </div>
        <div className="col-4">
          <p className='form-label'>Strongest against</p>
          <select name="topStrength"
            className='form-control border border-dark'
            value={formData.topStrength}
            onChange={handleChange}
          >
            <option>--Please choose an item type--</option>
            <option>Grass</option>
            <option>Fairy</option>
            <option>Whatever</option>
          </select>
        </div>
        <div className="col-4">
          <p className='form-label'>2nd strongest against</p>
          <select name="strength2"
            className='form-control border border-dark'
            value={formData.strength2}
            onChange={handleChange}
          >
            <option>--Please choose an item type--</option>
            <option>Grass</option>
            <option>Fairy</option>
            <option>Whatever</option>
          </select>
        </div>

        <div className="col-4">
          <p className='form-label'>3rd strongest against</p>
          <select name="strength3"
            className='form-control border border-dark'
            value={formData.strength3}
            onChange={handleChange}
          >
            <option>--Please choose an item type--</option>
            <option>Grass</option>
            <option>Fairy</option>
            <option>Whatever</option>
          </select>
        </div>

        <div className="col-4">
          <p className='form-label'>Top Weakness</p>
          <select name="topWeakness"
            className='form-control border border-dark'
            value={formData.topWeakness}
            onChange={handleChange}
          >
            <option>--Please choose an item type--</option>
            <option>Grass</option>
            <option>Fairy</option>
            <option>Whatever</option>
          </select>
        </div>
        <div className="col-4">
          <p className='form-label'>2nd top weakness</p>
          <select name="weakness2"
            className='form-control border border-dark'
            value={formData.weakness2}
            onChange={handleChange}
          >
            <option>--Please choose an item type--</option>
            <option>Grass</option>
            <option>Fairy</option>
            <option>Whatever</option>
          </select>
        </div>
        <div className="col-4">
          <p className='form-label'>3rd top weakness</p>
          <select name="weakness3"
            className='form-control border border-dark'
            value={formData.weakness3}
            onChange={handleChange}
          >
            <option>--Please choose an item type--</option>
            <option>Grass</option>
            <option>Fairy</option>
            <option>Whatever</option>
          </select>
        </div>
        <div className="mb-3">
          <button className='btn btn-primary border border-dark' disabled>
            Add Type
          </button>
          <Link to="/">
            <button className='btn btn-danger border border-dark'>Cancel</button>
          </Link>
        </div>
      </form>
    </main>
  );
}

export default AddType