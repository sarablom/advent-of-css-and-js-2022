import { FC, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styled from "styled-components";

interface Props {
	children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => (
	<Wrapper>
		<Header />
		<Main>{children}</Main>
		<Footer />
	</Wrapper>
);

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
`;

const Main = styled.main`
	flex: 1;
`;
