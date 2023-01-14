import React from "react";
import "./loading.css";
import {Offline} from 'react-detect-offline';
import Disconnected from '../Disconnected/Disconnected'
export default function Loading() {
  return (
    <>
    {/* the detected offline */}
 <Offline><Disconnected/></Offline>
      <div className=" loading-area" >
        <div className="sk-chase ">
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
          <div className="sk-chase-dot"></div>
        </div>
      </div>
    </>
  );
}
