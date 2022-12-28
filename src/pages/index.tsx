import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Advent of CSS and JS 2022</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainWrapper>
				<h1>Welcome to Advent of CSS and JS 2022</h1>
				<h2>By Sara Blom</h2>
				<LinkWrapper>
					{[
						"one",
						"two",
						"three",
						"four",
						"five",
						"six",
						"seven",
						"eight",
						"nine",
						"ten",
						"eleven",
						"twelve",
						"thirteen",
						"fourteen",
						"fifteen",
						"sixteen",
						"seventeen",
						"eighteen",
						"ninteen",
						"twenty",
						"twentyone",
						"twentytwo",
						"twentythree",
						"twentyfour",
					].map(day => (
						<li>
							<Link href={`/${day}`}>{day}</Link>
						</li>
					))}
				</LinkWrapper>
			</MainWrapper>
		</div>
	);
};

export default Home;

const MainWrapper = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 32px;
	align-items: center;
	width: 100%;

	h1 {
		margin-top: 32px;
	}
`;

const LinkWrapper = styled.ol`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 16px;
	width: min(100%, 700px);
	list-style-type: none;

	li {
		background: var(--color-primary);
		color: var(--color-whiteish);
		border-radius: 4px;
		padding: 8px 12px;

		a {
			color: inherit;
			text-decoration: none;
		}
	}
`;
