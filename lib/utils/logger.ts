import { ColorList } from '../interfaces/logger';

/**
 * Custom colors' object to list of colors with their numbers.
 */
export const Colors: ColorList = {
    black:   [ 30, 39 ],
    red:     [ 31, 39 ],
    green:   [ 32, 39 ],
    yellow:  [ 33, 39 ],
    blue:    [ 34, 39 ],
    magenta: [ 35, 39 ],
    cyan:    [ 36, 39 ],
    white:   [ 37, 39 ],
    gray:    [ 90, 39 ],
    grey:    [ 90, 39 ],
};

/**
 * Custom Date format option object to store date formatting options.
 */
export const DateFormatOptions: Intl.DateTimeFormatOptions = {
    timeZone: 'UTC',
};
