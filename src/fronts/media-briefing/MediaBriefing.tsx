import React from "react";
import { Collection as ICollection } from "../../api";
import { Collections } from "../../components/Collections";
import { Collections as CollectionsVariantZ } from "./variantZ/Collections";
import { Collections as CollectionsVariantC } from "./variantC/Collections";
import { Collections as CollectionsVariantB } from "./variantB/Collections";

export const MediaBriefing: React.FC<{
    frontId: string;
    collections: ICollection[];
    salt: string;
    variant?: string;
}> = ({ frontId, collections, salt, variant }) => {
    if (variant === "z") {
        return (
            <CollectionsVariantZ
                frontId={frontId}
                collections={collections}
                salt={salt}
            ></CollectionsVariantZ>
        );
    } else if (variant === "c") {
        return (
            <CollectionsVariantC
                frontId={frontId}
                collections={collections}
                salt={salt}
            ></CollectionsVariantC>
        );
    } else if (variant === "b") {
        return (
            <CollectionsVariantB
                frontId={frontId}
                collections={collections}
                salt={salt}
            ></CollectionsVariantB>
        );
    }

    return (
        <Collections
            frontId={frontId}
            collections={collections}
            salt={salt}
        ></Collections>
    );
};
