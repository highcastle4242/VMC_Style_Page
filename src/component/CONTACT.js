import React,{ Component } from 'react';
import './contact.css';
import {Helmet} from "react-helmet";
class CONTACT extends Component{
  render(){
    return(
      <div class='content'>
        <Helmet><title>VMC-CONTACT</title></Helmet>
        <article class='instagram'>
          <div >
              <p class='contact-title'>
                  <span class="txt1" >CONTACT</span>
              </p>
          </div>
          <div class='contact'>
              <p class="contact-txt">
                  <span class="txt2">ADDRESS</span>
                  <span class="txt3">7TH AND 3RD FLOORS OF DONGGYO-RO 17-GIL,MAPO-GU,<br/>
                                      REPUBLIC OF KOREA<br/>
                                      서울특별시 마포구 동교로17길 7, 3층</span>
              </p>
              <p class="contact-txt">
                  <span class="txt2">CONTACT US</span>
                  <span class="txt3">TEL: 070-7766-0639</span>
              </p>
              <p class="contact-txt">
                  <span class="txt2">GENERAL INQUIRY / MGMT</span>
                  <span class="txt3">vismajorcompany@gmail.com</span>
              </p>
              <p class="contact-txt">
                  <span class="txt2">AUDITION / DEMO</span>
                  <span class="txt3">vmcdemomgmt@gmail.com</span>
              </p>
          </div>
          <div class='google'>
              <iframe title="map" key='googleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.9899174360776!2d126.913819850977!3d37.55530133242979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98d966f23c95%3A0xf08fa066223be1a1!2z7ISc7Jq47Yq567OE7IucIOuniO2PrOq1rCDshJzqtZDrj5kg64-Z6rWQ66GcMTfquLggNyAz7Li1!5e0!3m2!1sko!2skr!4v1548810759462" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
          </div>
        </article>
      </div>
    );
  }
}

export default CONTACT;