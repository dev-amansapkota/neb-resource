"use client";
import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { IoLibraryOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

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

  const [email, setEmail] = useState("");

  const handleSubscribe = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    console.log("Subscribed with:", email);
    setEmail("");
  };
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
              className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700"
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
<div className="text-center py-6 bg-black">
        <h2 className="text-2xl font-semibold text-white">
          Subscribe for More Updates!
        </h2>
        <form onSubmit={handleSubscribe} className="flex justify-center mt-4">
          <div className="flex items-center max-w-md w-full">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-2 rounded-l-lg bg-white/20 text-white placeholder-white/70 focus:outline-none border-none"
              required
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-r-lg hover:bg-red-700 transition-all duration-300"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-6 py-8 gap-8 bg-gradient-to-l bg-blue-700 to-blue-950">
        <div className="md:w-1/3">
          <Image
            src="/logo1.jpg"
            alt="NEB Resource Logo"
            width={50}
            height={40}
            className="rounded mb-4"
          />
          <p className="text-white text-lg">
            Your Trusted Partner for Entrance Exam Success - NEB Resource
          </p>
          <div className="flex space-x-4 mt-4">
            <Link href="https://instagram.com" target="_blank">
              <FaInstagram className="text-white text-2xl hover:text-amber-300 transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link href="https://facebook.com" target="_blank">
              <FaFacebookF className="text-white text-2xl hover:text-amber-300 transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <FaYoutube className="text-white text-2xl hover:text-amber-300 transition-transform duration-300 hover:scale-110" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-white text-2xl hover:text-amber-300 transition-transform duration-300 hover:scale-110" />
            </Link>
          </div>
        </div>

        <div className="md:w-1/6">
          <h3 className="text-lg font-bold text-white mb-3">Resources</h3>
          <ul className="text-white space-y-2">
            <li>
              <Link href="/courses" className="hover:text-amber-300 transition-colors duration-300">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/notes" className="hover:text-amber-300 transition-colors duration-300">
                Notes
              </Link>
            </li>
            <li>
              <Link href="/live-mock-tests" className="hover:text-amber-300 transition-colors duration-300">
                Mock Test
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/6">
          <h3 className="text-lg font-bold text-white mb-3">Courses</h3>
          <ul className="text-white space-y-2">
            <li>
              <Link href="/courses/bsc-csit" className="hover:text-amber-300 transition-colors duration-300">
                BSc.CSIT
              </Link>
            </li>
            <li>
              <Link href="/courses/ioe" className="hover:text-amber-300 transition-colors duration-300">
                IOE
              </Link>
            </li>
            <li>
              <Link href="/courses/cee" className="hover:text-amber-300 transition-colors duration-300">
                CEE
              </Link>
            </li>
          </ul>
        </div>
      </div>

  
      <div className="text-center py-4">
        <p className="text-black font-semibold">
          Copyright © {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </div>
    </div>
  );
}