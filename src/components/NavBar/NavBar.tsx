import { Flex, Heading, HStack, Link } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import Headroom from "react-headroom";
import UnitSwitcher from "../UnitSwitcher";
import NavLinks from "./NavLinks";

export type NavBarProps = {};

const Wrapper = styled(Headroom)`
  & {
    .headroom {
      z-index: 10 !important;
    }
  }
`;

export const NavBar: React.FC<NavBarProps> = () => {
  return (
    <Wrapper>
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
