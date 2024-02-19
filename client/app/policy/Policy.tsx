import React from "react";
import { styles } from "../styles/style";

type Props = {};

const Policy = (props: Props) => {
  return (
    <div>
      <div
        className={
          "w-[95%] 800px:w-[92%] m-auto py-2 text-black dark:text-white px-3"
        }
      >
        <h1 className={`${styles.title} !text-start pt-2`}>
          Platform Terms and Condition
        </h1>
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
          <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Welcome to our immersive online learning platform! We are dedicated
            to providing you with a rich and satisfying educational experience.
            Please take a moment to familiarize yourself with our comprehensive
            purchase, and community policies.
          </p>
        </ul>
        <h1 className={`${styles.title} !text-start pt-2`}>
          1. Course Purchase:
        </h1>
        <ul style={{ listStyleType: "circle", marginLeft: "57px" }}>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Individual and Non-Transferable: Each course purchase is meant for
            individual use and is non-transferable to others.
          </li>
          <br />
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Flexible Payment Methods: We offer various payment methods to
            facilitate a seamless and secure transaction process.
          </li>
        </ul>
        <h1 className={`${styles.title} !text-start pt-2`}>
          2. Course Access:
        </h1>
        <ul style={{ listStyleType: "circle", marginLeft: "57px" }}>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Instant Access: Upon successful payment, you will gain immediate
            access to the course. Enjoy the flexibility of learning at your own
            pace, anytime, and from anywhere.
          </li>
          <br />
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Lifetime Access: Your course access is not time-limited, providing
            you with a lifelong learning opportunity.
          </li>
        </ul>
        <h1 className={`${styles.title} !text-start pt-2`}>
          4. Copyright Protection Policy:
        </h1>
        <ul style={{ listStyleType: "circle", marginLeft: "57px" }}>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Respect for Intellectual Property: All course materials are
            protected by copyright. Unauthorized actions such as recording,
            distributing, or using materials without explicit written permission
            from the instructor or our platform are strictly prohibited.
          </li>
        </ul>
        <h1 className={`${styles.title} !text-start pt-2`}>
          5. Community Policy:
        </h1>
        <ul style={{ listStyleType: "circle", marginLeft: "57px" }}>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Positive Learning Atmosphere: We foster a positive and respectful
            community atmosphere. Any form of harassment or violation of our
            policies may result in the suspension of access without prior
            notice.
          </li>
          <br />
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Collaborative Learning: Engage with fellow learners, share insights,
            and contribute to a collaborative and supportive learning
            environment.
          </li>
        </ul>
        <h1 className={`${styles.title} !text-start pt-2`}>
          6. Policy Updates:
        </h1>
        <ul style={{ listStyleType: "circle", marginLeft: "57px" }}>
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Transparency and Communication: We may update our policies to better
            serve you. Any changes will be communicated transparently through
            notifications on our platform.
          </li>
          <br />
          <li className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
            Flexible Payment Methods: We offer various payment methods to
            facilitate a seamless and secure transaction process.
          </li>
        </ul>
        <br />
        <ul style={{ listStyle: "unset", marginLeft: "15px" }}>
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
          We sincerely hope you find joy and enrichment in your learning journey
          with us. For further information or assistance, our dedicated customer
          support team is ready to help.
        </p>
        <p className="py-2 ml-[-15px] text-[16px] font-Poppins leading-8 whitespace-pre-line">
          Thank you for choosing our platform as your educational companion!
        </p>
        </ul>
      </div>
    </div>
  );
};

export default Policy;
