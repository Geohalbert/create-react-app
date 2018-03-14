import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <article id="explorer-page" className="container explorer-page">
          <header className="sub-header">
            <div className="counter">Currently showing: 1 - 6 of 6</div>
            <div className="inductee-link">
              <a href="/inductees/induction-process">
                About the induction process
              </a>
            </div>{' '}
          </header>

          <div className="content clearfix">
            <div className="famer-result-wrapper" id="group">
              <div className="famer-result clearfix">
                <a
                  href="https://www.rockhall.com/inductees/bon-jovi"
                  title="Read more about Bon Jovi"
                >
                  <div className="famer-image">
                    <img
                      src="https://www.rockhall.com/sites/default/files/styles/story_related_hof_254_x_220/public/bon_jovi_crop_0.jpg?itok=d4PyAQak"
                      width="254"
                      height="220"
                      alt="2018 Rock and Roll Hall of Fame Inductees Bon Jovi"
                    />{' '}
                  </div>

                  <div className="famer-data">
                    <h2 className="name">Bon Jovi </h2>
                    <h3 className="name">Total votes: 2.5 </h3>

                    {/* <div className="inducted field">Year inducted: <span className="year"><span className="date-display-single">2018</span></span></div> */}
                    <div className="inducted category">
                      Induction category:{' '}
                      <span className="category">Performers</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="famer-result-wrapper" id="group">
              <div className="famer-result clearfix">
                <a
                  href="https://www.rockhall.com/inductees/dire-straits"
                  title="Read more about Dire Straits"
                >
                  <div className="famer-image">
                    <img
                      src="https://www.rockhall.com/sites/default/files/styles/story_related_hof_254_x_220/public/dire_straits_crop_0.jpg?itok=GxFTyvR7"
                      width="254"
                      height="220"
                      alt="2018 Rock and Roll Hall of Fame Inductees Dire Straits"
                    />{' '}
                  </div>

                  <div className="famer-data">
                    <h2 className="name">Dire Straits </h2>
                    <h3 className="name">Total votes: fourteenteen </h3>
                    {/*
    <div className="inducted field">Year inducted: <span className="year"><span className="date-display-single">2018</span></span></div> */}
                    <div className="inducted category">
                      Induction category:{' '}
                      <span className="category">Performers</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="famer-result-wrapper" id="group">
              <div className="famer-result clearfix">
                <a
                  href="https://www.rockhall.com/inductees/nina-simone"
                  title="Read more about Nina Simone"
                >
                  <div className="famer-image">
                    <img
                      src="https://www.rockhall.com/sites/default/files/styles/story_related_hof_254_x_220/public/nina_simone_crop_0.jpg?itok=S0jmK0Kz"
                      width="254"
                      height="220"
                      alt="2018 Rock and Roll Hall of Fame Inductee Nina Simone"
                    />{' '}
                  </div>

                  <div className="famer-data">
                    <h2 className="name">Nina Simone </h2>
                    <h3 className="name">Total votes: 2000 </h3>

                    {/* <div className="inducted field">Year inducted: <span className="year"><span className="date-display-single">2018</span></span></div> */}
                    <div className="inducted category">
                      Induction category:{' '}
                      <span className="category">Performers</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="famer-result-wrapper" id="group">
              <div className="famer-result clearfix">
                <a
                  href="https://www.rockhall.com/inductees/sister-rosetta-tharpe"
                  title="Read more about Sister Rosetta Tharpe"
                >
                  <div className="famer-image">
                    <img
                      src="https://www.rockhall.com/sites/default/files/styles/story_related_hof_254_x_220/public/sister_rosetta_crop_0.jpg?itok=1N6ZC8sr"
                      width="254"
                      height="220"
                      alt="2018 Rock and Roll Hall of Fame Inductee Sister Rosetta Tharpe"
                    />{' '}
                  </div>

                  <div className="famer-data">
                    <h2 className="name">Sister Rosetta Tharpe </h2>
                    <h3 className="name">Total votes: 500 </h3>

                    {/* <div className="inducted field">Year inducted: <span className="year"><span className="date-display-single">2018</span></span></div> */}
                    <div className="inducted category">
                      Induction category:{' '}
                      <span className="category">Early Influences</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="famer-result-wrapper" id="group">
              <div className="famer-result clearfix">
                <a
                  href="https://www.rockhall.com/inductees/cars"
                  title="Read more about The Cars"
                >
                  <div className="famer-image">
                    <img
                      src="https://www.rockhall.com/sites/default/files/styles/story_related_hof_254_x_220/public/thecarswebcrop_0.jpg?itok=tweC0llJ"
                      width="254"
                      height="220"
                      alt="2018 Rock and Roll Hall of Fame Inductees The Cars"
                    />{' '}
                  </div>

                  <div className="famer-data">
                    <h2 className="name">The Cars </h2>
                    <h3 className="name">Total votes: 1000000000000 </h3>

                    {/* <div className="inducted field">Year inducted: <span className="year"><span className="date-display-single">2018</span></span></div> */}
                    <div className="inducted category">
                      Induction category:{' '}
                      <span className="category">Performers</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="famer-result-wrapper" id="group">
              <div className="famer-result clearfix">
                <a
                  href="https://www.rockhall.com/inductees/moody-blues"
                  title="Read more about The Moody Blues"
                >
                  <div className="famer-image">
                    <img
                      src="https://img.buzzfeed.com/buzzfeed-static/static/2016-03/31/16/campaign_images/webdr02/people-cant-stop-watching-this-hilarious-nine-sec-2-3436-1459456817-4_dblbig.jpg"
                      width="254"
                      height="220"
                      alt="Rock and Roll Hall of Fame Inductees The Moody Blues"
                    />{' '}
                  </div>

                  <div className="famer-data">
                    <h2 className="name">Nickleback </h2>
                    <h3 className="name">Total votes: 0 </h3>

                    <div className="inducted category">
                      Induction category:{' '}
                      <span className="category">Performers</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="pager--explorer" />
        </article>
        {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div> */}
      </div>
    );
  }
}

export default App;
