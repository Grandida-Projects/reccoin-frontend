import Footer from "../components/footer"
import HomeFooter from "../components/homepage_components/HomeFooter"
import downloadIcon from '../assets/downloadIcon.svg'
import Header from "../components/navigation/Header"

export const WhitePaper = () => {
  return <>
    <div className=" container mx-auto font-montserrat">
      <Header/>
      {/* header */}
      <div className=" bg-whitePaperHeroBg h-[26rem] flex flex-col justify-center items-center">
          <h1 class="h-[4rem] text-[2.5rem] font-[800] text-white">Recylox Whitepaper</h1>
          <h4 className="text-[1.25rem] font-[500] text-center mt-10 text-white">Revolutionizing Waste Management and Recycling through Crypto Rewards</h4>
      </div>

      {/* body */}
      <div className="w-[90%] mx-auto mt-16 leading-[2.8rem]">
        <h1 className="text-[1rem] font-[800]">Abstract</h1>
        <p className="text-[1rem] font-[400]">
          This whitepaper outlines the vision, architecture, and technical details of RecCylox, a groundbreaking project 
          that aims to transform waste management and recycling by leveraging blockchain technology and 
          incentivizing users with Reccylox crypto tokens. By gamifying and rewarding sustainable behavior, RecCylox 
          aims to create a positive impact on the environment while promoting a circular economy.
        </p>
        <ol className="pl-2 mt-8 list-decimal list-inside">
            <li>Introduction: RecCylox is a decentralized blockchain-based platform that 
              incentivizes individuals and organizations to participate actively in waste 
              management and recycling initiatives. By issuing Reccylox tokens, users are 
              rewarded for adopting sustainable practices, promoting recycling, and 
              minimizing waste generation. RecCylox aims to harness the power of blockchain 
              and cryptocurrencies to create a global network that fosters environmental 
              responsibility and sustainable living.
            </li>
            <li>Problem Statement: The world faces a critical waste management crisis, with 
              landfill space depleting rapidly and improper disposal causing significant 
              harm to the environment. Furthermore, the lack of motivation and awareness 
              among individuals to actively participate in recycling initiatives hinders 
              progress towards a sustainable future. RecCylox addresses these challenges 
              by introducing a novel incentivization mechanism to reward individuals for 
              their positive contributions to waste management.
            </li>
            <li>RecCylox Architecture: 3.1 Blockchain Infrastructure: RecCylox operates on a 
              secure, scalable, and decentralized blockchain infrastructure. By leveraging 
              the transparency and immutability of blockchain technology, RecCylox ensures 
              the integrity of transactions and the credibility of participants. This 
              infrastructure is built upon a consensus mechanism, such as proof-of-stake 
              or proof-of-authority, to maintain network security and efficiency.
            </li>
          </ol>

          <h2 className="text-[1rem] font-[800] mt-12">Smart Contracts:</h2>
          <p className="text-[1rem] font-[400]">
            RecCylox utilizes smart contracts to automate the token distribution process 
            and manage the reward system. These self-executing contracts ensure that 
            users are fairly compensated for their waste management and recycling activities. 
            Smart contracts also enable the seamless integration of RecCylox with third-party 
            applications, waste management systems, and recycling facilities
          </p>

          <h2 className=" text-center text-[1rem] font-[800] mt-12">RecCylox Features:</h2> 
          <h2 className="text-[1rem] font-[800]">User Wallets:</h2> 
          <p className="text-[1rem] font-[400]">Every user participating in the RecCylox ecosystem is assigned a digital wallet 
            to securely store their Reccylox tokens. This wallet also serves as a transactional 
            interface for users to send, receive, and track their tokens. Additionally, the wallet 
            provides a user-friendly dashboard displaying personal recycling statistics, rewards 
            earned, and environmental impact.
          </p>
          <h1 className="text-[1rem] font-[800] mt-12">Rewards Mechanism:</h1>
          <p className="text-[1rem] font-[400]">RecCylox rewards users with Reccylox tokens based on their verified 
            recycling activities. By collaborating with waste management entities, recycling 
            facilities, and IoT sensors, RecCylox establishes a robust data ecosystem to 
            accurately measure and validate user contributions. Users earn tokens proportional 
            to the volume and quality of recyclables they dispose of, encouraging active participation 
            and responsible waste management.
          </p>

          <h1 className="text-[1rem] font-[800] mt-12">Marketplace Integration:</h1>
          <p className="text-[1rem] font-[400]">RecCylox features a marketplace where users can redeem their Reccylox tokens for 
            sustainable products, services, or discounts offered by partner organizations. 
            This integration with eco-friendly businesses not only provides users with 
            tangible rewards but also supports the growth of a circular economy and encourages 
            sustainable consumption patterns.
          </p>

           <h1 className="text-[1rem] font-[800] mt-12 text-center">Roadmap and Future Developments:</h1>
            <p className="text-[1rem] font-[400]">RecCylox has an ambitious roadmap to expand its network, engage more users, 
              and foster greater environmental impact. Key future developments include integrating 
              RecCylox with IoT devices to enhance data collection accuracy, partnering with 
              municipalities to incentivize city-wide waste management initiatives, and 
              collaborating with educational institutions to raise awareness about sustainable practices.
            </p>

           <h1 className="text-[1rem] font-[800] mt-12">Conclusion: </h1>
           <p className="text-[1rem] font-[400]">
              RecCylox presents a transformative solution to address the global waste management crisis. 
              By leveraging blockchain technology, RecCylox creates a decentralized and transparent 
              ecosystem that incentivizes individuals to actively participate in waste management 
              and recycling activities. Together, we can build a sustainable future and contribute 
              to the preservation of our planet.
            </p>

            <button className="w-[80%] mx-auto mt-20 mb-10 bg-[#006D44] flex flex-row justify-center items-center rounded-[30px]">
              <p className="mr-4 text-white">Download Recylox Whitepaper</p>
              <img src={downloadIcon} alt="download-iocn" />
            </button>
      </div>
  </div>
  <HomeFooter/>
  <Footer/>
</>
}

export default WhitePaper
