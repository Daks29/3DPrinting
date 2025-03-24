import { useState } from "react";
import OrderConfirmation from "../components/OrderConformation";

export default function Cart() {

const [conformation,setConformation]=useState(false);

const handlePlaceOrder=()=>{
    setConformation(true)
}

    const cartItems = [
      { id: 1, name: 'Naruto Maki', price: 299, quantity: 2 },
      { id: 2, name: 'lolicon', price: 499, quantity: 1 },
    ];
  

    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );
  
    return (
        <div className="container mx-auto px-4 py-8">
          {conformation && <OrderConfirmation onClose={() => setConformation(false)} />}
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            ))}
  
            <div className="mt-6 p-4 bg-white rounded-lg shadow">
              <div className="flex justify-between font-bold text-lg">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              <button
          onClick={handlePlaceOrder}
          className="w-full mt-4 bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
        >
          Place Order
        </button>

            </div>
          </div>
        )}
      </div>
    );
  }