import React from "react";
import { Collection as ICollection } from "../../../../api";
import { palette } from "@guardian/src-foundations";
import { TableRowCell } from "../../../../layout/Table";
import { Padding } from "../../../../layout/Padding";
import { OverlayCard } from "../../../../components/cards/OverlayCard";
import { Multiline } from "../../../../components/Multiline";
import { Heading } from "../../../../components/Heading";
import { HeadlineCard } from "../../../../components/cards/HeadlineCard";
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

    const leadStory = content[0];
    const restStories = content.slice(1);

    const lightGrey = palette.neutral[97];
    const white = palette.neutral[100];
    return (
        <TableRowCell
            tdStyle={{
                backgroundColor: lightGrey
            }}
        >
            <Multiline topPadding />
            <Heading heading={collection.displayName} />

            <OverlayCard
                headline={leadStory.header.headline}
                trailText={leadStory.card.trailText}
                cardUrl={getCardUrl(leadStory)}
                isComment={leadStory.display.showQuotedHeadline}
                pillar={getPillarName(leadStory)}
                kicker={getKickerText(leadStory)}
                imageSrc={getImageSrc(leadStory)}
                imageAlt={leadStory.header.headline}
                imageRating={leadStory.card.starRating}
                backgroundColor={white}
                isLive={leadStory.card.isLive}
            />

            <Padding px={12} backgroundColor={lightGrey} />

            {restStories.map((story, index) => (
                <>
                    {index > 0 && <Padding px={4} />}
                    <HeadlineCard
                        headline={story.header.headline}
                        trailText={story.card.trailText}
                        isComment={story.display.showQuotedHeadline}
                        cardUrl={getCardUrl(story)}
                        pillar={getPillarName(story)}
                        byline={getByline(story)}
                        kicker={getKickerText(story)}
                        backgroundColor={white}
                        showPillarColours
                        borderWidth="thin"
                    />
                </>
            ))}
        </TableRowCell>
    );
};
