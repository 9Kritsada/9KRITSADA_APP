import { Typewriter } from "react-simple-typewriter";
import Button from "./components/Button.jsx";
import "animate.css";

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
  ];
  const info = {
    title: "9KRITSADA",
  };

  const words = [{ title: "Student" }, { title: "Web Developer" }];
  // text-[#DCD6F7]
  return (
    <div className="flex items-center justify-center h-screen font-['Kanit'] bg-gradient-to-tr from-[#707898] via-[#424874] to-[#1B1D2E] cursor-default">
      <div className="text-center z-10">
        <h1 className="md:text-6xl text-4xl font-bold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-[#DCD6F7] to-[#CACFD6] tracking-[.05em] animate__animated animate__fadeInDown animate__delay-.5s  ">
          {info.title}
        </h1>
        <div>
          <h1 className="md:text-3xl text-xl font-normal text-[#A6B1E1] animate__animated animate__fadeIn">
            <span>I'm a </span>
            <span>
              <Typewriter
                words={words.map((e) => {
                  return `${e.title}`;
                })}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h1>
        </div>
        <div className="mt-5 py-5 border-t-[1px] border-[#CACFD6] animate__animated animate__fadeInUp animate__delay-1s">
          {links.map((e) => {
            return <Button name={e.name} link={e.url} icon={e.icon} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
