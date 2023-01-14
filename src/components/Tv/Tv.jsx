import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import {getTrending} from '../../Api/Api';
import Loading from '../Loading/Loading';
import {Offline} from 'react-detect-offline';
import Disconnected from '../Disconnected/Disconnected'
export default function Tv() {
  const [Tv , setTv] = useState([]);
  async function getTv() {
    let tv = await getTrending('tv');
    setTv(tv);
  };
  useEffect(()=>{
    getTv();
  },[])
  return (
 <>
 {/* the detected offline */}
 <Offline><Disconnected/></Offline>
 {/* check network for loading component */}
  {Tv.length > 0 ? <><div className="container">
        <div className="row justify-content-center">
        {Tv.map((value, index) => (
            <Item key={index} data={value} />
          ))}
         </div>
         </div></> : <Loading/>}
 </>
  )
}
