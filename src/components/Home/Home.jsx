import React, { useEffect, useState } from "react";
import {getTrending} from '../../Api/Api';
import Item from "../Item/Item";
import Loading from "../Loading/Loading";
import style from "./home.module.css";
import {Offline} from 'react-detect-offline';
import Disconnected from '../Disconnected/Disconnected'
export default function Home() {
  const [Movies, setMovies] = useState([]);
  const [Tv , setTv] = useState([]);
  // for movie
  async function getData()
  {
    let movies = await getTrending('movie');
    setMovies(movies);
  };
  // for Tv
  async function getTv() {
    let tv = await getTrending('tv');
    setTv(tv);
  };
  useEffect(() => {
    getData();
    getTv();
   
  }, []);
  return (
    <>
     {/* the detected offline */}
 <Offline><Disconnected/></Offline>
 {/* check network for loading component */}
      {Movies.length>0 && Tv.length>0?<> <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4  d-flex align-items-center">
            <div>
              <div className=" w-25" id={style.brdr}></div>
              <h2>
                Trending
                <br />
                Movies
                <br /> To Watch Now
              </h2>
              <p>Most Watched Movies by days</p>
              <div className=" w-100" id={style.brdr}></div>
            </div>
          </div>
          {Movies.slice(0,10).map((value, index) => (
            <Item key={index} data={value} />
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4  d-flex align-items-center">
            <div>
              <div className=" w-25" id={style.brdr}></div>
              <h2>
                Trending
                <br />
                TV
                <br /> To Watch Now
              </h2>
              <p>Most Watched Movies by days</p>
              <div className=" w-100" id={style.brdr}></div>
            </div>
          </div>
          {Tv.slice(0,10).map((value, index) => (
            <Item key={index} data={value} />
          ))}
        </div>
      </div></> : <Loading/>} 
      </>
    
  );
}
