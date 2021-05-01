import { useRef, useState } from "react";

export function useDebounce<T>(
  value: T,
  ms: number
): [T, (newValue: T) => void] {
  const [_value, _setValue] = useState(value);
  const handlerRef = useRef<NodeJS.Timeout>();

  const updateValue = (newValue: T) => {
    if (handlerRef.current) clearTimeout(handlerRef.current);
    handlerRef.current = setTimeout(() => _setValue(newValue), ms);
  };

  return [_value, updateValue];
}
