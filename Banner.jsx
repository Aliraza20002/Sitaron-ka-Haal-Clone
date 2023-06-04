import React from "react";
import "../style/banner.css";
import {AiOutlineArrowRight} from "react-icons/ai";
import bannerimagess from '../Assets/EnglishMbSideImg.1e21d6e291c042d1593b.webp';
import googleplayicon from "../Googleplay.b4f5c67c1bd8c91e4a66.webp"


export default function Banner() {
  return (
    <div className="container BannerFlex">
      <div className="banner">
        <div class="bannerheading">
          Apka<span class="bannerheadingspan">Star</span>Sign batayega
        </div>
        <p className="bannerparagraph">
        aap ki shakhsiyat ke mukhtalif pehlu Janiye apnay baaray mein sitaron ka
        haal pe
      </p>
      <p className="inputboxheading">Enter Your Mobile Number</p>

      <div className="buttoncontainer">
        <div class="inputbutton">
          <span class="countryCode">+92</span>
          <input
            class="phoneNumber"
            type="numeric"
            placeholder="3xxxxxxxxx"
            maxlength="10"
          />
        </div>
        <button type="button" class="clickbutton">
        <AiOutlineArrowRight/>
        </button>
      </div>

      <div className="description"> * Prepaid @ Rs 3.68+T/Day & Postpaid @ Rs 17.93+T/Month. *</div>

      <div className="googleplaycontainer">
      <a href="https://play.google.com/store/apps/details?id=com.jazz.sitaronkahaal">
      <img alt="" width="100px" height="32px" src={googleplayicon} class="Googleplayicon"/>
      </a>
      <div class="GoogleplayDesc"><span class="GoogleplayDescSpan">Download</span> Sitaron ka Haal App Now!</div>
      </div>
      
      </div>
        
      
      <div className="bannerpicture">
      <img loading="lazy" src={bannerimagess} alt="" class="SideImg"/></div>
  
    </div>
  );
}
