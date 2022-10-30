import { BsPerson } from "react-icons/bs";
import Lottie from "react-lottie";
import { useForm } from "react-hook-form";
import * as animationData from "../../../Assets/Lottie/login.json";
import { userLogin, usersList, getUser } from "../../../Api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// const navigate = useNavigate();
const Login = () => {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(false);
  // localStorage.getItem(localStorage.getItem("authenticated") || false)
  // );
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const getData = async () => {
    try {
      const result = await usersList(1);
      console.log(result, "getusers");
    } catch (error) {
      console.log(error, "getusers");
    }
  };
  const getme = async () => {
    try {
      const result = await getUser("d04390a4-867d-415b-9197-3c354261e89d");
      console.log(result, "getme");
    } catch (error) {
      console.log(error, "getme");
    }
  };

  const onSubmit = async (values) => {
    // console.log(values);
    try {
      const result = await userLogin(values.email, values.firstName);
      console.log(result, "userLogin");
      setauthenticated(true);
      // localStorage.setItem("authenticated", true);
      navigate("/home");
    } catch (error) {
      console.log(error);
      alert(error);
    }

    // getData();
    // getme();
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // if (authenticated == true) {
  //   navigate("/home");
  // } else {
  return (
    <div class="m-auto  absolute top-0 bottom-0 left-0 right-0">
      <div>
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
      <div class="  m-auto h-[300px] w-[350px]  border-2 border-slate-50 border-solid shadow-md rounded-md p-4">
        <h2 class="text-3xl font-bold text-left">Login</h2>
        <div class="pt-[25px]">
          <form class="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
            <div class="md:flex md:items-center mb-6 ">
              <div class=" ">
                <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-left">
                  @
                </label>
              </div>
              <div class="w-full border-b-2 border-solid border-gray-100  ">
                <input
                  class=" w-full h-10 py-2 px-4 text-sm outline-none border-none border-b-2 text-gray-700 bg-white leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="Email"
                  type="email"
                  {...register("email")}
                />
              </div>
            </div>
            <div class="md:flex md:items-center mb-6">
              <div class="">
                <label
                  class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-left"
                  for="inline-password"
                >
                  <BsPerson />
                </label>
              </div>
              <div class="w-full border-b-2 border-solid border-gray-100 ">
                <input
                  class="w-full h-10 py-2 px-4 text-sm outline-none border-none border-b-2 text-gray-700 bg-white leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="First name"
                  type="text"
                  {...register("firstName")}
                />
              </div>
            </div>

            <div class="flex w-full justify-center">
              <button
                type="submit"
                class=" w-full inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  // }
};
export default Login;
