const User = ({user}) => {
//    console.log('user', user);
    return(
        <tr className="user-row">
            <td>
                {user.id}
            </td>
            <td>
                {user.username}
            </td>
            <td>
                {user.img}
            </td>
            <td>
                {user.gender}
            </td>
        </tr>
    )
}

const UserList = ({users}) => {
//    console.log('users', users);
    return (
    <div className="users-list">
        <h1>Users</h1>
        <table className="user-list__table">
            <thead>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>img</th>
                <th>gender</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user) => <User key={user.id} user={user}/>)}
            </tbody>
        </table>
    </div>
    )
}


export default UserList;