import React from "react";
import { TdCSS } from "../css";
import { palette } from "@guardian/src-foundations";
import { headline } from "../styles/typography";
import { MjmlText, MjmlColumn } from "mjml-react";

const headingTextStyle = (color: string): TdCSS => {
    return {
        ...headline({ level: 2, fontWeight: "bold" }),
        color: color || palette.neutral[7],
        padding: "0px",
    };
};

const headingColumnStyle = (backgroundColor: string): TdCSS => {
    return {
        backgroundColor,
        padding: "0 10px 12px",
        width: "100%",
    };
};

export const Heading: React.FC<{
    backgroundColor?: string;
    color?: string;
    children: React.ReactNode;
}> = ({ children, backgroundColor, color }) => (
    <MjmlColumn {...headingColumnStyle(backgroundColor)}>
        <MjmlText {...headingTextStyle(color)}>{children}</MjmlText>
    </MjmlColumn>
);
