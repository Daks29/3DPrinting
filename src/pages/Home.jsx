import { Link } from 'react-router-dom';

export default function Home() {
    // console.log("Homoe");
    
    return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6 dark:text-white">
          Welcome to <span className="text-indigo-600">BakchodModel</span>
        </h1>
        <p className="text-xl mb-8 dark:text-gray-300">
          Order premium 3D models for your pookie
        </p>
        <Link
          to="/products"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Browse Models
        </Link>
      </div>


      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 dark:text-white">Featured Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 mb-4 rounded">
            <img 
        src={import.meta.env.VITE_IMAGE_URL_3} 
        alt="bal baichi" 
        className="w-full h-48 object-cover"
      />
            </div>
            <h3 className="font-medium dark:text-white">Bakchod 1</h3>
            <p className="text-indigo-600 dark:text-indigo-400">₹299</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 mb-4 rounded">
            <img 
        src={import.meta.env.VITE_IMAGE_URL_4} 
        alt="bal baichi" 
        className="w-full h-48 object-cover"
      />
            </div>
            <h3 className="font-medium dark:text-white">Bakchod 2</h3>
            <p className="text-indigo-600 dark:text-indigo-400">₹199</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <div className="h-48 bg-gray-200 dark:bg-gray-700 mb-4 rounded">
            <img 
        src={import.meta.env.VITE_IMAGE_URL_5} 
        alt="bal baichi" 
        className="w-full h-48 object-cover"
      />
            </div>
            <h3 className="font-medium dark:text-white">Bakchod 3</h3>
            <p className="text-indigo-600 dark:text-indigo-400">₹99</p>
          </div>
        </div>
      </div>
    </div>
  );
}