import "./ScheduleDemo.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function scheduleADemo() {
  return (
    <div className="scheduleADemo-main-container" style={{backgroundImage: 'url(./images/scheduleADemo-gradient.png)'}}>
    <Header />
        <div className="inner-container">
          <div className="form-container">
              <h2 className="heading-title-scheduleADemo">Schedule a Demo</h2>
              <input type="text" placeholder='  Business Name' />
              <input type="text" placeholder='  Phone Number' />
              <input type="text" placeholder='  Email' />
              <textarea rows="4" cols="50" className="text-area" placeholder='  Message' ></textarea>
              <button className="submit-btn">Submit</button>
          </div>
        </div>
        <Footer />
    </div>
  );
}

