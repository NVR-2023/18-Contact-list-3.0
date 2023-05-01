import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = ({ index, photo: image, full_name, address, phone, email }) => {
    const { store, actions } = useContext(Context);

    let imageLabel = "";
    if (!image) {
        image = "https://dummyimage.com/200x200/28a745/fff.png&text=+";
        imageLabel = "add photo";
    }

    return (
        <div className="contactCard-wrapper">
            <div className="card contactCard">
                <div className="card-header cardHeader">
                    <div className="iconContainer">
                        <span className="editIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-file-x" viewBox="0 0 16 16">
                                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                                <path d="M5 5h6v1H5V5zm0 3h6v1H5V8zm0 3h6v1H5v-1z" />
                            </svg>
                        </span>
                        <span className="deleteIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="bi bi-file-x" viewBox="0 0 16 16">
                                <path d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708z" />
                                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                            </svg>
                        </span>
                    </div>
                    <div className="imageWrapper">
                        <div className="imageContainer">
                            <img src={image} alt="" />
                            {imageLabel && <div className="imageLabel">{imageLabel}</div>}
                        </div>
                    </div>
                </div>
                <div className="card-body cardSection">
                    <div className="cardLabels">
                        <label>name:</label>
                        <label>email:</label>
                        <label>phone:</label>
                        <label>address:</label>
                    </div>
                    <div className="cardInfo">
                        <div className="nameLabel">{full_name}</div>
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
