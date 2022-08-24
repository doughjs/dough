import { ColorItem } from '../interfaces/logger';
import { Colors, DateFormatOptions } from '../utils/logger';

export default class Logger {
    /**
     * Private field to store error ColorItem.
     */
    private readonly errorColor: ColorItem;

    /**
     * Private field to store info ColorItem.
     */
    private readonly infoColor: ColorItem;

    /**
     * Private field to store log ColorItem.
     */
    private readonly logColor: ColorItem;

    /**
     * Private field to store number of indentations.
     */
    spaces: number;

    /**
     * Class constructor to initialize private fields.
     */
    constructor(
        errorColor: ColorItem = Colors.red,
        infoColor: ColorItem = Colors.blue,
        logColor: ColorItem = Colors.green,
        spaces = 10,
    ) {
        this.errorColor = errorColor;
        this.infoColor = infoColor;
        this.logColor = logColor;
        this.spaces = spaces;
    }

    /**
     * Method to log the error to standard error.
     *
     * @param msg - The error message.
     * @param err - The error.
     */
    error(msg = '', err) {
        if (typeof msg !== 'string') {
            throw new TypeError('Message is not of type string')
        }
        console.error(`\x1b[${this.errorColor[ 0 ]}m${msg}${err}\x1b[${this.errorColor[ 1 ]}m`);
    }

    /**
     * Method to log the custom error message to console with additional info.
     *
     * @param msg - The error message.
     */
    info(msg) {
        let spaces = '';
        for (let i = 1; i <= this.spaces; i++) {
            spaces = spaces + ' '
        }
        console.info(`\x1b[${this.infoColor[ 0 ]}m[${new Date().toLocaleString('en-US', DateFormatOptions)}]${spaces}${msg}\x1b[${this.infoColor[ 1 ]}m`);
    }

    /**
     * Method to log the custom error message to console.
     *
     * @param msg - The error message.
     */
    log(msg) {
        console.log(`\x1b[${this.logColor[ 0 ]}m${msg}\x1b[${this.logColor[ 1 ]}m`);
    }
}
