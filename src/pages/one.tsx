import { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

import { Timer } from "../components/DayOne/Timer";



const One: NextPage = () => {
	return (
		<>
			<Head>
				<title>Day One</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Wrapper>
        <Timer />
      </Wrapper>
		</>
	);
};

export default One;

const Wrapper = styled.section`
	--background-color: #2b2a30;
	--color-red: #9d0000;
	--color-green: #00aa51;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 32px;
	flex: 1;
	width: 100%;
	height: 100%;
	background: var(--background-color);
`;
