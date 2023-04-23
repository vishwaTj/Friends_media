import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch',async ()=>{
    const response = await axios.get('http://localhost:3005/users');

    return response.data;
    // whatever you reurn here is going to 
    // automatically be assigned to payload property 
    // of extrareducer
});

export {fetchUsers};


