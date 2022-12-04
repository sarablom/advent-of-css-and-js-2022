import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Two: NextPage = () => {
    const [userName, setUserName] = useState("");
    useEffect(() => {
        const runEffect = async () => {
            const response = await fetch("/api/hello");
            const data = await response.json();
            if (data.name) setUserName(data.name);
        };

        runEffect();
    }, []);

    return (
        <>
            <Head>
                <title>Day Two</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Wrapper>
                <Image
                    src="/images_day_two/plate__tortellini.png"
                    alt="Tortellini"
                    width={77}
                    height={77}
                />
            </Wrapper>
        </>
    );
};

export default Two;

const Wrapper = styled.main`
--background-color: #EFF0F6
--border-color: #d7d6fc
--primary-purple: #6B00F5
--pattens-blue: #e1f0fe
--ghost-white: #f7f7ff
--white-ice: #defef0

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;
