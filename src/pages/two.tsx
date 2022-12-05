import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { Background } from "../components/DayTwo/Background";
import { Lato } from "@next/font/google";
import { CardContainer } from "../components/DayTwo/CardContainer";

const latoRegular = Lato({
	weight: "300",
});

const latoBold = Lato({
	weight: "900",
});

const Two: NextPage = () => {
	return (
		<>
			<Head>
				<title>Day Two</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Wrapper className={latoRegular.className}>
				<Background />
				<h1>
					<span className={latoBold.className}>eCommerce</span>
					<span>User Interface</span>
				</h1>
				<CardContainer />
			</Wrapper>
		</>
	);
};

export default Two;

const Wrapper = styled.section`
	--background-color: #eff0f6;
	--white-ice: #defef0;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
  gap: 32px;
	flex: 1;
	width: 100%;
	height: 100%;
	background: var(--background-color);

  h1 {
    align-self: flex-start;
    margin-top: 300px;
  }

	h1 span {
		display: block;
		font-size:64px;
		line-height: 1;
	}
`;
