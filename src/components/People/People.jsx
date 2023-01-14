import React, { useEffect } from 'react'
import { useState } from 'react';
import {getTrending} from '../../Api/Api';
// import Item from "../Item/Item";
// import Loading from '../Loading/Loading';
// import {Offline} from 'react-detect-offline';
// import Disconnected from '../Disconnected/Disconnected'


export default function People(props) {
  let {profile_path , name , id} = props;
  const [people , setPeople] = useState([]);
async function getPeople() {
  let persons = await getTrending('person');
  setPeople(persons);
  console.log(persons);
};

useEffect(()=>{
  getPeople();
},[])
  return (
    <>
   <div className="container">
        <div className="row justify-content-center">
        {people.map((item, index) => (
          <div key={index} className="col-md-2">
            <div className="position-relative">
              <img src={`https://image.tmdb.org/${profile_path}`} alt="" />
            </div>

          </div>
            
          ))}
         </div>
         </div>
     </>
  )
}
