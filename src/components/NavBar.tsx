import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import SearchInput from "./SearchInput";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" padding={2}></Image>
      <SearchInput></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
