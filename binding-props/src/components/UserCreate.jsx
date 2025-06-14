import { useState } from "react";
const UserCreate = (props) => {

const users = props.users
const setUsers = props.setUsers
const [name, setName] = useState("");
const [age, setAge] = useState("");

const handelSubmit = (e) => {
    e.preventDefault();
    if(!name|| !age){
        return alert("Please fill both fields")
    }
    let newUser = {name :name.trim() , age:Number(age)}
    setUsers([...users, newUser]);
    setName("");
    setAge("");
};
return (
    <div>
    <h1>Get user Details</h1>
    <form onSubmit={handelSubmit}>
        <input
        onChange={(e) => {setName(e.target.value);}}
        value={name}
        type="text"
        placeholder="Enter name "
        />
        <input
        onChange={(e) => {setAge(e.target.value);}}
        value={age}
        type="number"
        placeholder="Enter age"
        />
        <button>Submit</button>
    </form> 
            
    <hr />
    </div>
);
};

export default UserCreate;
