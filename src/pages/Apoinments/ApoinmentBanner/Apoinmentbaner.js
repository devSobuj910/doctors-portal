import chair from "../../.././assets/images/chair.png";
import "react-day-picker/dist/style.css";
import { DayPicker } from "react-day-picker";

const Apoinmentbaner = ({ selected, setSelected }) => {
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img alt="" src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(data) => {
              if (data) {
                setSelected(data);
              }
            }}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default Apoinmentbaner;
