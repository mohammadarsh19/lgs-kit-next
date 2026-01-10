"use client";
import { useEffect, useState } from "react";

export default function CountdownTimer() {
  const TOTAL_SECONDS = 28 * 60; // 24 minutes

  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [secondsLeft]);

  const hrs = "00"; // BLANK HOURS
  const min = Math.floor(secondsLeft / 60);
  const sec = secondsLeft % 60;

  return (
    <div className="flex md:gap-3 gap-0.5 text-center">
      {/* HOURS (BLANK) */}
      <div className="flex">
        <div className="pr-1 text-[22px] md:text-3xl font-medium text-gray-100 flex items-end">
          {hrs}
        </div>
        <div className="text-xs md:text-[15px] flex items-end text-gray-100 pb-1">Hrs</div>
      </div>

      <span className="text-2xl font-medium">:</span>

      {/* MINUTES */}
      <div className="flex">
        <div className="px-1 text-[22px] md:text-3xl font-medium text-gray-100 flex items-end">
          {min.toString().padStart(2, "0")}
        </div>
        <div className="text-xs md:text-[15px] mt-auto text-gray-100 flex items-end pb-1">Min</div>
      </div>

      <span className="text-2xl font-medium">:</span>

      {/* SECONDS */}
      <div className="flex">
        <div className="px-1 text-[22px] md:text-3xl font-medium text-gray-100 flex items-end">
          {sec.toString().padStart(2, "0")}
        </div>
        <div className="text-xs md:text-[15px] mt-auto text-gray-100 flex items-end pb-1">Sec</div>
      </div>
    </div>
  );
}