import React from 'react';
import {NavLink} from "../components/navbar/NavbarElements";

const index = () => {
  return (
    <div
      style={{
          display: 'flex',
          flexDirection: 'column',
          minWidth: '100vm',
          justifyContent: 'center',
      }}
    >
      <h1 style={{display: "flex", flexDirection:"column"}}>Welcome to Jet-ski rental</h1>
        <div className={"content-wrapper-single"}>
            <p>Welcome to JetSkiRental! We have jetskis avalible for rent in the Vaasa region.
                If you are interessted to rent contact us! Contact information can be found <NavLink style={{display:"inline", padding:"0px"}} to="/Contact">here </NavLink>
                and pricing can be found bellow.</p>
        </div>
        <div style={{display: "flex", flexWrap:"wrap", justifyContent:"center"}}>
            <div className={"content-wrapper-double"}>
                <p>*To Be Added* Picelist</p>
            </div>
            <div className={"content-wrapper-double"}>
                <p>*To Be Added* Loop of popular vehicles</p>
            </div>
        </div>
    </div>

  );
};

export default index;