import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../../services/auth_service";
import { ToastContainer } from "react-toastify";
import { notifyError, notifySuccess } from "../../utils/toast";
import { useEffect } from "react";
import checkLogin from "../../utils/check_login";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const isLoggedIn = checkLogin();
    if(isLoggedIn){
      navigate("/");
    }
  }, [])

  const toggleFirstPassword = () => {
    setShowPassword(!showPassword);
  };

  const login = async (data) => {
    try {
      let response = await authService.login(data);
      const user = response.response;
      localStorage.setItem("user", user);
      localStorage.setItem("token", response.token);
      notifySuccess("Login successful");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (error) {
      notifyError(error?.message);
    }
  };

  const handleOnline = () => {
    console.log("i am online");
    setIsOnline(true);
  };
  const handleOffline = () => {
    console.log("i am offline");
    setIsOnline(false);
  };

  return (
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <ToastContainer />
      <form
        className="bg-[#f5f5f5] p-2 rounded-lg flex flex-col items-center justify-center w-[300px]"
        onSubmit={handleSubmit(login)}
      >
        <h2 className="">Login Screen</h2>
        <div className="w-full">
          <label htmlFor="email">E-mail</label>
          <input
            className="w-full h-8 outline-none my-2"
            type="email"
            id="email"
            {...register("email")}
            required
          />
          {/* {emailError && <p className="text-[red]">User is not found.</p>} */}
        </div>
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              className="h-8 w-full outline-none pr-7 my-2"
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password")}
              required
            />
            <i
              className={`fa-solid ${
                showPassword ? "fa-eye" : "fa-eye-slash"
              } absolute right-1 top-1/2 translate-y-[-50%]`}
              onClick={toggleFirstPassword}
            ></i>
          </div>
          {/* {passowrdError && <p className="text-[red]">Incorrect Password.</p>} */}
        </div>

        <button
          type="submit"
          className="bg-[#007bff] w-full text-white my-3 p-1 rounded-lg cursor-pointer hover:bg-[#0056b3]"
        >
          Login
        </button>
        <div>
          Don't have an account :{" "}
          <Link to="/signup" className="text-blue-500">
            Create Now
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
