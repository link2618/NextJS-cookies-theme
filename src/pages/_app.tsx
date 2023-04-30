import type { AppProps } from "next/app";

import { ThemeProvider } from '@/context/theme'

import "@/styles/globals.css";

interface Props extends AppProps {
    theme: string
}

export default function App({ Component, pageProps }: Props) {

    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
