import { useContext, useEffect, useState } from "react";
import "./Timer.css";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import duration from "dayjs/plugin/duration";
import { GlobalContext } from "../../context/GlobalState";
dayjs.extend(utc);
dayjs.extend(duration);
const Timer = () => {
  const { updateDiscount } = useContext(GlobalContext);
  const [remTime, setRemTime] = useState("");

  useEffect(() => {
    if (remTime === "0 : 0 : 0 : 0") {
      updateDiscount();
    }
    const tendaysTimestamp = dayjs.unix(1680786301);
    const interval = setInterval(() => {
      const now = dayjs.utc();
      const diff = dayjs.duration(tendaysTimestamp.diff(now));
      if (diff.asSeconds() <= 0) {
        // time is up, stop the timer and set the remaining time to 0
        clearInterval(interval);
        setRemTime("0 : 0 : 0 : 0");
      } else {
        // update the remaining time
        const formattedDuration = diff.format("D : H : m : s");
        setRemTime(formattedDuration);
      }
    }, 1000);
    // clean up the interval when the component unmounts or the countdown ends
    return () => clearInterval(interval);
  }, [remTime]);

  return (
    <>
      <div className="countdown">
        <ul>
          <li>
            <span>{remTime.split(" ")[0]}</span>Days
          </li>
          <li>
            <span>{remTime.split(" ")[2]}</span>Hours
          </li>
          <li>
            <span>{remTime.split(" ")[4]}</span>Minutes
          </li>
          <li>
            <span>{remTime.split(" ")[6]}</span>Seconds
          </li>
        </ul>
      </div>
    </>
  );
};

export default Timer;
