// TODO possibly use a map definition with key values to simplify
// TODO split out table css from td css

// For spans and a elements
export interface FontCSS {
    textDecoration?: "none";
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: number;
    lineHeight?: string;
    fontStyle?: "italic";
    color?: string;
    textAlign?: "center" | "left" | "right";
}

export interface TableCSS {
    borderSpacing?: number;
    borderCollapse?: "collapse";
    borderTop?: string;
    height?: string;
    width?: string;
    maxWidth?: string;
    backgroundColor?: string;
    margin?: string;
    padding?: string;
    color?: string;
    textAlign?: "center" | "left" | "right";
    background?: string;
    backgroundRepeat?: string;
    backgroundPosition?: string;
    backgroundImage?: string;
    verticalAlign?: string;
}

export interface TdCSS extends FontCSS {
    padding?: string;
    paddingBottom?: string;
    paddingTop?: string;
    paddingRight?: string;
    paddingLeft?: string;
    border?: string;
    borderTop?: string;
    borderLeft?: string;
    borderBottom?: string;
    backgroundColor?: string;
    width?: string;
    verticalAlign?: "bottom" | "top";
    height?: string;
}

export interface TrCSS {
    verticalAlign?: "top";
}

export interface ImageCSS {
    width?: string;
    outline?: string;
    display?: string;
    textDecoration?: "none";
    maxWidth?: string;
    clear?: "both";
    border?: string;
    height?: string;
    fontFamily?: string;
    color?: string;
    verticalAlign?: string;
}

export interface LinkCSS extends FontCSS {
    padding?: string;
    paddingBottom?: string;
    paddingTop?: string;
    borderTop?: string;
}
