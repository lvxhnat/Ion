import { ColorsEnum } from "common/theme";

/**
 * Contains the ID and Class of SVG encapsulated elements
 */
const SVGIDs = {
    BASE_SVG_ID: "linechart-svg"
}

/**
 * Contains ID and Classes of Non-SVG encapsulated elements
 */
enum WrapperIDs {
    BASE_CONTAINER_ID = "linechart-svg-container",
}

// Nested Enums https://topherpedersen.blog/2021/06/07/nested-enums-in-typescript/
export const LineChartIDs = {
    SVGIDs,
    WrapperIDs
}

export const LineChartConfig = {
    DEFAULT_WIDTH: 960,
    DEFAULT_HEIGHT: 500,
    DEFAULT_MARGIN_TOP: 10,
    DEFAULT_MARGIN_RIGHT: 30,
    DEFAULT_MARGIN_BOTTOM: 20,
    DEFAULT_MARGIN_LEFT: 35,
    DEFAULT_TIME_PARSE_FORMAT: "%Y-%m-%d",
    DEFAULT_SHOW_AVERAGE: false,
    DEFAULT_SHOW_GRID: false,
    DEFAULT_SHOW_AXIS: false,
    DEFAULT_SHOW_NORMALISED: false,
    DEFAULT_SHOW_TOOLTIP: false,
    DEFAULT_SHOW_LINE_AREA: false,
    DEFAULT_DARKMODE_LINE_COLOR: ColorsEnum.white,
    DEFAULT_LIGHTMODE_LINE_COLOR: ColorsEnum.black,
    DEFAULT_LINE_AREA_COLOR: "steelblue",
    DEFAULT_LINE_AREA_OPACITY: 0.6,
    DEFAULT_TOOLTIP_FONTSIZE: "12px",
    DEFAULT_DARKMODE_TOOLTIP_FONTCOLOR: ColorsEnum.white,
    DEFAULT_LIGHTMODE_TOOLTIP_FONTCOLOR: ColorsEnum.black,
}