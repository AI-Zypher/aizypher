import Image from "next/image";
import First from "../components/firstpage";

export default function Home() {
  return (
    <div className="App">
      <First /> 
      {/* <StudentForm /> */}
      {/* <div className="flex items-center justify-center mt-8">
        <Link href= '/register'>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
            Register Now
          </button>
        </Link>
      </div> */}
    </div>
  );
}
