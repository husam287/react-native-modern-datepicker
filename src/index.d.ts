import { CSSProperties, JSX } from "react";

export interface ModernDatepickerProps {
  onSelectedChange?: (dateString: string) => void;
  onMonthYearChange?: (dateString: string) => void;
  onTimeChange?: (dateString: string) => void;
  onDateChange?: (dateString: string) => void;
  minimumDate?: string;
  maximumDate?: string;
  selectorStartingYear?: number;
  selectorEndingYear?: number;
  disableDateChange?: boolean;
  isGregorian?: boolean;
  mode?: "datepicker" | "calendar" | "monthYear" | "time";
  minuteInterval?: 1 | 2 | 3 | 4 | 5 | 6 | 10 | 12 | 15 | 20 | 30 | 60;
  style?: CSSProperties;
  current?: string;
  selected?: string;
  locale?: string;
  is12Times?: boolean;
  /**
   * list of disabled dates YYYY/MM/DD
   */
  disabledDates?: string[];
  /**
   * list of disabled week day numbers
   */
  disabledWeekDays?: number[];
  options?: {
    backgroundColor?: string;
    textHeaderColor?: string;
    textDefaultColor?: string;
    selectedTextColor?: string;
    mainColor?: string;
    textSecondaryColor?: string;
    borderColor?: string;
    defaultFont?: string;
    headerFont?: string;
    textFontSize?: number;
    textHeaderFontSize?: number;
    headerAnimationDistance?: number;
    daysAnimationDistance?: number;
  };
  config?: {
    dayNames?: string[],
    dayNamesShort?: string[],
    monthNames?: string[],
    selectedFormat?: string,
    dateFormat?: string,
    monthYearFormat?: string,
    timeFormat?: string,
    hour?: string,
    minute?: string,
    timeSelect?: string,
    timeClose?: string,
    is12Times: boolean,
    am?: string,
    pm?: string,
    a?: string,
  }
}

export default function (props: ModernDatepickerProps): JSX.Element;
export function getToday(): string;
export function getFormatedDate(date?: Date, format?: string): string;