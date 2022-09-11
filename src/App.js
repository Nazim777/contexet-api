// import React,{useContext} from 'react';
// import './App.css';
// import Counter from './component/Counter';
// import {CounterContext} from './Context/Context'



// function App() {
//   const counterState = useContext(CounterContext)
//   return (
//     <div className="App">
//       <h1>Count value is:{counterState.count}</h1>
//       <Counter/>
      
//     </div>
//   );
// }

// export default App;


// array update
// const [count,setCount] = useState([])
// console.log(count)
// <button onClick={()=>setCount([].concat(count,{name:'rahim',age:40}))}>increment</button> 
//<button onClick={()=>setCount([...count,{name:'rahim',age:40}])}>increment</button> 

// total price
// const array = [
//   {name:'banana',price:200},
//   {name:'apple',price:400},
//   {name:'grape',price:500}
// ]
// const total = array.reduce((a,b)=>a+b.price,0)
// console.log(total)




import React,{useContext,useState,useEffect} from 'react';
import Product from './component/Product';
import ProductCart from './component/ProductCart';
import './App.css';
import FakeProduct from './component/FakeProduct';
import FakeProductCart from './component/FakeProductCart';

function App() {
  return (
    <div className="App">
      <h1>Product</h1>
      <Product name={'banana'} price={200}/>
      <Product name={'apple'} price={400}/>
      <Product name={'grape'} price={500}/>
      <Product name={'jack fruit'} price={600}/>

      <h1>Product Cart</h1>
      <ProductCart/>

      {/* // FakeProduct */}
      <FakeProduct/>

      <h1>Fake ProductCart</h1>
      <FakeProductCart/>

      
     
      
    </div>
  );
}

export default App;
