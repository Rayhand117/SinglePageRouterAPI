import { useEffect, useState } from 'react';
import { API } from '../../config';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const HomePage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  useEffect( () => {
    const getUsers = async () => {
      try {
        const { data } = await axios.get(`${API}users`)
        setUsers(data)
        console.log('data', data);
      } catch (e) {
        // 
      }
    }

    getUsers()
  }, [])
  return (
    <div>
      <ul>
        {users?.map((user) => (
          <li>
            <div>
              <p>id: {user.id}</p>
              <p>name: {user.name}</p>
              <p>Company: {user.company.name}</p>
              {/* <p>Email: {user.email}</p> */}
              <button onClick={() => navigate(`${user.id}`)}>Show Detail</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage;