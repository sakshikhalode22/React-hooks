export function produceProducts() {
    const products = [];
    for (let i = 0; i < 5; i++) {
      products.push(`Product ${i+1}`);
    }
    return products;
  }