import { useDispatch, useSelector } from 'react-redux'
import { deleteuser } from '../store/reducers/UserReducer'

const Users = () => {
    const { users } = useSelector((state) => state.UserReducer)
    const dispatch  = useDispatch()
    const handleDelete = (id) => {
        dispatch(deleteuser(id))
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md p-6">
            <h1 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                Users List
            </h1>
            <ul className="space-y-4">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="flex justify-between items-center bg-gray-50 rounded-lg p-2 shadow hover:shadow-md transition"
                    >
                        <div>
                            <p className="font-medium text-gray-700">{user.name}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(user.id)}
                            className="text-red-500 hover:text-red-800 text-xl"
                            title="Delete user"
                        >
                            ❌
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Users
