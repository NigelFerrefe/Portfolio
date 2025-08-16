import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      <article>
        <p>
          I am a <span className="color">web developer</span> specialized in the
          <span className="color">MERN stack</span> with a strong focus on React
          and <span className="color">React Native</span>. I hold a Master’s
          degree in Digital Humanities and advanced training in 3D Animation and
          Interactive Design, which provide me with a unique blend of creative
          and technical skills. Later, I expanded into programming, UX/UI
          design, and web technologies, finding my passion in building intuitive
          and impactful digital products.
        </p>
      </article>
      <article>
        <h4>The road so far</h4>
        <p>
          After completing the{" "}
          <span className="color">Ironhack intensive bootcamp</span>, where I
          dedicated over 400 hours to mastering the MERN stack, I built
          interactive applications with React, JavaScript, and Node.js, and
          gained experience with MongoDB and RESTful APIs. More recently, I
          worked for six months as a{" "}
          <span className="color">Front-end React Native Developer</span>,
          collaborating closely with UX/UI and backend teams. This role allowed
          me to strengthen my ability to deliver responsive mobile applications,
          contribute to cross-functional projects, and participate in the full
          development cycle.
        </p>
      </article>
      <article>
        <h4>Future goals</h4>
        <p>
          I’m <span className="color">eager</span> to continue growing as a
          developer, embracing new tools and challenges while expanding my
          knowledge in modern web and mobile technologies. With{" "}
          <span className="color">curiosity</span> and{" "}
          <span className="color">initiative</span>, I seek opportunities to
          build <span className="color">efficient</span>, user-friendly
          applications while{" "}
          <span className="color">continuously evolving</span> both technically
          and creatively.
        </p>
      </article>
    </div>
  );
}
export default AboutMe;
