import React, { useEffect, useState } from 'react'
import { getDetails } from '../../Api/Api';
import {Offline} from 'react-detect-offline';
import Disconnected from '../Disconnected/Disconnected'
import Loading from '../Loading/Loading';
import { useParams } from 'react-router-dom';

export default function ItemDetails(props) {
  let parmas = useParams();
  console.log(parmas);
    const [Details , setDetails] = useState('');
    async function getData() {
      let details = await getDetails(parmas.id, parmas.media);
      setDetails(details);
    };
    console.log(Details);
    useEffect(()=>{
      getData();
    },[])
  return (
    <>
    {/* the detected offline */}
 <Offline><Disconnected/></Offline>
  {/* check network for loading component */}
    {Details? <div className="container">
        <div className="row">
            <div className="col-md-4">
            <img className='py-5 w-100' src= {`https://image.tmdb.org/t/p/w500/${Details.poster_path}`} alt="img-Movie" />
            </div>
            <div className="col-md-8">
                <div className='py-5 '> 
                    <h2 className='py-3'>{Details.title} {Details.name}</h2>
                    {Details.genres.map((value, index)=><span key={index} className='badge p-3 mx-2 bg-info ' >{value.name}</span>)}
                    <ul className='text-start py-3 '>
                      <li className='py-3' > Vote : {Details.vote_average.toFixed(1)}</li>
                      <li className='py-3'> Vote Count : {Details.vote_count}</li>
                      <li className='py-3'> popularity : {Details.popularity}</li>
                      <li className='py-3'>  release date :{Details.release_date}</li>
                    </ul>
                    <p>{Details.overview}</p>
                </div>
            </div>
        </div>
    </div>
    : <Loading/>}
    </>
  )
  }
