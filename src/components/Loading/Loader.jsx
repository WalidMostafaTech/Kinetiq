import { useTranslation } from "react-i18next";
import logoImg from "../../assets/images/logo.png";

const Loader = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center">
      <img src={logoImg} alt="Logo" className="w-26 lg:w-36 animate-bounce" />

      <h2 className="lg:text-xl font-semibold text-light-red mt-4">
        {t("loading")}
      </h2>
    </div>
  );
};

export default Loader;
