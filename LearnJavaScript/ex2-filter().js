<<<<<<< HEAD
const orders = [
    { id: 1, status: "completed" },
    { id: 2, status: "pending" },
    { id: 3, status: "pending" }
  ];
  
  const pendingOrders = orders.filter(order => order.status === "pending");
  console.log(pendingOrders); 
  // Outputs: [{ id: 2, status: 'pending' }, { id: 3, status: 'pending' }]
  

const products1 = products.filter(e => true); 
// 1. return element or Object or true, keep record in new array
// 2. return false or undefined, not keep record in new array
=======
const orders = [
    { id: 1, status: "completed" },
    { id: 2, status: "pending" },
    { id: 3, status: "pending" }
  ];
  
  const pendingOrders = orders.filter(order => order.status === "pending");
  console.log(pendingOrders); 
  // Outputs: [{ id: 2, status: 'pending' }, { id: 3, status: 'pending' }]
  

const products1 = products.filter(e => true); 
// 1. return element or Object or true, keep record in new array
// 2. return false or undefined, not keep record in new array
>>>>>>> c81694a5f8d8cfecb294864b4227d4a849cc20a8
