import { Typewriter } from "react-simple-typewriter";
import Button from "./components/Button.jsx";
import "animate.css";
import Particle from "./components/Particle.jsx";

function App() {
  const links = [
    {
      name: "github",
      url: "https://github.com/9Kritsada",
      icon: "fa-brands fa-github",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/9kritsada/",
      icon: "fa-brands fa-instagram",
    },
    {
      name: "gmail",
      url: "mailto:kritsada.wiriya@gmail.com",
      icon: "fa-regular fa-envelope",
    },
  ];
  const info = {
    title: "9KRITSADA",
  };

  const words = [
    { title: "Student." }, 
    { title: "Web Developer." }
  ];
  // text-[#DCD6F7]
  return (
    <div className="flex items-center justify-center h-screen font-['Kanit'] bg-gradient-to-tr from-[#7178AD] via-[#434975] to-[#1E2034] cursor-default selection:bg-[#a6b1e1] selection:text-[#ffffff] px-3">
      <Particle />
      <div className="text-center z-10">
        <h1 className="md:text-6xl text-4xl font-bold mb-5 drop-shadow-lg text-[#DCD6F7] subpixel-antialiased tracking-[.05em] animate__animated animate__fadeInDown animate__delay-.5s  ">
          {info.title}
        </h1>
        <div>
          <h1 className="md:text-3xl text-xl font-normal text-[#A6B1E1] animate__animated animate__fadeIn drop-shadow-lg">
            <span>I'm a </span>
            <span>
              <Typewriter
                words={words.map((e) => {
                  return `${e.title}`;
                })}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={40}
                deleteSpeed={40}
                delaySpeed={5000}
              />
            </span>
          </h1>
        </div>
        <hr className="my-5 mx-auto w-56 h-1 bg-[#DCD6F7] rounded border-0 drop-shadow-lg"></hr>
        <div className="flex flex-wrap animate__animated animate__fadeInUp animate__delay-1s">
          {links.map((e) => {
            return <Button name={e.name} link={e.url} icon={e.icon} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
