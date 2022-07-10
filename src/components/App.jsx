import Header from "./Header";
import Footer from "./Footer";
//import Picture from "./Picture";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <div id="app">
      <Header />
      <section className="top-container">
        <h1 className="name">Christopher Renfro</h1>
        <p className="name-description">Front End Developer</p>
        <Introduction />
      </section>
      <section id="projects--container">
        <h2 className="project--title">Projects</h2>
        <Projects
          src={require("../pictures/gp3image.png")}
          link={"https://gpt3api.herokuapp.com/"}
        />
        <Projects
          src={require("../pictures/weatherApp.png")}
          link={"http://ctrenfro.github.io/WeatherApp"}
        />
        <Projects
          src={require("../pictures/Picture1.jpg")}
          link={"http://ctrenfro.github.io/mernProject"}
        />
      </section>
      <Contact />
      <Footer className="footer" />
    </div>
  );
}

export default App;
