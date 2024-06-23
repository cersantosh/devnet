import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import isStrongPassword from "../../utils/check_password.jsx";
import randomPasswordGenerator from "../../utils/random_password_generator.jsx";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import userService from "../../services/user_service.js";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { notifyError, notifySuccess } from "../../utils/toast.jsx";

const SignUp = () => {
  const navigate = useNavigate();
  const { register, control, handleSubmit, formState, setValue } = useForm();
  const { errors } = formState;
  const [userExistError, setUserExistError] = useState(false);
  const [sameUsernameError, setSameUsernameError] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  // const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [strongPassword, setStrongPassword] = useState(null);
  const [isPasswordStrong, setIsPasswordStrong] = useState(false);
  const [selectedProfilePhoto, setSelectedProfilePhoto] = useState(null);

  const passwordInput = useRef();

  const handlePasswordChange = (event) => {
    setValue("password", event.target.value);
    setIsPasswordStrong(isStrongPassword(event.target.value));
  };
  const showSelectedProfilePhoto = (event) => {
    const file = event.target.files[0];
    setSelectedProfilePhoto(file);
  };

  const toggleFirstPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setConfirmPassword(!showConfirmPassword);
  };

  const handleOnline = () => {
    setIsOnline(true);
  };
  const handleOffline = () => {
    setIsOnline(false);
  };

  const generateStrongPassword = () => {
    const randomPassword = randomPasswordGenerator();
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

  const createUser = async (data, formData) => {
    try {
      const response = await userService.createUser(data);
      if (response && response.code === "USER_CREATED") {
        let file = await userService.uploadProfile(formData);
        notifySuccess("User created successfully");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
      console.log("response in create user", response);
    } catch (error) {
      console.log("error", error);
      if (error?.code) {
        if (error.response.data.code === "USER_EXIST") {
          return setUserExistError(true);
        } else {
          setUserExistError(false);
        }
        if (error?.code === "USERNAME_EXIST") {
          return setSameUsernameError(true);
        } else {
          setSameUsernameError(false);
        }
      }
      notifyError(error?.message);
    }
  };

  const submitForm = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.photo[0]);
    formData.append("email", data.email);

    const userData = {
      email: data.email,
      password: data.confirmPassword,
      username: data.username,
      name: data.name,
      type: "individual",
    };
    createUser(userData, formData);
  };

  return (
    <div className="flex justify-center items-center">
      <ToastContainer />
      <form
        className="bg-[#f5f5f5] p-[20px] rounded-lg flex flex-col justify-center items-center w-[350px]"
        onSubmit={handleSubmit(submitForm)}
      >
        <h2>Sign Up</h2>
        {/* Option to upload user photo */}
        <div className="flex items-center flex-col">
          <div className="bg-[#9934fe] w-[100px] h-[100px] rounded-full flex justify-center items-center">
            {selectedProfilePhoto && (
              <label htmlFor="photo" className="w-full h-full">
                <img
                  src={URL.createObjectURL(selectedProfilePhoto)}
                  alt="profile-photo"
                  className="w-full h-full rounded-full object-cover"
                />
              </label>
            )}
            <input
              type="file"
              id="photo"
              className="hidden"
              accept="image/*"
              {...register("photo", {
                onChange: (e) => {
                  showSelectedProfilePhoto(e);
                },
                required: {
                  value: true,
                  message: "Profile photo is empty.",
                },
              })}
            />
            {!selectedProfilePhoto && (
              <label
                htmlFor="photo"
                className="w-full h-full flex justify-center items-center flex-col"
              >
                <i className="fa-solid fa-file-arrow-up text-white"></i>
                <p className="text-[13px] text-center text-white">
                  Upload profile photo
                </p>
              </label>
            )}
          </div>

          <p className="text-[red]">{errors.photo?.message}</p>
        </div>

        <div className="w-full">
          <label htmlFor="name">Name</label>
          <input
            className="w-full h-8 my-1"
            type="text"
            id="name"
            {...register("name")}
            required
          />
        </div>

        <div className="w-full">
          <label htmlFor="username">Username</label>
          <input
            className="w-full h-8 my-1"
            type="text"
            id="username"
            {...register("username")}
            required
          />
          {sameUsernameError && (
            <p className="text-[red]">Username is already exist</p>
          )}
        </div>

        <div className="w-full">
          <label htmlFor="email">E-mail</label>
          <div>
            <input
              className="w-full h-8 my-1"
              type="email"
              id="email"
              {...register("email")}
              required
            />
          </div>
          {userExistError && (
            <p className="text-[red]">E-mail is already exist.</p>
          )}
        </div>

        <div className="w-full">
          <label htmlFor="password">Password</label>
          <div className="relative">
            <input
              className="w-full pr-[53px] h-8 my-1"
              type={showPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                validate: {
                  strongPassword: (value) => {
                    return isPasswordStrong || "Password is weak.";
                  },
                },
              })}
              required
              ref={passwordInput}
              onChange={handlePasswordChange}
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

          <p className="text-[red]">{errors.password?.message}</p>

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
              {...register("confirmPassword", {
                validate: {
                  samePassword: (value) => {
                    return (
                      value === passwordInput.current.value ||
                      "Password and confirm password is different"
                    );
                  },
                },
              })}
              required
            />
            <i
              className={`fa-solid ${
                showConfirmPassword ? "fa-eye" : "fa-eye-slash"
              } absolute right-1 top-1/2 translate-y-[-50%]`}
              onClick={toggleConfirmPassword}
            ></i>
          </div>

          <p className="text-[red]">{errors.confirmPassword?.message}</p>
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
      <DevTool control={control} />
    </div>
  );
};

export default SignUp;
