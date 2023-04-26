import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from './apis/albumsApi';
import { photosApi } from "./apis/photosApi";

export const store = configureStore({
    reducer:{
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        //here albumsApi.reducerPath is going to return the string
        // in that path
        [photosApi.reducerPath]: photosApi.reducer

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(albumsApi.middleware)
        .concat(photosApi.middleware);
    }
});


setupListeners(store.dispatch);

export * from './thunk/fetchUsers';
export * from './thunk/addUser';
export * from './thunk/removeUser';

export { useFetchAlbumsQuery,
         useAddAlbumMutation,
        useRemoveAlbumMutation
} from './apis/albumsApi';

export {	
    useFetchPhotosQuery,	
    useAddPhotoMutation,	
    useRemovePhotoMutation,	
  } from './apis/photosApi';