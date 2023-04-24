import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch',async ()=>{
    const response = await axios.get('http://localhost:3005/users');

    // Dev Only!!
    await pause(1000);


    return response.data;
    // whatever you reurn here is going to 
    // automatically be assigned to payload property 
    // of extrareducer
});

// Dev Only!!!
const pause = (duration) =>{
    return new Promise((resolve) =>{
        setTimeout(resolve, duration);
    })
}

export {fetchUsers};


