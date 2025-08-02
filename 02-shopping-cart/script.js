// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

// Start coding here...
const itemTotals = cart.map(item => {
      const total = item.price * item.quantity;
      return `${item.name}: ₱${total}`;
    });
    document.getElementById("totalPerItem").innerHTML = itemTotals.join("<br>");

    // ✅ 2. Item descriptions
    const descriptions = cart.map(item => `${item.name} - ₱${item.price}`);
    document.getElementById("itemDescriptions").innerHTML = descriptions.join("<br>");

    // ✅ 3. Total cart value using reduce
    const totalCartValue = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById("cartTotal").innerHTML = `₱${totalCartValue}`;
