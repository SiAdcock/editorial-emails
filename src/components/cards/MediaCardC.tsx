import React from "react";
import { TdCSS } from "../../css";
import { palette } from "@guardian/src-foundations";
// import { Content } from "../../api";
// import { formatImage } from "../../image";
import { Table, RowCell, TableRowCell } from "../../layout/Table";
import { Image } from "../../components/Image";
import { headline } from "../../styles/typography";

const tdStyle: TdCSS = {
    backgroundColor: palette.neutral[100],
    padding: "0px 10px 20px 10px",
    borderLeft: `1px solid ${palette.neutral[20]}`,
    borderBottom: `1px solid ${palette.neutral[20]}`
};

const tdHeadlineStyle: TdCSS = {
    ...headline({ level: 2 }),
    color: palette.neutral[20]
};

interface Props {
    headline: string;
    cardUrl: string;
    imageSrc?: string;
    imageAlt?: string;
    imageRating?: number;
    imageSalt?: string;
}

// const brazeParameter = "?##braze_utm##";

export const MediaCardC: React.FC<Props> = ({
    headline,
    cardUrl,
    imageSrc,
    imageAlt,
    imageRating = 1,
    imageSalt
}) => {
    // const image =
    //     content.properties.maybeContent.trail.trailPicture.allImages[0];
    // const formattedImage = formatImage(
    //     image.url,
    //     salt,
    //     579,
    //     content.card.starRating
    // );

    // const headline = content.header.headline;
    // const webURL = content.properties.webUrl + brazeParameter;
    // const imageURL = formattedImage;
    // const imageAlt = content.header.headline;

    return (
        <TableRowCell tdStyle={tdStyle}>
            <Table>
                <RowCell>
                    <Image
                        src={imageSrc}
                        linkTo={`${cardUrl}?##braze_utm##`}
                        alt={imageAlt}
                        width={579}
                        pillar="Opinion"
                    />
                </RowCell>
                <RowCell tdStyle={tdHeadlineStyle}>{headline}</RowCell>
            </Table>
        </TableRowCell>
    );
};
