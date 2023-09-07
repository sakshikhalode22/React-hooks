import "./App.css";
import { Grid } from "@mui/material";
import { Basic, Demo1, Demo2 } from "./component/BasicUseState";
import { Basic1, Demo3, Demo4 } from "./component/BasicUseEffect";

import { useState, useTransition } from 'react';

import { produceProducts } from './data';
import ProductList from './component/BasicUseTransition';

const products = produceProducts();

function searchProducts(searchTerm) {
  if (!searchTerm) {
    return products;
  }
  return products.filter((product) => product.includes(searchTerm));
}

function App() {
  const [isPending, startTransition] = useTransition();
  const [searchTerm, setSearchTerm] = useState('');

  const searchedProducts = searchProducts(searchTerm);

  function handleChange(event) {
    startTransition(() => {
      setSearchTerm(event.target.value);
    });
  }

  return (
    <div className="App">
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Basic />
        <Demo1 />
        <Demo2 />
        <Basic1 />
        <Demo3 />
        <Demo4 />
      </Grid>
      <div className={"main"}>
      <input type="text" onChange={handleChange} />
      {isPending && <p style={{ color: 'white' }}>Updating ..</p>}
      <ProductList products={searchedProducts} />
    </div>


    </div>
  );
}

export default App;
