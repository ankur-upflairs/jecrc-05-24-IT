import React from "react";

function Content(){
  //{} in jsx =>
    let name='anurag thakur'
  let inlineStyle={
    backgroundColor:'tan',
    fontSize:'40px'
  }
    return <div>
      <p>this is main <br></br> content</p>
      <input type="text" /><br />
      <p style={inlineStyle}>{name}</p>
    </div>
  }

  function Footer(){
    return <p style={{color:'green',backgroundColor:"yellow"}}>this is footer</p>
  }

export {Content,Footer}