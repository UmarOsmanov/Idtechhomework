import CountUp, { } from "react-countup";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero";
import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <Header />
        <Hero />
      </div>

      <div className="main_content">
        <div className="main_content_text">
          <h4>MUSIC FESTIVAL</h4>
          <h2>
            DISCOVER A WORLD <br />
            OF CELEBRATION
          </h2>
          <span>
            As an AI language model, I don't have personal opinions or points of
            view. However, I <br /> can tell you that design is a multifaceted
            field that encompasses various elements.
          </span>
          <p>Mirpur 01 Road N 12 Dhaka Bangladesh</p>
          <button>Purchase Ticket</button>
        </div>

        <div className="main_content_image">
          <img src="/src/assets/pexels-pixabay-417473.jpg" alt="" />
        </div>
      </div>

      <div className="section_title">
        <p>EVENT BENEFITS</p>
        <h3>Why Should You Join Our Event</h3>
      </div>

      <div className="join_event_box">
        <div className="join_event_box_title">
          <div className="join_event_box_icon">
            <img src="/src/assets/event1.png" alt="" />
          </div>
          <h2>Eventful Ventures</h2>
          <p>
            Events bring people together for a shared experience and from
            weddings.
          </p>
          <h4>
            Read More <img src="" alt="" />{" "}
          </h4>
        </div>

        <div className="join_event_box_title">
          <div className="join_event_box_icon">
            <img src="/src/assets/event2.png" alt="" />
          </div>
          <h2>Stellar Events Co</h2>
          <p>
            Events bring people together for a shared experience and from
            weddings.
          </p>
          <h4>
            Read More <img src="" alt="" />{" "}
          </h4>
        </div>

        <div className="join_event_box_title">
          <div className="join_event_box_icon">
            <img src="/src/assets/event3.png" alt="" />
          </div>
          <h2>Elite Event Management</h2>
          <p>
            Events bring people together for a shared experience and from
            weddings.
          </p>
          <h4>
            Read More <img src="" alt="" />{" "}
          </h4>
        </div>
      </div>

      <div className="about_event">
        <div className="about_event_first_box">
          <div>
            <div>
              <p>ABOUT OUR EVENT</p>
            </div>
            <div>
              <h3>Uniting Creating of the Memories</h3>
            </div>
          </div>

          <button>
            Join The Event <img src="" alt="" />
          </button>
        </div>

        <div className="about_event_second_box">
          <div className="about_event_second_box_title">
            <div className="about_event_second_box_icon">
              <img src="/src/assets/event3.png" alt="" />
            </div>

            <div>
              <h4>Artists & bands</h4>
              <p>
                Events bring people together for a shared experience
                celebration. From weddings and birthdays to conferences.
              </p>
            </div>
          </div>

          <div className="about_event_second_box_title">
            <div className="about_event_second_box_icon">
              <img src="/src/assets/event3.png" alt="" />
            </div>

            <div>
              <h4>Artists & bands</h4>
              <p>
                Events bring people together for a shared experience
                celebration. From weddings and birthdays to conferences.
              </p>
            </div>
          </div>
        </div>

        <div className="about_event_third_box_photo">
          <img src="/src/assets/concert3.png" alt="" />
        </div>
      </div>

      <div className="buy_ticket_box">
        <div className="buy_ticket_title_box">
          <div>
            <img src="/src/assets/clock.png" alt="" />
            <p>Mirpur 01 Road N 12 Dhaka Bangladesh</p>
          </div>

          <div>
            <img src="/src/assets/location.png" alt="" />
            <p>10 Am To 10 Pm 20 April 2024</p>
          </div>

          <h3>Your Seat Now Or You May Regret it Once</h3>
          <p>
            Events bring people together for a shared experience celebration.
            From weddings and birthdays to conferences, events bring people
            together for a shared purpose.
          </p>
          <div className="buy_buttons">
            <button>
              By Your Ticket <img src="/src/assets/arrow_right.png" alt="" />
            </button>
            <button>
              Contact Us <img src="/src/assets/" alt="" />
            </button>
          </div>
        </div>

        <div className="buy_ticket_image_box">
          <img src="/src/assets/collective.png" alt="" />
        </div>
      </div>

      <div className="team_box">
        <div>
          <h5>OUR TEAM MEMBER</h5>
          <h4>Our Amazing Learned Event Speakers</h4>
        </div>

        <div className="team_box_members">
          <div className="team_box_member">
            <img src="/src/assets/member1.png" alt="" />
            <span className="team_box_member_title">Tom Beckham</span>
          </div>
          <div className="team_box_member">
            <img src="/src/assets/member2.png" alt="" />
            <span className="team_box_member_title">Jessica Brown</span>
          </div>
          <div className="team_box_member">
            <img src="/src/assets/member3.png" alt="" />
            <span className="team_box_member_title">Jane Coleman</span>
          </div>
        </div>
      </div>

      <div className="event_direction">
        <div className="event_direction_title">
          <h4>OUR EVENT DIRECTION</h4>
          <h2>Creating Memories One Event Time</h2>
          <p>
            Events bring people together for a shared experience and
            celebration. From weddings and birthdays to conferences.
          </p>
          <p>(307) 555-0133</p>
        </div>

        <div className="event_direction_result">


          <CountUp suffix="+" duration={2} start={0} end={100} delay={0} scrollSpyOnce enableScrollSpy scrollSpyDelay={200} startOnMount={false}>
            {({ countUpRef }) => (
              <div className="event_direction_result_title">
                <h2 ref={countUpRef as React.Ref<HTMLHeadingElement>} />  
                <p>Our Event Artists</p>
              </div>
            )}

          </CountUp>


                    <CountUp suffix="+" duration={2} start={0} end={150} delay={0} scrollSpyOnce enableScrollSpy scrollSpyDelay={200} startOnMount={false}>
            {({ countUpRef }) => (
              <div className="event_direction_result_title">
                <h2 ref={countUpRef as React.Ref<HTMLHeadingElement>} />  
                <p>Our Event Artists</p>
              </div>
            )}

          </CountUp>



                    <CountUp suffix="+" duration={2} start={0} end={50} delay={0} scrollSpyOnce enableScrollSpy scrollSpyDelay={200} startOnMount={false}>
            {({ countUpRef }) => (
              <div className="event_direction_result_title">
                <h2 ref={countUpRef as React.Ref<HTMLHeadingElement>} />  
                <p>Our Event Artists</p>
              </div>
            )}

          </CountUp>



                    <CountUp suffix="+" duration={2} start={0} end={70} delay={0} scrollSpyOnce enableScrollSpy scrollSpyDelay={200} startOnMount={false}>
            {({ countUpRef }) => (
              <div className="event_direction_result_title">
                <h2 ref={countUpRef as React.Ref<HTMLHeadingElement>} />  
                <p>Our Event Artists</p>
              </div>
            )}

          </CountUp>


        </div>
      </div>

<div className="latest_gallery">
  <p>LATEST GALLERY</p>
  <h3>An Evening For Creator & Art
Lover Meet Together</h3>

<div className="gallery">

<div className="gallery_image"><img src="/src/assets/gallery1.png" alt="" /></div>
<div className="gallery_image"><img src="/src/assets/gallery1.png" alt="" /></div>
<div className="gallery_image"><img src="/src/assets/gallery1.png" alt="" /></div>
<div className="gallery_image"><img src="/src/assets/gallery1.png" alt="" /></div>
<div className="gallery_image"><img src="/src/assets/gallery1.png" alt="" /></div>
<div className="gallery_image"><img src="/src/assets/gallery1.png" alt="" /></div>
<div className="gallery_image"><img src="/src/assets/gallery1.png" alt="" /></div>
<div className="gallery_image"><img src="/src/assets/gallery1.png" alt="" /></div>



</div>



</div>




    </>
  );
};

export default Home;
