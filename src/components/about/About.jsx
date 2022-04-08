import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I'm a programmer and Product Developer from the past few years. I've
          been hooked to programming since my Elementary days.
        </p>
        <p className="a-desc">
          Specializing in three major fields namely Data Science, Android
          Development & Web Development , I know a lot of Modern Tech Stacks
          which are growing in the market. MERN Stack for WebApps, Java for
          Android and Pytorch & Tensorflow for Data Science are my major Tech
          Stacks which I use on regular basis. Beside these, I also like UI/UX
          Designing, majorly for Websites. Feel Free to contact me for any
          software related gigs.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design Awards 2021</h4>
            <p className="a-award-desc">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
