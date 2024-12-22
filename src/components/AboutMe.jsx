import "./AboutMe.css";

function AboutMe() {
  return (
    <div className="about-container">
      <article>
        <p>
          A junior web developer specializing in the MERN stack. With a
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
          My interest in history led me to pursue a degree focused on the
          classical era, which ignited my passion for preserving and sharing
          historical knowledge in new ways. This journey led me to complete a
          Master&apos;s in Digital Humanities, where I discovered the power of
          technology in transforming how we engage with the past. During this
          time, I developed foundational skills in web development, including
          HTML, CSS, SQL, and database management, arousing my interest in
          creating digital solutions.
        </p>
        <p>
          During the pandemic, I delved into 3D modeling, designing realistic
          environments for historical reconstructions and games. This hands-on
          work allowed me to expand my skill set, including programming with C#,
          audiovisual post-production, and UX/UI design. These experiences
          revealed my passion for blending creativity with technology and
          inspired me to explore the world of programming more deeply.
        </p>
        <button className="artstation">
          <a href="https://nferrefe.artstation.com/" target="_blank">
            Me as 3D artist
          </a>
        </button>
        <p>
          Motivated by what I had learned and eager to pursue a career I truly
          enjoyed, I decided to shift paths and completed an intensive web
          development bootcamp at Ironhack. Over 400 hours of hands-on learning,
          I mastered the MERN stack and built dynamic, user-centered
          applications, solidifying my commitment to combining design and
          technology in impactful ways.
        </p>
      </article>
      <article>
        <h4>Future goals</h4>
        <p>
          As a junior web developer, I&apos;m eager to continue growing and
          refining my craft. I’m excited to explore new tools, tackle
          challenging projects, and create digital products that make a
          meaningful difference. With a constant drive for curiosity and
          innovation, my mission is to bridge the gap between design and
          technology to deliver digital experiences that inspire and connect.
        </p>
      </article>
    </div>
  );
}
export default AboutMe;
