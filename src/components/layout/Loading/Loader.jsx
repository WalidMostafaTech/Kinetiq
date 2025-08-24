import { GiMoebiusTriangle } from "react-icons/gi";

const Loader = () => {
  return (
    <div className="flex flex-col items-center">
      <GiMoebiusTriangle className="text-6xl lg:text-8xl text-light-red animate-spin" />

      <h2 className="text-lg lg:text-2xl font-semibold text-light-red mt-4">
        loading
      </h2>
    </div>
  );
};

export default Loader;
