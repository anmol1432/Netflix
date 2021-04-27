import React from 'react'
import Netflix from "../Assets/netflix.svg"
import Button from "./Button";
import { Phone, Person } from 'react-bootstrap-icons';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Message from '@material-ui/icons/Message';
import Material_Input from './Material_Input';


function Contact() {
    return (
        <>
            <div className="LoginSignIn mt-lg-4">
                <main className="form-signin text-center  mt-lg-4">
                    <form className=" m-auto text-center">
                        <img className="mb-0" src={Netflix} alt="" width="300" height="160" />
                        <h1 className="h3 mb-5 fw-normal loginHeading text-capitalize">
                            Contact
                        </h1>
                        <Material_Input
                            icon={<Person className="AccountCircle" />}
                            label="Name"
                            onChange=""
                        />
                        <Material_Input
                            icon={<AccountCircle className="AccountCircle" />}
                            label="Email"
                            onChange=""
                        />
                        <Material_Input
                            icon={<Phone className="AccountCircle" />}
                            label="Phone"
                            onChange=""
                        />
                        <Material_Input
                            icon={<Message className="LockOpenIcon" />}
                            label="Message"
                            onChange=""
                        />
                        <div className="btn-container ">
                            <Button
                                name="Send"
                                AddClass="btn btn-outline-light text-capitalize create-account px-4 mt-4 mb-4"
                            />
                        </div>
                    </form>
                </main>
            </div>
        </>
    )
}

export default Contact;
