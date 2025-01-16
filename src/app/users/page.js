import UserCard from "./_components/UserCard";

const Users = async() => {
  const response=await fetch('https://jsonplaceholder.typicode.com/users');
  const users=await response.json();
  return (
    <div className="grid grid-cols-3 gap-4">
        {
            users.map(user=><UserCard user={user} key={user.id}/>)
        }
    
    </div>
  )
}

export default Users;