import { FaEnvelope, FaBriefcase, FaPhone } from "react-icons/fa";
import { MdBookmarkBorder } from "react-icons/md";
import toast from 'react-hot-toast';


const Read = (props) => {

    const {data,setData} = props
    const filterUser = (id) => {
    setData(data.filter((elem) => elem.id !== id));
    toast.success('Successfully deleted!')
    };

    
return (
    <div className="p-6 max-w-6xl mx-auto ">
    <h1 className="text-4xl text-center  mb-10 text-[#222] font-two">📇 Contacts</h1>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {data.map((user) => (
        <div
            key={user.id}
            className="bg-gradient-to-b from-[#1e1e1e] to-[#0e0e0e] text-white rounded-2xl p-5 shadow-lg relative border border-white/10"
        >
            {/* Top icons */}
            <div className="flex justify-between items-center mb-4">
            <div className="bg-white/20 p-2 rounded-full">
                <div className="w-4 h-4 rounded-full bg-white"></div>
            </div>
            <button className="text-gray-400 hover:text-white">
                <MdBookmarkBorder className="text-xl" />
            </button>
            </div>
            {/* Content */}
            <div className="space-y-1">
            <p className="text-sm ">ID: <span className="text-xs text-gray-400">{user.id}</span></p>
            <h2 className="text-2xl font-two  ">{user.name}</h2>
            <p className="text-xs text-gray-400 mb-2 font-one">{user.profession}</p>
              {/* Tags */}
            <div className="flex gap-2 text-xs">
                <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full">Email</span>
                <span className="bg-white/10 border border-white/10 px-3 py-1 rounded-full">Phone</span>
            </div>
            </div>
            {/* Divider */}
            <div className="my-4 border-t border-white/10"></div>
            {/* Contact Info */}
            <div className="text-sm space-y-1 text-gray-300">
            <p className="flex items-center gap-2">
                <FaEnvelope className="text-white/60" /> {user.email}
            </p>
            <p className="flex items-center gap-2">
                <FaPhone className="text-white/60" /> {user.mobile}
            </p>
            </div>
            {/* CTA */}
            <button onClick={() => filterUser(user.id)} className="mt-5 w-full text-sm font-medium bg-white text-black py-2 rounded-lg hover:bg-gray-200 transition">
            Delete
            </button>
        </div>
        ))}
    </div>
    </div>
    );
};

export default Read;
