import UserItem from "./UserItem"

function Users({users}) {

return (
    
    users.map((user) => (
    
        <UserItem key={user.id} user={user}/>
        
    ))

)
}

export default Users