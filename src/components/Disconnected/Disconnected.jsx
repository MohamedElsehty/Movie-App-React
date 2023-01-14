import React from 'react';
import './disconnected.css';

export default function Disconnected() {
  return (
   <>
    <div className="text-offLine ">
        <div className='offline-info'> <h2>....oops Your Oflline right Now</h2>
        <div class="spinner ">
  <div class="dot1"></div>
  <div class="dot2"></div>
</div></div>
    </div>
   </>
  )
}
