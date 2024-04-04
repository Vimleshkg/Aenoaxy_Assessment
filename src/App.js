import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css'
import Authentication from "./Components/Authentication";
import Login from "./Components/Login";
import SignupPage2 from "./Components/SignupPage2";
import SignupPage3 from "./Components/SignupPage3";
import SignupPage4 from "./Components/SignupPage4";
import { useState } from "react";

function App() {
  const [image, setImage] = useState();
  const myRouter = createBrowserRouter([
    {
      path:'/',
      element:<Authentication/>
    },
    {
      path:'/signup2',
      element:<SignupPage2 image={image} setImage={setImage} />
    },
    {
      path:'/signup3',
      element:<SignupPage3/>
    },
    {
      path:'/signup4',
      element:<SignupPage4 image={image} />
    }
  ])

  return (
    <RouterProvider router={myRouter}>
    <div className="" >
    
    </div>  
    </RouterProvider> 
  
  );
}

export default App;
