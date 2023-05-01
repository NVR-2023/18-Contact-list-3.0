import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

const ContactCard = ({ index, photo, full_name, address, phone, email }) => {
    const { store, actions } = useContext(Context);

    return (
        <div className="contactCard-wrapper">
            <div className="card contactCard">
                <div className="card-header">
                    {photo ? <img src={photo} className="card-img-top circle" alt="contact photo" /> :
                        <div className="card-icon-top">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                        </div>
                    }
                </div>

                <div className="card-body cardSection">
                    <div className="cardLabels">
                        <label>name:</label>
                        <label>email:</label>
                        <label>phone:</label>
                        <label>address:</label>
                    </div>
                    <div className="cardInfo">
                        <div>{full_name}</div>
                        <div>{email}</div>
                        <div>{phone}</div>
                        <div>{address}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
