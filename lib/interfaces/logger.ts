/**
 * Custom color item type to store color numbers.
 */
export type ColorItem = [number, number];

/**
 * Custom color list type to store list of colors.
 */
export type ColorList = {
    [key: string]: ColorItem;
}
