import { useEffect } from 'react';
import React from 'react';
import Footer from './Footer';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
        <div className="page">
          <div className="container">
            <div className="pageTitle">
              Privacy Policy
            </div>
            <p>
              This Privacy Policy describes how your personal information is collected, used, and shared when you visit <a href="https://deymarinsurance.com">https://deymarinsurance.com</a> (the “Site”).
            </p>
            <h2>Personal Information We Collect</h2>
            <p>
              When you visit our Site, we automatically gather certain information about your device, including details about your web browser, IP address, time zone, and some of the cookies installed on your device. Additionally, as you navigate through the Site, we collect information about the individual web pages or products you view, the websites or search terms that referred you to the Site, and how you interact with the Site. This automatically-collected information is referred to as “Device Information.”
            </p>
            <p>
              We collect Device Information using the following technologies:
            </p>
            <p>
              <ul>
                <li>
                  <b>- Cookies:</b> Data files placed on your device or computer that often include an anonymous unique identifier.
                </li>
                <li>
                  <b>- Log Files:</b>Track actions occurring on the Site and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
                </li>
                <li>
                  <b>- Web Beacons</b>, Tags, and Pixels: Electronic files used to record information about how you browse the Site.
                </li>
              </ul>
            </p>
            <p>
              Additionally, if you pay a bill or make another form of financial transaction on the Site, we collect certain information from you, including your name, billing address, payment information (such as credit card numbers), email address, and phone number. We refer to this information as “Transaction Information.”
            </p>
            <p>
              When we mention “Personal Information” in this Privacy Policy, we mean both Device Information and Transaction Information.
            </p>
            <h2>How We Use Your Personal Information</h2>
            <p>
              We use your Personal Information to communicate with you, process financial transactions, provide you with information, and/or advertise our products or services. Specifically, we use the Device Information we collect to help us improve and optimize our Site (for example, by generating analytics about how visitors browse and interact with the Site and to assess the success of our marketing and advertising campaigns).
            </p>
            <h2>Sharing Your Personal Information</h2>
            <p>
              We share your Personal Information with third parties to help us provide a better experience. For example, we use Google Analytics to understand how our visitors use the Site. You can read more about how Google uses your Personal Information here:
              <ul className='pl-0'>
                <li>
                  [Google Privacy Policy](<a href="https://policies.google.com">https://policies.google.com</a>)
                </li>
                <li>
                  You can opt-out of Google Analytics here:
                </li>
                <li>
                  [Google Analytics Opt-out](<a href="https://tools.google.com/dlpage/gaoptout">https://tools.google.com/dlpage/gaoptout</a>)
                </li>
              </ul>
            </p>
            <p>
              We may also share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant, or other lawful request for information we receive, or to otherwise protect our rights.
            </p>
            <h2>Behavioral Advertising</h2>
            <p>
              As described above, we may use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. You can opt out of targeted advertising by visiting:
              <ul>
                <li>
                  - <a href="https://www.facebook.com/ads/preferences/">[Facebook](https://www.facebook.com/ads/preferences/)</a>
                </li>
                <li>
                  - <a href="https://adssettings.google.com/">[Google](https://adssettings.google.com/)</a>
                </li>
                <li>
                  - <a href="https://www.linkedin.com/psettings/advertising">[LinkedIn](https://www.linkedin.com/psettings/advertising)</a>
                </li>
                <li>
                  - <a href="https://choice.microsoft.com/">[Bing](https://choice.microsoft.com/)</a>
                </li>
              </ul>
            </p>
            <p>
              Additionally, you can opt out of some of these services by visiting the Digital Advertising Alliance's opt-out portal here:
              <ul className='pl-0'>
                <li>
                  [DAA Opt-out](<a href="http://optout.aboutads.info/">http://optout.aboutads.info/</a>)
                </li>
              </ul>
            </p>
            <h2>Do Not Track</h2>
            <p>
              Please note that we do not alter our Site’s data collection and use practices when we see a Do Not Track signal from your browser.
            </p>
            <h2>European Resident Rights</h2>
            <p>
              If you are a European resident, you have the right to access the Personal Information we hold about you and to ask that your Personal Information be corrected, updated, or deleted. If you would like to exercise this right, please contact us.
            </p>
            <p>
              Additionally, if you are a European resident, we note that we are processing your information to fulfill contracts we might have with you (for example, if you request information through the Site) or to pursue our legitimate business interests listed above.
            </p>
            <p>
              Furthermore, please note that your information will be transferred outside of Europe, including to Canada and the United States.
            </p>
            <h2>Data Retention</h2>
            <p>
              When you interact with the Site, we will maintain your Personal Information for our records unless and until you ask us to delete this information.
            </p>
            <h2>Changes</h2>
            <p>
              We may update this privacy policy from time to time to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons.
            </p>
            <h2>Contact Us</h2>
            <p>
              For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by email at <a href="mailto:insurance@deymar.org">insurance@deymar.org</a> or by mail at the following address:
            </p>
            <p>
              <ul className='pl-0'>
                <li>
                  Deymar Insurance Agency
                </li>
                <li>
                  3601 W Algonquin Rd Ste 640
                </li>
                <li>
                  Rolling Meadows, IL 60008  
                </li>
                <li>
                  <a href="tel:+18474960006">+1 (847) 496-0006</a>
                </li>
              </ul>
            </p>
          </div>
        </div>
      <Footer/>
    </>
  );
};

export default PrivacyPolicy;
