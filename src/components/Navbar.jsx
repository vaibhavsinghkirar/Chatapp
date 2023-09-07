import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Cow chat</span>
      <div className='user'>
        <img src="https://media.licdn.com/dms/image/C5603AQF-438JiD8isg/profile-displayphoto-shrink_800_800/0/1661704629569?e=1697673600&v=beta&t=j6gABKOU3fYMFdkjB1TQwArwhbw5pf2RXIuLgF2KtY8" alt="" />
        <span>vaibhav</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar