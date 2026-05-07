import React from "react";

function Footer() {
  return (
    <footer className="bg-[url('../footer-widgets-bg.jpg')] bg-center bg-cover bg-no-repeat relative w-full min-h-[50vh]">
      <div className="pt-20 flex items-center justify-around flex-wrap gap-2.5 container">
        <div className="max-w-[250px] h-[250px]">
          <h3 className="text-2xl capitalize pb-4">categories</h3>
          <ul>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                new products
              </a>
            </li>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                our stores
              </a>
            </li>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                top sellers
              </a>
            </li>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                your health
              </a>
            </li>
          </ul>
        </div>
        <div className="max-w-[250px] h-[250px]">
          <h3 className="text-2xl capitalize pb-4">information</h3>
          <ul>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                home
              </a>
            </li>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                about
              </a>
            </li>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                blog
              </a>
            </li>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                shop
              </a>
            </li>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                contacts
              </a>
            </li>
          </ul>
        </div>
        <div className="max-w-[250px] h-[250px]">
          <h3 className="text-2xl capitalize pb-4">my account</h3>
          <ul>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                checkout
              </a>
            </li>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                compare
              </a>
            </li>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                my account
              </a>
            </li>
            <li className="text-[#777] pb-4">
              <a className="text-[#777] capitalize cursor-pointer hover:text-[#679509]">
                wishlist
              </a>
            </li>
          </ul>
        </div>
        <div className="max-w-[250px] h-[250px]">
          <h3 className="text-2xl capitalize pb-4">store information</h3>
          <ul>
            <li className="flex items-center gap-2 text-sm">
              <i className="fa-solid fa-location-dot"></i>Address: 4578 Marmora
              Road, Glasgow
            </li>
            <li className="flex items-center gap-2 text-sm">
              <i className="fa-solid fa-phone"></i>Phones: +3(800) 2345-6789 ,
              +3(800) 2345-6790
            </li>
            <li className="flex items-center gap-2 text-sm">
              <i className="fa-solid fa-clock"></i>Hours: 7 Days a week from
              9:00 am to 7:00 pm
            </li>
            <li className="flex items-center gap-2 text-sm">
              <i className="fa-solid fa-envelope"></i>
              <a href="" className="hover:text-[#679509]">
                E-mail: info@demolink.org
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
