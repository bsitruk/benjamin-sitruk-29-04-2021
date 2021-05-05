import { chakra, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Headroom from "react-headroom";
import UnitSwitcher from "../UnitSwitcher";
import NavLinks from "./NavLinks";

export type NavBarProps = {};

const Wrapper = chakra(Headroom);

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Wrapper zIndex={10} position="relative">
      <Flex
        py={4}
        px={8}
        boxShadow="md"
        borderTopWidth={5}
        borderTopColor="var(--app-title-color)"
        layerStyle="base"
      >
        <Flex flex={1} justifyContent="space-between" alignItems="center">
          <Link>
            <Heading fontFamily="mont" letterSpacing={1} fontWeight="thin">
              BrightSky
            </Heading>
          </Link>
          <HStack spacing={[2, 8]}>
            <NavLinks />
            <HStack spacing={2}>
              <UnitSwitcher />
              <ColorModeSwitcher />
            </HStack>
          </HStack>
        </Flex>
      </Flex>
    </Wrapper>
  );
};

export default NavBar;
