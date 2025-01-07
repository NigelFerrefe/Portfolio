import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      <article>
        <p>
          A junior <span className="color">web developer</span> specialized in
          the <span className="color">MERN stack</span>. With a background in
          Digital Humanities and advanced training in 3D animation and
          interactive design, I bring a unique blend of{" "}
          <span className="color">creative skill</span> and
          <span className="color"> technical expertise</span> to web
          development. My focus is on creating
          <span className="color"> intuitive applications</span> that balance
          design and functionality, always seeking innovative solutions that
          make an impact.
        </p>
      </article>
      <article>
        <h4>The road so far</h4>
        <p>
          My passion for history and technology led me to pursue a degree in
          History and a Master degree in Digital Humanities, where I explored
          how technology transforms our relationship with the past. After the
          pandemic, I expanded my programming skills trough C# and UX/UI design.
          These experiences, combined with basic knowledge in web development,
          motivated me to <span className="color">merge creativity with technology</span> to develop innovative
          digital solutions.
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
          achieve this, I completed <span className="color">Ironhack</span>{" "}
          intensive web development bootcamp, dedicating over 400 hours to
          mastering the MERN stack. I focused on{" "}
          <span className="color">front-end development</span> with React and
          JavaScript, creating interactive and responsive user interfaces. On
          the <span className="color">back-end</span>, I gained experience
          building RESTful APIs, managing databases with MongoDB, and
          implementing server-side logic with Node.js and collaborative
          workflows. This immersive experience deepened my understanding of
          modern web development and confirmed my{" "}
          <span className="color">
            passion for crafting functional and engaging applications.
          </span>
        </p>
      </article>
      <article>
        <h4>Future goals</h4>
        <p>
          As a junior web developer, I’m eager to grow both personally and
          professionally. With <span className="color">curiosity</span> and a{" "}
          <span className="color">humble attitude</span> toward learning, I’m
          driven to explore <span className="color">new tools</span>, embrace{" "}
          <span className="color">challenges</span>, and continuously expand my{" "}
          <span className="color">knowledge</span>. I take initiative and work
          independently, while remaining open to feedback and collaboration. My
          <span className="color"> goal</span> is to <span className="color">contribute</span> to building efficient, user-friendly
          applications while continuing to <span className="color">enhance my skills</span> in modern web
          technologies.
        </p>
      </article>
    </div>
  );
}
export default AboutMe;
