import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/school.css";

const School = () => {
	return (
		<div className="school">
			<Card
				icon={faGraduationCap}
				title="School"
				body={
					<div className="school-body">
						<div className="school">
							<img
								src="./unr.png"
								alt="University of Nevada, Reno"
								className="work-image"
							/>
							<div className="school-title">University of Nevada, Reno</div>
							<div className="school-subtitle">
								B.S. Computer Science and Engineering
                                <br></br>
                                Mathematics Minor
							</div>
							<div className="school-graduation">Graduated May 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default School;
