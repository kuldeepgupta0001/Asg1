import React from "react";
import { Link } from "react-router-dom";

const enroll = () => {
  return (
    <div className="enroll">
      <p>{`UI/UX > Refer & Earn > Friends Referred`}</p>

      <div className="content1">
        <div className="item1">
          <h3>Your Reffarral Code</h3>
          <p>E D C H 5 4</p>
        </div>
        <div className="item2">
          <h3>Wallet Ballance</h3>
          <p>₹ 500</p>
        </div>
      </div>
      <div className="content2">
        <h1 className="rolled">{`Friends Who Enrolled(3)`}</h1>
        <div>
          <Card
            name="Dhiraj Saxsena"
            date="14 Sep, 2022"
            totalCourse={6}
            amount={185}
            courses={[
              "UI/Ux",
              "PhotoShop",
              "illustrator",
              "Python",
              "MERN",
              "Java",
            ]}
          />
          <Card
            name="Subhash Mishra"
            date="16 sep, 2022"
            totalCourse={23}
            amount={485}
            courses={[
              "UI/Ux",
              "PhotoShop",
              "illustratur",
              "Python",
              "MERN",
              "Java",
              "C++",
            ]}
          />
          <Card
            name="Prafull Kumar"
            date="16 Sep, 2022"
            totalCourse={23}
            amount={485}
            courses={[
              "UI/Ux",
              "PhotoShop",
              "illustratur",
              "Python",
              "MERN",
              "Java",
              "C++",
            ]}
          />
        </div>
      </div>
      <Link>Terms & Conditions</Link>
    </div>
  );
};

const Card = ({ name, date, totalCourse, amount, courses }) => (
  <>
    <div className="cardItem">
      <div className="info">
        <h1 className="name">{name}</h1>
        <p className="date">{date}</p>
      </div>
      <h3>Courses Enrolled ({totalCourse})</h3>
      <div className="courses">
        {courses.map((i, index) => (
          <div>{i}</div>
        ))}
      </div>
      <h3>Referal Amount ₹ {amount}</h3>
    </div>
  </>
);

export default enroll;
