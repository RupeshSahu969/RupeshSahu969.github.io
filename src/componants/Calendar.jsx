import { Box, Heading, Image, Stack, Text, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import "./style/calendar.css";
import { arrow } from "./style/theme";
import GitHubCalendar from "react-github-calendar";
const Calendar = () => {
  return (
    <div className="gittop1">
      <Box m="auto" w={["100%", "50%", "40%", "30%"]} textAlign="center">
        <Heading bg="black" color="white" w="100%" py={2}>
          Github Calendar
        </Heading>
        <Box style={arrow}></Box>
      </Box>
      <div className="github1">
        <GitHubCalendar
          style={{ margin: "auto" }}
          username="rupeshsahu969"
          blockSize={20}
          // fontSize={20}
        ></GitHubCalendar>
      </div>
      <div className="calendar">
        <div>
          <div>
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=rupeshsahu969&show_icons=true&locale=en&layout=compact"
              alt="rupeshsahu969"
            />
          </div>
          <div>
            <img
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=rupeshsahu969&show_icons=true&locale=en"
              alt="rupeshsahu969"
            />
          </div>
          <div>
            <img
              align="center"
              src="https://github-readme-streak-stats.herokuapp.com/?user=rupeshsahu969&"
              alt="rupeshsahu969"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
