import { FC } from "react";
import Link from "next/link";
import styled from "styled-components";

export const Header: FC = () => {

	return (
		<PageWrapper>
			<NavWrapper>
				<Link href="/">Go back</Link>
			</NavWrapper>
		</PageWrapper>
	);
};
const PageWrapper = styled.header`
	display: flex;
	justify-content: space-between;
`;

const NavWrapper = styled.nav`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 5rem;
	gap: 1rem;

	a {
		text-decoration: none;
		color: var(--color-blackish);
		cursor: pointer;

		&:hover {
			color: var(--color-whiteish);
			background: var(--color-secondary);
		}
	}
`;
