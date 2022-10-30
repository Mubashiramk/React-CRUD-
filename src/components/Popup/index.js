import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdClose } from "react-icons/md";
import { addUser, updateUser } from "../../Api";

const Popup = ({ visible, onClose, formData, action }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { firstName: formData.lastName } });

  const onSubmit = async (values) => {
    if (action === "edit") {
      let data = { ...values, id: formData.id };
      // console.log("editsubmit:", data);
      try {
        const result = await updateUser(data);
        console.log("Update User:", result);
      } catch (error) {
        console.log("Update User:", error);
      }
    } else {
      console.log("addSubmit:", values);
      try {
        const result = await addUser(values);
        console.log("Add User:", result);
      } catch (error) {
        console.log("Add User:", error);
      }
    }
  };

  useEffect(() => {
    setValue("lastName", formData.lastName ? formData.lastName : "");
    setValue("firstName", formData.firstName ? formData.firstName : "");
    setValue("email", formData.email ? formData.email : "");
    setValue("avatar", formData.avatar ? formData.avatar : "");
  }, [formData]);

  if (visible === false) {
    return null;
  }
  return (
    <div class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div class=" bg-white w-[500px] h-auto rounded-[25px] ">
        <form
          class="w-full h-full rounded-[25px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div class="flex justify-between p-10 ">
            {action === "edit" ? (
              <h2 class="text-2xl font-bold text-left">Edit User Data</h2>
            ) : (
              <h2 class="text-2xl font-bold text-left">Add User</h2>
            )}

            <button onClick={onClose} class="bg-[#f7f7f7] p-2 rounded-lg">
              <MdClose class=" w-4 h-4 " />
            </button>
          </div>
          <div class="pt-0 px-10  ">
            <div class="md:flex md:items-center justify-between mb-6 ">
              <div class=" ">
                <label class=" text-sm block text-gray-500  md:text-right pr-4 text-left ">
                  First Name
                </label>
              </div>
              <div class="w-[75%]  border-slate-50 border-solid ">
                <input
                  class=" w-full h-10 py-2 px-4 text-sm border-solid border-gray-200 rounded-lg text-gray-700 bg-white leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="First Name"
                  type="text"
                  {...register("firstName", { required: "true" })}
                />
                {errors.firstName && errors.firstName.type === "required" && (
                  <span role="alert" class="text-sm text-red-500 p-0 m-0">
                    First Name is required
                  </span>
                )}
              </div>
            </div>
            <div class="md:flex md:items-center justify-between mb-6 ">
              <div class=" ">
                <label class=" text-sm block text-gray-500  md:text-right pr-4 text-left ">
                  Last Name
                </label>
              </div>
              <div class="w-[75%]  border-slate-50 border-solid ">
                <input
                  class=" w-full h-10 py-2 px-4 text-sm border-solid border-gray-200 rounded-lg text-gray-700 bg-white leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="Last Name"
                  type="text"
                  {...register("lastName", { required: "true" })}
                />
                {errors.lastName && errors.lastName.type === "required" && (
                  <span role="alert" class="text-sm text-red-500 p-0 m-0">
                    Last Name is required
                  </span>
                )}
              </div>
            </div>

            <div class="md:flex md:items-center justify-between mb-6 ">
              <div class=" ">
                <label class=" text-sm block text-gray-500  md:text-right pr-4 text-left ">
                  Email
                </label>
              </div>
              <div class="w-[75%]  border-slate-50 border-solid ">
                <input
                  class=" w-full h-10 py-2 px-4 text-sm border-solid border-gray-200 rounded-lg text-gray-700 bg-white leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="Email"
                  type="email"
                  {...register("email", { required: "true" })}
                />
                {errors.email && errors.email.type === "required" && (
                  <span role="alert" class="text-sm text-red-500 p-0 m-0">
                    Email is required
                  </span>
                )}
              </div>
            </div>

            <div class="md:flex md:items-center justify-between mb-6 ">
              <div class=" ">
                <label class=" text-sm block text-gray-500  md:text-right pr-4 text-left ">
                  Avatar
                </label>
              </div>
              <div class="w-[75%]  border-slate-50 border-solid ">
                <input
                  class=" w-full h-10 py-2 px-4 text-sm border-solid border-gray-200 rounded-lg text-gray-700 bg-white leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  placeholder="Avatar"
                  type="url"
                  {...register("avatar", { required: "true" })}
                />
                {errors.avatar && errors.avatar.type === "required" && (
                  <span role="alert" class="text-sm text-red-500 p-0 m-0">
                    Avatar is required
                  </span>
                )}
              </div>
            </div>
          </div>{" "}
          <div class="flex w-full rounded-b-[25px] justify-end bg-[#f5f4f6] py-6 px-4">
            <button onClick={onClose} class="text-gray-400 mx-4">
              Cancel
            </button>
            {action === "edit" ? (
              <button
                type="submit"
                class="  inline-block px-4 py-2.5 bg-[#8431d5] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#8438d8] hover:shadow-lg focus:bg-[#8438d8] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Save changes
              </button>
            ) : (
              <button
                type="submit"
                class="  inline-block px-4 py-2.5 bg-[#8431d5] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#8438d8] hover:shadow-lg focus:bg-[#8438d8] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Add User
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Popup;
