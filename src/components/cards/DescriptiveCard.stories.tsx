import React from "react";
import { DescriptiveCard } from "./DescriptiveCard";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Center } from "../../layout/Center";
import { TableRowCell } from "../../layout/Table";

export default {
    component: DescriptiveCard,
    title: "Cards/DescriptiveCard",
    decorators: [withKnobs]
};

export const defaultStory = () => {
    return (
        <Center>
            <TableRowCell>
                <DescriptiveCard
                    headline="Lorem ipsum dolor sit amet consectetur adipiscing elit"
                    trailText="Fusce hendrerit, diam eu pellentesque molestie, est orci euismod purus, sed semper tellus elit eget lorem. Duis commodo nunc sed est blandit dignissim"
                    cardUrl="https://www.theguardian.com/uk-news/2019/dec/30/briton-found-guilty-over-ayia-napa-false-claim-cyprus"
                    kicker="Breaking"
                    byline="Florian Schneider"
                    bodyText="<p>In libero sem, auctor ultricies elit eu, ultrices bibendum libero. Duis non nunc eros.</p><p>Maecenas non sagittis turpis. Sed semper sit amet sapien semper sollicitudin. Vivamus non purus risus.</p>"
                    isComment
                    imageSrc="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
                    imageRating={4}
                    pillar="Sport"
                    showPillarColours
                />
            </TableRowCell>
        </Center>
    );
};

defaultStory.story = {
    name: "Descriptive card with Sport pillar"
};

export const newsPillarStory = () => {
    return (
        <Center>
            <TableRowCell>
                <DescriptiveCard
                    headline="Maecenas in ornare turpis in pellentesque lacus porta pretium imperdiet"
                    trailText="In convallis sem purus in ultrices purus iaculis ut. Sed tempus ex at diam tristique ullamcorper. Nunc sed augue leo. In ultrices ultricies urna."
                    cardUrl="https://www.theguardian.com/uk-news/2019/dec/30/briton-found-guilty-over-ayia-napa-false-claim-cyprus"
                    kicker="Music"
                    byline="Ralf Hütter"
                    bodyText="<p>In libero sem, auctor ultricies elit eu, ultrices bibendum libero. Duis non nunc eros.</p><p>Maecenas non sagittis turpis. Sed semper sit amet sapien semper sollicitudin. Vivamus non purus risus.</p>"
                    isComment
                    imageSrc="https://images.unsplash.com/photo-1506102383123-c8ef1e872756?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
                    imageRating={4}
                    pillar="News"
                    showPillarColours
                />
            </TableRowCell>
        </Center>
    );
};

newsPillarStory.story = {
    name: "Descriptive card with News pillar"
};
