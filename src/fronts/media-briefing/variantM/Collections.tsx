import React from "react";
import { Collection as ICollection } from "../../../api";
import { TableRowCell } from "../../../layout/Table";
import { getDesignType } from "../../../utils/getDesignType";
import { TopCollection } from "./components/TopCollection";
import { CommentCollection } from "./components/CommentCollection";
import { LinkCollection } from "./components/LinkCollection";
import { DefaultCollection } from "./components/DefaultCollection";
import {
    Mjml,
    MjmlHead,
    MjmlTitle,
    MjmlPreview,
    MjmlBody,
    MjmlSection,
    MjmlColumn,
    MjmlButton,
    MjmlImage,
} from "mjml-react";

export const Collections: React.FC<{
    frontId: string;
    collections: ICollection[];
}> = ({ collections }) => {
    const renderedCollections = collections.map((collection) => {
        const designType = getDesignType(collection);

        switch (designType) {
            case "comment":
                // Ignore 'Media by Sector' collection without using 'display name'
                // Look at combination of content type (curated/backfill),
                // content length and collection type
                // if (
                //     collection.curated.length === 1 &&
                //     collection.collectionType === "free-text"
                // ) {
                //     return null;
                // }

                // return <CommentCollection collection={collection} />;

                return null;
            case "link":
                // return <LinkCollection collection={collection} />;
                return null;
            case "default":
                // Render different collection for 'TV & Radio' collection without using 'display name'
                // Look at 'tv-and-radio' substring in href
                if (
                    collection.href &&
                    collection.href.indexOf("tv-and-radio") > -1
                ) {
                    return <DefaultCollection collection={collection} />;
                }

                return <TopCollection collection={collection} />;
        }
    });

    return (
        <Mjml>
            <MjmlHead>
                <MjmlTitle>Last Minute Offer</MjmlTitle>
                <MjmlPreview>Last Minute Offer...</MjmlPreview>
            </MjmlHead>
            <MjmlBody width={600}>
                <MjmlSection fullWidth>{renderedCollections}</MjmlSection>
            </MjmlBody>
        </Mjml>
    );
};

export const CollectionsBU: React.FC<{
    frontId: string;
    collections: ICollection[];
}> = ({ collections }) => {
    const renderedCollections = collections.map((collection) => {
        const designType = getDesignType(collection);

        switch (designType) {
            case "comment":
                // Ignore 'Media by Sector' collection without using 'display name'
                // Look at combination of content type (curated/backfill),
                // content length and collection type
                if (
                    collection.curated.length === 1 &&
                    collection.collectionType === "free-text"
                ) {
                    return null;
                }

                return <CommentCollection collection={collection} />;
            case "link":
                return <LinkCollection collection={collection} />;
            case "default":
                // Render different collection for 'TV & Radio' collection without using 'display name'
                // Look at 'tv-and-radio' substring in href
                if (
                    collection.href &&
                    collection.href.indexOf("tv-and-radio") > -1
                ) {
                    return <DefaultCollection collection={collection} />;
                }

                return <TopCollection collection={collection} />;
        }
    });

    return <TableRowCell>{renderedCollections}</TableRowCell>;
};
