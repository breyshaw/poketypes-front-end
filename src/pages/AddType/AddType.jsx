// import { useState } from 'react'
import { Link } from 'react-router-dom'

function AddType(props) {
  return (
    <main className='text-center'>
      <h1 className='mt-4 mb-0'>Add a Pokemon Type!</h1>
      <form
        autoComplete="off"
      // onSubmit={handleSubmit}
      >
        <div className="col-4">
          <p className='form-label'>Type Name:</p>
          <input
            className='form-control border border-dark'
            type="text"
            // value={title}
            name="title"
          // onChange={handleChange}
          />
        </div>
        <div className="col-8">
          <p className='form-label'>Image Url</p>
          <input type="text"
            className='form-control border border-dark'
            // value={imageUrl}
            name="imageUrl"
          // onChange={handleChange}
          />
        </div>
        <div className="col-4">
          <p className='form-label'>Strong against</p>
          <select name="strongAgainst"
            className='form-control border border-dark'
          // value={strongAgainst}
          // onChange={handleChange}
          >
            <option>--Please choose an item type--</option>
            <option>Grass</option>
            <option>Fairy</option>
            <option>Whatever</option>
          </select>
        </div>

        <div className="col-4">
          <p className='form-label'>Weak against</p>
          <select name="strongAgainst"
            className='form-control border border-dark'
          // value={weakAgainst}
          // onChange={handleChange}
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