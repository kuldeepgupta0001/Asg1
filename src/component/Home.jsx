import React from "react";
import { MdSupervisorAccount } from "react-icons/md";
import { IoMdWallet } from "react-icons/io";
import { BsTag } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import { TbCoinRupee } from "react-icons/tb";
import { Link } from "react-router-dom";

const Home = () => {
  const data = [
    {
      heading: "Invite Your Friends",
      desc: "Share the link tutedude.com with your friends",
      icon: <MdSupervisorAccount />,
    },
    {
      heading: "Friend purchases any course",
      desc: "Using your REFERRAL CODE in the payments page",
      icon: <BsTag />,
    },
    {
      heading: "You get ₹ 200 as referral money",
      desc: "On total purchase the friend makes, into your wallet",
      icon: <TbCoinRupee />,
    },
    {
      heading: "Your Friend gets & 200 Off",
      desc: "On his overall fee on successful purchase using your referral code",
      icon: <CiPercent />,
    },
    {
      heading: "Transfer money from wallet",
      desc: "When the wallet balance reaches #200 or more, you can withdraw it",
      icon: <IoMdWallet />,
    },
  ];
  return (
    <div className="home">
      <p>{`UI/UX > Refer & Earn`}</p>
      <section>
        <div className="item1">
          <div>
            <div>
              <p>Referral Earning</p>
              <h1>₹ 2,500</h1>
            </div>
            <div>
              <p>Total Referrals</p>
              <h1>7</h1>
            </div>
            <div>
              <p>Wallet Ballance</p>
              <h1>₹ 500</h1>
            </div>
          </div>
          <button>Withdraw Ballance</button>
        </div>
        <div className="item2">
          <h1>Your Reffarral Code</h1>
          <p>E D C H 5 4</p>
        </div>
      </section>
      <section>
        <h1>How does it work?</h1>
        <div>
          {data.map((i, idx) => (
            <div className="item">
              {i.icon}
              <div>
                <h1>{i.heading}</h1>
                <p>{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="friend">
        <Link to={"/enroll"}>Friends Who Enrolled</Link>
        <Link>Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default Home;
