import React from "react";
import { Stack, Typography } from "@mui/material";
import Icon from "../assets/icons/gym.png";
import { WindowSharp } from "@mui/icons-material";

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
	console.log(item);
	console.log(bodyPart);
	return (
		<Stack
			type="button"
			alignItems="center"
			justifyContent="center"
			className="bodyPart-card"
			sx={{
				borderTop: item === bodyPart ? "4px solid #ff2625" : "",
				backgroundColor: "#fff",
				borderBottomLeftRadius: "20px",
				width: "270px",
				height: "280px",
				cursor: "poiter",
				gap: "47px",
			}}
			onClick={() => {
				setBodyPart(item);
				window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
			}}>
			<img src={Icon} alt="dumbbel" style={{ width: "40px", height: "40px" }} />
			<Typography
				fontSize={"24px"}
				fontWeight="bold"
				color="#3a1212"
				textTransform={"capitalize"}>
				{item}
			</Typography>
		</Stack>
	);
};

export default BodyPart;
