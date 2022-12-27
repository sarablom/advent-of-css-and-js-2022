import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Background } from "../components/DayTwo/Background";
import { Lato } from "@next/font/google";
import { CardContainer } from "../components/DayTwo/CardContainer";
import Star from "../components/DaySixteen/Star";
import { useState } from "react";

const Sixteen: NextPage = () => {
	const [fillColor, setFillColor] = useState<"#FFD200" | "#808080">("#808080");
	return (
		<>
			<Head>
				<title>Day Sixteen</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Wrapper>
				<Star
					onMouseEnter={() => setFillColor("#FFD200")}
					fillColor={fillColor}
				/>
				<Star
					onMouseEnter={() => setFillColor("#FFD200")}
					fillColor={fillColor}
				/>
				<Star
					onMouseEnter={() => setFillColor("#FFD200")}
					fillColor={fillColor}
				/>
				<Star
					onMouseEnter={() => setFillColor("#FFD200")}
					fillColor={fillColor}
				/>
				<Star
					onMouseEnter={() => setFillColor("#FFD200")}
					fillColor={fillColor}
				/>
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
