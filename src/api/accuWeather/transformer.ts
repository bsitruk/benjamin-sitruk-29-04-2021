import { Conditions, Days } from "../../types/weather";

export const toDays = [
  Days.SUNDAY,
  Days.MONDAY,
  Days.TUESDAY,
  Days.WEDNESDAY,
  Days.THURSDAY,
  Days.FRIDAY,
  Days.SATURDAY,
];

export const toConditions = (conditionId: number): Conditions => {
  if (conditionId <= 5 || conditionId === 30) return Conditions.CLEAR;
  if (conditionId <= 11 || conditionId === 32) return Conditions.CLOUDS;
  if (conditionId <= 18) return Conditions.RAIN;
  if (conditionId <= 29 || conditionId === 31) return Conditions.SNOW;
  return Conditions.NIGHT;
};
