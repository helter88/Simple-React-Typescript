import {useRef, useState} from 'react'


const users =[
    {name: "Tomasz", age: 40},
    {name: "Arek", age:35},
    {name: "Patryk", age: 20},
    {name: "Tomasz", age: 22}
]

function FindUser() {
  const [userList, setUserList] = useState<{name:string, age:number}[]|[]>([])
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const inputRef =useRef<HTMLInputElement>(null);

  const inputHandler= () => {
    if (!inputRef.current){
      return
    }
    const userName = inputRef.current.value
    
    const found =users.filter(user => user.name ===userName);
    setUserList(found);
    setIsButtonClicked(true);
    inputRef.current.value =""
  }
  let displayUsers = userList.map(user => {
    return (
      <div key={Math.random()}>
      <p> Name: {user.name}</p>
      <p> Age: {user.age}</p>
      </div>
      
    )
  }
  )
  let displayUsersLogic = displayUsers.length===0? <p>No users to display</p>: displayUsers
  
  return (
    <>
      <h1>Find User</h1>
      <input ref={inputRef} type="text" placeholder="name" />
      <button onClick={inputHandler}>Find</button>
      {isButtonClicked ? displayUsersLogic: ""}
    </>
  )
}

export default FindUser
