import { Typewriter } from "react-simple-typewriter";
import Button from "./components/Button.jsx";
import "animate.css";
import avatar from "./img/peeps-avatar.png";

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
    { title: "Student" }, 
    { title: "Web Developer" }
  ];
  // text-[#DCD6F7]
  return (
    <div className="flex items-center justify-center h-screen font-['Kanit'] bg-gradient-to-tr from-[#7178AD] via-[#434975] to-[#1E2034] cursor-default selection:bg-[#a6b1e1] selection:text-[#ffffff] px-3">
      <div className="text-center z-10">
        <h1 className="min-[380px]:text-6xl min-[320px]:text-5xl text-4xl font-bold mb-5 drop-shadow-lg text-[#DCD6F7] subpixel-antialiased animate__animated animate__fadeInDown animate__delay-.5s  ">
          {info.title}
        </h1>
        <div className="mx-auto w-80 rounded-full bg-[#7178AD] overflow-hidden  drop-shadow-md border-4 border-[#ffffff] hover:bg-amber-300 transition duration-500 ease-in-out animate__animated animate__fadeIn">
          <img src={avatar} alt="Avatar" className=" drop-shadow-lg " />
        </div>
        <p className="text-purple-700 text-opacity-0">No one can be good at everything.</p>
        <div>
          <h1 className="min-[480px]:text-3xl min-[320px]:text-2xl text-xl font-['Kalam'] font-thin text-[#ffffff] animate__animated animate__fadeIn">
            <span>I'm a </span>
            
            <span>
              <Typewriter
                words={words.map((e) => {
                  return `${e.title}`;
                })}
                loop={0}
                cursor
                cursorStyle="."
                typeSpeed={50}
                deleteSpeed={40}
                delaySpeed={3000}
              />
            </span>
          </h1>
        </div>
        <hr className="my-5 mx-auto w-56 h-1 bg-[#DCD6F7] rounded border-0 px-5"></hr>
        <div className="grid gap-2 grid-cols-3 justify-center animate__animated animate__fadeInUp  mx-auto">
          {links.map((e) => {
            return <Button name={e.name} link={e.url} icon={e.icon} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
