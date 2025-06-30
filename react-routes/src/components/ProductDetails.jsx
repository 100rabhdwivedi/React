import { useLocation, useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const location = useLocation()
  console.log(location);
  
  // Product data (can be replaced with API later)
  const products = {
    'product1': {
      title: 'Super Keyboard X1',
      description:
        'Experience seamless typing with tactile feedback and RGB lighting. Built for coders and gamers.',
      price: '₹ 3,499',
      features: [
        '⏱️ Ultra-fast response time',
        '🌈 Customizable RGB lighting',
        '⌨️ Mechanical switches',
        '🧠 Optimized for long typing sessions',
      ],
    },
    'product2': {
      title: 'Noise Cancelling Headphones',
      description:
        'Immersive sound experience with superior noise cancellation and long battery life.',
      price: '₹ 5,999',
      features: [
        '🎧 Active noise cancellation',
        '🔋 30+ hours battery backup',
        '🎵 Deep bass sound quality',
        '🔊 Bluetooth 5.2 support',
      ],
    },
    'product3': {
      title: 'Portable Smart Speaker',
      description:
        'Compact, powerful, and voice-controlled. Take your music everywhere!',
      price: '₹ 2,199',
      features: [
        '🗣️ Voice Assistant Enabled',
        '📦 Compact & lightweight',
        '🎶 360° sound output',
        '💧 Water-resistant design',
      ],
    },
  };

  const product = products[name?.toLowerCase()];

  // If product not found
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white text-center">
        <div>
          <h1 className="text-3xl font-bold">404 - Product Not Found</h1>
          <p className="mt-4 text-gray-400">The product you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/product')}
            className="mt-6 px-5 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-gray-800 rounded-2xl shadow-xl p-8">
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-1 bg-blue-400 rounded-md mb-4"
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-300 mb-6">{product.description}</p>

        <ul className="list-disc list-inside text-gray-400 mb-6 space-y-1">
          {product.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-semibold text-green-400">
            {product.price}
          </span>
          <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
