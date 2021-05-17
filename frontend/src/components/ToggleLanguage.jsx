import {React,useState }from "react";
import { useTranslation } from "react-i18next";

export default function ToggleLanguage() {

const [check, setCheck] = useState(false); // toggle
const [t, i18n] = useTranslation('common'); // language


  // Methods
  const handleToggle = () => {

    setCheck(value => !value);

    if(check === false){ // english selected
        i18n.changeLanguage("sv") 

    }else { // svenska selected
        i18n.changeLanguage("en") 
 
    }

  }



 
  return (
    <label className="toggle-label">

      {/* <p>{t("main.title")}</p> */}
      <p className="label-text-mobile">ENG/SWE</p>
      
      <p className="label-text">ENG</p>
      <div className="toggle">
        <input
          className="toggle-state"
          type="checkbox"
          checked={check}
          onChange={handleToggle}
        />
        <div className="indicator"></div>
      </div>
      <p className="label-text">SWE</p>
      


    </label>
  );
}
