import { FC, ReactNode } from "react";
import Head from "next/head";

import { Navbar } from "../ui";
import { CustomTheme } from "./Theme";

interface Props {
    children?: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
    return (
        <CustomTheme>
            <Head>
            </Head>
            <nav>
                <Navbar />
            </nav>
            <main style={{ padding: "20px 50px" }}>{children}</main>
        </CustomTheme>
    );
};
