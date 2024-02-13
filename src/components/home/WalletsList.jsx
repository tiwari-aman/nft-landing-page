//** React Imports */
import { useContext } from "react";

//** File Imports */
import { DarkModeContext } from "../../context/DarkModeContext";
import wallet1 from "../../assets/images/logos/wallet-1.svg";
import wallet2 from "../../assets/images/logos/wallet-2.svg";
import wallet3 from "../../assets/images/logos/wallet-3.svg";
import wallet4 from "../../assets/images/logos/wallet-4.svg";
import wallet5 from "../../assets/images/logos/wallet-5.svg";
import walletD1 from "../../assets/images/logos/wallet-dark-1.svg";
import walletD2 from "../../assets/images/logos/wallet-dark-2.svg";
import walletD4 from "../../assets/images/logos/wallet-dark-4.svg";
import walletD5 from "../../assets/images/logos/wallet-dark-5.svg";
import SectionWrapper from "../common/SectionWrapper";

const WalletsList = () => {
  //**Hooks */
  const { darkMode } = useContext(DarkModeContext);

  //** Image array for Dark mode */
  const imgDarkArr = [walletD1, walletD2, wallet3, walletD4, walletD5];
  //** Image array for Light mode */
  const imgArr = [wallet1, wallet2, wallet3, wallet4, wallet5];

  return (
    <SectionWrapper>
      <div className="wallets">
        {(darkMode ? imgDarkArr : imgArr).map((item, index) => {
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
