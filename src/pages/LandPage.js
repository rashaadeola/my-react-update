import React, { useState } from "react";
import lPImg from "../IMAGES/no-bg.png";

function LandPage() {
  // let number = 0
  const [welcome, setWelcome] = useState(2);
  const [policy, setPolicy] = useState(1);
  const [announce, setAnnounce] = useState(0);

  const next = () => {
    // alert("Next");
    setWelcome((welcome + 1) % 3);
    setPolicy((policy + 1) % 3);
    setAnnounce((announce + 1) % 3);
  };
  const prev = () => {
    setWelcome((welcome + 2) % 3);
    setPolicy((policy + 2) % 3);
    setAnnounce((announce + 2) % 3);
  };

  return (
    <div className="landpage">
      <div className="background">
        <div className="header1">
          <p id="logo">LaQuel </p>
          <form id="search">
            <input id="searchbar" type="text" placeholder="search" />
          </form>
          <div className="nav-bar">
            <ul>
              <p>
                <a href="/About">About</a>
              </p>
              <p>
                <a href="/profile">Home</a>
              </p>
              <p>
                <a href="/faqs">FAQs</a>
              </p>
              <p>
                <a href="/signup">Signup</a>
              </p>
              <p>
                <a href="/login">Login</a>
              </p>
            </ul>
          </div>
        </div>
        <div className="header2">
          <p>
            Welcome to LaQuel. Book your appointment today!{" "}
            <a href="s">Learn more</a>
          </p>
        </div>
        <div className="legalTermsbox">
          <div className="">
            <p id="bigText">
              Legal Terms
            </p>
            <p>
              lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
              Fuga minima laborum harum pariatur at veritatis eos hic
              dignissimos unde molestiae.
            </p>
            <div className="form">
              <p>Terms of Service</p>
              <p>Organisation Guidlines</p>
              <p>Privacy Policy</p>
              <p>Cookie Statement"</p>
            </div>
          </div>
          <div className="iconbox">
            <img src={lPImg} alt="img" />
          </div>
        </div>
        <div className="boxes">
          <div
            className="box-1"
            style={{
              "--allowance": `${(90 - 30 * announce)}px`,
              zIndex: announce,
            }}
          >
            <p id="news">News and Announcements</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              quibusdam voluptates dolores sit fugit veniam deleniti fugiat
              suscipit porro accusantium, maxime illum dolor atque natus
              tempora. Eligendi, sit iure, eos provident velit adipisci
              reiciendis nisi quisquam, nesciunt iusto minima! Natus provident
              corrupti, est blanditiis adipisci esse molestiae modi obcaecati
              fugit ut! Voluptatem, ipsum neque aut velit autem voluptates
              laudantium sint aliquam veritatis ducimus eos quas odit soluta
              possimus ipsa quo praesentium itaque excepturi cum animi porro
              tempora mollitia deleniti? Hic corporis delectus voluptate dolores
              natus non, magnam laboriosam doloribus repudiandae sunt distinctio
              repellendus, laudantium placeat ex tenetur sapiente, perferendis
              at.
            </p>
          </div>
          <div
            className="box-1"
            style={{
              "--allowance": `${(90 - 30 * policy)}px`,
              zIndex: policy,
            }}
          >
            <p id="Policy">Visiting Policy</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
              esse distinctio totam vitae, et pariatur, nisi obcaecati modi
              voluptate in temporibus, assumenda sint quam ab! Quidem, dolore
              hic dolorum veniam voluptatem totam, tenetur repellat, tempore
              asperiores repellendus officia cumque nisi nulla perspiciatis ea
              facere repudiandae tempora. Autem, similique. Libero, voluptatum
              ullam fuga quidem dolore doloribus nam reiciendis veritatis
              similique, dolor distinctio? Quia similique, ex esse nobis placeat
              repudiandae odio sapiente earum molestias, debitis obcaecati ea!
              Saepe explicabo laudantium illo aliquid, numquam tempore
              reiciendis nihil voluptas reprehenderit vitae unde natus mollitia
              tempora quis temporibus cum fuga eaque perspiciatis modi repellat
              deserunt.
            </p>
          </div>
          <div
            className="box-1"
            style={{
              "--allowance": `${(90 - 30 * (welcome))}px`,
              zIndex: welcome,
            }}
          >
            <p id="welcome">welcome!</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              aliquid adipisci! Illo, itaque. Reiciendis atque asperiores nihil
              nesciunt corporis eaque dicta tempora? Eligendi rem, perspiciatis
              quidem excepturi porro in? Numquam, illum eius suscipit, rerum,
              ipsa quae rem dolore doloremque harum consequuntur necessitatibus
              sit facilis dolor temporibus. Illum quo eius ea. Eum sunt
              recusandae dolorum nesciunt voluptatem sequi maiores, aliquam
              tenetur repellendus sint libero neque quisquam ipsam delectus
              iure, quo totam fugiat ab dignissimos beatae porro similique
              eligendi incidunt aliquid. Nemo distinctio corporis enim cum
              mollitia itaque, repudiandae obcaecati ipsa eum eligendi voluptate
              quam voluptatibus? Eos nobis veniam ab cumque iure quasi dolore
              recusandae neque amet accusantium sed ipsa incidunt earum,
              inventore facilis a tempore nostrum ipsam similique voluptas.
              Tempora unde ullam molestias dignissimos ipsum odio perferendis
              dicta molestiae a fugit officiis autem deserunt rerum vero
              quisquam voluptas laboriosam placeat
            </p>
          </div>
          <div className="buttons">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandPage;
