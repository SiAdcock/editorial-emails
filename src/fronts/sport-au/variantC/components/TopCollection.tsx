import React from "react";
import { Collection as ICollection } from "../../../../api";
import { TableRowCell } from "../../../../layout/Table";
import { Padding } from "../../../../layout/Padding";
import { Multiline } from "../../../../components/Multiline";
import { Heading } from "../../../../components/Heading";
import { DefaultGrid } from "../../../../layout/Grid";
import { DefaultCard } from "../../../../components/cards/DefaultCard";
import { palette } from "@guardian/src-foundations";

export const TopCollection: React.FC<{
    collection: ICollection;
    salt?: string;
}> = ({ collection, salt }) => {
    const firstCollection = collection.backfill[0];
    const secondCollection = collection.backfill.slice(1, 3);
    const thirdCollection = collection.backfill[3];
    const fourthCollection = collection.backfill.slice(4, 6);

    // Pass a background color and border styles to be used by the grid cell.
    // This ensures all cells in a row will have the same background and border,
    // giving the impression that the cards inside match each other's heights.
    // This is needed because we can't rely on the cards themselves
    // expanding vertically in the cell to use the available height.
    const colStyles = {
        backgroundColor: palette.neutral[100],
        border: `1px solid ${palette.neutral[93]}`
    };

    return (
        <>
            <Multiline topPadding />
            <Heading heading={collection.displayName} />
            <DefaultCard
                content={firstCollection}
                salt={salt}
                size="large"
                designName="border"
            />
            <Padding px={12} />
            {secondCollection && (
                <DefaultGrid
                    content={secondCollection}
                    salt={salt}
                    card={{
                        Component: DefaultCard,
                        props: { designName: "border", isInsideGrid: true }
                    }}
                    leftStyles={colStyles}
                    rightStyles={colStyles}
                />
            )}
            <Padding px={12} />
            <DefaultCard
                content={thirdCollection}
                salt={salt}
                size="large"
                designName="border"
            />
            <Padding px={12} />
            {fourthCollection && (
                <DefaultGrid
                    content={fourthCollection}
                    salt={salt}
                    card={{
                        Component: DefaultCard,
                        props: { designName: "border", isInsideGrid: true }
                    }}
                    leftStyles={colStyles}
                    rightStyles={colStyles}
                />
            )}
        </>
    );
};