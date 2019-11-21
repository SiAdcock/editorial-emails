import React from "react";
import { Content } from "../api";
import { Card } from "../components/cards/Card";
import { LinkCard as LinkCardB } from "../components/tests/commentB/LinkCard";
import { LinkCard as LinkCardC } from "../components/tests/commentC/LinkCard";
import { TdCSS } from "../css";
import { palette } from "@guardian/src-foundations";
import { TableRow, TableRowCell } from "./Table";
import { Padding } from "./Padding";

const gutterStyle: TdCSS = {
    width: "2%",
    lineHeight: "0"
};

type VAlign = "top" | "bottom";

interface RowStyle {
    backgroundColor: string;
    verticalAlign?: VAlign;
    borderBottom?: string;
    borderLeft?: string;
    lineHeight?: string;
}

const colStyle = (styles: RowStyle): TdCSS => ({
    width: "49%",
    backgroundColor: styles.backgroundColor,
    verticalAlign: styles.verticalAlign || "top",
    borderBottom: styles.borderBottom || "none",
    borderLeft: styles.borderLeft || "none",
    lineHeight: styles.lineHeight || "inherit"
});

const defaultRowStyles: RowStyle = {
    backgroundColor: palette.neutral[100]
};

export const GridRow: React.FC<{
    left: React.ReactNode;
    right: React.ReactNode;
    leftStyles?: RowStyle;
    rightStyles?: RowStyle;
}> = ({
    left,
    right,
    leftStyles = defaultRowStyles,
    rightStyles = defaultRowStyles
}) => (
    <TableRow>
        <td style={colStyle(leftStyles)}>{left}</td>
        <td style={gutterStyle}>&nbsp;</td>
        <td style={colStyle(rightStyles)}>{right}</td>
    </TableRow>
);

export function partition<T>(seq: T[], n: number): T[][] {
    // split into groups of two
    // return half-width cards
    const groups = [];
    while (seq.length) {
        groups.push(seq.splice(0, n));
    }

    return groups;
}

interface DefaultGridProps {
    content: Content[];
    salt: string;
}

// TODO really should accept a React element so that it doesn't have to know
// about Card or salt.
export const DefaultGrid: React.FC<DefaultGridProps> = ({ content, salt }) => {
    const rows = partition(content, 2).map((pair, i) => (
        <React.Fragment key={i}>
            <GridRow
                left={<Card content={pair[0]} salt={salt} size={"small"} />}
                right={
                    pair[1] ? (
                        <Card content={pair[1]} salt={salt} size={"small"} />
                    ) : null
                }
                leftStyles={{
                    backgroundColor: palette.culture.faded
                }}
                rightStyles={{
                    backgroundColor: palette.culture.faded
                }}
            />

            <Padding px={12} />
        </React.Fragment>
    ));

    return <TableRowCell>{rows}</TableRowCell>;
};
