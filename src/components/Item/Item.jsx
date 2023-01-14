import React from 'react'
import styles from './item.module.css';
import { Link } from 'react-router-dom';
export default function Item(props) {
  let {item , img , overly, vote} = styles;
  // console.log(props);
  let{title,poster_path,overview,vote_average , id , media_type}= props.data
  return (
    <>
    <div className="col-md-2 py-3">
      <div>
      <div className= {item}>
     <img className={img} src= {`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="img-Movie" />
      <Link to= {`/details/${id}/${media_type}`}>
      <div className={overly }>
        <p>{overview.split(' ').slice(0 , 15 ).join(' ')}</p>
      </div>
      </Link>
      <div className={vote}>{vote_average.toFixed(1)}</div>
      </div>

      <div>
        <h6 className='my-3'>{title}</h6>
        </div>
      </div>

    </div>
    </>
  )
}
