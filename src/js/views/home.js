import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row">
		<div className="col-sm-1 col-md-4">

		</div>
	  </div>
    </div>
  );
};
