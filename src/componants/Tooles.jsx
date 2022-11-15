import { Box, Heading, Image, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import "./style/skill.css";
import { arrow } from "./style/theme";


const git=require("../componants/Assets/git.png");
const vscode=require("../componants/Assets/vscode.png");
const postman=require("../componants/Assets/postman.png");
const Tooles = () => {
  return (
    <Box id="skill" pt={10} pb="10%">
      <Box m="auto" w={["50%", "25%", "30%", "15%"]}>
        <Heading bg="black" fontWeight="300" color="white" p={1}>
          Tools
        </Heading>
        <Box style={arrow} bg="black"></Box>
      </Box>
      <SimpleGrid
        id="skillDiv"
        columns={[2, 3, 3, 3]}
        align="center"
        justify="space-evenly"
        spacingY={12}
        spacingX={12}
        mt="5%"
      >
        
        <Box>
          <Image src={git} alt="git" />
          <Text>GIT</Text>
        </Box>
       
        <Box>
          <Image src={vscode} alt="api3" />
          <Text>Vscode</Text>
        </Box>
        <Box>
          <Image src={postman} alt="api3" />
          <Text>Postman</Text>
        </Box>
        

      </SimpleGrid>
    </Box>
  );
};

export default Tooles
