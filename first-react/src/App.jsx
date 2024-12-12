// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App

// import './App.css'

// function App() {
//   return (
//     <main>
//       <h1>Hello world!</h1>
//       <p>Here are some of my favourite things.</p>
//       <div className="tile">
//         <img src="https://images.pexels.com/photos/106155/germany-duisburg-tiger-turtle-106155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Roller Coasters" />
//         <p>Roller Coasters</p>
//         <img src="https://images.pexels.com/photos/711187/pexels-photo-711187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Swimming" />
//         <p>Swimming</p> 
//         <img src="https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Cats" />
//         <p>Cats</p>
//         <img src="https://images.pexels.com/photos/18810828/pexels-photo-18810828/free-photo-of-rocky-seashore-landscape-at-carnewas-bedruthan-england.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="The Beach" />
//         <p>The Beach</p> 

//       </div>
//     </main>
//   )
// }

// export default App

import './App.css'
import Tile from './Tile'

function App() {
  return (
    <main>
      <h1>Hello world!</h1>
      <p>Here are some of my favourite things.</p>
      <Tile title="Roller Coasters" image="https://images.pexels.com/photos/106155/germany-duisburg-tiger-turtle-106155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Tile title="Swimming" image="https://images.pexels.com/photos/711187/pexels-photo-711187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Tile title="Cats" image="https://images.pexels.com/photos/69932/tabby-cat-close-up-portrait-69932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <Tile title="The Beach" image="https://images.pexels.com/photos/18810828/pexels-photo-18810828/free-photo-of-rocky-seashore-landscape-at-carnewas-bedruthan-england.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
    </main>
  )
}

export default App