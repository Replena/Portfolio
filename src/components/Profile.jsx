import React from "react";

function Profile() {
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <div className="profile-section">
        <h2>About Me</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut,
          odit laborum aliquam voluptatum nisi mollitia.
        </p>
        <p>
          Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
          deserunt quam temporibus cumque magnam!
        </p>
      </div>
      <div className="profile-details">
        <div className="detail-item">
          <strong>Doğum tarihi:</strong> 24.03.1996
        </div>
        <div className="detail-item">
          <strong>İkamet Şehri:</strong> Ankara
        </div>
        <div className="detail-item">
          <strong>Eğitim Durumu:</strong> Hacettepe Ünv. Biyoloji, Lisans, 2016
        </div>
        <div className="detail-item">
          <strong>Tercih Ettiği Rol:</strong> Frontend, UI
        </div>
      </div>
    </div>
  );
}

export default Profile;
