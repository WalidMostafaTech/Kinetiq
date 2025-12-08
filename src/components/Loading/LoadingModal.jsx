import { createPortal } from "react-dom";
import Loader from "./Loader";

const LoadingModal = () => {
  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white/60 z-[999999]">
      <Loader />
    </div>,
    document.body
  );
};

export default LoadingModal;
