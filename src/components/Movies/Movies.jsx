import React, { useEffect } from 'react'
import { useState } from 'react';
import {getTrending} from '../../Api/Api';
import Item from "../Item/Item";
import Loading from '../Loading/Loading';
import {Offline} from 'react-detect-offline';
import Disconnected from '../Disconnected/Disconnected'


export default function Movies() {
  const [Movies , setMovies] = useState([]);
async function allMovies() {
  let movies = await getTrending('all');
  setMovies(movies);
};
useEffect(()=>{
  allMovies();
},[])
  return (
    <>
    {/* the detected offline */}
 <Offline><Disconnected/></Offline>
 {/* check network for loading component */}
    {Movies.length>0 ? <><div className="container">
        <div className="row justify-content-center">
        {Movies.map((value, index) => (
            <Item key={index} data={value} />
          ))}
         </div>
         </div></> : <Loading/>}
    </>
  )
}
