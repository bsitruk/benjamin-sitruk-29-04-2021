import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Unit } from "./types";
import { selectUnit, setUnit } from "./unitSlice";

export function useUnit() {
  const unit = useAppSelector(selectUnit);
  const dispatch = useAppDispatch();

  const toggleUnit = useCallback(() => {
    const nextUnit = unit === Unit.CELCIUS ? Unit.FAHRENHEIT : Unit.CELCIUS;
    dispatch(setUnit(nextUnit));
  }, [unit, dispatch]);

  return { unit, toggleUnit };
}

export function useUnitValue<T = unknown>(fValue: T, cValue: T) {
  const { unit } = useUnit();
  return unit === Unit.CELCIUS ? cValue : fValue;
}
