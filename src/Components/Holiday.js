import React, { useState } from "react";
import group from "../Images/Group 856.svg";
import Button from "./Button";
import Modal from "react-modal";
import ModalForm from "./ModalForm";
import {
  PlusOutlined,
  FilterOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";
function Holiday() {
  const [data, setdata] = useState({ name: "", type: "", date: "" });
  const [tasks, settasks] = useState([
    { name: "rath yatra", type: "holiday", date: "12/2/4" },

    { name: "rath yatra", type: "holiday", date: "12/2/4" },

    { name: "rath yatra", type: "holiday", date: "12/2/4" },
  ]);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handler = (event) => {
    let { name, value } = event.target;
    setdata({ ...data, [name]: value });
  };

  function add() {
    console.log(tasks, data);
    settasks([...tasks, data]);
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  return (
    <div className="grid grid-rows-2 grid-flow-col grid-cols-6 place-content-around ml-28 mr-10 mb-10 h-screen bg-white pr-10 rounded-md ">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalForm handler={handler} add={add} closeModal={closeModal} />
        <Modal />
      </Modal>
      <div className="row-span-2 col-span-1 pt-20 ">
        <Button name="General" selected={false} />
        <Button name="holidays" selected={true} />
        <Button name="Leave" selected={false} />
      </div>

      <div className="grid gap-y-10 row-span-2 col-span-5 pl-10 border-l ">
        <div className="flex justify-between pt-10 ">
          <div className=" flex flex-col gap-y-4">
            <h1 className="text-black font-bold text-3xl ">Holiday</h1>
            <p className="text-gray-500 text-xs">
              assign the holiday that you want to give to your employee fr the
              year
            </p>
          </div>
          <div className="flex items-center gap-x-5 ">
            <div className="flex gap-x-2">
              <img src={group} alt="" />
              <p className=" text-gray-400 text-xs font-normal ">Year</p>
            </div>
            <p className="text-sm text-black font-normal ">2021</p>
          </div>
        </div>

        <div className="flex flex-col  gap-y-10">
          <div className="flex justify-between">
            <h1>List({tasks.length})</h1>
            <div className="flex  gap-x-5">
              <div className="flex gap-2">
                <PlusOutlined className=" cursor-pointer text-yellow-400 text-xs" />
                <p
                  onClick={openModal}
                  className=" cursor-pointer text-yellow-400 text-xs"
                >
                  Add New
                </p>
              </div>
              <div className="flex gap-x-2">
                <FilterOutlined className="text-gray-400 font-normal text-xs" />
                <p className="text-gray-400 font-normal text-xs">
                  filter
                  <span className="text-black ml-2 font-normal text-xs">
                    All
                  </span>
                </p>
              </div>
            </div>
          </div>
          <table className="table-fixed">
            <thead>
              <tr>
                <td className="w-1/4 text-gray-400 text-xs font-normal">
                  Name
                </td>
                <td className="w-1/2 text-gray-400 text-xs font-normal">
                  Type
                </td>
                <td className="w-1/4  text-gray-400 text-xs font-normal">
                  Date
                </td>
              </tr>
            </thead>
            <tbody>
              {tasks.map((arr) => (
                <tr className="border-t-2 ">
                  <td className="text-xs py-3">{arr.name}</td>
                  <td className="text-xs py-3">{arr.type}</td>
                  <td className="text-xs py-3">{arr.date}</td>
                  <td className="text-gray-400 text-xs font-normal px-5">
                    <DeleteOutlined />
                  </td>
                  <td className="text-gray-400 text-xs font-normal px-5">
                    <EditOutlined />
                  </td>
                </tr>
              ))}
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Holiday;

// {
//   /* <form action="submit">
//         <input type="text" name="name" onChange={handler} />
//         <input type="text" name="type" onChange={handler} />
//         <input type="date" name="date" id="" onChange={handler} />
//         <input type="button" value="add" onClick={add} />
//       </form> */
// }
// {
//   /* <div onClick={()=>{}}>add</div> */
// }
