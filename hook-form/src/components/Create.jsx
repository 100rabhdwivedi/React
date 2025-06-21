import { nanoid } from 'nanoid';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';

const Create = (props) => {
    const {data,setData} = props
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

const submitHandler = (info) => {
    const newUser = {
    ...info,
    id: nanoid()
    };
    setData((prevData) => [...prevData, newUser]);
    toast.success("Saved",{
    position: 'top-right'
    })
    reset()
};


return (
    <div className="flex items-center justify-center px-4 py-10">
    <form onSubmit={handleSubmit(submitHandler)} className="w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row lg:gap-24 gap-8 mb-10">
        <div className="flex-1">
            <h2 className="mb-2 font-medium text-gray-700 ">Enter Name</h2>
            <input
            {...register('name', { required: 'This field is required'})}
            autoComplete="off"
            className="border-b-2 w-full h-12 outline-none bg-transparent text-gray-800"
            type="text"
            placeholder="John Doe"
            />
            {errors?.name?.message && <small className='text-red-500'>{errors.name.message}</small>}

        </div>
        <div className="flex-1">
            <h2 className="mb-2 font-medium text-gray-700">Enter Profession</h2>
            <input
            {...register('profession', { required: 'This field is required' })}
            autoComplete="off"
            className="border-b-2 w-full h-12 outline-none bg-transparent text-gray-800"
            type="text"
            placeholder="Web Developer"
            />
            {errors?.profession?.message && <small className='text-red-500'>{errors.profession.message}</small>}

        </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-24 gap-8 mb-10">
        <div className="flex-1">
            <h2 className="mb-2 font-medium text-gray-700">Enter Email</h2>
            <input
            {...register('email', { required: 'This field is required' })}
            aria-invalid={errors.mail ? "true" : "false"} 
            autoComplete="off"
            className="border-b-2 w-full h-12 outline-none bg-transparent text-gray-800"
            type="email"
            placeholder="email@example.com"
            />
            {errors?.email?.message && <small className='text-red-500'>{errors.email.message}</small>}
        </div>
        <div className="flex-1">
            <h2 className="mb-2 font-medium text-gray-700">Enter Number</h2>
            <input
            {...register('mobile', { required: 'This field is required',
            maxLength: {
            value: 10,
            message: 'Mobile number cannot exceed 10 digits'
            },
            minLength: {
            value: 10,
            message: 'Mobile number must be exactly 10 digits'
            },
            pattern: {
            value: /^[0-9]+$/,
            message: 'Only digits are allowed'
            } })}
            autoComplete="off"
            className="border-b-2 w-full h-12 outline-none bg-transparent text-gray-800"
            type="tel"
            placeholder="9876543210"
            />
            {errors?.mobile?.message && <small className='text-red-500'>{errors.mobile.message}</small>}

        </div>
        </div>

        <button  className="bg-black text-white w-36 py-2 rounded-full flex hover:scale-90 items-center justify-start px-3 hover:bg-gray-900 transition-all">
        <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
            <div className="h-2 w-2 bg-black rounded-full"></div>
        </div>
        <h3 className="ml-4">Create</h3>
        </button>
    </form>
    </div>
);
};

export default Create;
