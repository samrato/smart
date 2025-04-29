import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Sidebar from "../components/Sidebar"; // Sidebar Component
import backgroundImage from "@/assets/class.jpg"; // Background image

const Home = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Left Side) */}
      <Sidebar hideAdmin={true} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="bg-black text-white px-6 py-4 shadow-md text-center">
          <h1 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide">
            THE SMART DARO STUDENT DASHBOARD
          </h1>
        </header>

        {/* Welcome Section */}
        <div
          className="flex-1 flex flex-col items-center justify-center text-center p-6"
          style={{
            //backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Animated Project Title */}
          <motion.h1
            className="text-5xl sm:text-6xl font-extrabold text-yellow-300 drop-shadow-lg mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Welcome To SmartDaro
          </motion.h1>

          {/* Typing Effect Project Description */}
          <h2 className="text-xl sm:text-2xl font-semibold text-white bg-black bg-opacity-40 px-6 py-3 rounded-lg shadow-lg">
            <Typewriter
              words={[
                "AI-powered timetable generator.",
                "Optimized course scheduling.",
                "No more class conflicts.",
                "Smart planning for students & lecturers.",
              ]}
              loop={false}
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={1500}
            />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
