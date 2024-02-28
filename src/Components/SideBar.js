import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SideBar.css"
import Modal from "react-modal";
// import fetchProductsCategory from "../Containers/Container.js"

const SideBar = ({isOpen, toggleSidebar, user, setUser}) => {
  const navigate = useNavigate();

  const [password, setPassword]= useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordCheck, setNewPasswordCheck] = useState("");

  const [hideMessage, setHideMessage] = useState(true);
  const [hideReturnMessage, setHideReturnMessage] = useState(true);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      background: 'red',
    },
  };

const [logInModalOpen, setLogInModalOpen] = useState(false);
const openLogInModal = () => {setLogInModalOpen(true);toggleSidebar()};
const closeLogInModal = () => {
    setLogInModalOpen(false);
    setHideMessage(true);
    setHideReturnMessage(true);
    setPassword("");
    setNewPassword("");
    setNewPasswordCheck("");
};



const putPasswordChange = async (user, password, newPassword) => {
    let temp = {
        email: user.email,
        password: password,
        newPassword: newPassword
    }
    const newResponse = await fetch(`https://personal-trainer-backend.onrender.com/users/changePassword`,{
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify(temp)
    })
    if(newResponse.status === 202){
        const newC = await newResponse.json();
        setUser(newC);
        closeLogInModal();
        setPassword("");
        setNewPassword("");
        setNewPasswordCheck("");
        setHideReturnMessage(true);
    } else {
        openLogInModal();
        setHideReturnMessage(false);
    }
}
const handleChangePasswordForm = (event) => {
    event.preventDefault();
    if(newPassword === newPasswordCheck && password!=="" && newPassword!==""){
        putPasswordChange(user,password,newPassword);
        closeLogInModal();
        setHideMessage(true);
    } else {
        openLogInModal();
        setHideMessage(false);
    }
}

const sidebarClass = isOpen ? "sidebar open" : "sidebar";
  return (
    <div className={sidebarClass}>
        <div className="sidebar-main">
            <Modal
                isOpen={logInModalOpen}
                onRequestClose={closeLogInModal}
                style={customStyles}
                contentLabel="Example Modal"
                ariaHideApp={false}
                
            >
                {/* <h1>Enter Your Details</h1> */}
                <form onSubmit={handleChangePasswordForm} className="modal-form">
                    <input type="text" 
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="password" 
                    name="newPassword"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <input type="password" 
                    name="newPasswordCheck"
                    placeholder="New Password"
                    value={newPasswordCheck}
                    onChange={(e) => setNewPasswordCheck(e.target.value)}
                    />
                    <button type="submit">Change Password</button>
                    <p hidden={hideMessage} style={{color:"black"}}>Not matching passwords</p>
                    <p hidden={hideReturnMessage} style={{color:"black"}}>Unsuccessfull, Please enter valid Password</p>
                </form>
            </Modal>
            <button onClick={openLogInModal}>Change Password</button>
        </div>
    </div>
  );
};
export default SideBar;