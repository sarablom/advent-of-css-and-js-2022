import Image from "next/image";
import React from "react";
import styled from "styled-components";
import { Lato } from "@next/font/google";

const latoBold = Lato({
	weight: "900",
});

interface Props {
	plate: {
		name: string;
		price: string;
		image: string;
	};
}

export const PlateCard = ({ plate }: Props) => {
	return (
		<CardWrapper>
			<Image src={plate.image} alt={plate.name} width={150} height={150} />
			<p>{plate.name}</p>
			<p className={`${latoBold} price`}>${plate.price}</p>
			<button>Add to Cart</button>
		</CardWrapper>
	);
};

const CardWrapper = styled.div`
	--primary-purple: #6b00f5;
	--pattens-blue: #e1f0fe;
	--border-color: #d7d6fc;

	position: relative;
	align-self: flex-end;
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	background: var(--border-color);
	border-radius: 16px 0 0 16px;
	margin: 32px 0 32px 32px;
	width: 80%;
	padding: 32px;
	font-size: 20px;

	img {
		position: absolute;
		top: -20px;
		left: -70px;
	}

	p.price {
		font-size: 24px;
	}

	button {
		position: absolute;
		bottom: -16px;
		right: 32px;
		background: var(--primary-purple);
		color: var(--pattens-blue);
		border-radius: 16px;
		padding: 2px 12px 3px;
		border: none;
	}
`;
