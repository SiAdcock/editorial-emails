import React from "react";
import { Collection as ICollection } from "../../api";
import { Collections } from "../../components/Collections";
import { Collections as CollectionsVariantZ } from "./variantZ/Collections";
import { Collections as CollectionsVariantC } from "./variantC/Collections";
import { Collections as CollectionsVariantB } from "./variantB/Collections";
import { Collections as CollectionsVariantM } from "./variantM/Collections";
import { render } from "mjml-react";

export const MediaBriefing: React.FC<{
    frontId: string;
    collections: ICollection[];
    variant?: string;
}> = ({ frontId, collections, variant }) => {
    if (variant === "z") {
        // NOT IN USE
        // FKA VARIANT C
        return (
            <CollectionsVariantZ
                frontId={frontId}
                collections={collections}
            ></CollectionsVariantZ>
        );
    } else if (variant === "c") {
        return (
            <CollectionsVariantC
                frontId={frontId}
                collections={collections}
            ></CollectionsVariantC>
        );
    } else if (variant === "b") {
        return (
            <CollectionsVariantB
                frontId={frontId}
                collections={collections}
            ></CollectionsVariantB>
        );
    } else if (variant === "m") {
        const { html } = render(
            <CollectionsVariantM
                frontId={frontId}
                collections={collections}
            ></CollectionsVariantM>,
            { validationLevel: "soft" }
        );

        // TODO: move this up to Email compoennt when we've deleted all other variants
        return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
    }

    return (
        <Collections frontId={frontId} collections={collections}></Collections>
    );
};
