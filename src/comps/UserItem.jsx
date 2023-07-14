


function UserItem({user}) {

    const handleClick = (e) => {
        console.log(e.currentTarget.id) 
    }

    return(
    <div className="card" onClick={handleClick} id={user.id} >
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    )

}

export default UserItem