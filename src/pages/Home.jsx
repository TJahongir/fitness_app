import React from "react";
import { useState } from "react";
import { Box } from "@mui/system";
import Exercises from "../components/Exercises";
import SearchExercises from "../components/SearchExercises";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
	const [bodyPart, setBodyPart] = useState("all");
	const [exercises, setExercises] = useState([]);
	// Think about remaking this with Context API
	console.log(bodyPart);
	return (
		<Box>
			<HeroBanner />
			<SearchExercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
			<Exercises
				setExercises={setExercises}
				bodyPart={bodyPart}
				setBodyPart={setBodyPart}
			/>
		</Box>
	);
};

export default Home;
