import { usersList } from "../../Api";
import { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import {
  MdOutlineDeleteForever,
  MdOutlineModeEditOutline,
} from "react-icons/md";

const Dashboard = () => {
  let [page, setPage] = useState(1);
  let [list, setList] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const tableHead = ["ID", "first Name", "Last Name", "Email", "Action"];

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

  useEffect(() => {
    usersListFunction(page);
  }, [page]);

  return (
    <>
      <div class="flex-col p-[15px]">
        <div class="flex justify-between p-5">
          <div>
            <h2 class="font-bold text-xl">User Dashboard</h2>
          </div>
          <div>
            <button class="flex text-sm text-white bg-[#464ce9] px-3 py-2 rounded-md">
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
                  {list.map((user, id) => (
                    <tr>
                      <td>{user.id}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.email}</td>
                      <td className="flex bg-sky-200 justify-around">
                        <MdOutlineDeleteForever />
                        <MdOutlineModeEditOutline />
                      </td>
                    </tr>
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
          {/* <Button
              onClick={handleShow}
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button> */}
        </div>
      </div>

      {/* <Alert show={showAlert} variant="success">
        Emlployee List Updated Succefully!
      </Alert> */}

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close Button
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};
export default Dashboard;
