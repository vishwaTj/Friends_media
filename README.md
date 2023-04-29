                                            Friends Media Album




https://user-images.githubusercontent.com/109414918/235289604-ef2cb34b-7d10-41bd-b3ef-0daad53ddcd6.mp4




             This is amedia album log for all your friends to store thier images in an album system

      This project was set up with the help of React --- JSON server(Manually created) --- Redux. Here the server is started up and the app is run. It fetches the data of existing friends from the JSON server. Wecan click and add new friends also add images for them. <br /><br />

Two techniques used to interact with Redux store <br />
           i) Redux Thunk -- for adding friends<br />
           ii) Redux Toolkit Query --> for adding albums and images<br /><br /><br />


file structure in src is divided into following parts<br />
i) components --> contains all thefunctional itemslike<br />
                            a) button<br />
                            b) expandable menu<br />
                            c) AlbumList<br />
                            d) AlbumList Item<br />
                            e) Panel<br />
                            f) PhotoList<br />
                            g) PhotoListItem<br />
                            h) Skeleton<br />
                            i) UserList<br />
                            j) UserListItem<br />
ii) hooks --> just one for thunk<br />
                            a) use-Thunk<br />
iii) Redux part <br />
            a) API --> api for albums and photos<br />
                 1) AlbumAPI<br />
                 2) PhotoAPI<br />
            b) Slice<br />
                 1) usersSlice<br />
            c) thunk<br />
                 1) addUser<br />
                 2) fetchUser<br />
                 3) removeUser<br />
<br />
iv) db.json --> the actual API strucuture file<br />

