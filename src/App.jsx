import { useState } from 'react'
import './App.css'
import Colors from './data/Colors'
import users from './data/users.json'
function App() {

  const randomIndex = Math.floor(Math.random() * users.length);
  const [index, setIndex] = useState(randomIndex);

  const changeUser = () => {
    const anotherRandom = Math.floor(Math.random() * users.length);
    setIndex(anotherRandom);
  };

  const randomColorIndex = Math.floor(Math.random() * Colors.length);
  document.body.style = `background: ${Colors[randomColorIndex]}`;


    return (
        <div className='App' style={{ color: Colors[randomColorIndex]}}>
          <div className='Card'>
            <h1>{users[index].name.title} {users[index].name.first} {users[index].name.last}</h1>
            <img src={users[index].picture.large} alt="photo" />
            <ul>
              <li>
              <i className='bx bxs-envelope'></i>
              {users[index].email}
              </li>
              <li>
              <i className='bx bxs-phone'></i>
              {users[index].phone}
              </li>
              <li>
              <i className='bx bxs-location-plus' ></i>
              {users[index].location.city} {users[index].location.state} {users[index].location.country}
              </li>
            </ul>
          </div>
          <button onClick={changeUser}>
          <i class='bx bx-shuffle bx-spin' ></i>
          </button>
        </div>
    )
}

export default App
