import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

export const Header: FC = () => {

	return (
		<header>
			<NavWrapper>
				<Link href="/">Go back</Link>
			</NavWrapper>
		</header>
	);
};

const NavWrapper = styled.nav`
	a {
		cursor: pointer;
		padding: 8px 14px;
		background: var(--color-blackish);
		color: var(--color-whiteish);
		text-decoration: none;
		position: absolute;
		top: 0;
		left: 0;

		&:hover {
			color: var(--color-whiteish);
			background: var(--color-secondary);
		}
	}
`;
