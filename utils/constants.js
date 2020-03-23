export const ROLES = {
    5:  ['liberal', 'liberal', 'liberal', 'fascist', 'hitler'],
    6:  ['liberal', 'liberal', 'liberal', 'liberal', 'fascist', 'hitler'],
    7:  ['liberal', 'liberal', 'liberal', 'liberal', 'fascist', 'fascist', 'hitler'],
    8:  ['liberal', 'liberal', 'liberal', 'liberal', 'fascist', 'fascist', 'fascist', 'hitler'],
    9:  ['liberal', 'liberal', 'liberal', 'liberal', 'liberal', 'fascist', 'fascist', 'fascist', 'hitler'],
    10: ['liberal', 'liberal', 'liberal', 'liberal', 'liberal', 'liberal', 'fascist', 'fascist', 'fascist', 'hitler'],
};

//board powers
export const INVESTIGATE = 'investigate';
export const ELECT = 'elect';
export const PEEK = 'peek';
export const EXECUTE = 'execute';
export const WIN = 'win';

export const FASCIST_BOARD = {
    5:  [null, null, PEEK, EXECUTE, EXECUTE, WIN],
    6:  [null, null, PEEK, EXECUTE, EXECUTE, WIN],
    7:  [null, INVESTIGATE, ELECT, EXECUTE, EXECUTE, WIN],
    8:  [null, INVESTIGATE, ELECT, EXECUTE, EXECUTE, WIN],
    9:  [INVESTIGATE, INVESTIGATE, ELECT, EXECUTE, EXECUTE, WIN],
    10: [INVESTIGATE, INVESTIGATE, ELECT, EXECUTE, EXECUTE, WIN],
};

export const LIBERAL_BOARD = [null, null, null, null, WIN];

export const POLICIES = [
    'liberal',
    'liberal',
    'liberal',
    'liberal',
    'liberal',
    'liberal',
    'fascist',
    'fascist',
    'fascist',
    'fascist',
    'fascist',
    'fascist',
    'fascist',
    'fascist',
    'fascist',
    'fascist',
    'fascist'
];


