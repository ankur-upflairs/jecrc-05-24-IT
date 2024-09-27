import React from 'react'
import './conditional.css'
function Conditional() {
    let login=false
  return (
    <div className={login?'login':'logout'}>   
    {login ? 'welcome user...':'login plzz!!!'}   
    </div>
  )
}

  

// function Conditional() {
//     let gender='female'
//   return (
//     <div style={{
//         width:'100px',height:'100px',
//         backgroundColor:gender=='male'?'green':'pink'
//     }}>
      
//     </div>
//   )
// }

export default Conditional
