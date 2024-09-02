import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Car from "./components/Car";
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div className="relative  overflow-hidden ">
      <motion.div className="h-[110vh]  relative w-full bg-gradient-to-b from-[#EEDF7A] to-yellow-500 text-5xl ">
        <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-[#EEDF7A] to-yellow-500 ">
          <h1 className="text-white text-3xl font-black p-3">UJJWAL Developer <i class="fa-solid fa-up-right-from-square"></i></h1>
        </div>
        <div className="absolute inset-0 flex items-center -rotate-2 select-none">
          <div className="relative">
            <div className="bg-white/0  animate-horizontal-scroll flex items-center gap-8 w-max px-8">
              <h1 className="shrink-0 text-white text-10xl font-black ">
                ✨ Creative
              </h1>
              <h2 className="shrink-0 text-white text-8xl italic font-light">
                Full-Stack
              </h2>
              <h2 className="shrink-0 text-white text-12xl font-bold">
                Developer
              </h2>
              <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
                crafting
              </h2>
              <h2 className="shrink-0 text-white text-9xl font-medium">
                modern,
              </h2>
              <h2 className="shrink-0 text-white text-9xl font-extralight italic">
                responsive
              </h2>
              <h2 className="shrink-0 text-white text-13xl font-bold">web</h2>
              <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
                solutions 🚀
              </h2>
            </div>
            <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
              <h1 className="shrink-0 text-white text-10xl font-black ">
                ✨ Creative
              </h1>
              <h2 className="shrink-0 text-white text-8xl italic font-light">
                Full-Stack
              </h2>
              <h2 className="shrink-0 text-white text-12xl font-bold">
                Developer
              </h2>
              <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
                crafting
              </h2>
              <h2 className="shrink-0 text-white text-9xl font-medium">
                modern,
              </h2>
              <h2 className="shrink-0 text-white text-9xl font-extralight italic">
                responsive
              </h2>
              <h2 className="shrink-0 text-white text-13xl font-bold">web</h2>
              <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
                solutions 🚀
              </h2>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        viewport={{ once: true }}
        className="h-[110vh]  w-full bg-gradient-to-b from-blue-300 to-blue-500   "
      >
        <h2 className="shrink-0 text pt-[98px] text-transparent  md:text-12xl text-8xl font-bold italic outline-text">
          About.
        </h2>
        <div className="flex flex-col gap-3 my-6 ml-5 w-6/12 text-2xl text-white">
          <span className="font-bold text-3xl"> I'm Ujjwal Pathak</span>, a
          passionate full-stack developer 💻 with a B.Tech in CSE 🎓 from Arya
          College, eager to contribute and grow in the tech industry 🚀.
        </div>
      </motion.div>
      <motion.div className="h-[110vh] w-full bg-gradient-to-b from-red-400 to-red-500   ">
        <h2 className="shrink-0 pt-[98px]  text-transparent md:text-12xl text-8xl  font-bold italic outline-text">
          Projects.
        </h2>
        <div className="flex flex-col gap-3 mb-4">
          <div className="border-b"></div>
          <div className="border-b"></div>
          <div className="border-b"></div>
          <div className="border-b"></div>
        </div>
        <div className="flex flex-col gap-3   ml-5 text-2xl text-white">
          <a
            href="https://myor.netlify.app/"
            target="_blank"
            className="hover:text-blue-300 underline"
            rel="noopener noreferrer"
          >
            1. https://myor.netlify.app/
          </a>

          <a
            href="https://jobscom.netlify.app/"
            target="_blank"
            className="hover:text-blue-300 underline"
            rel="noopener noreferrer"
          >
            2. https://jobscom.netlify.app/
          </a>

          <a
            href="https://asb-design-calci.vercel.app/"
            target="_blank"
            className="hover:text-blue-300 underline"
            rel="noopener noreferrer"
          >
            3. https://asb-design-calci.vercel.app/
          </a>

          <a
            href="https://todobackend09.netlify.app/"
            target="_blank"
            className="hover:text-blue-300 underline"
            rel="noopener noreferrer"
          >
            4. https://todobackend09.netlify.app/
          </a>

          <a
            href="https://frolicking-parfait-49d5fa.netlify.app/"
            target="_blank"
            className="hover:text-blue-300 underline"
            rel="noopener noreferrer"
          >
            5. https://frolicking-parfait-49d5fa.netlify.app/
          </a>
        </div>
      </motion.div>
      <motion.div className="h-[110vh] w-full bg-gradient-to-b from-green-300 to-green-500   ">
        <h2 className="shrink-0  pt-[98px]  text-transparent md:text-12xl text-8xl  font-bold italic outline-text">
          Contact.
        </h2>

        <div className="text-2xl w-full flex gap-8 text-white items-center justify-start pl-8">
          <a href="https://www.instagram.com/ujjwal._.pandit/">
            <i class="fa-brands fa-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/ujjwal-pathak-7653b126a">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>

          <a href="mailto:ujjwal.pathak2003@gmail.com">
            <i class="fa-regular fa-envelope"></i>
          </a>

          <a href="tel:+919411818070">
            <i class="fa-solid fa-phone"></i> +91 94114-18070
          </a>
        </div>
      </motion.div>

      <Canvas
        camera={{ fov: 15, position: [0, 5, 10] }}
        style={{
          height: "100%",
          width: "100%",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        {/* <OrbitControls  /> */}

        <ambientLight intensity={3} />
        <Car />
      </Canvas>
    </motion.div>
  );
}

export default App;
