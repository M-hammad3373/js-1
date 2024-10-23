import React from "react";

const Footer =() => {
    return (
      <footer className="bg-black text-gray-400 py-12  bottom-0 left-0 w-full">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          
          <div>
            <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
            <p>
              C2tec is dedicated to Enhancing coding skills and fostering a community of developers. Our platform offers resources, tutorials, and mentorship to guide you on your Digital marketing journey.
            </p>
          </div>
  
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Links</h3>
            <ul>
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="https://vercel.com/mr-mehrans-projects" className="hover:text-white">About</a></li>
              <li><a href="/courses" className="hover:text-white">Services</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
  
     
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
            <ul>
              <li><a href="https://github.com/M-hammad3373" className="hover:text-white">Github</a></li>
              <li><a href="https://vercel.com/new?teamSlug=hammad-alis-projects-b73d4f3a" className="hover:text-white">Portfolio</a></li>
              <li><a href="https://www.instagram.com/hammad_ali_017?utm_source=qr&igsh=MTRrZHdhdnJndHJpdw==" className="hover:text-white">Instagram</a></li>
              <li><a href="https://www.facebook.com/hammad.ali.77577?mibextid=ZbWKwL" className="hover:text-white">Facebook</a></li>
            </ul>
          </div>
  
         
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <p>Email: <a href="mailto:contact@c2tec.com" className="hover:text-white">farhaneditz24525@gmail.com</a></p>
            <p>Phone: <span className="hover:text-white">0310 6982611</span></p>
          </div>
        </div>
        <p className="flex justify-center p-2">@ 2024 C2TEC,All right reserved</p>
      </footer>
    );
  }
  
  export default Footer