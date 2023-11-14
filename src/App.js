import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import SideBaar from './SideBaar';
import BodyBar from './BodyBar';
import Product from './Product';

import { useState } from 'react';

function App() {
  const [searchKey, updateSearchkey] = useState("");
  const [searchProduct, updateSearchproduct]= useState([]);
  const [selectedProduct, updateSelectedproduct]= useState({})
  // const onType = (e) => {
  //   updateSearchkey(e.target.value);
  //   fetch('http://localhost:5000/productByName?searchKey=' + e.target.value)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("DATA", data);        
  //     })
  //     .catch((err) => {
  //        console.log(err.message);
  //     });
  // }
  const onInputChange = (e) => {
    updateSearchkey(e.target.value);
    // fetch('http://localhost:5000/productByName?searchKey=' + e.target.value)
    // .then((response) => response.json())
    // .then((data) => {
    //   console.log("DATA", data); 
    //   updateSearchproduct(data);   
    // })
    // .catch((err) => {
    //    console.log(err.message);
    // });
   

  }
  const buttonMethod = () => {
    console.log("button");
    fetch('http://localhost:5000/productByName?searchKey=' + searchKey)
    .then((response) => response.json())
    .then((data) => {
      updateSearchproduct(data);   
    })
    .catch((err) => {
       console.log(err.message);
    });
  }

  const singleProduct = (e) => {
    updateSelectedproduct(e);
    console.log("AT", selectedProduct);
  }

  const onBackClickFromProduct = () => {
    updateSelectedproduct({});
    updateSearchkey("");
    updateSearchproduct([]);
  }


  console.log("SELECTEDPRODUCT", selectedProduct);
  return (
    <div className="App">
      <NavBar inputValue={searchKey} onInputChange={onInputChange} buttonClick={buttonMethod}/>
      <SideBaar />
      {selectedProduct.hasOwnProperty("title") ?
      <Product clickOnBack={onBackClickFromProduct} selectedProduct={selectedProduct}/>
      :
      <BodyBar productInput={searchProduct} clickOnproduct={singleProduct}/>}
    </div>
  );
}

export default App;


