import React from "react";
import { MjmlColumn, MjmlSpacer } from "mjml-react";

export const FullRow: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => <MjmlColumn>{children}</MjmlColumn>;

interface SpacerProps {
    px: number;
    backgroundColor?: string;
}

export const Spacer: React.FC<SpacerProps> = ({ px, backgroundColor }) => (
    <MjmlSpacer
        height={`${px}px`}
        containerBackgroundColor={backgroundColor || "transparent"}
    />
);
