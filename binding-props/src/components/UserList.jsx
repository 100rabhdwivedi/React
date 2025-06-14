const UserList = (props) => {
    const users = props.users
    const setUsers = props.setUsers
    const userDetails = users.map((user, index) => {
    return (
        <li key={index}>
        <span>Name : {user.name}</span> || <small>Age : {user.age}</small>
        </li>
    );
    });
    return(
    <div>
    <h1>Show users</h1>
    <ul> {userDetails} </ul>
    </div>
    );
};

export default UserList;
