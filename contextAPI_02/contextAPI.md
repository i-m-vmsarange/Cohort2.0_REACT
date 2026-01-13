# To use CONTEXT API

1. First create context folder in src
2. Create a particular context which you want to create
3. Wrap App in the respective context by importing it in main.jsx file
4. Now go to your created context ex. UserContext
5. import {createContext} from react and export UserDataContext
6. ex. export const UserDataContext = createContext(null);
7. Wrap your application received as a props in UserContext with
   <UserDataContext.Provider value={data}>{children}<UserDataContext/> element where you will pass data as value
8. Now go the file where you want to receive the data ex. Sections
9. import useContext from react
10. import UserDataContext from UserContext
11. pass UserDataContext in useContext and fetch the data
12. Now you can show the data where you want to show it.
