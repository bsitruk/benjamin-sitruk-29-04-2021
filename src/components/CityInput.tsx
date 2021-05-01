import { Box, Input, List, ListItem, Spinner } from "@chakra-ui/react";
import React from "react";
import { useQuery } from "react-query";
import { cityAutoComplete } from "../api/accuWeather/accuWeather";
import { useCombobox } from "downshift";
import { useDebounce } from "../utils/useDebounce";
import { useAppDispatch } from "../app/hooks";
import { setCity } from "../features/selectedCitySlice";

export const CityInput = () => {
  const [value, setValue] = useDebounce("", 500);
  console.log(
    "🚀 ~ file: CityInput.tsx ~ line 12 ~ CityInput ~ value",
    !!value
  );
  const dispatch = useAppDispatch();

  const { data = [] } = useQuery(
    ["autocomplete", { text: value }],
    cityAutoComplete,
    {
      keepPreviousData: true,
      enabled: !!value,
      staleTime: Infinity,
      cacheTime: 1000 * 60,
    }
  );

  const cities = data.slice(0, 5);

  const {
    getComboboxProps,
    getInputProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
    isOpen,
  } = useCombobox({
    items: cities,
    itemToString: (item) => (item ? item.name : ""),
    onInputValueChange: ({ inputValue }) => {
      setValue(inputValue || "");
    },
    onSelectedItemChange: ({ selectedItem }) => {
      console.log(
        "🚀 ~ file: CityInput.tsx ~ line 35 ~ selectedItem",
        selectedItem
      );
      if (selectedItem) dispatch(setCity(selectedItem));
    },
  });

  let itemRenderer;
  if (isOpen) {
    if (cities.length === 0) {
      itemRenderer = (
        <Box p={4} textAlign="center">
          <Spinner />
        </Box>
      );
    } else {
      itemRenderer = cities.map((item, index) => (
        <ListItem
          key={item.key}
          px={2}
          py={1}
          bg={highlightedIndex === index ? "gray.100" : "inherit"}
          {...getItemProps({ item, index })}
        >
          {item.name}
        </ListItem>
      ));
    }
  }

  return (
    <Box size="md" w={[300, 400, 560]} pos="relative" {...getComboboxProps()}>
      <Input
        placeholder="Search for a city"
        background="white"
        mb={isOpen && 2}
        {...getInputProps()}
      />

      <List
        pos="absolute"
        left={0}
        right={0}
        zIndex={1}
        background="white"
        borderRadius="4px"
        border={isOpen && "1px solid rgba(0,0,0,0.1)"}
        boxShadow="6px 5px 8px rgba(0,50,30,0.02)"
        {...getMenuProps()}
      >
        {itemRenderer}
      </List>
    </Box>
  );
};

export default CityInput;
