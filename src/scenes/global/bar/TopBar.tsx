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
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

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
              <Link to="/">
                <MenuItem color={colors.blackAccent[100]}>Home</MenuItem>
              </Link>
              {/* To Do - change to logout if already logged in*/}
              <Link to="/user/login">
                <MenuItem color={colors.blackAccent[100]}>Log In</MenuItem>
              </Link>

              <MenuItem color={colors.blackAccent[100]}>Register</MenuItem>
              <MenuItem color={colors.blackAccent[100]}>Mark as Draft</MenuItem>
            </MenuList>
          </Menu>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default TopBar;
