import React from "react";
import styled from "styled-components";
import { Lato } from "@next/font/google";
import { FOOD } from "../../data";
import { PlateCard } from "./PlateCard";

const latoRegular = Lato({
	weight: "400",
});

const latoBold = Lato({
	weight: "700",
});

export const CardContainer = () => {
	return (
		<CardWrapper className={latoRegular.className}>
			<h2 className={latoBold.className}>To Go Menu</h2>
			{FOOD.map(plate => (
				<PlateCard key={plate.name} plate={plate} />
			))}
		</CardWrapper>
	);
};

const CardWrapper = styled.div`
	--ghost-white: #f7f7ff;

  display: flex;
  flex-direction: column;
	width: 30rem;
  margin-top: 200px;
	padding: 64px 0 64px 32px;
	border-radius: 16px;
	background: var(--ghost-white);
	font-weight: 700;
`;
