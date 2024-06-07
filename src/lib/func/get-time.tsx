"use client";

export function convertUnixTimeToTime(unixTime: number): string {
  const date = new Date(unixTime * 1000);

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
}

export function getCurrentDateTime(unixTime?: number): {
  time: string;
  day: number;
  suf: string;
  weekday: string;
  fullWeekday: string;
  month: string;
} {
  let now;

  if (unixTime) {
    now = new Date(unixTime * 1000);
  } else {
    now = new Date();
  }

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const time = `${hours}:${minutes}:${seconds}`;

  const day = now.toLocaleDateString("en-GB");

  const weekday = now.getDay();
  const month = now.getMonth();
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayFullNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurthday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return {
    time,
    day: parseInt(day),
    suf: getOrdinalSuffix(day),
    weekday: dayNames[weekday],
    fullWeekday: dayFullNames[weekday],
    month: monthNames[month],
  };
}

export function getOrdinalSuffix(day: string): string {
  const num = parseInt(day);
  const suffixes = ["th", "st", "nd", "rd"];
  const v = num % 100;
  return suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0];
}

export function updateTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
