import React from "react";
import sanitizeHtml from "sanitize-html";
import { FontCSS, TdCSS, ImageCSS } from "../../css";
import { sanitizeOptions } from "../../utils/sanitizeOptions";
import { pillarProps } from "../../utils/pillarProps";
import { Pillar } from "../../api";
import { palette } from "@guardian/src-foundations";
import { Headline } from "../../components/Headline";
import { headline } from "../../styles/typography";
import { Table, TableRowCell } from "../../layout/Table";
import { MjmlColumn, MjmlText } from "mjml-react";

const tdStyle = (
    backgroundColor: string,
    pillar: string,
    borderWidth?: string,
    borderColor?: string
): TdCSS => {
    const pillarColour = pillar ? pillarProps[pillar].colour : null;

    return {
        backgroundColor: backgroundColor || "transparent",
        borderTop: `${borderWidth === "thin" ? "1px" : "2px"} solid ${
            borderColor || pillarColour || palette.culture.main
        }`,
    };
};

const metaWrapperStyle = (layout: string): TdCSS => {
    const sidePadding = layout === "compact" ? "0" : "10px";
    return {
        width: "100%",
        padding: `3px ${sidePadding} 20px ${sidePadding}`,
    };
};

const expandedWrapperStyle: TdCSS = {
    padding: "3px 10px 20px 10px",
};

const trailTextStyle: FontCSS = {
    ...headline({ level: 1 }),
    color: palette.neutral[7],
};

const imgStyles: ImageCSS = {
    verticalAlign: "middle",
    border: "0",
};

const arrowColStyles = {
    width: "23px",
    padding: "0 10px",
    verticalAlign: "middle",
};

interface Props {
    headline: string;
    trailText: string;
    cardUrl: string;
    isComment?: boolean;
    pillar?: Pillar;
    byline?: string;
    kicker?: string;
    backgroundColor?: string;
    showPillarColours?: boolean;
    showTrailText?: boolean;
    borderWidth?: "thin" | "thick";
    layout?: "expanded" | "compact";
    showUseWhite?: boolean;
    borderColor?: string;
    showArrow?: boolean;
}
export const HeadlineCard: React.FC<Props> = ({
    headline: headlineText,
    kicker,
}) => {
    return (
        <MjmlColumn
            width="100%"
            borderTop={`1px solid ${palette.news.main}`}
            padding="0"
        >
            <MjmlText padding="0">
                <h1 style={{ ...headline({ level: 1 }) }}>
                    <span style={{ fontWeight: 700, color: palette.news.main }}>
                        {kicker} / &nbsp;
                    </span>
                    {headlineText}
                </h1>
            </MjmlText>
        </MjmlColumn>
    );
};
