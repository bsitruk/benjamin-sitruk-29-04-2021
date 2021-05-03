import { IconButton, Text } from "@chakra-ui/react";
import * as React from "react";
import { useUnit, useUnitValue } from "../features/unit/hooks";
import { Unit } from "../features/unit/types";

export const UnitSwitcher = () => {
  const { toggleUnit } = useUnit();
  const nextUnit = useUnitValue(Unit.CELCIUS, Unit.FAHRENHEIT);

  return (
    <IconButton
      size="md"
      fontSize="xl"
      fontFamily="fira"
      fontWeight="bold"
      variant="outline"
      color="current"
      icon={<Text>{nextUnit}</Text>}
      onClick={toggleUnit}
      aria-label={`Switch to ${nextUnit} unit`}
    />
  );
};

export default UnitSwitcher;
