export const Colors = {
    SABERS: '#212121',
    FLASKS: '#FF5722',
    COINS: '#FF5722',
    STAVES: '#212121',

    OK: 'green',
    KO: 'red',

    Card: {
        upturned: 'white',
        downturned: '#fff',
        borderColorUp: '#B6B6B6',
        borderColorDown: '#1976D2'
    },

    Game: {
        backgroundColor: '#4CAF50'
    },

    Foundation: {
        backgroundColor: '#388E3C'
    },

    React: '#00d8ff'
};

export const Shadows = {
    Level1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    Level2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    Level3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    Level4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    Level5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)'
}

export const Dimensions = {
    Card: {
        width: 125,
        height: 175,
        borderRadius: 2
    },

    Game: {
        width: 957,
        height: 500
    }
}

const sidePadding = 10;

export const CardsLayouts = {
    1: [
        { top: 20, left: 37.5 },
    ],
    2: [
        { top: 20, left: 37.5 },
        { bottom: 20, left: 37.5, transform: 'rotate(180deg)' }
    ],
    get 3 () { return this[2].concat({ top: 62.5, left: 37.5 }); },
    4: [
        { top: 20, left: sidePadding },
        { top: 20, right: sidePadding },
        { bottom: 20, left: sidePadding, transform: 'rotate(180deg)' },
        { bottom: 20, right: sidePadding, transform: 'rotate(180deg)' }
    ],
    get 5 () { return this[4].concat({ top: 62.5, right: 37.5 }); },
    6: [
        { top: 20, left: sidePadding },
        { top: 62.5, left: sidePadding },
        { bottom: 20, left: sidePadding, transform: 'rotate(180deg)' },
        { top: 20, right: sidePadding },
        { top: 62.5, right: sidePadding },
        { bottom: 20, right: sidePadding, transform: 'rotate(180deg)' }
    ],
    get 7 () { return this[6].concat({ top: 40, left: 37.5 }); },
    get 8 () {
        return this[7].concat({ bottom: 40, left: 37.5,  transform: 'rotate(180deg)' })
    },
    9: [
        { top: 20, left: sidePadding },
        { top: 20, right: sidePadding },
        { top: 50, left: sidePadding },
        { top: 50, right: sidePadding },
        { top: 40, right: 37.5 },
        { bottom: 50, left: sidePadding, transform: 'rotate(180deg)' },
        { bottom: 50, right: sidePadding, transform: 'rotate(180deg)' },
        { bottom: 20, right: sidePadding, transform: 'rotate(180deg)' },
        { bottom: 20, left: sidePadding, transform: 'rotate(180deg)' },
    ],
    get 10 () {
        return this[9].concat({ bottom: 40, right: 37.5,  transform: 'rotate(180deg)' })
    },
    get 11 () {
        return this[9].concat({ bottom: 40, right: 37.5,  transform: 'rotate(180deg)' })
    },
    get 12 () {
        return this[9].concat({ bottom: 40, right: 37.5,  transform: 'rotate(180deg)' })
    },
    get 13 () {
        return this[9].concat({ bottom: 40, right: 37.5,  transform: 'rotate(180deg)' })
    },
    get 14 () {
        return this[9].concat({ bottom: 40, right: 37.5,  transform: 'rotate(180deg)' })
    },
    get 15 () {
        return this[9].concat({ bottom: 40, right: 37.5,  transform: 'rotate(180deg)' })
    },
    S: 's',
    E: 'e',
    M: 'm',
    D: 'd',
    B: 'b',
    N: 'n',
    Q: 'q',
    I: 'i'
}
