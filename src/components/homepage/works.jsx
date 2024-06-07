import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./snc.svg"
								alt="SNC"
								className="work-image"
							/>
							<div className="work-title">Sierra Nevada Corporation</div>
							<div className="work-subtitle">
								Software Engineer III
							</div>
							<div className="work-duration">Jan 2024 - Present</div>
						</div>

						<div className="work">
							<img
								src="./snc.svg"
								alt="SNC"
								className="work-image"
							/>
							<div className="work-title">Sierra Nevada Corporation</div>
							<div className="work-subtitle">
								Software Engineer II
							</div>
							<div className="work-duration">Oct 2020 - Jan 2024</div>
						</div>

						<div className="work">
							<img
								src="./snc.svg"
								alt="SNC"
								className="work-image"
							/>
							<div className="work-title">Sierra Nevada Corporation</div>
							<div className="work-subtitle">
								Software Engineer I
							</div>
							<div className="work-duration">June 2019 - Oct 2020</div>
						</div>

						<div className="work">
							<img
								src="./snc.svg"
								alt="SNC"
								className="work-image"
							/>
							<div className="work-title">Sierra Nevada Corporation</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">May 2018 - June 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
