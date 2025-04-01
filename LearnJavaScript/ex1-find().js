<<<<<<< HEAD
const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 }
  ];
  
  const selectedId = 2;
  const product = products.find(p => p.id === selectedId);
=======
const products = [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Mouse", price: 25 },
    { id: 3, name: "Keyboard", price: 75 }
  ];
  
  const selectedId = 2;
  const product = products.find(p => p.id === selectedId);
>>>>>>> c81694a5f8d8cfecb294864b4227d4a849cc20a8
  console.log(product); // { id: 2, name: 'Mouse', price: 25 }