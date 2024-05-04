import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoginPage, SignupPage, ActivationPage, HomePage } from "./Routes.js";
//import axios from "axios";                     //original before redux change
//import { server } from "./server.js";          //original before redux change
import Store from "./redux/store.js"; //redux change
import { loadUser } from "./redux/actions/user.js"; //redux change
import { useDispatch } from "react-redux"; //3.0 net console err added this

const App = () => {
  const dispatch = useDispatch(); //3.0 net console err added this
  useEffect(() => {
    //Store.dispatch(loadUser());           //redux change //3.0 net console err I comment this line

    dispatch(loadUser()); //3.0 net console err added this

    // axios                                                                                    //original before redux change
    // .get(`${server}/user/getuser`,{withCredentials:true}).then((res)=>{                     //original before redux change
    //   toast.success(res.data.message);                                                     //original before redux change
    // }).catch((err)=>{                                                                      //original before redux change
    //   toast.error(err.response.data.message);                                              //original before redux change
    // });                                                                                    //original before redux change
  }, [dispatch]); //3.0 net console err added this "dispatch" word only

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
      </Routes>

      <ToastContainer
        position="top-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  );
};

export default App;
