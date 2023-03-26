import React, { useContext } from "react";
import { ModeContext } from "../../../useMode";
import { tokens } from "../../../useMode";
import { SunIcon, MoonIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Spacer,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
} from "@chakra-ui/react";
import DropdownItem from "./DropdownItem";

const TopBar = () => {
  const { mode, toggleMode } = useContext(ModeContext);
  const { colors } = tokens(mode);
  return (
    <>
      <Flex>
        <Spacer />
        <ButtonGroup gap="2">
          <Button size="lg" colorScheme="transparent" onClick={toggleMode}>
            {mode === "dark" ? (
              <SunIcon color={colors.whiteAccent[100]} />
            ) : (
              <MoonIcon color={colors.blackAccent[100]} />
            )}
          </Button>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              variant="transparent"
            >
              <Avatar
                bg={colors.orangeAccent[200]}
                size="sm"
                color={{ color: colors.whiteAccent[100] }}
              />
            </MenuButton>
            <MenuList>
              <DropdownItem
                link="/"
                color={colors.blackAccent[100]}
                content="Home"
              />
              <DropdownItem
                link="/user/login"
                color={colors.blackAccent[100]}
                content="Log In"
              />
              <DropdownItem
                link="/checkin"
                color={colors.blackAccent[100]}
                content="Daily Check-in"
              />
            </MenuList>
          </Menu>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default TopBar;
