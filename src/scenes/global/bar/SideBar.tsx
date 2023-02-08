import {
  Box,Flex, Text,
} from "@chakra-ui/react";
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
  return (
    <>
      <Flex  direction="column">
        {smallDevice ? (
          ""
        ) : (
          <Text
            bgGradient="linear(to-r, #bd533e, #e7c38f)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="bold"
            pb={24}
          >
            WELLEASE
          </Text>
        )}

        <Box flex={1} display={"block"} pt="4">
          <Link to="/">
            <Box display="flex" pb={12}>
              <AiFillHome size={20} />
              <Text display={smallDevice ? "none" : "inline-block"} ml={2}>
                Dashboard
              </Text>
            </Box>
          </Link>
          <Link to="/checkin">
            <Box display="flex" pb={12}>
              <AiOutlineCheckCircle size={20} />
              <Text display={smallDevice ? "none" : "inline-block"} ml={2}>
                Daily check-in
              </Text>
            </Box>
          </Link>
          <Link to="/energy">
            <Box display="flex" pb={12}>
              <SlEnergy size={20} />
              <Text display={smallDevice ? "none" : "inline-block"} ml={2}>
                Energy
              </Text>
            </Box>
          </Link>

          <Link to="/emotion">
            <Box display="flex" pb={12}>
              <MdOutlineEmojiEmotions size={20} />
              <Text display={smallDevice ? "none" : "inline-block"} ml={2}>
                Emotion
              </Text>
            </Box>
          </Link>
          <Link to="/productivity">
            <Box display="flex" pb={12}>
              <FaWalking size={20} />
              <Text display={smallDevice ? "none" : "inline-block"} ml={2}>
                Productivity
              </Text>
            </Box>
          </Link>
          <Link to="/wellbeing">
            <Box display="flex" pb={12}>
              <RiMentalHealthLine size={20} />
              <Text display={smallDevice ? "none" : "inline-block"} ml={2}>
                Well-being
              </Text>
            </Box>
          </Link>
        </Box>
      </Flex>
    </>
  );
};

export default SideBar;