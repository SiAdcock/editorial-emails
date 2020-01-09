import React from "react";
import { Collection as ICollection } from "../api";
import { palette } from "@guardian/src-foundations";
import { Padding } from "../layout/Padding";
import { Multiline } from "../components/Multiline";
import { Heading } from "../components/Heading";
import { OverlayCard } from "../components/cards/OverlayCard";
import { getKickerText } from "../dataHelpers";

export const InstagramCollection: React.FC<{
    collection: ICollection;
}> = ({ collection }) => {
    const content = [].concat(collection.curated).concat(collection.backfill);
    if (content.length < 1) {
        return null;
    }

    const lightGrey = palette.neutral[97];
    return (
        <>
            <Padding px={12} backgroundColor={lightGrey} />
            <Multiline />
            <Heading
                heading={collection.displayName}
                backgroundColor={lightGrey}
            />
            {content.map((story, index) => (
                <>
                    {index > 0 && (
                        <Padding px={12} backgroundColor={lightGrey} />
                    )}
                    <OverlayCard
                        headline={story.header.headline}
                        trailText={story.card.trailText}
                        cardUrl={story.properties.webUrl}
                        isComment={story.display.showQuotedHeadline}
                        pillar={
                            story.properties.maybeContent
                                ? story.properties.maybeContent.metadata.pillar
                                      .name
                                : null
                        }
                        imageSrc={
                            story.properties.maybeContent
                                ? story.properties.maybeContent.trail
                                      .trailPicture.allImages[0].url
                                : null
                        }
                        imageAlt={story.header.headline}
                        imageRating={story.card.starRating}
                        kicker={getKickerText(story)}
                        layout="expanded"
                        isLive={story.card.isLive}
                    />
                </>
            ))}
        </>
    );
};
