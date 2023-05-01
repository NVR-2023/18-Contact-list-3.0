import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactCard = ({ index, photo: image, full_name, address, phone, email }) => {
    const { store, actions } = useContext(Context);
    
    let imageLabel="";
    if (!image) { 
        image = "https://dummyimage.com/200x200/28a745/fff.png&text=+"
        imageLabel="add photo";
    }

    return (
        <div className="contactCard-wrapper">
            <div className="card contactCard">
                <div className="card-header cardHeader">
                    <div className="iconContainer">
                        <div className="editIcon"></div>
                        <div className="deleteIcon"></div>
                    </div>
                    <div className="imageContainer">
                        <img src={image} />
                        {imageLabel && <div className="imageLabel">{imageLabel}</div>}
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
