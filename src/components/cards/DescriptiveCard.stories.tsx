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
                    imageSrc="https://media.guim.co.uk/9f937dd8dc5603f28f9a65b458c53ac5b2379c74/0_342_5250_3151/master/5250.jpg"
                    imageSalt="Uz34q0qIkz"
                    imageRating={4}
                    pillar="Sport"
                    showPillarColours
                />
            </TableRowCell>
        </Center>
    );
};

defaultStory.story = {
    name: "Basic descriptive card with Sport pillar"
};
