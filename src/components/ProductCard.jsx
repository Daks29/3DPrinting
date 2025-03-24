
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
        <p className="text-gray-600 mb-2">₹{product.price}</p>
        <div className="flex justify-between items-center">
          <Link 
            to={`/product/${product.id}`} 
            className="text-indigo-600 hover:underline"
          >
            Details
          </Link>
          <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}