import React, { Fragment } from 'react'

const LaunchingPge = () => {

    const mainDivStyle = {
        position:"relative",
        height: '100vh',
        width: '100vw',
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundImage: "linear-gradient(to bottom left, #164777, #E5E5E5 50%)"
      };
      const centerItemsDiv={
          marginTop:"20vh",
          fontSize:"10vh",
          color:"#164777",
          lineHeight: "12vh",
          fontStyle:"Manrope",
          fontWeight:"300",
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignItems:"center"
      }
      const sleekscoreLogoDiv={
        position: "absolute",
        width: "350px",
        height: "130px",
        left: "0px",
        top: "74px",
      }
      const emailInput={
        background: "#FFFFFF",
        width: "34vw",
        minWidth:"20rem",
        height: "4vh",
        borderRadius:"5px",
        border:"none",
        padding:"1vh",
        marginTop:"8vh",
        outline: "none"
      }
      const getNotifiedButton={
          color:"white",
          background:"#164777",
          minWidth:"8rem",
          marginTop:"3vh",
          height:"7vh",
          width:"11vw",
          borderRadius:"10px",
          borderShadow:"1px",
          outline: "none",
          borderStyle:"none"
      }
      const footerText={
        position:"fixed",
        fontSize:"2vh",
        bottom: "10px",
        fontStyle: "normal",
        fontWeight: "300",
      }

    return (
        <Fragment>
        <div style={mainDivStyle}>
            <img
          src="assets/sleek-score-logo.svg"
          style={sleekscoreLogoDiv}
          alt=""
        />
            <div style={centerItemsDiv} >
            Launching soon!
            
            <input
              type="email"
              placeholder="Email"
              style={emailInput}
            />
            <button type="submit" style={getNotifiedButton}>
                Get notified
            </button>
            <div style={footerText}>
            &copy;&nbsp;2022 Sleekscore Inc. All rights reserved.
            </div>
            <div>
            </div>
            </div>
        </div>
        </Fragment>
    )
}

export default LaunchingPge
