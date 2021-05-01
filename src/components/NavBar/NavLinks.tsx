import {
  Box,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link as ReachLink } from "@reach/router";

export const NavLinks = () => {
  return (
    <>
      <HStack spacing={6} d={["none", "flex"]} fontFamily="mont">
        <Link as={ReachLink} to="/">
          Home
        </Link>
        <Link as={ReachLink} to="favorites">
          Favorites
        </Link>
      </HStack>

      <Box d={["block", "none"]}>
        <Menu autoSelect={false}>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<FiMenu />}
            variant="outline"
          />
          <MenuList>
            <Link as={ReachLink} to="/">
              <MenuItem>Home</MenuItem>
            </Link>
            <Link as={ReachLink} to="favorites">
              <MenuItem>Favorites</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default NavLinks;
