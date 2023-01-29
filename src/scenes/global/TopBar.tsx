import React,{useContext} from "react";
import { ModeContext } from "../../useMode";
import { tokens } from "../../useMode";
import { SunIcon, MoonIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Flex, Spacer, ButtonGroup,Menu, MenuButton,MenuList,MenuItem, Text} from "@chakra-ui/react";

const Topbar = () => {
  const { mode, toggleMode } = useContext(ModeContext);
  const colors = tokens(mode);
  //"linear(to-r, #bd533e, #e7c38f)"
  return (
    <>
      <Flex>
        <Text
          bgGradient="linear(to-r, #bd533e, #e7c38f)"
          bgClip="text"
          fontSize="xl"
          fontWeight="bold"
        >
          WELLEASE
        </Text>
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
              SIGN IN
            </MenuButton>
            <MenuList>
              <MenuItem color={colors.blackAccent[100]}>Create a Copy</MenuItem>
              <MenuItem color={colors.blackAccent[100]}>Mark as Draft</MenuItem>
            </MenuList>
          </Menu>
        </ButtonGroup>
      </Flex>
    </>
  );
};

export default Topbar;