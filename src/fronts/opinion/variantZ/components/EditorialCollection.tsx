import React from "react";
import { Collection as ICollection } from "../../../../api";
import { Heading } from "./../../../../components/Heading";
import { Multiline } from "./../../../../components/Multiline";
import { CommentCardC } from "../../../../components/cards/CommentCardC";
import { getImageSrc, getCardUrl, getByline } from "../../../../dataHelpers";

export const EditorialCollection: React.FC<{
    collection: ICollection;
}> = ({ collection }) => {
    const content = [].concat(collection.curated, collection.backfill);
    if (content.length < 1) {
        return null;
    }

    const contentOne = content[0];
    return (
        <>
            <Multiline topPadding />
            <Heading heading={collection.displayName} />

            <CommentCardC
                headline={contentOne.header.headline}
                byline={getByline(contentOne)}
                trailText={contentOne.card.trailText}
                cardUrl={getCardUrl(contentOne)}
                imageSrc={getImageSrc(contentOne)}
                imageAlt={contentOne.header.headline}
                imageRating={contentOne.card.starRating}
                isComment={contentOne.header.isComment}
                size="large"
                shouldShowImage
            />
        </>
    );
};
