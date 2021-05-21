/** @jsxImportSource @emotion/react */

import './App.css';
import { css } from '@emotion/react';
import appleDl from './images/apple_store.svg';
import conclusion from './images/conclusion.jpeg';
import logo from './images/doo_logo.svg';
import mobile from './images/iphone_frame.png';
import iphoneHero from './images/iphone_hero.jpg';
import miniImage1 from './images/mini_image1.png';
import miniImage2 from './images/mini_image2.png';
import miniImage3 from './images/mini_image3.png';
import miniImage4 from './images/mini_image4.png';
import miniImage5 from './images/mini_image5.png';
import miniImage6 from './images/mini_image6.png';
import miniImage7 from './images/mini_image7.png';
import miniImage8 from './images/mini_image8.png';
import miniImage9 from './images/mini_image9.png';
import privacyImage1 from './images/privacy_01.jpeg';
import privacyImage2 from './images/privacy_02_ios.jpeg';

const logoStyles = css``;
const appleStore = css`
  margin-top: -50px;
`;

const appleStore2 = css`
  margin-top: 20px;
  margin-left: 650px;
  margin-bottom: 100px;
`;

const header = css`
  margin-top: -220px;
  position: fixed;
  background-color: white;
  border: 1px none #ddd;
  border-radius: 4px;
  padding: 10px 42px;
`;

const iphoneImage = css`
  margin-top: 70px;
  margin-left: -35%;
  max-width: 170%;
`;

const miniImage = css`
  max-width: 25%;
`;

const mobileImage = css`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 100px 400px;
  width: 400px;
  background-color: #f0f2fa;
  margin-bottom: 230px;
`;

const privacy1 = css`
  padding: 10px 7px;
  max-width: 43%;
`;

const privacy2 = css`
  padding: 10px 7px;
  max-width: 43%;
`;

const finalImage = css`
  margin-left: 90px;
`;

const headerStyle = css`
  margin-left: 60px;
  margin-top: 20px;
`;

const headerRightNavStyle = css`
  margin-left: 850px;
  margin-top: -35px;
  display: flex;
  gap: 25px;
  color: #6e6d7a;
  padding-top: 15px;
  padding-right: 50px;
  font-weight: 600;
  font-size: 0.7em;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background-color: white;
  text-decoration: none;
`;
const sectionStyle = css`
  margin-top: 220px;
  color: #383938;
  font: inherit;
  text-align: center;
  letter-spacing: -0.04em;
  font-size: 3.2em;
  font-weight: 600;
`;
const headerButton = css`
  margin-top: -17px;
  border-radius: 8px;
  margin-left: 12px;
  font-size: 1em;
  border: 0;
  background: #f5f6f9;
  padding: 1.5em 3em;
`;

const featureCardContainer = css`
  display: flex;
  padding: 80px;
  margin-left: 100px;
  margin-top: 100px;
  gap: 80px;
  color: #6e6d7a;
  text-align: left;
  font-weight: 250;
  font-size: 1.3pc;
  border-left: 1px solid #edeef3;
  border-right: 1px solid #edeef3;
  -webkit-font-smoothing: antialiased;
`;

const mainText = css`
  text-align: center;
  margin-bottom: 0.5em;
  font-size: 2em;
  color: #383938;
  font-weight: 300;
  font-size: 11mm;
  -webkit-font-smoothing: antialiased;
`;

const subText = css`
  text-align: center;
  font-weight: 250;
  font-size: 0.95pc;
  color: #383938;
  margin-top: 30px;
  margin-bottom: 100px;
  -webkit-font-smoothing: antialiased;
`;

const footerButton = css`
  margin-left: 600px;
  margin-bottom: 200px;
  text-align: center;
  font-size: 0.9em;
  display: inline-block;
  letter-spacing: 0.2em;
  font-weight: 600;
  padding: 30px 50px;
  border: 1px solid #edeef3;
  border-radius: 6px;
  background-color: white;
  color: #6e6d7a;
  box-shadow: 0 3px 3px rgb(0 0 0 / 0%);
`;

function App() {
  return (
    <div>
      <header css={header}>
        <div css={headerStyle}>
          <img css={logoStyles} src={logo} alt="doo logo" />
        </div>
        <div css={headerRightNavStyle}>
          <a>DOO FOR IOS </a>
          <a>DOO FOR MAC </a>
          <a>SUPPORT </a>
          <button css={headerButton}>DOWNLOAD</button>
        </div>
      </header>
      <main>
        <section css={sectionStyle}>
          <h1>Simplify your to-do list</h1>
          <img css={appleStore} src={appleDl} alt="apple store" />
        </section>
        <section>
          <img css={iphoneImage} src={iphoneHero} alt="iphone hero" />
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section>
          <div css={featureCardContainer}>
            <div>
              <img css={miniImage} src={miniImage1} alt="mini image1" />
              <p>Create tasks with a clear, achievable goal.</p>
            </div>
            <div>
              <img css={miniImage} src={miniImage2} alt="mini image2" />
              <p>Pick a few tasks each day and snooze the rest.</p>
            </div>
            <div>
              <img css={miniImage} src={miniImage3} alt="mini image3" />
              <p>Build sustainable habits that feel invisible.</p>
            </div>
          </div>
        </section>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <section>
          <h1 css={mainText}>
            <div>Designed with purpose</div>
            <div css={subText}>
              <p>
                Popular productivity apps have tagging, color coding, folders,
                and
              </p>
              <p>
                subfolders. They call it organization. We call it bloat. Doo
              </p>
              <p>is everything you need and nothing you don’t.</p>
            </div>
            <img css={mobileImage} src={mobile} alt="mobile" />
          </h1>
          <h2 css={mainText}>
            <div>Effortless task entry</div>
            <div css={subText}>
              <p>
                Create a task by typing a title. Tap an icon above the keyboard
                to
              </p>
              <p>
                set dates, locations, notes, and more. Edit by tapping the text
                you’d
              </p>
              <p>like to change. Simple.</p>
            </div>
            <img css={mobileImage} src={mobile} alt="mobile" />
          </h2>
          <h3 css={mainText}>
            <div>One-step habit building</div>
            <div css={subText}>
              <p>
                Tap the Edit button to select your tasks for the day and snooze
                the
              </p>
              <p>rest. Doo helps you focus and avoid productivity guilt.</p>
            </div>
            <img css={mobileImage} src={mobile} alt="mobile" />
          </h3>
          <h4 css={mainText}>
            <div>Keeps your data private</div>
            <div css={subText}>
              <p>
                Privacy is a fundamental right. That’s why Doo includes screen
              </p>
              <p>
                locking. No "Pro" upgrade required. We also don’t collect your
              </p>
              <p>data. What does this mean? No trackers, no cookies, and no</p>
              <p>analytics. Simple — the way it should be.</p>
            </div>
            <img css={privacy1} src={privacyImage1} alt="privacy image1" />
            <img css={privacy2} src={privacyImage2} alt="privacy image2" />
          </h4>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h5 css={mainText}>
            <div>Other things you might be wondering about</div>
          </h5>
        </section>
        <section>
          <div css={featureCardContainer}>
            <div>
              <img css={miniImage} src={miniImage4} alt="mini image4" />
              <p>
                Use Siri to create tasks, a new list, or mark items completed.
              </p>
            </div>
            <div>
              <img css={miniImage} src={miniImage5} alt="mini image5" />
              <p>
                Ready for iOS 14. View your most recently due task or up to
                three recent items from any list.
              </p>
            </div>
            <div>
              <img css={miniImage} src={miniImage6} alt="mini image6" />
              <p>
                Share reminders using iMessage, email, or any other text-based
                service. Changes sync to all devices.
              </p>
            </div>
            <div>
              <img css={miniImage} src={miniImage7} alt="mini image7" />
              <p>
                Dynamic Type and VoiceOver support for a more universal
                experience for all.
              </p>
            </div>
            <div>
              <img css={miniImage} src={miniImage8} alt="mini image8" />
              <p>
                Protect sensitive information by requiring authentication when
                the app opens.
              </p>
            </div>
            <div>
              <img css={miniImage} src={miniImage9} alt="mini image9" />
              <p>
                Sync on all of your iOS and Mac devices using your Apple ID.
              </p>
            </div>
          </div>
          <button css={footerButton}>view all features</button>
        </section>
        <section>
          <header css={mainText}>
            <p>Build better habits.</p>
            <p> Get the to-do app that helps you focus.</p>
          </header>
          <img css={appleStore2} src={appleDl} alt="apple store" />
          <img css={finalImage} src={conclusion} alt="conclusion" />
        </section>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
