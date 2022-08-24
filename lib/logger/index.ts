// Types
type ColorItem = [number, number]
type ColorList = {
 [key: string]: ColorItem
}

export const colorList: ColorList = {
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
}


export class Logger {
    private errColor: ColorItem;

    private infoColor: ColorItem;

    private logColor: ColorItem;

    spaces: number;

    constructor(errColor = colorList.red, infoColor = colorList.blue, logColor = colorList.green, spaces = 10) {
        this.errColor = errColor
        this.infoColor = infoColor
        this.logColor = logColor
        this.spaces = spaces
    }

    error(msg = '', err) {
        if (typeof msg !== 'string') {
            throw new TypeError('MSG is not of type string')
        }
        console.log(`${'\x1b['}${this.errColor[ 0 ]}${'m'}${msg}${err}${'\x1b['}${this.errColor[ 1 ]}${'m'}`)
    }

    info(msg) {
        let spaces = '';
        for (let i = 1; i <= this.spaces; i++) {
            spaces = spaces + ' '
        }
        console.info(`${'\x1b['}${this.infoColor[ 0 ]}${'m'}[${new Date().toLocaleString('en-US', { timezone: 'UTC' })}]${spaces}${msg}${'\x1b['}${this.infoColor[ 1 ]}${'m'}`)
    }


    log(msg) {
        console.log(`${'\x1b['}${this.logColor[ 0 ]}${'m'}${msg}${'\x1b['}${this.logColor[ 1 ]}${'m'}`)
    }
}

export default Logger
