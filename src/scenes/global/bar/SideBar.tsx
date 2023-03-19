import { Box, Flex, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { AiFillHome, AiOutlineCheckCircle } from "react-icons/ai";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { RiMentalHealthLine } from "react-icons/ri";
import { FaWalking } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ModeContext } from "../../../useMode";

const SideBar: React.FC = () => {
  const { smallDevice } = useContext(ModeContext);
  const sideBarItems = [
    { section: "Dashboard", link: "/", icon: <AiFillHome size={20} /> },
    {
      section: "Daily check-in",
      link: "/checkin",
      icon: <AiOutlineCheckCircle size={20} />,
    },
    {
      section: "Energy",
      link: "/energy",
      icon: <SlEnergy size={20} />,
    },
    {
      section: "Exercise",
      link: "/exercise",
      icon: <FaWalking size={20} />,
    },
    {
      section: "Emotion",
      link: "/emotion",
      icon: <MdOutlineEmojiEmotions size={20} />,
    },

    { section: "Eat", link: "/eat", icon: <RiMentalHealthLine size={20} /> },
  ];
  return (
    <>
      <Flex direction="column" style={{ position: "fixed", top: 0 }} pt="8">
        {!smallDevice && (
          <Text
            bgGradient="linear(to-r, #bd533e, #e7c38f)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
            pb={24}
          >
            Four Ease
          </Text>
        )}

        <Box flex={1} display={"block"} pt="4">
          {sideBarItems.map((item, i) => (
            <Link to={item.link} key={i}>
              <Box display="flex" pb={12}>
                {item.icon}
                <Text display={smallDevice ? "none" : "inline-block"} ml={2}>
                  {item.section}
                </Text>
              </Box>
            </Link>
          ))}
        </Box>
      </Flex>
    </>
  );
};

export default SideBar;
