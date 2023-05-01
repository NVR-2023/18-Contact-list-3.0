import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import ContactCard from "../component/contactCard.js";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid">
      <div className="row d-flex mt-3 justify-conetnt-left">
        <span className="addContactIcon"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>
        </span>
      </div>
      <div className="row">
        <div className="col-sm-1 col-md-4 g-0">
          <ul className="contactList my-3">
            {
              store.contactList && store.contactList.map((element) => {
                return (
                  <>
                    <li key={element.id}>
                      <ContactCard
                        index={element.id}
                        full_name={element.full_name}
                        email={element.email}
                        address={element.address}
                        phone={element.phone}
                      />
                    </li>
                  </>


                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
};
