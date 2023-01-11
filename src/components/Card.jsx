const Card = ({ name }) => {
    return (
<div className='Card'>
            <h1>{name} {users[index].name.first} {users[index].name.last}</h1>
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
    )
}

export default Card