import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchUsers,addUser } from '../store';
import Skeleton from './Skeleton';
import Button from './Button';
import {useThunk} from '../hooks/use-thunk';
import UsersListItem from './UsersListItem';
 

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

  let content;

  if(isLoadingUsers){
    content = <Skeleton times={6} className="h-10 w-full" />
  }else if (loadingUsersError) {
    content =<div> Error Fetching data ...</div>
  }else{
    content = data.map((user)=>{
      return <UsersListItem key={user.id} user={user} />
    })
  }

 
  return (
    <div>
      <Button className="absolute right-10 top-2" primary rounded loading={isCreatingUser} onClick={handleUserAdd}>+ Add Friend</Button>
      <div className='items-center mb-6'>
        <h1 className='text-center mr-20 mt-8 font-serif font-extrabold'>Friends</h1>
       {creatingUserError && 'Error creating user...'}
      </div >
      <div className='ml-40 w-3/4'>
       {content}
      </div> 
    </div>
  )
}

export default UsersList;