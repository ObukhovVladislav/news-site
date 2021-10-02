const User = (user) => {
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

const UserList = (users) => {
//    console.log('users', users);
    return (
        <table className={"user-list"}>
            <thead>
            <tr>
                <th>id</th>
                <th>username</th>
                <th>img</th>
                <th>gender</th>
            </tr>
            </thead>
            <tbody>
            {users.users.map(User)}
            </tbody>
        </table>
    )
}


export default UserList;