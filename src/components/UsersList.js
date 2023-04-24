import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers,addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import {useThunk} from '../hooks/use-thunk';

 

function UsersList() {
  const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const {data} = useSelector((state)=>{
    return state.users;
  }) 


  useEffect(()=>{

    doFetchUsers();
    // setIsLoadingUser(true);
    // dispatch(fetchUsers())
    //   .unwrap()
    //   .catch((err) => setLoadingUsersError(err))
    //    // funally s a function that is going to be called at the end no matter what
    //   .finally(() => setIsLoadingUser(false))
    // //BAD !! --> because here the dispatch call is asynchronous in nature
    // // setIsLoadingUser(false);
  },[doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
    // setIsCreatingUser(true);
    // dispatch(addUser())
    //   .unwrap()
    //   .catch(err => setIsCreatingUserError(err))
    //   .finally(()=> setIsCreatingUser(false));
  }

  if(isLoadingUsers){
    return <Skeleton times={6} className="h-10 w-full" />
  }

   if(loadingUsersError) {
    return <div>Error fetching data...</div>
   }

  const renderedUsers = data.map((user)=>{
    return <div key={user.id} className='mb-2 border rounded'>
        <div className='flex p-1 justify-between items-center cursor-pointer'>
         {user.name}
        </div>
    </div>
  })
  return (
    <div>
      <div className='flex flex-row justify-between m-3'>
        <h1 className='m-2 text-xl'>Users</h1>
          <Button loading={isCreatingUser} onClick={handleUserAdd}>+ Add User</Button>
       {creatingUserError && 'Error creating user...'}
      </div>
       {renderedUsers}
    </div>
  )
}

export default UsersList