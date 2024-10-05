import React from "react";

function Profile() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="sub-heading">Profile</h3>
          <div className="space-y-4">
            <div className="flex">
              <strong className="w-1/3">Doğum tarihi:</strong>
              <span className="">24.03.1996</span>
            </div>
            <div className="flex">
              <strong className="w-1/3">İkamet Şehri:</strong>
              <span className="">Ankara</span>
            </div>
            <div className="flex">
              <strong className="w-1/3">Eğitim Durumu:</strong>
              <span className="">Hacettepe Ünv. Biyoloji, Lisans, 2016</span>
            </div>
            <div className="flex">
              <strong className="w-1/3 ">Tercih Ettiği Rol:</strong>
              <span className="">Frontend, UI</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="sub-heading">About Me</h3>
          <p className="mb-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p className="">
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Profile;
