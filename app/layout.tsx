import "@migov/digital-guidelines-core/dist/digital-guidelines-core/digital-guidelines-core.css";
import "@mantine/core/styles.css";
import './global.css';
import { Montserrat } from 'next/font/google'
import { setAssetPath } from "@migov/digital-guidelines-core/components";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
  createTheme
} from "@mantine/core";
import 'mantine-react-table/styles.css';
import { ModalsProvider } from '@mantine/modals';
import { AppProvider } from './provider';
import { CognitoAuthProvider } from "./api/auth/provider-auth";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  fontFamily: 'Montserrat',
  primaryColor: 'teal',
  primaryShade: 9,
  colors: {
    navy: [
      "#f1f5f9", "#e1e6ec", "#bfcbda", "#9aafc9", "#7b97ba",
      "#6788b1", "#5c80ae", "#4c6e99", "#416289", "#33557a"
    ],
    teal: [
      "#effafa", "#e2f2f1", "#bfe5e3", "#99d8d4", "#7bccc8",
      "#68c5c0", "#5cc2bc", "#4caba6", "#3f9893", "#277C78"
    ]
  },
});

export const metadata = {
  title: "Michigan Capacity Building Center (CBC)",
  description: "Strengthening Behavioral Health Services for Michigan's Children and their Families",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  if (typeof window !== "undefined") {
    setAssetPath(window.location.origin);
  }

  return (
    <html lang="en" className={montserrat.className} {...mantineHtmlProps} >
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </head>
      <body>
        <CognitoAuthProvider>
          <MantineProvider theme={theme}>
            <ModalsProvider>
              <AppProvider>
                {children}
              </AppProvider>
            </ModalsProvider>
          </MantineProvider>
          </CognitoAuthProvider>
          </body>
    </html>
  );
}
