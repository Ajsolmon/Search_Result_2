import "./styles.css";
import Line from "./Line.svg";
import BlogImage from "./blogImage.png";

export default function App() {
  return (
    <main>
      <input
        type="text"
        className="searchBar"
        placeholder="Frequently asked questions"
      />

      <ul className="linkGroup">
        <li>ALL</li>
        <li>RESOURCES</li>
        <li>BLOG</li>
        <li>HELP CENTRE</li>
        <li>PLATFORM</li>
        <li>PRIVACY POLICY</li>
        <li>MORE</li>
      </ul>

      <div className="articleI">
        <h4>Blog</h4>
        <div className="subArticleI">
          <div
            style={{ backgroundImage: `url(${BlogImage})` }}
            className="blogImage"
          />
          <div>
            <p>COLLABORATION</p>
            <h1>
              Cultivate High-Performance Teams Frequently Asking Questions
            </h1>
            <p>
              Employees want regular feedback that's personal, specific, and in
              tune with company goals.
            </p>
          </div>
        </div>
      </div>

      <hr />

      <div className="articleII">
        <h4>FAQs</h4>
        <h1>Understand Guest Roles in Zuri Chat</h1>
        <p>
          Employees want regular feedback that's personal, specific, and in tune
          with company goals and can be added to an unlimited number of
          channels. Single- Channel Guests only access one channel. For every
          ...
        </p>
        <div>
          <p>Learn More</p>
          <img src={Line} alt="arrow_left" />
        </div>
      </div>

      <div className="articleIII">
        <h1>Accessing Frequently Asked</h1>
        <p>
          Employees want regular feedback that's personal, specific, and in tune
          with company goals and can be added to an unlimited number of
          channels. Single- Channel Guests only access one channel. For every
          ...
        </p>
        <div>
          <p>Learn More</p>
          <img src={Line} alt="arrow_left" />
        </div>
      </div>

      <hr />

      <div className="articleIV">
        <h4>Help Center</h4>
        <h1>Acceptable Use Policy</h1>
        <p>
          Employees want regular feedback that's personal, specific, and in tune
          with company goals and can be added to an unlimited number of
          channels. Single- Channel Guests only access one channel. For every
          ...
        </p>
        <div>
          <p>Learn More</p>
          <img src={Line} alt="arrow_left" />
        </div>
      </div>

      <div className="articleV">
        <h1>Multi-Year Accessibility Plan</h1>
        <p>
          Employees want regular feedback that's personal, specific, and in tune
          with company goals and can be added to an unlimited number of
          channels. Single- Channel Guests only access one channel. For every
          ...
        </p>
        <div>
          <p>Learn More</p>
          <img src={Line} alt="arrow_left" />
        </div>
      </div>
    </main>
  );
}
