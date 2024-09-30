import React from "react";

function ProfilePage() {
  return (
    <div className="profile-page">
      <div className="container">
        <div className="logobox">
          <p className="logoText">LaQuel Nig.Ltd</p>
          <div className="nav-links">
            <li>Home</li>
            <li>History</li>
            <li>My Profile</li>
            <li>View Receptionist</li>
          </div>
        </div>
      </div>
      <div className="boxes">
        <div className="box-1" style={{ backgroundColor: "rgb(192, 14, 168)" }}>
          <p>Visitors</p>
          <p>9</p>
        </div>

        <div
          className="box-1"
          style={{ backgroundColor: "rgb(114, 219, 238)" }}
        >
          <p>business visits</p>
          <p>4</p>
        </div>

        <div className="box-1" style={{ backgroundColor: "rgb(44, 147, 173)" }}>
          <p>personal visits</p>
          <p>3</p>
        </div>

        <div className="box-1" style={{ backgroundColor: "rgb(57, 109, 207)" }}>
          <p>job visits</p>
          <p>2</p>
        </div>
      </div>
      <div classname="profile">
        <div className="input-1">
          <img src="../IMAGES/profilepic.jpg" alt="" />
          <p id="big-p">ADMIN</p>
          <p>Lagos</p>
        </div>
        <div className="input-2">
          <p>Full name</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Address</p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
