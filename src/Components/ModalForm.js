import React, { useState } from "react";
import { CloseOutlined, FileAddOutlined } from "@ant-design/icons";
function ModalForm({ handler, add, closeModal }) {
  return (
    <div className="flex flex-col  ml-5 mr-5 bg-white gap-y-20">
      <header className="flex  justify-between items-center ml-16 mt-2 mr-10">
        <p className="text-xl font-bold">Add new Holiday</p>
        <CloseOutlined
          onClick={closeModal}
          className="text-sm text-gray-500 px-2 py-1 bg-white rounded-md border border-gray-300 "
        ></CloseOutlined>
      </header>
      <section className="flex ">
        <div className="flex flex-1 ml-16">
          <form
            className="flex flex-col gap-y-5 justify-center items-center"
            action="submit"
          >
            <div>
              <label className="text-sm text-gray-400" htmlFor="name">
                name
              </label>
              <br />
              <input
                className=" border-b  text-sm outline-none font-medium  focus:border-blue-400 "
                type="text"
                name="name"
                onChange={handler}
              />
            </div>
            <div>
              <label className="text-sm text-gray-400" htmlFor="date">
                date
              </label>
              <br />
              <input
                className=" border-b text-sm outline-none font-medium focus:border-blue-400 pr-20  "
                type="date"
                name="date"
                id=""
                onChange={handler}
              />
            </div>
            <div>
              <label className="text-sm text-gray-400" htmlFor="type">
                type
              </label>
              <br />
              <select
                className=" border-b text-sm outline-none font-medium focus:border-blue-400 pr-16  "
                name="type"
                onChange={handler}
              >
                <option value="Holiday">holiday</option>
                <option value="Leave">Leave</option>
                <option value="National Holiday">national holiday</option>
                <option value="Cultural Holiday">cultural holiday</option>
              </select>
            </div>
          </form>
        </div>
        <div className="flex flex-1 gap-y-10 flex-col items-center tracking-normal px-10 border-l border-gray-200">
          <p className="max-w-sm text-xs text-gray-400 ">
            Download Sample in
            <span className="text-yellow-500  bg-yellow-100 rounded-sm">
              .csv format
            </span>
            file to ensure that you have the correct file ready to import
          </p>
          <div className="border-2  border-gray-400 border-dashed flex flex-col gap-y-2 justify-center items-center px-16 py-10 bg-gray-100">
            <FileAddOutlined className="font-bold text-gray-400 text-2xl" />
            <p className="max-w-xs text-gray-300 text-xs">
              drag and drop csv file or{" "}
              <span className="text-gray-400 border-b-2 boder-gray-400">
                {" "}
                click here
              </span>{" "}
              to upload
            </p>
          </div>
        </div>
      </section>
      <footer className="flex justify-end mr-24">
        <input
          className="px-10 py-2 rounded-lg bg-green-300  text-white text-sm "
          type="button"
          value="save"
          onClick={add}
        />
      </footer>
    </div>
  );
}

export default ModalForm;
