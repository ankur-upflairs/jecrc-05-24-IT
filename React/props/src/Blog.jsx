 import React from 'react'


function Blog(props) {
    return (
        <div>
            <div class="card" style={{width:'18rem'}}>
                <img src={props.image} alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{props.title}</h5>
                        <p class="card-text">{props.text}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
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
