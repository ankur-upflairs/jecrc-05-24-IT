 import React from 'react'

function Verified(){
    return (
        <p className="card-text" style={{color:'green'}} >Verified</p>
    )
}
function NotVerified(){
    return (
        <p className="card-text" style={{color:'red'}} >Not Verified</p>
    )
}



function Blog(props) {
    return (
        <div>
            <div className="card" style={{width:'18rem'}}>
                <img src={props.image} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <p className="card-text" >By - {props.author}</p>
                        {props.isApproved?<Verified/>:<NotVerified/>}
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>  
        </div>
    )
}

export default Blog

// function Blog(props) {
//     return (
//         <div>
//             <div class="card" style={{width:'18rem'}}>
//                 <img src="https://cdn.britannica.com/81/155881-050-38801D86/waste-beach-land-pollution-soil-water-health.jpg" class="card-img-top" alt="..."/>
//                     <div class="card-body">
//                         <h5 class="card-title">Pollution</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <a href="#" class="btn btn-primary">Go somewhere</a>
//                     </div>
//             </div>
//         </div>
//     )
// }

// export default Blog
