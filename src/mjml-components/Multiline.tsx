import React from "react";
import { palette } from "@guardian/src-foundations";
import { Spacer } from "../mjml-layout/Layout";
import { MjmlColumn, MjmlDivider } from "mjml-react";

interface Props {
    topPadding?: boolean;
    backgroundColor?: string;
}

export const Multiline: React.FC<Props> = (topPadding, backgroundColor) => (
    <>
        <MjmlColumn backgroundColor="#efefef" width="100%">
            {topPadding && <Spacer px={12} backgroundColor="#efefef" />}
        </MjmlColumn>
        <MjmlColumn backgroundColor="#efefef" width="100%">
            {[0, 1, 2, 3].map((line, i) => (
                <MjmlDivider
                    padding="0 0 2px 0"
                    containerBackgroundColor="#efefef"
                    borderColor={palette.neutral[7]}
                    borderStyle="solid"
                    borderWidth="1px"
                    key={i}
                />
            ))}
        </MjmlColumn>
    </>
);
