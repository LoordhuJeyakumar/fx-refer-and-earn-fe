import { ChevronRight, School } from "@mui/icons-material";
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import graIcon from "../assets/icons/gra-icon.svg";

function ReferelBenifits() {
  const [beniftSwitchOn, setBeniftSwitchOn] = useState(true);
  const menuItems = [
    "Product Management",
    "Strategy & Leadership",
    "Business Management",
    "Fintech",
    "Senior Management",
    "Data Science",
    "Digital Transformation",
    "Business Analytics",
  ];
  const programs = [
    {
      name: "Professional Certificate Program in Product Management",
      referrerBonus: "₹ 7,000",
      refereeBonus: "₹ 9,000",
    },
    {
      name: "PG Certificate Program in Strategic Product Management",
      referrerBonus: "₹ 9,000",
      refereeBonus: "₹ 11,000",
    },
    {
      name: "Executive Program in Data Driven Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management and Digital Transformation",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Advanced Certification in Product Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
    {
      name: "Executive Program in Product Management and Project Management",
      referrerBonus: "₹ 10,000",
      refereeBonus: "₹ 10,000",
    },
  ];
  const [activeItem, setActiveItem] = useState("ALL PROGRAMS");
  console.log(activeItem);
  return (
    <section className="referel-benifits mt-10 ">
      <h1 className="text-2xl font-bold text-center heading">
        What Are The <span className="text[#1A73E8]">Referral Benefits?</span>
      </h1>
      <div className="flex justify-end mx-48 py-4">
        <div className="enrolled-switch-box">
          <label htmlFor="enrolled" className="flex">
            Enrolled &nbsp;
            <input
              type="checkbox"
              id="enrolled"
              className="enrolled-switch"
              checked={beniftSwitchOn}
              onChange={() => setBeniftSwitchOn(!beniftSwitchOn)}
            />
            <label htmlFor="enrolled" className="enrolled-switch-lable"></label>
          </label>
        </div>
      </div>
      <div className="flex  justify-center xl:px-24  mx-24">
        <div className="rounded-lg">
          <List aria-label="main mailbox folders" className="program-nav ">
            <ListItem
              button
              onClick={() => setActiveItem("ALL PROGRAMS")}
              sx={{
                backgroundColor:
                  activeItem === "ALL PROGRAMS" ? "#3B82F6" : "transparent",
                color: activeItem === "ALL PROGRAMS" ? "#FFFFFF" : "#000000",
                "&:hover": {
                  backgroundColor:
                    activeItem === "ALL PROGRAMS" ? "#1A73E8" : "#E5E7EB",
                },
              }}
            >
              <ListItemText primary="ALL PROGRAMS" />
              <ListItemIcon>
                <ChevronRight />
              </ListItemIcon>
            </ListItem>
            <Divider variant="middle" component="li" />
            {menuItems.map((text, index) => (
              <div key={index} className="p-0 m-0">
                <ListItem
                  button
                  onClick={() => setActiveItem(text)}
                  sx={{
                    backgroundColor:
                      activeItem === text ? "#3B82F6" : "transparent",
                    color: activeItem === text ? "#FFFFFF" : "#000000",
                    "&:hover": {
                      backgroundColor:
                        activeItem === text ? "#2563EB" : "#E5E7EB",
                    },
                  }}
                >
                  <ListItemText primary={text} />
                  <ListItemIcon>
                    <ChevronRight />
                  </ListItemIcon>
                </ListItem>
                <Divider variant="middle" component="li" />
              </div>
            ))}
          </List>
        </div>
        <div className="flex-1 ps-4">
          <TableContainer
            className=" table-box"
            sx={{ maxHeight: "572px", height: "100%" }}
          >
            <Table>
              <TableHead>
                <TableRow className="bg-[#1A73E859]  font-bold tableHeading">
                  <TableCell
                    sx={{
                      fontWeight: "bold",
                      borderRight: "2px solid #00000038",
                    }}
                    width={430}
                  >
                    Programs
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      fontWeight: "bold",
                      borderRight: "2px solid #00000038",
                    }}
                  >
                    Referrer Bonus
                  </TableCell>
                  <TableCell align="center">Referee Bonus</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {programs.map((program, index) => (
                  <TableRow hover key={index}>
                    <TableCell
                      component="th"
                      scope="row"
                      className="flex items-center space-x-2"
                      sx={{
                        border: "none",
                        borderRight: "2px solid #00000038",
                      }}
                    >
                      <span className="tableContent">
                        <img src={graIcon} alt="icon" className="" />
                        {program.name}
                      </span>
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: "none",
                        borderRight: "2px solid #00000038",
                      }}
                    >
                      {program.referrerBonus}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        border: "none",
                      }}
                    >
                      {program.refereeBonus}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </section>
  );
}

export default ReferelBenifits;
