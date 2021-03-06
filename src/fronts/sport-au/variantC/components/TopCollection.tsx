import React from "react";
import { Collection as ICollection } from "../../../../api";
import { TableRowCell } from "../../../../layout/Table";
import { Padding } from "../../../../layout/Padding";
import { Multiline } from "../../../../components/Multiline";
import { Heading } from "../../../../components/Heading";
import { DefaultGrid } from "../../../../layout/Grid";
import { DefaultCard } from "../../../../components/cards/DefaultCard";
import { palette } from "@guardian/src-foundations";
import {
    getKickerText,
    getPillarName,
    getImageSrc,
    getCardUrl,
    getByline
} from "../../../../dataHelpers";

export const TopCollection: React.FC<{
    collection: ICollection;
}> = ({ collection }) => {
    const content = [].concat(collection.curated, collection.backfill);
    if (content.length < 1) {
        return null;
    }

    const firstCollection = content[0];
    const secondCollection = content.slice(1, 3);
    const thirdCollection = content[3];
    const fourthCollection = content.slice(4, 6);

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
                headline={firstCollection.header.headline}
                cardUrl={getCardUrl(firstCollection)}
                isComment={firstCollection.display.showQuotedHeadline}
                imageSrc={getImageSrc(firstCollection)}
                imageAlt={firstCollection.header.headline}
                imageRating={firstCollection.card.starRating}
                byline={getByline(firstCollection)}
                kicker={getKickerText(firstCollection)}
                pillar={getPillarName(firstCollection)}
                size="large"
                designName="border"
            />
            <Padding px={12} />
            {secondCollection && (
                <DefaultGrid
                    content={secondCollection}
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
                headline={thirdCollection.header.headline}
                cardUrl={getCardUrl(thirdCollection)}
                isComment={thirdCollection.display.showQuotedHeadline}
                imageSrc={getImageSrc(thirdCollection)}
                imageAlt={thirdCollection.header.headline}
                imageRating={thirdCollection.card.starRating}
                byline={getByline(thirdCollection)}
                kicker={getKickerText(thirdCollection)}
                pillar={getPillarName(thirdCollection)}
                size="large"
                designName="border"
            />
            <Padding px={12} />
            {fourthCollection && (
                <DefaultGrid
                    content={fourthCollection}
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
