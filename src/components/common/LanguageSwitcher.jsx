import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../../store/languageSlice/languageSlice";
import { AiOutlineGlobal } from "react-icons/ai";

import LoadingModal from "../Loading/LoadingModal";

const LanguageSwitcher = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.language);

  const [openLoading, setOpenLoading] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const handleToggle = () => {
    dispatch(changeLanguage(lang === "ar" ? "en" : "ar"));
    setOpenLoading(true);
  };

  return (
    <div>
      <button onClick={handleToggle} className="mainBtn orange py-2! px-4! text-sm!">
        <AiOutlineGlobal className="text-lg!"/>

        <span className="font-semibold">
          {lang === "en" ? "العربية" : "English"}
        </span>
      </button>

      {openLoading && <LoadingModal />}
    </div>
  );
};

export default LanguageSwitcher;
