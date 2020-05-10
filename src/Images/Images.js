import React from 'react'

const Images = props => {
    return (
        <div className="container">
        {
          props.images.map(img => {
            return <div className="img__container" key={img.id}>
              <div className={'inner__img'}><img className="img" src={img.largeImageURL} alt={img.tags}/>
              <p className="img__tags">{img.tags}</p>
              <button className='btn'><a target='blank' href={img.pageURL}>Link to photo</a></button></div>
            </div>
          })
        }
      </div>
    )
}

export default Images
