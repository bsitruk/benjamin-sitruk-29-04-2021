import * as React from "react";
import { Button } from "@chakra-ui/react";
import { useUnit, useUnitValue } from "../features/unit/hooks";
import { Unit } from "../features/unit/types";

export const UnitSwitcher = () => {
  const { toggleUnit } = useUnit();
  const nextUnit = useUnitValue(Unit.CELCIUS, Unit.FAHRENHEIT);

  return (
    <Button
      size="md"
      fontSize="xl"
      fontFamily="fira"
      fontWeight="bold"
      variant="outline"
      color="current"
      onClick={toggleUnit}
      aria-label={`Switch to ${nextUnit} unit`}
    >
      {nextUnit}
    </Button>
  );
};

export default UnitSwitcher;
