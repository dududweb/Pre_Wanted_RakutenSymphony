import React, { useEffect, useState } from "react";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
} from "date-fns";

interface useDateProps {
  firstDate: number | string;
  secondDate: number | string;
}

const useDate = (firstDate, secondDate): useDateProps => {
  const [date, setDate] = useState<number | string>();
  const createdDate = new Date(firstDate * 1000);
  const expiresDate = new Date(secondDate * 1000);
  console.log("test", createdDate);

  useEffect(() => {
    getExpiredTime();
  }, [date]);

  export const getCreatedDate = {
    year: format(createdDate, "yyyy"),
    month: format(createdDate, "MM"),
    day: format(createdDate, "dd"),
    hours: format(createdDate, "HH"),
    minutes: format(createdDate, "HH"),
    sec: format(createdDate, "mm"),
  };

  const getExpiredTime = () => {
    const expiredDate = differenceInDays(expiresDate, createdDate);
    const expiredHours = differenceInHours(expiresDate, createdDate);
    const expiredMinutes = differenceInMinutes(expiresDate, createdDate);
    if (expiredDate >= 2) {
      setDate(`${expiredDate}일`);
    } else {
      setDate(`${expiredHours}시간${expiredMinutes}분`);
    }
  };

  return { date };
};

export default useDate;
