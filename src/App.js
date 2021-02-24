import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  let nayoks=['anwar','jaforo','salman','bappi','shuvo']
  const products=[
    {name:'photoshop',price:'$ 99.99'},
    {name:'ilstetor',price:'$ 100.10'},
    {name:'pdf',price:'$ 20'},
    {name:'primiyam e1',price:'$245'},
    {name:'pworer',price:'$100'}
  ]
 
  return (
    <div className="App">
      <header className="App-header">
      <p> I am react parson</p>
      <Counter></Counter>
      <Users></Users>
      <uL>
        {
          nayoks.map(nayoks => <li>{nayoks}</li>)
        }
        {
          products.map(Product =><li>{Product.name}</li>)
        }
      </uL>
      {
        products.map(product =><Product product={product}></Product>)
      }
      {/* <Product product={products[0]}></Product>
      <Product product={products[1]}></Product> */}
     
      <Person name="munna" job="master"></Person>
      <Person name="masum"job="army"></Person>
      </header>
    </div>
  );
}
function Counter(){
  const [count,setCount]=useState(0);
  const handleIncrease= () => setCount(count+1)
  // ai vavew kora jay
  // {
  //   // const newCount=count+1
  //   setCount(count+1)
  // }
  return(
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=> setCount(count-1)}>decrease</button>
      <button onClick={() => setCount(count+1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users,setUsers]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data =>setUsers(data));
  } ,[]  )
  return(
    <div>
      <h3>daynamic user {users.length}</h3>
       <ul>
        {
           users.map(user => <li>{user.name}</li>)
        }
       </ul>
      
    </div>
  )
}

function Product(props){
 const productStyle={
border:'2px solid gray',
borderRadius:'5px',
backgroundColor:'red',
hight:'200px',
width:'300px',
float:'left'
 }
 const {name,price}=props.product;
 console.log(name,price)
 return(
   <div style={productStyle}>
     <h2>{name}</h2>
     <h5>{price}</h5>
     <button>buy now</button>
   </div>
 )
}
function Person(props) {
  return (
    <div style={{border:'2px solid gold',margin:'10px',width:'500px'}}>
      <h3>my name : {props.name}</h3>
      <p>my profession : {props.job} </p>
    </div>
  )
}


export default App;
