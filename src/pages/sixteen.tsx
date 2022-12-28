import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Background } from "../components/DayTwo/Background";
import { Lato } from "@next/font/google";
import { CardContainer } from "../components/DayTwo/CardContainer";
import Star from "../components/DaySixteen/Star";
import { useEffect, useRef, useState } from "react";

const Sixteen: NextPage = () => {
	const [hoverIndex, setHoverIndex] = useState(0);
	const starRef = useRef<null | SVGSVGElement>(null);

	const handleOnMouseEnter = (index: number) => {
		setHoverIndex(index);
	};

	const handleOnMouseLeave = () => {
		setHoverIndex(0);
	};

	return (
		<>
			<Head>
				<title>Day Sixteen</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Wrapper>
				{[1, 2, 3, 4, 5].map(number => (
					<Star
						key={number}
						ref={starRef}
						onMouseEnter={() => handleOnMouseEnter(number)}
						onMouseLeave={handleOnMouseLeave}
						fillColor={number <= hoverIndex ? "#FFD200" : "#808080"}
					/>
				))}
			</Wrapper>
		</>
	);
};

export default Sixteen;

const Wrapper = styled.section`
	--yellow: #ffd200;
	--gray: #808080;
	--background: #f9f9f9;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 32px;
	flex: 1;
	width: 100%;
	height: 100%;
	background: var(--background);

	h1 {
		align-self: flex-start;
		margin-top: 300px;
	}

	h1 span {
		display: block;
		font-size: 64px;
		line-height: 1;
	}
`;
