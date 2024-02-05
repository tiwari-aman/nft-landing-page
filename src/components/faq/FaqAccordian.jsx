import QuestionsDropdown from "./QuestionsDropdown";

const FaqAccordian = () => {
  const faqArr = [
    {
      ques: "What is Nfthub's NFT Collection?",
      ans: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      ques: "How we can buy and invest NFT??",
      ans: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      ques: "Why we should choose Nerko's NFT?",
      ans: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      ques: "Where we can buy and sell NFts?",
      ans: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      ques: "How secure is this token?",
      ans: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
    {
      ques: "What is your contract address?",
      ans: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident. Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.",
    },
  ];

  return (
    <div className="faq-accordian">
      {faqArr?.map((item, index) => {
        return <QuestionsDropdown key={index} data={item} index={index} />;
      })}
    </div>
  );
};

export default FaqAccordian;
