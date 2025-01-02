import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      <article>
        <p>
          A junior web developer specialized in the MERN stack. With a
          background in Digital Humanities and advanced training in 3D animation
          and interactive design, I bring a unique blend of creativity and
          technical expertise to web development. My focus is on creating
          intuitive applications that balance design and functionality, always
          seeking innovative solutions that make an impact.
        </p>
      </article>
      <article>
        <h4>The road so far</h4>
        <p>
          My passion for history and technology led me to pursue a degree in
          History and a Master degree in Digital Humanities, where I explored
          how technology transforms our relationship with the past. During the
          pandemic, I expanded my skills through 3D modeling, creating
          environments for historical reconstructions and games. These
          experiences, combined with basic knowledge in web development, C#, and
          UX/UI design, sparked my passion for combining creativity with
          technology to develop innovative digital solutions.
        </p>
        <br />
        {/* <button className=" btn artstation">
          <a href="https://nferrefe.artstation.com/" target="_blank">
            Me as 3D artist
          </a>
        </button> */}
        <p>
          Driven by a desire to channel my creativity and technical skills into
          a fulfilling career, I decided to transition into web development. To
          achieve this, I completed Ironhack intensive web development
          bootcamp, dedicating over 400 hours to mastering the MERN stack. I
          focused on front-end development with React and JavaScript, creating
          interactive and responsive user interfaces. On the back-end, I gained
          experience building RESTful APIs, managing databases with MongoDB, and
          implementing server-side logic with Node.js and collaborative
          workflows. This immersive experience deepened my understanding of
          modern web development and confirmed my passion for crafting
          functional and engaging applications.
        </p>
      </article>
      <article>
        <h4>Future goals</h4>
        <p>
          As a junior web developer, I’m eager to grow both personally and
          professionally. With curiosity and a humble attitude toward learning,
          I’m driven to explore new tools, embrace challenges, and continuously
          expand my knowledge. I take initiative and work independently, while
          remaining open to feedback and collaboration. My goal is to contribute
          to building efficient, user-friendly applications while continuing to
          enhance my skills in modern web technologies.
        </p>
      </article>
    </div>
  );
}
export default AboutMe;
