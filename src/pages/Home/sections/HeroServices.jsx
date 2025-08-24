import medicalTeamIcon from "../../../assets/icons/medical-team 3.png";
import shelterIcon from "../../../assets/icons/shelter 2.png";
import medicalAppointmentIcon from "../../../assets/icons/medical-appointment 3.png";

const HeroServices = () => {
  return (
    <section className="bg-myGreen-200 text-white">
      <div className="container p-4 lg:py-8 flex flex-col xl:flex-row-reverse items-start justify-between gap-4 xl:gap-20">
        <div>
          <h3 className="text-3xl lg:text-4xl mb-2 lg:mb-4">
            Integrated physical therapy services
          </h3>
          <p>Experience with a human touch</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 w-full">
          <div className="p-4 rounded-md bg-myYellow-200 text-myStone-200 flex flex-col items-center gap-2">
            <img src={medicalTeamIcon} alt="Services" />
            <p className="text-lg font-medium">Safe home care</p>
          </div>
          <div className="p-4 rounded-md bg-myOrange-200 text-myStone-200 flex flex-col items-center gap-2 xl:-translate-y-20">
            <img src={shelterIcon} alt="Services" />
            <p className="text-lg font-medium text-white">Safe home care</p>
          </div>
          <div className="p-4 rounded-md bg-myYellow-200 text-myStone-200 flex flex-col items-center gap-2">
            <img src={medicalAppointmentIcon} alt="Services" />
            <p className="text-lg font-medium">Safe home care</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroServices;
