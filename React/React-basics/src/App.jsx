import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import { Content,Footer } from './Content.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Content></Content>
      <Footer/>
    </>
  )
}






// //components are normal fn but their name start with capital letter
// //components always return jsx
// //use components as html tags inside jsx

// function Header(){
//   // jsx -javascript extension
//   //writing html inside js
//   //every element or tag should wrap inside a single tag
//   //every tag must be closed
//   //use className insteed of class 

//   return <div>
//     <h1>hello everyone</h1>
//     <p>good afternoon</p>
//   </div>
// }
// function Content(){
//   return <div>
//     <p>this is main <br></br> content</p>
//     <input type="text" />
//   </div>
// }
// function Footer(){
//   return 'this is footer'
// }


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Header></Header>
//       <Content></Content>
//       <Footer/>
//     </>
//   )
// }

export default App
