import React from 'react'
import Image from "../../Utils/Image/Image";
import ClockImage from '../../../assets/images/Profile/time.svg'
import './Clock.scss'

export default function Clock(props) {

  function returnTime(time) {
    let hour = Math.floor(time / 3600);
    time-= 3600 * hour;
    let minute = Math.floor(time / 60);
    time-= minute * 60;
    return "" + hour + ":" + minute + ":" + time;
  }

  return(
    <div>
      <div className="clock-image">
      <Image src={ClockImage} />
      </div>
      {returnTime(parseInt(props.time))}
    </div>
  );
}
