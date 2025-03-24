import { useState } from 'react';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: 'Naruto Maki Chut', price: 69, category: 'Art', image: import.meta.env.VITE_IMAGE_URL_1 },
  { id: 2, name: 'Panda Panda', price: 96, categorys: 'Architecture', image: import.meta.env.VITE_IMAGE_URL_2 },
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search models..."
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}