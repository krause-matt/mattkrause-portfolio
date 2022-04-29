import "./about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="anchor" id="about-anchor">
        about-anchor
      </div>
      <div className="container">
        <div className="left">
          <div className="name">Matt Krause</div>
          <div className="frame">
            <div className="subframe-1">
              <div className="letter-1a">D</div>
              <div className="letter-1b">/</div>
            </div>
            <div className="subframe-2">
              <div className="letter-2">E</div>
            </div>
            <div className="subframe-3">
              <div className="letter-3a">V</div>
              <div className="letter-3b">N</div>
            </div>
            <div className="subframe-4">
              <div className="letter-4a">E</div>
              <div className="letter-4b">G</div>
            </div>
            <div className="subframe-5">
              <div className="letter-5a">L</div>
              <div className="letter-5b">I</div>
            </div>
            <div className="subframe-6">
              <div className="letter-6a">O</div>
              <div className="letter-6b">N</div>
            </div>
            <div className="subframe-7">
              <div className="letter-7a">P</div>
              <div className="letter-7b">E</div>
            </div>
            <div className="subframe-8">
              <div className="letter-8">E</div>
            </div>
            <div className="subframe-9">
              <div className="letter-9">R</div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="aboutme">About Me.</div>
          <p className="about-description">
            I'm an Electrical Engineer transitioning into Front-End Web
            Development.
            <br></br>
            <br></br>
            My introduction to web development came mid-2021 after researching
            how to build a website. Along with learning the latest web
            development languages and tools, I discovered that creating useful,
            interactive apps simultaneously challenged my logical and creative
            sides in an exciting way I hadn't experienced before. Since then, I
            have been coding on a daily basis to enhance my web development
            skills and portfolio of personal projects.
            <br></br>
            <br></br>I have spent my professional career solving problems for
            some of the world's largest brands including Samsung, Amazon, and
            LG. My experience makes me an ideal candidate for a team in need of
            a developer eager to learn and contribute.
            <br></br>
            <br></br>
            Thanks for visiting, and feel free to{" "}
            <a href="#contact">contact me</a> if you would like to learn more!
          </p>
        </div>
      </div>
    </div>
  );
}
