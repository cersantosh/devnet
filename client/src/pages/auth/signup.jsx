import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import isStrongPassword from "../../utils/check_password.jsx";
import randomPasswordGenerator from "../../utils/random_password_generator.jsx";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [samePasswordError, setsamePasswordError] = useState(false);
  const [invalidPasswordError, setInvalidPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [strongPassword, setStrongPassword] = useState(null);
  const [isPasswordStrong, setIsPasswordStrong] = useState(false);

  const passwordInput = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (name === "password") {
      setIsPasswordStrong(isStrongPassword(value));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isPasswordStrong) {
      return setInvalidPasswordError(true);
    } else {
      setInvalidPasswordError(false);
    }
    if (formData.password !== formData.confirmPassword) {
      return setsamePasswordError(true);
    } else {
      setsamePasswordError(false);
    }
    if (await isEmailExist()) {
      return setEmailError(true);
    } else {
      setEmailError(false);
    }

    await new UsersMethods().addUser({
      email: formData.email,
      password: formData.password,
    });
    navigate("/login");
  };

  const toggleFirstPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setConfirmPassword(!showConfirmPassword);
  };

  const isEmailExist = async () => {
    const users = await new UsersMethods().fetchUserByData({
      email: formData.email,
    });
    console.log(users);
    return users.length > 0 ? true : false;
  };

  // useEffect(() => {
  //   if (checkLogin()) {
  //     return navigate("/select_avatar");
  //   }
  // }, []);

  const handleOnline = () => {
    setIsOnline(true);
  };
  const handleOffline = () => {
    setIsOnline(false);
  };

  const generateStrongPassword = () => {
    const randomPassword = randomPasswordGenerator();
    setFormData({ ...formData, password: randomPassword });
    setStrongPassword(randomPassword);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // if (!isOnline) {
  //   return <NoInternetConnection />;
  // }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-[#f5f5f5] p-[20px] rounded-lg flex flex-col justify-center items-center w-[350px]"
        onSubmit={handleSubmit}
      >
        <h2 className="font-bold">Sign Up</h2>
        <div className="w-full">
          <label htmlFor="email">E-mail</label>
          <div>
            <input
              className="w-full h-8 my-1"
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>
          {emailError && <p className="text-[red]">E-mail is already exist.</p>}
        </div>
        <div className="w-full">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              ref={passwordInput}
              className="w-full pr-[53px] h-8 my-1"
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              onChange={handleChange}
              required
            />
            <i
              className={`fa-solid ${
                isPasswordStrong ? "fa-check" : "fa-xmark"
              } absolute right-7 top-1/2 translate-y-[-50%] bg-[yellow] p-1 rounded-full`}
            ></i>
            <i
              className={`fa-solid ${
                showPassword ? "fa-eye" : "fa-eye-slash"
              } absolute right-1 top-1/2 translate-y-[-50%]`}
              onClick={toggleFirstPassword}
            ></i>
          </div>
          <p>
            Password must contains atleast 3 capital letters, 2 small letters, 2
            numbers and 3 special symbols.{" "}
          </p>
          {invalidPasswordError && (
            <p className="text-[red]">Invalid Password.</p>
          )}
          <p
            className="text-center my-1"
            onClick={() => {
              !strongPassword && generateStrongPassword();
            }}
          >
            Generate Strong Password
          </p>

          {strongPassword && (
            <div className="bg-blue-300 relative">
              <p>Password : {strongPassword}</p>
              <div className="flex justify-around">
                <button
                  type="button"
                  className="p-1 bg-[#007bff] text-white rounded-lg cursor-pointer hover:bg-[#0056b3] my-2"
                  onClick={generateStrongPassword}
                >
                  New Password
                </button>
                <button
                  title="Copy and Apply"
                  type="button"
                  className="p-1 bg-[#007bff] text-white rounded-lg cursor-pointer hover:bg-[#0056b3] my-2"
                  onClick={() => {
                    passwordInput.current.value = strongPassword;
                    navigator.clipboard.writeText(strongPassword);
                    setStrongPassword(null);
                    setIsPasswordStrong(true);
                  }}
                >
                  Apply
                </button>
                <i
                  className="fa-solid fa-xmark absolute right-[-10px] top-[-12px] bg-blue-500 p-1 rounded-full hover:bg-[red] text-white"
                  onClick={() => setStrongPassword(null)}
                ></i>
              </div>
            </div>
          )}
        </div>

        <div className="w-full">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="relative">
            <input
              className="w-full pr-7 h-8 my-1"
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleChange}
              required
            />
            <i
              className={`fa-solid ${
                showConfirmPassword ? "fa-eye" : "fa-eye-slash"
              } absolute right-1 top-1/2 translate-y-[-50%]`}
              onClick={toggleConfirmPassword}
            ></i>
          </div>
          {samePasswordError && (
            <p className="text-[red]">
              Password and confirm password is different
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-1 bg-[#007bff] text-white rounded-lg cursor-pointer hover:bg-[#0056b3] my-2"
        >
          Sign Up
        </button>
        <div>
          Already have an account : <Link to="/login">Login Now</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
