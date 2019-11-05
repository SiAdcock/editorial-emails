import React from "react";
import { FontCSS, TdCSS, TableCSS, ImageCSS } from "../css";
import { palette } from "@guardian/src-foundations";

const imgStyle: ImageCSS = {
    outline: "none",
    textDecoration: "none",
    maxWidth: "100%",
    clear: "both",
    display: "block",
    border: "0",
    width: "100%"
};

const tableStyle: TableCSS = {
    borderSpacing: 0,
    borderCollapse: "collapse",
    width: "100%"
};

const tdStyle: TdCSS = {
    backgroundColor: palette.culture.faded,
    borderTop: `2px solid ${palette.culture.main}`
};

const metaWrapperStyle: TdCSS = {
    padding: "3px 65px 5px 12px"
};

const linkStyle: FontCSS = {
    textDecoration: "none"
};

const headlineStyle: FontCSS = {
    color: palette.neutral[7],
    fontFamily: "'Guardian Egyptian Web Headline', Georgia, serif",
    fontSize: "30px",
    lineHeight: "38px",
    fontWeight: 400
};

const kickerStyle: FontCSS = {
    ...headlineStyle,

    color: palette.culture.main
};

const bylineStyle: FontCSS = {
    color: palette.culture.main,
    fontFamily: "'Guardian Egyptian Web Headline Italic', Georgia, serif",
    fontSize: "30px",
    lineHeight: "38px",
    fontStyle: "italic"
};

const bottomPaddingStyle: TdCSS = {
    paddingBottom: "20px"
};

interface Props {
    headline: string;
    byline: string;
    webURL: string;
    imageURL?: string;
    imageAlt?: string;
    kicker?: string;
}

export const Card: React.FC<Props> = ({
    headline,
    byline,
    webURL,
    imageURL,
    imageAlt,
    kicker
}) => (
    <table style={tableStyle}>
        <tr>
            <td style={tdStyle}>
                <table style={tableStyle}>
                    {imageURL && (
                        <tr>
                            <td>
                                <a href={webURL}>
                                    <img
                                        width="600"
                                        style={imgStyle}
                                        alt={imageAlt}
                                        src={imageURL}
                                    />
                                </a>
                            </td>
                        </tr>
                    )}

                    <tr>
                        <td className="h-pad" style={metaWrapperStyle}>
                            <a style={linkStyle} href={webURL}>
                                {kicker && (
                                    <span
                                        className="h-small"
                                        style={kickerStyle}
                                    >
                                        {kicker + " / "}
                                    </span>
                                )}
                                <span className="h-small" style={headlineStyle}>
                                    {headline}
                                </span>
                                <br className="m-hide" />
                                <span className="h-small" style={bylineStyle}>
                                    {" "}
                                    {byline}
                                </span>
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td style={bottomPaddingStyle}></td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
);
