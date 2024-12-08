import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Productmanagement = () => {
  return (
    <div className="flex">
      <aside className="w-1/6 h-screen p-4 bg-black text-white">
        <nav>
          <ul>
            <li className="my-5 p-3">
              <NavLink to={"/"}>Product management</NavLink>
            </li>
            <li className="my-5 p-3">
              <NavLink to={"/product-management/create-product"}>
                Create ProductComponent
              </NavLink>
            </li>
            <li className="my-5 p-3">
              <NavLink to={"/product-management/update-product"}>
                Update ProductComponent
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="w-5/6">
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Productmanagement;
