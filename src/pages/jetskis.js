import React from 'react';
import jetski from '../download.jfif';

const Jetskis = () => {
  return (
    <div
      style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '100vm',
          justifyContent: 'center'
      }}
    >
        <div>
      <h1>Our selction of jet-skis.</h1>
        </div>
        <br/>
        <div style={{alignItems:"left",backgroundColor:"RGBA(255, 255, 255,.8)",maxWidth:"30vw", padding:"30px" ,margin:"10px"}}>
        <img src={jetski} alt="jetski"/>
            <p style={{fontSize:"25px"}}>Sea Doo Spark Trixx 90HP 2021</p>
        </div>
    </div>
  );
};

export default Jetskis;