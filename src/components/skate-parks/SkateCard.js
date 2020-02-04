import React from 'react'
import { Link } from 'react-router-dom'

const SkateCard = ( { _id, name, region, image, cost, indoor, material }) => {
  return (
    <div key={_id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
      <Link to={`/skate-park/${_id}`}>
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">{name}</h4>
          </div>
          <div className="card-image">
            <figure className="image">
              <img src={image} alt={name} />
            </figure>
          </div>
          <div className="card-content">
            <h5 className="title is-6">{region}</h5>
          </div>
          <footer className="card-footer">
            <li className='card-footer-item'>{(indoor) ? 'Indoor' : 'Outdoor'}</li>
            <li className='card-footer-item'>{`${material.slice(0,1).toUpperCase()}${material.slice(1).toLowerCase()}`}</li>
            <li className='card-footer-item'>{(cost) ? 'Free' : 'Paid'}</li>
          </footer>
          
        </div>
      </Link>
    </div>
  )
}

export default SkateCard