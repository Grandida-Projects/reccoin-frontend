import React from 'react';
import Header from '../components/navigation/Header';
import HomeFooter from '../components/homepage_components/HomeFooter';
import Footer from '../components/footer';

const PrivacyPolicy = () => {
  return (
    <>
     <Header/>
      {/* header */}
      <div className='w-full bg-primary40 mt-20'>
        <h2 className="text-white uppercase text-center font-[800] text-[25px] font-montserrat pt-16 pb-8 leading-7">
          Privacy policy
        </h2>
        <h3 className='text-[1.2rem] text-white font-[700] font-openSans text-center pb-8'>Last Updated: <span className='font-[200]'>June, 2023</span> </h3>
      </div>
      {/* content */}
      <div className="rounded my-16 justify-center w-[80vw] mx-auto px-9 py-4 border border-[#006D44] shadow-lg shadow-black/25 ">
        <div className="space-y-4">
          <div>
            <p className="font-openSans">
              At Reccoin, we are committed to protecting the privacy and
              personal information of our users. This Privacy Policy explains
              how we collect, use, and safeguard your information when you use
              our Web3 platform. By using our platform, you consent to the
              practices described in this Privacy Policy. Information We Collect
              Personal Information: When you register an account on our
              platform, we collect certain personal information, including your
              name, email address, and any additional information you choose to
              provide. Collection Data: As part of our platform's functionality,
              we collect data related to the waste plastics you deposit, such as
              weight, type, and timestamp. This information is necessary to
              facilitate the reward and verification process. Usage Information:
              We may collect non-personally identifiable information about how
              you interact with our platform, including your IP address, device
              type, browser type, and usage patterns. This information helps us
              improve our platform's performance, user experience, and security.
            </p>
          </div>
          <div>
            <h3 className="text-[#191C1A] font-bold font-openSans leading-6 text-[20px]">
              How We Use Your Information{' '}
            </h3>
            <ol className="list-decimal font-openSans">
              <li>
                To Provide Services: We use the information we collect to enable
                the functionality of our platform, including processing plastic
                deposits, issuing tokens, and facilitating communication between
                users and recycling partners.
              </li>
              <li>
                To Improve Our Platform: We analyze usage patterns and user
                feedback to enhance our platform's features, usability, and
                performance. This includes troubleshooting technical issues,
                conducting research, and implementing security measures.
              </li>
              <li>
                To Communicate with You: We may use your email address to send
                important notifications, updates, and information related to
                your account activity. We may also send occasional promotional
                materials or newsletters, but you can opt-out of these
                communications at any time.
              </li>
              <li>
                To Comply with Legal Obligations: We may need to disclose your
                information to comply with applicable laws, regulations, or
                legal processes. We will also cooperate with law enforcement
                agencies as required to protect our platform, users, or the
                general public.
              </li>
            </ol>
          </div>
          <div>
            <h3 className="text-[#191C1A] font-bold font-openSans leading-6 text-[20px]">
              Data Security and Retention
            </h3>
            <p className="font-openSans">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access, loss, misuse, or
              alteration. However, no data transmission over the internet or
              electronic storage method is entirely secure, so we cannot
              guarantee absolute security. We retain your personal information
              for as long as necessary to fulfill the purposes outlined in this
              Privacy Policy, unless a longer retention period is required or
              permitted by law. When we no longer need your information, we will
              securely dispose of it.
            </p>
          </div>
          <div>
            <h3 className="text-[#191C1A] font-bold font-openSans leading-6 text-[20px]">
              Third-Party Disclosure
            </h3>
            <p className="font-openSans">
              We may share your information with trusted third parties,
              including our recycling partners, for the purpose of processing
              plastic deposits, rewarding tokens, and ensuring a seamless user
              experience. We do not sell, trade, or rent your personal
              information to third parties for their marketing purposes.
            </p>
          </div>
          <div>
            <h3 className="text-[#191C1A] font-bold font-openSans leading-6 text-[20px]">
              Your Choices and Rights
            </h3>
            <p className="font-openSans">
              You have the right to access, update, correct, or delete your
              personal information. You may also request the restriction of
              processing or object to the processing of your data. To exercise
              these rights or make inquiries regarding your information, please
              contact us using the contact details provided at the end of this
              policy
            </p>
          </div>
          <div>
            <h3 className="text-[#191C1A] font-bold font-openSans leading-6 text-[20px]">
              Updates to the Privacy Policy
            </h3>
            <p className="font-openSans">
              We reserve the right to update this Privacy Policy periodically.
              Any changes will be posted on this page, and we encourage you to
              review the policy regularly. By continuing to use our platform
              after such changes are made, you acknowledge and agree to the
              updated Privacy Policy.
            </p>
          </div>
          <div>
            <h3 className="text-[#191C1A] font-bold font-openSans leading-6 text-[20px]">
              Contact Us
            </h3>
            <p className="font-openSans">
              If you have any questions, concerns, or feedback regarding this
              Privacy Policy or our privacy practices, please contact us at{' '}
              <span className="font-bold"> admin@reccoin.org.</span> We will
              strive to address your inquiries in a timely manner.
            </p>
            <p className="py-3">
              <span className="font-bold">Last updated:</span> May, 2023
            </p>
          </div>
          <div>
            <p className="font-openSans">
              <span className="font-bold">Note:</span> This privacy policy
              statement is a general framework and may require customization
              based on specific legal requirements and regulations in your
              jurisdiction. It is recommended to consult with legal
              professionals to ensure compliance with applicable laws.
            </p>
          </div>
        </div>
      </div>
    <HomeFooter/>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
