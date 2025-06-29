import Image from "next/image";
import Link from "next/link";

export default function SemesterPage({ params }) {
  const { semesterId } = params;

 
  const semesterDetails = {
    "first-semester": {
      name: "First Semester",
      subjects: ["Mathematics", "Physics", "Chemistry", "English", "Computer Science"],

    },
    "second-semester": {
      name: "Second Semester",
      subjects: ["Descrete Structure", "Object-Oriented Programming", "Microprocessor", "Mathematics II", "Statistics I"],
    },
    "third-semester": {
      name: "Third Semester",
      subjects: ["Advanced Mathematics", "Mechanics", "Organic Chemistry", "Literature", "Statistics"],
    },
    "fourth-semester": {
      name: "Fourth Semester",
      subjects: ["Calculus", "Electronics", "Biochemistry", "Technical Writing", "Data Structures"],
    },
    "fifth-semester": {
      name: "Fifth Semester",
      subjects: ["Differential Equations", "Quantum Physics", "Inorganic Chemistry", "Economics", "Algorithms"],
    },
    "sixth-semester": {
      name: "Sixth Semester",
      subjects: ["Linear Algebra", "Thermodynamics", "Physical Chemistry", "Sociology", "Database Systems"],
    },
    "seventh-semester": {
      name: "Seventh Semester",
      subjects: ["Numerical Methods", "Optics", "Environmental Science", "Project Management"],
    },
    "eighth-semester": {
      name: "Eighth Semester",
      subjects: ["Capstone Project"],
    },
  };

  const semester = semesterDetails[semesterId] || {
    name: "Unknown Semester",
    subjects: [],
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

      <div className="mt-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          {semester.name}
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Subjects</h2>
          {semester.subjects.length > 0 ? (
            <ul className="list-disc pl-6 text-gray-600">
              {semester.subjects.map((subject, index) => (
                <li key={index} className="mb-2">
                  {subject}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No subjects available for this semester.</p>
          )}
          <Link
            href="/"
            className="mt-6 inline-block bg-gradient-to-r from-amber-600 to-amber-800 text-white px-6 py-2 rounded-lg hover:from-amber-700 hover:to-amber-900 transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}