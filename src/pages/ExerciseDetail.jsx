import React from "react";
import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
	const { id } = useParams();
	console.log(id);
	return <div>ExerciseDetail</div>;
};

export default ExerciseDetail;
