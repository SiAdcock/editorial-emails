import React from "react";
import { Collection as ICollection } from "../../../../api";
import { palette } from "@guardian/src-foundations";
import { TableRowCell } from "../../../../layout/Table";
import { Padding } from "../../../../layout/Padding";
import { Multiline } from "../../../../components/Multiline";
import { Heading } from "../../../../components/Heading";
import { HeadlineCard } from "../../../../components/cards/HeadlineCard";
import {
    getKickerText,
    getPillarName,
    getCardUrl,
    getByline
} from "../../../../dataHelpers";

export const CommentCollection: React.FC<{
    collection: ICollection;
}> = ({ collection }) => {
    const content = [].concat(collection.curated, collection.backfill);
    if (content.length < 1) {
        return null;
    }

    const lightGrey = palette.neutral[97];
    const white = palette.neutral[100];
    return (
        <TableRowCell tdStyle={{ backgroundColor: lightGrey }}>
            <Multiline topPadding />
            <Heading heading={collection.displayName} />
            {content.map((story, index) => (
                <>
                    {index > 0 && <Padding px={4} />}
                    <HeadlineCard
                        headline={story.header.headline}
                        trailText={story.card.trailText}
                        isComment={story.display.showQuotedHeadline}
                        cardUrl={getCardUrl(story)}
                        byline={getByline(story)}
                        pillar={getPillarName(story)}
                        kicker={getKickerText(story)}
                        backgroundColor={white}
                        showPillarColours
                        borderWidth="thin"
                        layout="expanded"
                    />
                </>
            ))}
        </TableRowCell>
    );
};
