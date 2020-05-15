import React from "react";
import sanitizeHtml from "sanitize-html";
import { palette } from "@guardian/src-foundations";
import { FontCSS, TdCSS } from "../../css";
import { sanitizeOptions } from "../../utils/sanitizeOptions";
import { Pillar } from "../../api";
import { Headline } from "../../components/Headline";
import { Image } from "../../components/Image";
import { headline } from "../../styles/typography";
import { Table, TableRowCell } from "../../layout/Table";
import { pillarProps } from "../../utils/pillarProps";
import { MjmlColumn, MjmlText, MjmlImage } from "mjml-react";

const tdStyle = (backgroundColor: string): TdCSS => {
    return {
        backgroundColor: backgroundColor || "transparent",
    };
};

const headlineCellStyle = (isLive: boolean, pillar: Pillar): TdCSS => {
    return {
        width: "93%",
        backgroundColor: isLive
            ? pillarProps[pillar].colour
            : palette.neutral[7],
        padding: "3px 40px 20px 10px",
    };
};

const blankCellStyle = {
    width: "7%",
};

const trailTextStyle: FontCSS = {
    ...headline({ level: 1 }),
};

const trailTextPadding = (isLive: boolean): TdCSS => {
    const padBottom = isLive ? "4px" : "20px";
    return {
        padding: `6px 10px ${padBottom} 10px`,
    };
};

interface Props {
    headline: string;
    trailText: string;
    cardUrl: string;
    isComment?: boolean;
    pillar?: Pillar;
    kicker?: string;
    imageSrc?: string;
    imageAlt?: string;
    imageRating?: number;
    backgroundColor?: string;
    layout?: "expanded" | "compact";
    isLive?: boolean;
}

export const OverlayCard: React.FC<Props> = ({
    headline: headlineText,
    trailText,
    cardUrl,
    isComment = false,
    pillar,
    kicker,
    backgroundColor,
    imageSrc,
    imageAlt,
    imageRating,
    layout = "compact",
    isLive = false,
}) => (
    <>
        <MjmlColumn width="100%">
            {imageSrc && (
                <MjmlImage
                    src={imageSrc}
                    alt={imageAlt}
                    width={600}
                    href={cardUrl}
                    padding="0"
                />
            )}
        </MjmlColumn>

        <MjmlColumn width="100%" backgroundColor={palette.neutral[7]}>
            <MjmlText padding="0">
                <h1
                    style={{
                        ...headline({ level: 2 }),
                        color: palette.neutral[100],
                    }}
                >
                    <span
                        style={{
                            fontWeight: 700,
                        }}
                    >
                        {kicker} / &nbsp;
                    </span>
                    {headlineText}
                </h1>
            </MjmlText>
        </MjmlColumn>
    </>
);
