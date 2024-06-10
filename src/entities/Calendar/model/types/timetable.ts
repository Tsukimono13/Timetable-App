export type ClassEvent = {
  title: string;
  time: string;
  futureClass?: boolean;
  canceled?: boolean;
  needToPay?: boolean;
};

export type TimetableEntry = {
  id: number;
  day: string;
  date: number;
  classes?: ClassEvent[];
};
