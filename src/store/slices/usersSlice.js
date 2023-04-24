import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunk/fetchUsers";
import { addUser } from "../thunk/addUser";
import { removeUser } from "../thunk/removeUser";

const usersSlice = createSlice({
    name:'users',
    initialState: {
        data: [],
        isLoading: false,
        error: null
    },
    //extraareducers are just to watch out for
    // some additional actions they are not inherently
    // tied to Slice
    extraReducers(builder) {

// block to fetch users

        // here we are not giving string as an argument
        // Thunk will automatically generate three cases
        // i) .pending ii) .fulfilled iii) .rejected
          builder.addCase(fetchUsers.pending, (state, action)=>{
             // Update our state object however appropriate
             // to show the user what we are loading data
             state.isLoading=true;
          });
          builder.addCase(fetchUsers.fulfilled, (state,action)=>{
             state.isLoading = false;
             state.data = action.payload;
          });
          builder.addCase(fetchUsers.rejected, (state,action)=>{
             state.isLoading = false;
             state.error = action.error;
          });
        
 // reducers for adding user

        builder.addCase(addUser.pending, (state,action)=>{
            state.isLoading = true;
        });
        builder.addCase(addUser.fulfilled, (state,action)=>{
            state.isLoading = false;
            state.data.push(action.payload);
        });
        builder.addCase(addUser.rejected, (state,action)=>{
            state.isLoading = false;
            state.error = action.error;
        });
        
        
 // block to remove users
  
        builder.addCase(removeUser.pending, (state, action)=>{
             state.isLoading = true;
        })
        builder.addCase(removeUser.fulfilled, (state,action)=>{
             state.isLoading = false;
             // FIX ME!!!
             console.log(action);
             state.data = state.data.filter((user)=>{
                return user.id !== action.payload.id;
             })
        })
        builder.addCase(removeUser.rejected, (state,action)=>{
             state.isLoading = false;
             state.error = action.error;
        })

    }
})

export const usersReducer = usersSlice.reducer;




