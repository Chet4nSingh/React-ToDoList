import List from "./components/List";

function App() {
  return <>
  <h1 className="lg:text-8xl hidden lg:block w-1/3 h-screen p-24 bg-teal-800 text-white">To <br /> Do <br /> List</h1>
  <List />
  </>;
}

export default App;


// import { useRef, useState } from "react";
// import List from "./components/List";

// function App() {
//   const [lists, setLists] = useState();
//   const input = useRef();

//   function handleAddList() {
//     const newList = {
//       text: input.current.value,
//       id: Math.random() * 100,
//     };

//     setLists((prevLists) => [newList, ...prevLists]);
//   }

//   return (
//     <>
//       <aside className="w-1/3 h-screen p-16 bg-teal-800 text-white">
//         <h1 className="text-9xl mb-24">
//           To <br /> Do <br /> List
//         </h1>
//         <div className="flex w-full">
//           <input
//             ref={input}
//             type="text"
//             className="p-2 pl-4 outline-none text-black"
//           />
//           <button className="p-2 border">Add List</button>
//         </div>
//       </aside>
//       {/* <List /> */}
//     </>
//   );
// }

// export default App;