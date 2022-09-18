import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { API } from '../../config';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


const UserDetailPage = () => {
  const [user, setUsers] = useState(null)
  const params = useParams()
  useEffect( () => {
    const getUsers = async () => {
      setUsers(null)
      try {
        const { data } = await axios.get(`${API}users/${params?.id}`)
        // console.log('data', data)
        setTimeout(() => {
          setUsers(data)
        }, 2000);
      } catch (e) {
        // 
      }
    }
    getUsers()
  }, [])
  return (
    <div>
      <h1>
        UserDetailPage {params.id}
      </h1>

      {!user ? (
        <Skeleton count={4} baseColor="grey"/>
      ) : (
        <>
          <div>
            Name: {user?.name}
          </div>
          <div>
            Username: {user?.username}
          </div>
          <div>
            Email: {user?.email}
          </div>
          <div>
            Company: {user?.company.name}
          </div>
        </>
      )}
    </div>
  )
}

export default UserDetailPage;