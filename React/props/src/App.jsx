import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './Blogs'
import Events from './Events'
import State from './State'
import Forms from './Forms'
import Conditional from './Conditional'
import DataFetch from './DataFetch'

//todo list => [
  // {id:1,task:'learn react',done:false},]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Blogs/> */}
    {/* <Events /> */}
    {/* <State/> */}
    {/* <Forms/> */}
    {/* <Conditional/> */}
    <DataFetch/>
    </>
  )
}
  









// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       {/* <Blog/> */}
//       <Blog title="Pollution" image="https://cdn.britannica.com/81/155881-050-38801D86/waste-beach-land-pollution-soil-water-health.jpg" class="card-img-top" text="Some quick example text to build on the card title and make up the bulk of the card's content.</p>" />
//       <Blog title={'HTML'} 
//       image="https://picsum.photos/200/300" 
//       text="Some quick example text to build on the card title and make up the bulk of the card's content." />
//     </>
//   )
// }
  
export default App
