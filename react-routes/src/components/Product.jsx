import { useNavigate } from "react-router-dom";

const Product = () => {

    const navigate = useNavigate()
    const naviagteHandler = (name) =>{
        navigate(`/product/details/${name}`,
            {state:{
                name:"gaurav"
            }}
        )
    }
return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-8">
    <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Product 1 */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-2">Product 1</h2>
        <p className="text-gray-300 mb-4">This is the detail of product 1</p>
        <button onClick={()=>naviagteHandler('Product1')} className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">
            Show Details
        </button>
        </div>

        {/* Product 2 */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-2">Product 2</h2>
        <p className="text-gray-300 mb-4">This is the detail of product 2</p>
        <button onClick={()=>naviagteHandler('Product2')} className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">
            Show Details
        </button>
        </div>

        {/* Product 3 */}
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform duration-300">
        <h2 className="text-2xl font-semibold mb-2">Product 3</h2>
        <p className="text-gray-300 mb-4">This is the detail of product 3</p>
        <button onClick={()=>naviagteHandler('Product3')} className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">
            Show Details
        </button>
        </div>
    </div>
    </div>
);
};

export default Product;
