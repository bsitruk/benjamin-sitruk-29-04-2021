import React, { useEffect } from "react";
import useSound from "use-sound";
import { Conditions } from "../../types/weather";
import natureSfx from "../../assets/sounds/nature.mp3";

export type SoundPlayerProps = { conditions: Conditions; cityKey: string };
export const SoundPlayer: React.FC<SoundPlayerProps> = ({
  conditions,
  cityKey,
}) => {
  const [play, { stop }] = useSound(natureSfx, {
    sprite: {
      [Conditions.CLEAR]: [0, 5033.764172335601],
      [Conditions.NIGHT]: [7000, 5049.68253968254],
      [Conditions.RAIN]: [14000, 5072.789115646259],
      [Conditions.CLOUDS]: [21000, 5068.0498866213175],
      [Conditions.SNOW]: [21000, 5068.0498866213175],
    },
  });

  useEffect(() => {
    play({ id: conditions });
    return () => stop();
  }, [conditions, play, stop, cityKey]);

  return null;
};

export default SoundPlayer;
