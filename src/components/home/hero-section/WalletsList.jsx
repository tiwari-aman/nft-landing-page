import wallet1 from "../../../assets/images/logos/wallet-1.svg";
import wallet2 from "../../../assets/images/logos/wallet-2.svg";
import wallet3 from "../../../assets/images/logos/wallet-3.svg";
import wallet4 from "../../../assets/images/logos/wallet-4.svg";
import wallet5 from "../../../assets/images/logos/wallet-5.svg";
import SectionWrapper from "../../common/SectionWrapper";

const WalletsList = () => {
  const imgArr = [wallet1, wallet2, wallet3, wallet4, wallet5];

  return (
    <SectionWrapper>
      <div className="wallets">
        {imgArr.map((item, index) => {
          return (
            <img
              className="wallet"
              key={index}
              src={item}
              alt="wallet"
              width={175}
              height={34}
            />
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default WalletsList;
