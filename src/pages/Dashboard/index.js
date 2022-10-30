import { usersList, deleteUser } from "../../Api";
import { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import {
  MdOutlineDeleteForever,
  MdOutlineModeEditOutline,
} from "react-icons/md";
import Popup from "../../components/Popup";

const Dashboard = () => {
  let [page, setPage] = useState(1);
  let [list, setList] = useState([]);
  let [formData, setFormData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [isChecked, setIsChecked] = useState([]);
  const [delete1, setDelete] = useState(false);
  let [deleteres, setDeleteres] = useState([]);
  const [model, setModel] = useState(false);
  const tableHead = ["ID", "first Name", "Last Name", "Email", "Action"];
  let [popupAction, setPopupAction] = useState("");

  const usersListFunction = async (data) => {
    try {
      let result = await usersList(data);
      setList(result.data);
      setTotalPages(result.totalPages);
      // console.log(result.totalPages);
      console.log(result, "getusers");
    } catch (error) {
      console.log(error, "getusers");
    }
  };

  const nextPage = () => {
    if (page !== totalPages) {
      setPage(page + 1);
    }
  };
  const previousPage = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const deleteItem = async (id) => {
    try {
      const result = await deleteUser(id);
      setDeleteres([1]);
      console.log("Delete item:", result);
    } catch (error) {
      console.log("Delete item:", error);
    }
  };

  const handleDelete = async (index, e) => {
    console.log(index);
    let id = list.filter((item, i) => i == index)[0].id;
    console.log("id", id);
    await deleteItem([id]);
  };

  // const handleChecked = async (e) => {
  //   const { value, checked } = e.target;
  //   // console.log("checked:", value);
  //   if (checked) {
  //     setIsChecked([...isChecked, value]);
  //   } else {
  //     setIsChecked(isChecked.filter((e) => e !== value));
  //   }
  //   // console.log(isChecked);
  // };

  const handleClose = () => {
    setModel(false);
  };

  const handleEdit = (index, e) => {
    setFormData(list.filter((item, i) => i === index)[0]);
    // console.log("edit fun:", list.filter((item, i) => i === index)[0]);
    setPopupAction("edit");
    setModel(true);
  };

  const handleAddUser = () => {
    setFormData([]);
    setPopupAction("add");
    setModel(true);
  };

  useEffect(() => {
    usersListFunction(page);
  }, [page, deleteres, model]);

  return (
    <>
      <div class="flex-col p-[15px]">
        <div class="flex justify-between p-5">
          <div>
            <h2 class="font-bold text-xl">User Dashboard</h2>
          </div>
          <div>
            <button
              class="flex text-sm text-white bg-[#464ce9] px-3 py-2 rounded-md"
              onClick={() => deleteItem(isChecked)}
            >
              <MdAdd class="h-5 w-5" /> delete Users
            </button>
          </div>
          <div>
            <button
              class="flex text-sm text-white bg-[#464ce9] px-3 py-2 rounded-md"
              onClick={handleAddUser}
            >
              <MdAdd class="h-5 w-5" /> Add Users
            </button>
          </div>
        </div>

        <div class="my-12">
          <table class="w-full text-sm text-left  ">
            <thead class="">
              <tr>
                {tableHead.map((name) => (
                  <th>{name}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {list === [] ? (
                ""
              ) : (
                <>
                  {list.map((user, index) => (
                    <>
                      <tr
                      // key={index + (list.page - 1) * list.per_page}
                      >
                        {/* <td>
                          <input
                            type="checkbox"
                            value={user.id}
                            key={index}
                            checked={user.isChecked}
                            onChange={(e) => handleChecked(e)}
                          />
                        </td> */}
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                        <td className="flex bg-sky-200 justify-around">
                          <button onClick={(e) => handleDelete(index, e)}>
                            {" "}
                            <MdOutlineDeleteForever />
                          </button>
                          <button onClick={(e) => handleEdit(index, e)}>
                            <MdOutlineModeEditOutline />
                          </button>
                        </td>
                      </tr>
                    </>
                  ))}
                </>
              )}
            </tbody>
            <tfoot class=" ">
              <tr class="p-4">
                <td colspan="2" class=" justify-left  ">
                  <button
                    onClick={previousPage}
                    class="border-gray-100 w-[100px] border-solid border-2 shadow-sm px-2 py-1 rounded-md"
                  >
                    Previous
                  </button>
                </td>
                <td colspan="1" className=" text-left">
                  <p>
                    page {page} of {totalPages}
                  </p>
                </td>
                <td colspan="3" class=" text-right">
                  <button
                    onClick={nextPage}
                    class="border-gray-100 w-[100px] border-solid border-2 shadow-sm px-2 py-1 rounded-md"
                  >
                    Next
                  </button>
                </td>
              </tr>
            </tfoot>
          </table>
          <Popup
            visible={model}
            onClose={handleClose}
            formData={formData}
            action={popupAction}
          />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
