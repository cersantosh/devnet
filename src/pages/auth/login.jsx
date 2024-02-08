import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [passowrdError, setPassowrdError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = await new UsersMethods().login({
      email: formData.email,
      password: formData.password,
    });

    if (user === "incorrect-email") {
      setEmailError(true);
    } else {
      setEmailError(false);
    }

    if (user === "incorrect-password") {
      return setPassowrdError(true);
    } else {
      setPassowrdError(false);
    }

    if (user.token) {
      localStorage.setItem("token", user.token);
      navigate("/home");
      return;
    }
  };

  const toggleFirstPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnline = () => {
    console.log("i am online");
    setIsOnline(true);
  };
  const handleOffline = () => {
    console.log("i am offline");
    setIsOnline(false);
  };

  // useEffect(() => {
  //   if (checkLogin()) {
  //     return navigate("/select_avatar");
  //   }
  //   window.addEventListener("online", handleOnline);
  //   window.addEventListener("offline", handleOffline);

  //   return () => {
  //     window.removeEventListener("online", handleOnline);
  //     window.removeEventListener("offline", handleOffline);
  //   };
  // }, []);

  // if (!isOnline) {
  //   return <NoInternetConnection />;
  // }

  return (
    <div className="bg-blue-300 h-screen flex items-center justify-center">
      <form
        className="bg-[#f5f5f5] p-2 rounded-lg flex flex-col items-center justify-center w-[300px]"
        onSubmit={handleSubmit}
      >
        <h2 className="">Login Screen</h2>
        <div className="w-full">
          <label htmlFor="email">E-mail</label>
          <input
            className="w-full h-8 outline-none my-2"
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
          {emailError && <p className="text-[red]">User is not found.</p>}
        </div>
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              className="h-8 w-full outline-none pr-7 my-2"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              onChange={handleChange}
              required
            />
            <i
              className={`fa-solid ${
                showPassword ? "fa-eye" : "fa-eye-slash"
              } absolute right-1 top-1/2 translate-y-[-50%]`}
              onClick={toggleFirstPassword}
            ></i>
          </div>
          {passowrdError && <p className="text-[red]">Incorrect Password.</p>}
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
