import './App.css';
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

])



function App() {

  return <RouterProvider router={routers}></RouterProvider>

}

export default App;

