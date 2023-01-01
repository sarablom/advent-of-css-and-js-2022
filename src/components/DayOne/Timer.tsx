import styled from "styled-components";
import { Bebas_Neue, Montserrat } from "@next/font/google";
import { useEffect, useState } from "react";

const bebasRegular = Bebas_Neue({
	weight: "400",
});

const montserratBold = Montserrat({
	weight: "700",
});

export const Timer = () => {
	const [isStarted, setIsStarted] = useState(false);
	const [time, setTime] = useState({ minutes: "15", seconds: "00" });

	const getTime = () => {};

	useEffect(() => {
		if (!isStarted) return;

		const interval = setInterval(() => getTime(), 1000);

		return () => clearInterval(interval);
	}, [isStarted]);

	return (
		<TimerWrapper>
			<p className={`${bebasRegular.className} time`}>
				{time.minutes}:{time.seconds}
			</p>
			<button
				onClick={() => setIsStarted(!isStarted)}
				className={`${montserratBold.className} start-stop-btn`}
			>
				{isStarted ? "STOP" : "START"}
			</button>
		</TimerWrapper>
	);
};

const TimerWrapper = styled.div`
	--bg-color: #3a393f;
	--text-color: #fff;
	--border-color: #000;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 500px;
	width: 500px;
	border: 4px solid var(--border-color);
	border-radius: 50%;
	background: var(--bg-color);
	color: var(--text-color);

	.time {
		font-size: 196px;
	}

	.start-stop-btn {
		border: none;
		cursor: pointer;
		letter-spacing: 2;
		background: var(--bg-color);
		color: inherit;
	}
`;
