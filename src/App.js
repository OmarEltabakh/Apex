import './App.css';
<<<<<<< HEAD
import { RouterProvider, createBrowserRouter} from 'react-router-dom' ;
import Layout from './Components/Layout';
import NotFound from './Components/NotFoundPage/NotFound';
import Home from './Pages/Home/Home'


let routers = createBrowserRouter([
  {path:'' , element:<Layout/>, children:[
    {index:true , element:<Home/>},
    
    {path:'*',element:<NotFound/>},
  ]},
    
    // {path:"resetpassword" , element:<ResetPassword/>},
    // {path:"otp" , element:<OTPVer/>},
    // {path:"resetnewpass" , element:<ResetNewPass/>},
=======
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Components/Layout';
import NotFound from './Components/NotFoundPage/NotFound';
import Home from './Pages/Home/Home'
import About from './Pages/About/About';


let routers = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },

      // {path:'*',element:<NotFound/>},
    ]
  },

  // {path:"resetpassword" , element:<ResetPassword/>},
  // {path:"otp" , element:<OTPVer/>},
  // {path:"resetnewpass" , element:<ResetNewPass/>},
>>>>>>> 4b83e6a6c34ff3ed2bfa754ea35d484dfde49f40

])



function App() {

<<<<<<< HEAD
  return  <RouterProvider router={routers}></RouterProvider>
=======
  return <RouterProvider router={routers}></RouterProvider>
>>>>>>> 4b83e6a6c34ff3ed2bfa754ea35d484dfde49f40

}

export default App;

