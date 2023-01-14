import './App.css';
import  Home from './components/Home/Home';
import RootLayout from './Layout/RootLayout';
import  Movies  from './components/Movies/Movies';
import Tv from './components/Tv/Tv';
import  People from './components/People/People';
import {createHashRouter , Navigate, RouterProvider} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ItemDetails  from './components/ItemDetails/ItemDetails';
import AuthLayout from './Layout/AuthLayout';
import { Signin } from './components/Signin/Signin';
import { Signup } from './components/Signup/Signup';


function App() {

 
  function ProtectedRouters(props){
    let tokeen = localStorage.getItem('token');
    if(!tokeen)
    {
      return <Navigate to ='/signin'/>
    }
    else
    {
      return props.children;
      // props.children == <Home/>, <Movies/>,  <Tv/>,..etc.
    }
  }
  let routers = createHashRouter([
    {path :'/' , element : <RootLayout/>, children :[
      {index : true, element :<ProtectedRouters> <Home/></ProtectedRouters>},
      {path : 'home', element : <ProtectedRouters> <Home/></ProtectedRouters>},
      {path : 'movies', element :<ProtectedRouters>  <Movies/></ProtectedRouters>},
      {path : 'tv', element :  <ProtectedRouters> <Tv/></ProtectedRouters>},
      {path : 'people', element : <ProtectedRouters><People/></ProtectedRouters> },
      {path : 'details/:id/:media', element :<ProtectedRouters><ItemDetails/></ProtectedRouters> },
      {path :'*' , element :  <ProtectedRouters> <NotFound/></ProtectedRouters>},
    ]},
    {path :'/' , element : <AuthLayout/>, children :[
      {index : true, element : <Signin/>},
      {path : 'signin', element : <Signin/>},
      {path : 'signup', element : <Signup/>},
      
    ]}
  ]);
  return (
    < >
      <RouterProvider  router={routers} ></RouterProvider>
    </>
  );
}

export default App;
