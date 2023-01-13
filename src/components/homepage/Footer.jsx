import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="flex justify-between container mx-auto flex-wrap">
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-sm font-semibold">Layanan Pelanggan</h3>
            <ul>
              <li className="text-sm text-gray-700 mt-3">Bantuan</li>
              <li className="text-sm text-gray-700 mt-3">
                Syarat dan Ketentuan
              </li>
              <li className="text-sm text-gray-700 mt-3">Kebijakan Privasi</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Jelajahi NextCommerce</h3>
            <ul>
              <li className="text-sm text-gray-700 mt-3">Tentang Kami</li>
              <li className="text-sm text-gray-700 mt-3">Blog</li>
              <li className="text-sm text-gray-700 mt-3">
                Daftar Official Store
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col mt-8 md:mt-0">
          <h3 className="text-sm font-semibold mb-3">Pembayaran</h3>
          <img src="../public/images/pembayaran.png" alt="pembayaran" />
        </div>
        <div className="flex flex-col mt-8 md:mt-0">
          <h3 className="text-sm font-semibold mb-3">Pengiriman</h3>
          <img src="../public/images/pengiriman.png" alt="pengiriman" />
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-sm font-semibold">Ikuti Kami</h3>
          <ul>
            <li className="text-sm text-gray-700 mt-3 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5"
              >
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
              </svg>
              Facebook
            </li>
            <li className="text-sm text-gray-700 mt-3 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5"
              >
                <path d="M224,202.66A53.34,53.34,0,1,0,277.36,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.41-30.41c-21-8.29-71-6.43-94.3-6.43s-73.25-1.93-94.31,6.43a54,54,0,0,0-30.41,30.41c-8.28,21-6.43,71.05-6.43,94.33S91,329.26,99.32,350.33a54,54,0,0,0,30.41,30.41c21,8.29,71,6.43,94.31,6.43s73.24,1.93,94.3-6.43a54,54,0,0,0,30.41-30.41c8.35-21,6.43-71.05,6.43-94.33S357.1,182.74,348.75,161.67ZM224,338a82,82,0,1,1,82-82A81.9,81.9,0,0,1,224,338Zm85.38-148.3a19.14,19.14,0,1,1,19.13-19.14A19.1,19.1,0,0,1,309.42,189.74ZM400,32H48A48,48,0,0,0,0,80V432a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V80A48,48,0,0,0,400,32ZM382.88,322c-1.29,25.63-7.14,48.34-25.85,67s-41.4,24.63-67,25.85c-26.41,1.49-105.59,1.49-132,0-25.63-1.29-48.26-7.15-67-25.85s-24.63-41.42-25.85-67c-1.49-26.42-1.49-105.61,0-132,1.29-25.63,7.07-48.34,25.85-67s41.47-24.56,67-25.78c26.41-1.49,105.59-1.49,132,0,25.63,1.29,48.33,7.15,67,25.85s24.63,41.42,25.85,67.05C384.37,216.44,384.37,295.56,382.88,322Z" />
              </svg>
              Instagram
            </li>
            <li className="text-sm text-gray-700 mt-3 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="2-5 h-5"
              >
                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z" />
              </svg>
              Twitter
            </li>
            <li className="text-sm text-gray-700 mt-3 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="w-5 h-5"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>
              LinkedIn
            </li>
          </ul>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-sm font-semibold mb-3">Keamanan</h3>
          <img
            src="../public/images/94b9cbbfd8a95136b1b0ab6ba81f4f3e.png"
            alt=""
            className="w-28"
          />
        </div>
      </div>
      <hr className="border-t-gray-300 mt-9 border-t-2" />
      <p className="mt-9 text-sm text-gray-500 text-center">
        © NextCommerce 2023. Hak Cipta Dilindungi
      </p>
    </footer>
  );
};

export default Footer;
