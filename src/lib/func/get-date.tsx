export interface FormattedDate {
  date: string;
}

export function getNextFiveDays(): FormattedDate[] {
  const today: Date = new Date();
  const formattedDates: FormattedDate[] = [];

  const formatOptions: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  const formattedToday: string = new Intl.DateTimeFormat(
    "en-US",
    formatOptions
  ).format(today);
  formattedDates.push({ date: formattedToday });

  for (let i: number = 1; i < 5; i += 1) {
    const nextDay: Date = new Date(today);
    nextDay.setDate(today.getDate() + i);
    const formattedNextDay: string = new Intl.DateTimeFormat(
      "en-US",
      formatOptions
    ).format(nextDay);
    formattedDates.push({ date: formattedNextDay });
  }

  return formattedDates;
}
