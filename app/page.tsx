"use client";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const semesters = [
    { id: "first-semester", name: "First Semester", subjects: 5 },
    { id: "second-semester", name: "Second Semester", subjects: 5 },
    { id: "third-semester", name: "Third Semester", subjects: 5 },
    { id: "fourth-semester", name: "Fourth Semester", subjects: 5 },
    { id: "fifth-semester", name: "Fifth Semester", subjects: 5 },
    { id: "sixth-semester", name: "Sixth Semester", subjects: 5 },
    { id: "seventh-semester", name: "Seventh Semester", subjects: 4 },
    { id: "eighth-semester", name: "Eighth Semester", subjects: 1 },
  ];

  const [activeSemester, setActiveSemester] = useState<number | null>(null);

  const toggleSemester = (index: number) => {
  setActiveSemester(activeSemester === index ? null : index);
};

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      <nav className="flex items-center justify-between py-4">
        <Image
          src="/logo.png"
          alt="NEB Logo"
          width={150}
          height={50}
          className="h-12 w-auto"
        />
        <ul className="flex space-x-4 sm:space-x-8 text-base sm:text-lg font-semibold">
          {["Home", "Courses", "Live Mock Tests", "Notes"].map((item) => (
            <li
              key={item}
              className="relative group hover:text-amber-600 transition-colors duration-300"
            >
              <Link href={`/${item.toLowerCase().replace(" ", "-")}`}>
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300">
          Login
        </button>
      </nav>

    
      <div className="flex flex-col md:flex-row items-center justify-between my-12 gap-8">
        <div className="md:w-1/2 space-y-6">
          <span className="inline-block px-4 py-1 bg-red-600 text-white text-sm rounded-full opacity-90">
            NEB Resource
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-gray-800">
            The Best Entrance Preparation Platform of Nepal
          </h2>
          <p className="text-gray-600 text-lg">
            NEB Resource is your trusted path to success. Get guided by industry
            experts and elevate your knowledge to new heights.
          </p>
          <button className="bg-gradient-to-r from-amber-600 to-amber-800 text-white px-8 py-3 rounded-lg hover:from-amber-700 hover:to-amber-900 transition-all duration-300">
            Enroll in Courses
          </button>
        </div>
        <img
          src="https://i.pinimg.com/736x/92/6b/82/926b82ee8bf2926242e4c5f59a7a3fb3.jpg"
          alt="Education Illustration"
          width={500}
          height={400}
          className="md:w-1/2 rounded-lg shadow-lg max-w-[500px] w-full h-auto"
        />
      </div>


      <div className="mt-16">
        <div className="flex items-center space-x-3 mb-8">
          <IoLibraryOutline className="text-3xl text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-800">Start Learning</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {semesters.map((semester, index) => (
            <Link
              href={`/semesters/${semester.id}`}
              key={index}
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {semester.name}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    {semester.subjects} subject{semester.subjects !== 1 ? "s" : ""}
                  </p>
                </div>
                <MdOutlineArrowBackIosNew
                  className={`text-2xl text-blue-600 bg-blue-100 p-1.5 rounded-full transform ${
                    activeSemester === index ? "rotate-90" : "rotate-180"
                  } transition-transform duration-300`}
                  onClick={(e) => {
                    e.preventDefault(); 
                    toggleSemester(index); 
                  }}
                />
              </div>
              {activeSemester === index && (
                <div className="mt-4 text-gray-600">
                  <p>Details for {semester.name} (Placeholder content).</p>
                </div>
              )}
            </Link>
          ))}
        </div>

      </div>
      <div>
        <div className="text-center my-8  ">
        <h1 className="font-bold text-3xl">Why NEB <span className="text-red-800">Resource</span> ?</h1>
        <br></br>
              <p className="text-gray-600 text-xl">Bringing together the best free educational content to across the web,<br></br> we make exam preparation faster, easier, and more focused for students</p>
      </div>
<div className="flex">
  <div>
   <img src="https://i.imgur.com/ZtG7XNt.png" className="mx-5"></img>
  </div>
  <div className="items-center text-center my-auto mx-auto">
    <h2 className="font-bold text-2xl">Well-organized  content and video playlists for every subject</h2>
    <p className="text-gray-600 text-xl">perfect for quick revision</p>
    <div className="flex my-4">
<button className="bg-gradient-to-r from-amber-300 to-amber-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out mx-2">
  Easy Access
</button>
<button className="bg-gradient-to-r from-blue-300 to-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out mx-2">
 Quick Navigation
</button>
<button className="bg-gradient-to-r from-green-300 to-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-all duration-300 ease-in-out mx-2">
 Secure Good Marks
</button>

    </div>
  </div>
</div>
<div  className="w-full bg-gradient-to-b bg-blue-800 to-blue-300 rounded-2xl ">
  <div className="text-center font-semibold text-white !py-4">
      <h2 className="text-2xl ">Subscribe for more update!</h2>
  </div>
 <div className="text-center flex justify-center my-3">
   
 
  <div className="flex">
     <input type="text"height={25} placeholder="Enter Your email"  className="rounded focus:outline-none text-white border-blue-700"></input>
  <div className="  bg-red-700 w-30 h-12 shadow-2xl  shadow-white rounded-2xl justify-center text-center flex">
   <button className="text-white">Subscribe</button>
  </div>
  </div>
 </div>
 <div className="flex gap-12">
  <div className="mx-4">
    <Image src="/logo1.jpg" alt={""} width={50} height={40} className="rounded"></Image>
    <h2 className="text-white">Your Trusted Partner for Entrance Exam<br></br>Success - NEB Resource </h2>
   <div className="flex my-3">
{/* <FaFacebookF className="hover:text-blue-600 scale-110 transform  duration-100 text-2xl"/> */}
<img   width={40}
src="https://static.vecteezy.com/system/resources/previews/018/930/413/large_2x/instagram-logo-instagram-icon-transparent-free-png.png"></img>
<img   width={39}
className="mx-2"
src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-facebook-icon-png-image_9015416.png"></img>
<img   width={39}
className="mx-2"
src="https://www.kocliko.co/wp-content/uploads/2021/12/youtube-480x480.png"></img>
<img   width={39}
className="mx-2"
src="https://tse3.mm.bing.net/th/id/OIP.6uTQ7mOjYOD2sNKxUdnaNAHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"></img>
   </div>
   

  </div>
  <div className="flex ">
    <div className="mx-30 text-white">
      <h2 className="font-bold mb-1 ">Resources</h2>
    
      <h2 className="mb-1">Courses</h2>
      <h2 className="mb-1">Notes</h2>
      <h2 className="mb-1">Mock Test</h2>
    </div>
     <div className="mx-30 text-white mb-1">
      <h2 className="font-bold  mb-1">Courses</h2>
       <h2 className="mb-1">BSc.CSIT</h2>
      <h2 className="mb-1">IOE</h2>
      <h2 className="mb-1">CEE</h2>

      
    </div>
     <div className="mx-12 text-white mb-1">
     
    </div>
    
  </div>
 </div>
  
  <div className="text-center mb-3.5 font-bold">
<h2 className="font-bold text-pink-500"> Copyright(©) 2026 All Right Reserve</h2>
</div>
</div>

      </div>

    </div>
  );
}