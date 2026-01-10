# To add routes:

1. install react-router-dom ✅
2. in main.jsx "import {BrowserRouter} from "react-router-dom"
3. wrap <App/> component by BrowserRouter in main.jsx file
4. make <Routes> </Routes> in App.jsx inside that make <Route/>
5. In <Route> mention path {/about} and element={<Home/>} in the Route i.e what to enter attributes
6. Use Link tag by react-router-dom to redirect to any specific route
7. Make Navbar component add it in Routes in app.jsx
8. Nested routes can be made by writing this way "path = products/men"
9. Dynamic routes can be made by writing this way "path= courses/:id"
10. Nested Dynamic routes can be made by writing this way "path= courses/:id/details"
11. You can access params by using useParams hook
