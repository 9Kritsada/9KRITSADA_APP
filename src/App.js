import { Typewriter } from 'react-simple-typewriter'
import Button from './components/Button.js';
import 'animate.css';

function App() {
  const links = [
    {name: "github", url: "https://github.com/9Kritsada", icon: "fa-brands fa-github"},
    {name: "instagram", url: "https://www.instagram.com/9kritsada/", icon: "fa-brands fa-instagram"},
  ]
  const info = {
    title: "9KRITSADA",
  }
  const words = {
    word1: " Student",
    word2: " Web Developer",
  }

  return (
    <div className="flex items-center justify-center h-screen bg-[#424874] font-['Kanit'] ">
      <div className="text-center">
        <h1 className="md:text-6xl text-4xl font-bold mb-5 text-[#DCD6F7] tracking-[.05em] animate__animated animate__fadeInDown animate__delay-.5s  ">{info.title}</h1>
        <div>
          <h1 className="md:text-3xl text-xl font-normal text-[#A6B1E1] animate__animated animate__fadeIn">
            I'm a 
            <Typewriter
              words={[
                `${words.word1}`, 
                `${words.word2}`
              ]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
              />
          </h1>
        </div>
        <div className="mt-5 py-5 border-t-[1px] border-[#CACFD6] animate__animated animate__fadeInUp animate__delay-1s">
          {links.map((e) => {
            return (
              <Button name={e.name} link={e.url} icon={e.icon} />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
