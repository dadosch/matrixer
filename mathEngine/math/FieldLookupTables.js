/**
 * Lookup table file that contains all kinds of lookup tables for the fields F4, F8, F9.
 *
 * @author David Augustat
 * */

/** @type {[{number: number, name: string}]} */
const F4ElementsNameLookup = [
    {number: Field.F4Zero, name: "0"},
    {number: Field.F4One, name: "1"},
    {number: Field.F4Alpha, name: "α"},
    {number: Field.F4AlphaPlusOne, name: "α+1"}
];

/** @type {[{number: number, inputString: string}]} */
const F4ElementsUserInputLookup = [
    {number: Field.F4Zero, inputString: "0"},
    {number: Field.F4One, inputString: "1"},
    {number: Field.F4Alpha, inputString: "a"},
    {number: Field.F4AlphaPlusOne, inputString: "a+1"}
];

/** @type {[{number: number, inverse: number}]} */
const F4MultiplicationInverseLookup = [
    {number: Field.F4Zero, inverse: Field.F4One},
    {number: Field.F4One, inverse: Field.F4One},
    {number: Field.F4Alpha, inverse: Field.F4AlphaPlusOne},
    {number: Field.F4AlphaPlusOne, inverse: Field.F4Alpha}
];

/** @type {[{number: number, inverse: number}]} */
const F4AdditionInverseLookup = [
    {number: Field.F4Zero, inverse: Field.F4Zero},
    {number: Field.F4One, inverse: Field.F4One},
    {number: Field.F4Alpha, inverse: Field.F4Alpha},
    {number: Field.F4AlphaPlusOne, inverse: Field.F4AlphaPlusOne}
];

/** @type {[{summand1: number, summand2: number, result: number}]} */
const F4AdditionLookup = [
    {summand1: Field.F4Zero, summand2: Field.F4Zero, result: Field.F4Zero},
    {summand1: Field.F4Zero, summand2: Field.F4One, result: Field.F4One},
    {summand1: Field.F4Zero, summand2: Field.F4Alpha, result: Field.F4Alpha},
    {summand1: Field.F4Zero, summand2: Field.F4AlphaPlusOne, result: Field.F4AlphaPlusOne},
    {summand1: Field.F4One, summand2: Field.F4Zero, result: Field.F4One},
    {summand1: Field.F4One, summand2: Field.F4One, result: Field.F4Zero},
    {summand1: Field.F4One, summand2: Field.F4Alpha, result: Field.F4AlphaPlusOne},
    {summand1: Field.F4One, summand2: Field.F4AlphaPlusOne, result: Field.F4Alpha},
    {summand1: Field.F4Alpha, summand2: Field.F4Zero, result: Field.F4Alpha},
    {summand1: Field.F4Alpha, summand2: Field.F4One, result: Field.F4AlphaPlusOne},
    {summand1: Field.F4Alpha, summand2: Field.F4Alpha, result: Field.F4Zero},
    {summand1: Field.F4Alpha, summand2: Field.F4AlphaPlusOne, result: Field.F4One},
    {summand1: Field.F4AlphaPlusOne, summand2: Field.F4Zero, result: Field.F4AlphaPlusOne},
    {summand1: Field.F4AlphaPlusOne, summand2: Field.F4One, result: Field.F4Alpha},
    {summand1: Field.F4AlphaPlusOne, summand2: Field.F4Alpha, result: Field.F4One},
    {summand1: Field.F4AlphaPlusOne, summand2: Field.F4AlphaPlusOne, result: Field.F4Zero}
];

/** @type {[{factor1: number, factor2: number, result: number}]} */
const F4MultiplicationLookup = [
    {factor1: Field.F4Zero, factor2: Field.F4Zero, result: Field.F4Zero},
    {factor1: Field.F4Zero, factor2: Field.F4One, result: Field.F4Zero},
    {factor1: Field.F4Zero, factor2: Field.F4Alpha, result: Field.F4Zero},
    {factor1: Field.F4Zero, factor2: Field.F4AlphaPlusOne, result: Field.F4Zero},
    {factor1: Field.F4One, factor2: Field.F4Zero, result: Field.F4Zero},
    {factor1: Field.F4One, factor2: Field.F4One, result: Field.F4One},
    {factor1: Field.F4One, factor2: Field.F4Alpha, result: Field.F4Alpha},
    {factor1: Field.F4One, factor2: Field.F4AlphaPlusOne, result: Field.F4AlphaPlusOne},
    {factor1: Field.F4Alpha, factor2: Field.F4Zero, result: Field.F4Zero},
    {factor1: Field.F4Alpha, factor2: Field.F4One, result: Field.F4Alpha},
    {factor1: Field.F4Alpha, factor2: Field.F4Alpha, result: Field.F4AlphaPlusOne},
    {factor1: Field.F4Alpha, factor2: Field.F4AlphaPlusOne, result: Field.F4One},
    {factor1: Field.F4AlphaPlusOne, factor2: Field.F4Zero, result: Field.F4Zero},
    {factor1: Field.F4AlphaPlusOne, factor2: Field.F4One, result: Field.F4AlphaPlusOne},
    {factor1: Field.F4AlphaPlusOne, factor2: Field.F4Alpha, result: Field.F4One},
    {factor1: Field.F4AlphaPlusOne, factor2: Field.F4AlphaPlusOne, result: Field.F4Alpha}
];

/** @type {[{number: number, name: string}]} */
const F8ElementsNameLookup = [
    {number: Field.F8Zero, name: "0"},
    {number: Field.F8One, name: "1"},
    {number: Field.F8Beta, name: "β"},
    {number: Field.F8OnePlusBeta, name: "1+β"},
    {number: Field.F8BetaSquare, name: "β²"},
    {number: Field.F8OnePlusBetaSquare, name: "1+β²"},
    {number: Field.F8BetaPlusBetaSquare, name: "β+β²"},
    {number: Field.F8OnePlusBetaPlusBetaSquare, name: "1+β+β²"}
];

/** @type {[{number: number, userInput: string}]} */
const F8ElementsUserInputLookup = [
    {number: Field.F8Zero, inputString: "0"},
    {number: Field.F8One, inputString: "1"},
    {number: Field.F8Beta, inputString: "b"},
    {number: Field.F8OnePlusBeta, inputString: "1+b"},
    {number: Field.F8BetaSquare, inputString: "bs"},
    {number: Field.F8OnePlusBetaSquare, inputString: "1+bs"},
    {number: Field.F8BetaPlusBetaSquare, inputString: "b+bs"},
    {number: Field.F8OnePlusBetaPlusBetaSquare, inputString: "1+b+bs"}
];

/** @type {[{number: number, inverse: number}]} */
const F8MultiplicationInverseLookup = [
    {number: Field.F8Zero, inverse: Field.F8One},
    {number: Field.F8One, inverse: Field.F8One},
    {number: Field.F8Beta, inverse: Field.F8OnePlusBetaSquare},
    {number: Field.F8OnePlusBeta, inverse: Field.F8BetaPlusBetaSquare},
    {number: Field.F8BetaSquare, inverse: Field.F8OnePlusBetaPlusBetaSquare},
    {number: Field.F8OnePlusBetaSquare, inverse: Field.F8Beta},
    {number: Field.F8BetaPlusBetaSquare, inverse: Field.F8OnePlusBeta},
    {number: Field.F8OnePlusBetaPlusBetaSquare, inverse: Field.F8BetaSquare}
];

/** @type {[{number: number, inverse: number}]} */
const F8AdditionInverseLookup = [
    {number: Field.F8Zero, inverse: Field.F8Zero},
    {number: Field.F8One, inverse: Field.F8One},
    {number: Field.F8Beta, inverse: Field.F8Beta},
    {number: Field.F8OnePlusBeta, inverse: Field.F8OnePlusBeta},
    {number: Field.F8BetaSquare, inverse: Field.F8BetaSquare},
    {number: Field.F8OnePlusBetaSquare, inverse: Field.F8OnePlusBetaSquare},
    {number: Field.F8BetaPlusBetaSquare, inverse: Field.F8BetaPlusBetaSquare},
    {number: Field.F8OnePlusBetaPlusBetaSquare, inverse: Field.F8OnePlusBetaPlusBetaSquare}
];

/** @type {[{summand1: number, summand2: number, result: number}]} */
const F8AdditionLookup = [
    {summand1: Field.F8Zero, summand2: Field.F8Zero, result: Field.F8Zero},
    {summand1: Field.F8Zero, summand2: Field.F8One, result: Field.F8One},
    {summand1: Field.F8Zero, summand2: Field.F8Beta, result: Field.F8Beta},
    {summand1: Field.F8Zero, summand2: Field.F8OnePlusBeta, result: Field.F8OnePlusBeta},
    {summand1: Field.F8Zero, summand2: Field.F8BetaSquare, result: Field.F8BetaSquare},
    {summand1: Field.F8Zero, summand2: Field.F8OnePlusBetaSquare, result: Field.F8OnePlusBetaSquare},
    {summand1: Field.F8Zero, summand2: Field.F8BetaPlusBetaSquare, result: Field.F8BetaPlusBetaSquare},
    {summand1: Field.F8Zero, summand2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8OnePlusBetaPlusBetaSquare},
    {summand1: Field.F8One, summand2: Field.F8Zero, result: Field.F8One},
    {summand1: Field.F8One, summand2: Field.F8One, result: Field.F8Zero},
    {summand1: Field.F8One, summand2: Field.F8Beta, result: Field.F8OnePlusBeta},
    {summand1: Field.F8One, summand2: Field.F8OnePlusBeta, result: Field.F8Beta},
    {summand1: Field.F8One, summand2: Field.F8BetaSquare, result: Field.F8OnePlusBetaSquare},
    {summand1: Field.F8One, summand2: Field.F8OnePlusBetaSquare, result: Field.F8BetaSquare},
    {summand1: Field.F8One, summand2: Field.F8BetaPlusBetaSquare, result: Field.F8OnePlusBetaPlusBetaSquare},
    {summand1: Field.F8One, summand2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8BetaPlusBetaSquare},
    {summand1: Field.F8Beta, summand2: Field.F8Zero, result: Field.F8Beta},
    {summand1: Field.F8Beta, summand2: Field.F8One, result: Field.F8OnePlusBeta},
    {summand1: Field.F8Beta, summand2: Field.F8Beta, result: Field.F8Zero},
    {summand1: Field.F8Beta, summand2: Field.F8OnePlusBeta, result: Field.F8One},
    {summand1: Field.F8Beta, summand2: Field.F8BetaSquare, result: Field.F8BetaPlusBetaSquare},
    {summand1: Field.F8Beta, summand2: Field.F8OnePlusBetaSquare, result: Field.F8OnePlusBetaPlusBetaSquare},
    {summand1: Field.F8Beta, summand2: Field.F8BetaPlusBetaSquare, result: Field.F8BetaSquare},
    {summand1: Field.F8Beta, summand2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8OnePlusBetaSquare},
    {summand1: Field.F8OnePlusBeta, summand2: Field.F8Zero, result: Field.F8OnePlusBeta},
    {summand1: Field.F8OnePlusBeta, summand2: Field.F8One, result: Field.F8Beta},
    {summand1: Field.F8OnePlusBeta, summand2: Field.F8Beta, result: Field.F8One},
    {summand1: Field.F8OnePlusBeta, summand2: Field.F8OnePlusBeta, result: Field.F8Zero},
    {summand1: Field.F8OnePlusBeta, summand2: Field.F8BetaSquare, result: Field.F8OnePlusBetaPlusBetaSquare},
    {summand1: Field.F8OnePlusBeta, summand2: Field.F8OnePlusBetaSquare, result: Field.F8BetaPlusBetaSquare},
    {summand1: Field.F8OnePlusBeta, summand2: Field.F8BetaPlusBetaSquare, result: Field.F8OnePlusBetaSquare},
    {summand1: Field.F8OnePlusBeta, summand2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8BetaSquare},
    {summand1: Field.F8BetaSquare, summand2: Field.F8Zero, result: Field.F8BetaSquare},
    {summand1: Field.F8BetaSquare, summand2: Field.F8One, result: Field.F8OnePlusBetaSquare},
    {summand1: Field.F8BetaSquare, summand2: Field.F8Beta, result: Field.F8BetaPlusBetaSquare},
    {summand1: Field.F8BetaSquare, summand2: Field.F8OnePlusBeta, result: Field.F8OnePlusBetaPlusBetaSquare},
    {summand1: Field.F8BetaSquare, summand2: Field.F8BetaSquare, result: Field.F8Zero},
    {summand1: Field.F8BetaSquare, summand2: Field.F8OnePlusBetaSquare, result: Field.F8One},
    {summand1: Field.F8BetaSquare, summand2: Field.F8BetaPlusBetaSquare, result: Field.F8Beta},
    {summand1: Field.F8BetaSquare, summand2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8OnePlusBeta},
    {summand1: Field.F8OnePlusBetaSquare, summand2: Field.F8Zero, result: Field.F8OnePlusBetaSquare},
    {summand1: Field.F8OnePlusBetaSquare, summand2: Field.F8One, result: Field.F8BetaSquare},
    {summand1: Field.F8OnePlusBetaSquare, summand2: Field.F8Beta, result: Field.F8OnePlusBetaPlusBetaSquare},
    {summand1: Field.F8OnePlusBetaSquare, summand2: Field.F8OnePlusBeta, result: Field.F8BetaPlusBetaSquare},
    {summand1: Field.F8OnePlusBetaSquare, summand2: Field.F8BetaSquare, result: Field.F8One},
    {summand1: Field.F8OnePlusBetaSquare, summand2: Field.F8OnePlusBetaSquare, result: Field.F8Zero},
    {summand1: Field.F8OnePlusBetaSquare, summand2: Field.F8BetaPlusBetaSquare, result: Field.F8OnePlusBeta},
    {summand1: Field.F8OnePlusBetaSquare, summand2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8Beta},
    {summand1: Field.F8BetaPlusBetaSquare, summand2: Field.F8Zero, result: Field.F8BetaPlusBetaSquare},
    {summand1: Field.F8BetaPlusBetaSquare, summand2: Field.F8One, result: Field.F8OnePlusBetaPlusBetaSquare},
    {summand1: Field.F8BetaPlusBetaSquare, summand2: Field.F8Beta, result: Field.F8BetaSquare},
    {summand1: Field.F8BetaPlusBetaSquare, summand2: Field.F8OnePlusBeta, result: Field.F8OnePlusBetaSquare},
    {summand1: Field.F8BetaPlusBetaSquare, summand2: Field.F8BetaSquare, result: Field.F8Beta},
    {summand1: Field.F8BetaPlusBetaSquare, summand2: Field.F8OnePlusBetaSquare, result: Field.F8OnePlusBeta},
    {summand1: Field.F8BetaPlusBetaSquare, summand2: Field.F8BetaPlusBetaSquare, result: Field.F8Zero},
    {summand1: Field.F8BetaPlusBetaSquare, summand2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8One},
    {summand1: Field.F8OnePlusBetaPlusBetaSquare, summand2: Field.F8Zero, result: Field.F8OnePlusBetaPlusBetaSquare},
    {summand1: Field.F8OnePlusBetaPlusBetaSquare, summand2: Field.F8One, result: Field.F8BetaPlusBetaSquare},
    {summand1: Field.F8OnePlusBetaPlusBetaSquare, summand2: Field.F8Beta, result: Field.F8OnePlusBetaSquare},
    {summand1: Field.F8OnePlusBetaPlusBetaSquare, summand2: Field.F8OnePlusBeta, result: Field.F8BetaSquare},
    {summand1: Field.F8OnePlusBetaPlusBetaSquare, summand2: Field.F8BetaSquare, result: Field.F8OnePlusBeta},
    {summand1: Field.F8OnePlusBetaPlusBetaSquare, summand2: Field.F8OnePlusBetaSquare, result: Field.F8Beta},
    {summand1: Field.F8OnePlusBetaPlusBetaSquare, summand2: Field.F8BetaPlusBetaSquare, result: Field.F8One},
    {summand1: Field.F8OnePlusBetaPlusBetaSquare, summand2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8Zero}
];

/** @type {[{factor1: number, factor2: number, result: number}]} */
const F8MultiplicationLookup = [
    {factor1: Field.F8Zero, factor2: Field.F8Zero, result: Field.F8Zero},
    {factor1: Field.F8Zero, factor2: Field.F8One, result: Field.F8Zero},
    {factor1: Field.F8Zero, factor2: Field.F8Beta, result: Field.F8Zero},
    {factor1: Field.F8Zero, factor2: Field.F8OnePlusBeta, result: Field.F8Zero},
    {factor1: Field.F8Zero, factor2: Field.F8BetaSquare, result: Field.F8Zero},
    {factor1: Field.F8Zero, factor2: Field.F8OnePlusBetaSquare, result: Field.F8Zero},
    {factor1: Field.F8Zero, factor2: Field.F8BetaPlusBetaSquare, result: Field.F8Zero},
    {factor1: Field.F8Zero, factor2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8Zero},
    {factor1: Field.F8One, factor2: Field.F8Zero, result: Field.F8Zero},
    {factor1: Field.F8One, factor2: Field.F8One, result: Field.F8One},
    {factor1: Field.F8One, factor2: Field.F8Beta, result: Field.F8Beta},
    {factor1: Field.F8One, factor2: Field.F8OnePlusBeta, result: Field.F8OnePlusBeta},
    {factor1: Field.F8One, factor2: Field.F8BetaSquare, result: Field.F8BetaSquare},
    {factor1: Field.F8One, factor2: Field.F8OnePlusBetaSquare, result: Field.F8OnePlusBetaSquare},
    {factor1: Field.F8One, factor2: Field.F8BetaPlusBetaSquare, result: Field.F8BetaPlusBetaSquare},
    {factor1: Field.F8One, factor2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8OnePlusBetaPlusBetaSquare},
    {factor1: Field.F8Beta, factor2: Field.F8Zero, result: Field.F8Zero},
    {factor1: Field.F8Beta, factor2: Field.F8One, result: Field.F8Beta},
    {factor1: Field.F8Beta, factor2: Field.F8Beta, result: Field.F8BetaSquare},
    {factor1: Field.F8Beta, factor2: Field.F8OnePlusBeta, result: Field.F8BetaPlusBetaSquare},
    {factor1: Field.F8Beta, factor2: Field.F8BetaSquare, result: Field.F8OnePlusBeta},
    {factor1: Field.F8Beta, factor2: Field.F8OnePlusBetaSquare, result: Field.F8One},
    {factor1: Field.F8Beta, factor2: Field.F8BetaPlusBetaSquare, result: Field.F8OnePlusBetaPlusBetaSquare},
    {factor1: Field.F8Beta, factor2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8OnePlusBetaSquare},
    {factor1: Field.F8OnePlusBeta, factor2: Field.F8Zero, result: Field.F8Zero},
    {factor1: Field.F8OnePlusBeta, factor2: Field.F8One, result: Field.F8OnePlusBeta},
    {factor1: Field.F8OnePlusBeta, factor2: Field.F8Beta, result: Field.F8BetaPlusBetaSquare},
    {factor1: Field.F8OnePlusBeta, factor2: Field.F8OnePlusBeta, result: Field.F8OnePlusBetaSquare},
    {factor1: Field.F8OnePlusBeta, factor2: Field.F8BetaSquare, result: Field.F8OnePlusBetaPlusBetaSquare},
    {factor1: Field.F8OnePlusBeta, factor2: Field.F8OnePlusBetaSquare, result: Field.F8BetaSquare},
    {factor1: Field.F8OnePlusBeta, factor2: Field.F8BetaPlusBetaSquare, result: Field.F8One},
    {factor1: Field.F8OnePlusBeta, factor2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8Beta},
    {factor1: Field.F8BetaSquare, factor2: Field.F8Zero, result: Field.F8Zero},
    {factor1: Field.F8BetaSquare, factor2: Field.F8One, result: Field.F8BetaSquare},
    {factor1: Field.F8BetaSquare, factor2: Field.F8Beta, result: Field.F8OnePlusBeta},
    {factor1: Field.F8BetaSquare, factor2: Field.F8OnePlusBeta, result: Field.F8OnePlusBetaPlusBetaSquare},
    {factor1: Field.F8BetaSquare, factor2: Field.F8BetaSquare, result: Field.F8BetaPlusBetaSquare},
    {factor1: Field.F8BetaSquare, factor2: Field.F8OnePlusBetaSquare, result: Field.F8Beta},
    {factor1: Field.F8BetaSquare, factor2: Field.F8BetaPlusBetaSquare, result: Field.F8OnePlusBetaSquare},
    {factor1: Field.F8BetaSquare, factor2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8One},
    {factor1: Field.F8OnePlusBetaSquare, factor2: Field.F8Zero, result: Field.F8Zero},
    {factor1: Field.F8OnePlusBetaSquare, factor2: Field.F8One, result: Field.F8OnePlusBetaSquare},
    {factor1: Field.F8OnePlusBetaSquare, factor2: Field.F8Beta, result: Field.F8One},
    {factor1: Field.F8OnePlusBetaSquare, factor2: Field.F8OnePlusBeta, result: Field.F8BetaSquare},
    {factor1: Field.F8OnePlusBetaSquare, factor2: Field.F8BetaSquare, result: Field.F8Beta},
    {factor1: Field.F8OnePlusBetaSquare, factor2: Field.F8OnePlusBetaSquare, result: Field.F8OnePlusBetaPlusBetaSquare},
    {factor1: Field.F8OnePlusBetaSquare, factor2: Field.F8BetaPlusBetaSquare, result: Field.F8OnePlusBeta},
    {factor1: Field.F8OnePlusBetaSquare, factor2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8BetaPlusBetaSquare},
    {factor1: Field.F8BetaPlusBetaSquare, factor2: Field.F8Zero, result: Field.F8Zero},
    {factor1: Field.F8BetaPlusBetaSquare, factor2: Field.F8One, result: Field.F8BetaPlusBetaSquare},
    {factor1: Field.F8BetaPlusBetaSquare, factor2: Field.F8Beta, result: Field.F8OnePlusBetaPlusBetaSquare},
    {factor1: Field.F8BetaPlusBetaSquare, factor2: Field.F8OnePlusBeta, result: Field.F8One},
    {factor1: Field.F8BetaPlusBetaSquare, factor2: Field.F8BetaSquare, result: Field.F8OnePlusBetaSquare},
    {factor1: Field.F8BetaPlusBetaSquare, factor2: Field.F8OnePlusBetaSquare, result: Field.F8OnePlusBeta},
    {factor1: Field.F8BetaPlusBetaSquare, factor2: Field.F8BetaPlusBetaSquare, result: Field.F8Beta},
    {factor1: Field.F8BetaPlusBetaSquare, factor2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8BetaSquare},
    {factor1: Field.F8OnePlusBetaPlusBetaSquare, factor2: Field.F8Zero, result: Field.F8Zero},
    {factor1: Field.F8OnePlusBetaPlusBetaSquare, factor2: Field.F8One, result: Field.F8OnePlusBetaPlusBetaSquare},
    {factor1: Field.F8OnePlusBetaPlusBetaSquare, factor2: Field.F8Beta, result: Field.F8OnePlusBetaSquare},
    {factor1: Field.F8OnePlusBetaPlusBetaSquare, factor2: Field.F8OnePlusBeta, result: Field.F8Beta},
    {factor1: Field.F8OnePlusBetaPlusBetaSquare, factor2: Field.F8BetaSquare, result: Field.F8One},
    {factor1: Field.F8OnePlusBetaPlusBetaSquare, factor2: Field.F8OnePlusBetaSquare, result: Field.F8BetaPlusBetaSquare},
    {factor1: Field.F8OnePlusBetaPlusBetaSquare, factor2: Field.F8BetaPlusBetaSquare, result: Field.F8BetaSquare},
    {factor1: Field.F8OnePlusBetaPlusBetaSquare, factor2: Field.F8OnePlusBetaPlusBetaSquare, result: Field.F8OnePlusBeta}
];

/** @type {[{number: number, name: string}]} */
const F9ElementsNameLookup = [
    {number: Field.F9Zero, name: "0"},
    {number: Field.F9One, name: "1"},
    {number: Field.F9MinusOne, name: "-1"},
    {number: Field.F9Iota, name: "ι"},
    {number: Field.F9IotaPlusOne, name: "ι+1"},
    {number: Field.F9IotaMinusOne, name: "ι-1"},
    {number: Field.F9MinusIota, name: "-ι"},
    {number: Field.F9MinusIotaPlusOne, name: "-ι+1"},
    {number: Field.F9MinusIotaMinusOne, name: "-ι-1"}
];

/** @type {[{number: number, inputString: string}]} */
const F9ElementsUserInputLookup = [
    {number: Field.F9Zero, inputString: "0"},
    {number: Field.F9One, inputString: "1"},
    {number: Field.F9MinusOne, inputString: "-1"},
    {number: Field.F9Iota, inputString: "j"},
    {number: Field.F9IotaPlusOne, inputString: "j+1"},
    {number: Field.F9IotaMinusOne, inputString: "j-1"},
    {number: Field.F9MinusIota, inputString: "-j"},
    {number: Field.F9MinusIotaPlusOne, inputString: "-j+1"},
    {number: Field.F9MinusIotaMinusOne, inputString: "-j-1"}
];

/** @type {[{number: number, inverse: number}]} */
const F9MultiplicationInverseLookup = [
    {number: Field.F9Zero, inverse: Field.F9One},
    {number: Field.F9One, inverse: Field.F9One},
    {number: Field.F9MinusOne, inverse: Field.F9MinusOne},
    {number: Field.F9Iota, inverse: Field.F9MinusIota},
    {number: Field.F9IotaPlusOne, inverse: Field.F9IotaMinusOne},
    {number: Field.F9IotaMinusOne, inverse: Field.F9IotaPlusOne},
    {number: Field.F9MinusIota, inverse: Field.F9Iota},
    {number: Field.F9MinusIotaPlusOne, inverse: Field.F9MinusIotaMinusOne},
    {number: Field.F9MinusIotaMinusOne, inverse: Field.F9MinusIotaPlusOne}
];

/** @type {[{number: number, inverse: number}]} */
const F9AdditionInverseLookup = [
    {number: Field.F9Zero, inverse: Field.F9Zero},
    {number: Field.F9One, inverse: Field.F9MinusOne},
    {number: Field.F9MinusOne, inverse: Field.F9One},
    {number: Field.F9Iota, inverse: Field.F9MinusIota},
    {number: Field.F9IotaPlusOne, inverse: Field.F9MinusIotaMinusOne},
    {number: Field.F9IotaMinusOne, inverse: Field.F9MinusIotaPlusOne},
    {number: Field.F9MinusIota, inverse: Field.F9Iota},
    {number: Field.F9MinusIotaPlusOne, inverse: Field.F9IotaMinusOne},
    {number: Field.F9MinusIotaMinusOne, inverse: Field.F9IotaPlusOne}
];

/** @type {[{summand1: number, summand2: number, result: number}]} */
const F9AdditionLookup = [
    {summand1: Field.F9Zero, summand2: Field.F9Zero, result: Field.F9Zero},
    {summand1: Field.F9Zero, summand2: Field.F9One, result: Field.F9One},
    {summand1: Field.F9Zero, summand2: Field.F9MinusOne, result: Field.F9MinusOne},
    {summand1: Field.F9Zero, summand2: Field.F9Iota, result: Field.F9Iota},
    {summand1: Field.F9Zero, summand2: Field.F9IotaPlusOne, result: Field.F9IotaPlusOne},
    {summand1: Field.F9Zero, summand2: Field.F9IotaMinusOne, result: Field.F9IotaMinusOne},
    {summand1: Field.F9Zero, summand2: Field.F9MinusIota, result: Field.F9MinusIota},
    {summand1: Field.F9Zero, summand2: Field.F9MinusIotaPlusOne, result: Field.F9MinusIotaPlusOne},
    {summand1: Field.F9Zero, summand2: Field.F9MinusIotaMinusOne, result: Field.F9MinusIotaMinusOne},
    {summand1: Field.F9One, summand2: Field.F9Zero, result: Field.F9One},
    {summand1: Field.F9One, summand2: Field.F9One, result: Field.F9MinusOne},
    {summand1: Field.F9One, summand2: Field.F9MinusOne, result: Field.F9Zero},
    {summand1: Field.F9One, summand2: Field.F9Iota, result: Field.F9IotaPlusOne},
    {summand1: Field.F9One, summand2: Field.F9IotaPlusOne, result: Field.F9IotaMinusOne},
    {summand1: Field.F9One, summand2: Field.F9IotaMinusOne, result: Field.F9Iota},
    {summand1: Field.F9One, summand2: Field.F9MinusIota, result: Field.F9MinusIotaPlusOne},
    {summand1: Field.F9One, summand2: Field.F9MinusIotaPlusOne, result: Field.F9MinusIotaMinusOne},
    {summand1: Field.F9One, summand2: Field.F9MinusIotaMinusOne, result: Field.F9MinusIota},
    {summand1: Field.F9MinusOne, summand2: Field.F9Zero, result: Field.F9MinusOne},
    {summand1: Field.F9MinusOne, summand2: Field.F9One, result: Field.F9Zero},
    {summand1: Field.F9MinusOne, summand2: Field.F9MinusOne, result: Field.F9One},
    {summand1: Field.F9MinusOne, summand2: Field.F9Iota, result: Field.F9IotaMinusOne},
    {summand1: Field.F9MinusOne, summand2: Field.F9IotaPlusOne, result: Field.F9Iota},
    {summand1: Field.F9MinusOne, summand2: Field.F9IotaMinusOne, result: Field.F9IotaPlusOne},
    {summand1: Field.F9MinusOne, summand2: Field.F9MinusIota, result: Field.F9MinusIotaMinusOne},
    {summand1: Field.F9MinusOne, summand2: Field.F9MinusIotaPlusOne, result: Field.F9MinusIota},
    {summand1: Field.F9MinusOne, summand2: Field.F9MinusIotaMinusOne, result: Field.F9MinusIotaPlusOne},
    {summand1: Field.F9Iota, summand2: Field.F9Zero, result: Field.F9Iota},
    {summand1: Field.F9Iota, summand2: Field.F9One, result: Field.F9IotaPlusOne},
    {summand1: Field.F9Iota, summand2: Field.F9MinusOne, result: Field.F9IotaMinusOne},
    {summand1: Field.F9Iota, summand2: Field.F9Iota, result: Field.F9MinusIota},
    {summand1: Field.F9Iota, summand2: Field.F9IotaPlusOne, result: Field.F9MinusIotaPlusOne},
    {summand1: Field.F9Iota, summand2: Field.F9IotaMinusOne, result: Field.F9MinusIotaMinusOne},
    {summand1: Field.F9Iota, summand2: Field.F9MinusIota, result: Field.F9Zero},
    {summand1: Field.F9Iota, summand2: Field.F9MinusIotaPlusOne, result: Field.F9One},
    {summand1: Field.F9Iota, summand2: Field.F9MinusIotaMinusOne, result: Field.F9MinusOne},
    {summand1: Field.F9IotaPlusOne, summand2: Field.F9Zero, result: Field.F9IotaPlusOne},
    {summand1: Field.F9IotaPlusOne, summand2: Field.F9One, result: Field.F9IotaMinusOne},
    {summand1: Field.F9IotaPlusOne, summand2: Field.F9MinusOne, result: Field.F9Iota},
    {summand1: Field.F9IotaPlusOne, summand2: Field.F9Iota, result: Field.F9MinusIotaPlusOne},
    {summand1: Field.F9IotaPlusOne, summand2: Field.F9IotaPlusOne, result: Field.F9MinusIotaMinusOne},
    {summand1: Field.F9IotaPlusOne, summand2: Field.F9IotaMinusOne, result: Field.F9MinusIota},
    {summand1: Field.F9IotaPlusOne, summand2: Field.F9MinusIota, result: Field.F9One},
    {summand1: Field.F9IotaPlusOne, summand2: Field.F9MinusIotaPlusOne, result: Field.F9MinusOne},
    {summand1: Field.F9IotaPlusOne, summand2: Field.F9MinusIotaMinusOne, result: Field.F9Zero},
    {summand1: Field.F9IotaMinusOne, summand2: Field.F9Zero, result: Field.F9IotaMinusOne},
    {summand1: Field.F9IotaMinusOne, summand2: Field.F9One, result: Field.F9Iota},
    {summand1: Field.F9IotaMinusOne, summand2: Field.F9MinusOne, result: Field.F9IotaPlusOne},
    {summand1: Field.F9IotaMinusOne, summand2: Field.F9Iota, result: Field.F9MinusIotaMinusOne},
    {summand1: Field.F9IotaMinusOne, summand2: Field.F9IotaPlusOne, result: Field.F9MinusIota},
    {summand1: Field.F9IotaMinusOne, summand2: Field.F9IotaMinusOne, result: Field.F9MinusIotaPlusOne},
    {summand1: Field.F9IotaMinusOne, summand2: Field.F9MinusIota, result: Field.F9MinusOne},
    {summand1: Field.F9IotaMinusOne, summand2: Field.F9MinusIotaPlusOne, result: Field.F9Zero},
    {summand1: Field.F9IotaMinusOne, summand2: Field.F9MinusIotaMinusOne, result: Field.F9One},
    {summand1: Field.F9MinusIota, summand2: Field.F9Zero, result: Field.F9MinusIota},
    {summand1: Field.F9MinusIota, summand2: Field.F9One, result: Field.F9MinusIotaPlusOne},
    {summand1: Field.F9MinusIota, summand2: Field.F9MinusOne, result: Field.F9MinusIotaMinusOne},
    {summand1: Field.F9MinusIota, summand2: Field.F9Iota, result: Field.F9Zero},
    {summand1: Field.F9MinusIota, summand2: Field.F9IotaPlusOne, result: Field.F9One},
    {summand1: Field.F9MinusIota, summand2: Field.F9IotaMinusOne, result: Field.F9MinusOne},
    {summand1: Field.F9MinusIota, summand2: Field.F9MinusIota, result: Field.F9Iota},
    {summand1: Field.F9MinusIota, summand2: Field.F9MinusIotaPlusOne, result: Field.F9IotaPlusOne},
    {summand1: Field.F9MinusIota, summand2: Field.F9MinusIotaMinusOne, result: Field.F9IotaMinusOne},
    {summand1: Field.F9MinusIotaPlusOne, summand2: Field.F9Zero, result: Field.F9MinusIotaPlusOne},
    {summand1: Field.F9MinusIotaPlusOne, summand2: Field.F9One, result: Field.F9MinusIotaMinusOne},
    {summand1: Field.F9MinusIotaPlusOne, summand2: Field.F9MinusOne, result: Field.F9MinusIota},
    {summand1: Field.F9MinusIotaPlusOne, summand2: Field.F9Iota, result: Field.F9One},
    {summand1: Field.F9MinusIotaPlusOne, summand2: Field.F9IotaPlusOne, result: Field.F9MinusOne},
    {summand1: Field.F9MinusIotaPlusOne, summand2: Field.F9IotaMinusOne, result: Field.F9Zero},
    {summand1: Field.F9MinusIotaPlusOne, summand2: Field.F9MinusIota, result: Field.F9IotaPlusOne},
    {summand1: Field.F9MinusIotaPlusOne, summand2: Field.F9MinusIotaPlusOne, result: Field.F9IotaMinusOne},
    {summand1: Field.F9MinusIotaPlusOne, summand2: Field.F9MinusIotaMinusOne, result: Field.F9Iota},
    {summand1: Field.F9MinusIotaMinusOne, summand2: Field.F9Zero, result: Field.F9MinusIotaMinusOne},
    {summand1: Field.F9MinusIotaMinusOne, summand2: Field.F9One, result: Field.F9MinusIota},
    {summand1: Field.F9MinusIotaMinusOne, summand2: Field.F9MinusOne, result: Field.F9MinusIotaPlusOne},
    {summand1: Field.F9MinusIotaMinusOne, summand2: Field.F9Iota, result: Field.F9MinusOne},
    {summand1: Field.F9MinusIotaMinusOne, summand2: Field.F9IotaPlusOne, result: Field.F9Zero},
    {summand1: Field.F9MinusIotaMinusOne, summand2: Field.F9IotaMinusOne, result: Field.F9One},
    {summand1: Field.F9MinusIotaMinusOne, summand2: Field.F9MinusIota, result: Field.F9IotaMinusOne},
    {summand1: Field.F9MinusIotaMinusOne, summand2: Field.F9MinusIotaPlusOne, result: Field.F9Iota},
    {summand1: Field.F9MinusIotaMinusOne, summand2: Field.F9MinusIotaMinusOne, result: Field.F9IotaPlusOne},
];

/** @type {[{factor1: number, factor2: number, result: number}]} */
const F9MultiplicationLookup = [
    {factor1: Field.F9Zero, factor2: Field.F9Zero, result: Field.F9Zero},
    {factor1: Field.F9Zero, factor2: Field.F9One, result: Field.F9Zero},
    {factor1: Field.F9Zero, factor2: Field.F9MinusOne, result: Field.F9Zero},
    {factor1: Field.F9Zero, factor2: Field.F9Iota, result: Field.F9Zero},
    {factor1: Field.F9Zero, factor2: Field.F9IotaPlusOne, result: Field.F9Zero},
    {factor1: Field.F9Zero, factor2: Field.F9IotaMinusOne, result: Field.F9Zero},
    {factor1: Field.F9Zero, factor2: Field.F9MinusIota, result: Field.F9Zero},
    {factor1: Field.F9Zero, factor2: Field.F9MinusIotaPlusOne, result: Field.F9Zero},
    {factor1: Field.F9Zero, factor2: Field.F9MinusIotaMinusOne, result: Field.F9Zero},
    {factor1: Field.F9One, factor2: Field.F9Zero, result: Field.F9Zero},
    {factor1: Field.F9One, factor2: Field.F9One, result: Field.F9One},
    {factor1: Field.F9One, factor2: Field.F9MinusOne, result: Field.F9MinusOne},
    {factor1: Field.F9One, factor2: Field.F9Iota, result: Field.F9Iota},
    {factor1: Field.F9One, factor2: Field.F9IotaPlusOne, result: Field.F9IotaPlusOne},
    {factor1: Field.F9One, factor2: Field.F9IotaMinusOne, result: Field.F9IotaMinusOne},
    {factor1: Field.F9One, factor2: Field.F9MinusIota, result: Field.F9MinusIota},
    {factor1: Field.F9One, factor2: Field.F9MinusIotaPlusOne, result: Field.F9MinusIotaPlusOne},
    {factor1: Field.F9One, factor2: Field.F9MinusIotaMinusOne, result: Field.F9MinusIotaMinusOne},
    {factor1: Field.F9MinusOne, factor2: Field.F9Zero, result: Field.F9Zero},
    {factor1: Field.F9MinusOne, factor2: Field.F9One, result: Field.F9MinusOne},
    {factor1: Field.F9MinusOne, factor2: Field.F9MinusOne, result: Field.F9One},
    {factor1: Field.F9MinusOne, factor2: Field.F9Iota, result: Field.F9MinusIota},
    {factor1: Field.F9MinusOne, factor2: Field.F9IotaPlusOne, result: Field.F9MinusIotaMinusOne},
    {factor1: Field.F9MinusOne, factor2: Field.F9IotaMinusOne, result: Field.F9MinusIotaPlusOne},
    {factor1: Field.F9MinusOne, factor2: Field.F9MinusIota, result: Field.F9Iota},
    {factor1: Field.F9MinusOne, factor2: Field.F9MinusIotaPlusOne, result: Field.F9IotaMinusOne},
    {factor1: Field.F9MinusOne, factor2: Field.F9MinusIotaMinusOne, result: Field.F9IotaPlusOne},
    {factor1: Field.F9Iota, factor2: Field.F9Zero, result: Field.F9Zero},
    {factor1: Field.F9Iota, factor2: Field.F9One, result: Field.F9Iota},
    {factor1: Field.F9Iota, factor2: Field.F9MinusOne, result: Field.F9MinusIota},
    {factor1: Field.F9Iota, factor2: Field.F9Iota, result: Field.F9MinusOne},
    {factor1: Field.F9Iota, factor2: Field.F9IotaPlusOne, result: Field.F9IotaMinusOne},
    {factor1: Field.F9Iota, factor2: Field.F9IotaMinusOne, result: Field.F9MinusIotaMinusOne},
    {factor1: Field.F9Iota, factor2: Field.F9MinusIota, result: Field.F9One},
    {factor1: Field.F9Iota, factor2: Field.F9MinusIotaPlusOne, result: Field.F9IotaPlusOne},
    {factor1: Field.F9Iota, factor2: Field.F9MinusIotaMinusOne, result: Field.F9MinusIotaPlusOne},
    {factor1: Field.F9IotaPlusOne, factor2: Field.F9Zero, result: Field.F9Zero},
    {factor1: Field.F9IotaPlusOne, factor2: Field.F9One, result: Field.F9IotaPlusOne},
    {factor1: Field.F9IotaPlusOne, factor2: Field.F9MinusOne, result: Field.F9MinusIotaMinusOne},
    {factor1: Field.F9IotaPlusOne, factor2: Field.F9Iota, result: Field.F9IotaMinusOne},
    {factor1: Field.F9IotaPlusOne, factor2: Field.F9IotaPlusOne, result: Field.F9MinusIota},
    {factor1: Field.F9IotaPlusOne, factor2: Field.F9IotaMinusOne, result: Field.F9One},
    {factor1: Field.F9IotaPlusOne, factor2: Field.F9MinusIota, result: Field.F9MinusIotaPlusOne},
    {factor1: Field.F9IotaPlusOne, factor2: Field.F9MinusIotaPlusOne, result: Field.F9MinusOne},
    {factor1: Field.F9IotaPlusOne, factor2: Field.F9MinusIotaMinusOne, result: Field.F9MinusIota},
    {factor1: Field.F9IotaMinusOne, factor2: Field.F9Zero, result: Field.F9Zero},
    {factor1: Field.F9IotaMinusOne, factor2: Field.F9One, result: Field.F9IotaMinusOne},
    {factor1: Field.F9IotaMinusOne, factor2: Field.F9MinusOne, result: Field.F9MinusIotaPlusOne},
    {factor1: Field.F9IotaMinusOne, factor2: Field.F9Iota, result: Field.F9MinusIotaMinusOne},
    {factor1: Field.F9IotaMinusOne, factor2: Field.F9IotaPlusOne, result: Field.F9One},
    {factor1: Field.F9IotaMinusOne, factor2: Field.F9IotaMinusOne, result: Field.F9Iota},
    {factor1: Field.F9IotaMinusOne, factor2: Field.F9MinusIota, result: Field.F9IotaPlusOne},
    {factor1: Field.F9IotaMinusOne, factor2: Field.F9MinusIotaPlusOne, result: Field.F9MinusIota},
    {factor1: Field.F9IotaMinusOne, factor2: Field.F9MinusIotaMinusOne, result: Field.F9MinusOne},
    {factor1: Field.F9MinusIota, factor2: Field.F9Zero, result: Field.F9Zero},
    {factor1: Field.F9MinusIota, factor2: Field.F9One, result: Field.F9MinusIota},
    {factor1: Field.F9MinusIota, factor2: Field.F9MinusOne, result: Field.F9Iota},
    {factor1: Field.F9MinusIota, factor2: Field.F9Iota, result: Field.F9One},
    {factor1: Field.F9MinusIota, factor2: Field.F9IotaPlusOne, result: Field.F9MinusIotaPlusOne},
    {factor1: Field.F9MinusIota, factor2: Field.F9IotaMinusOne, result: Field.F9IotaPlusOne},
    {factor1: Field.F9MinusIota, factor2: Field.F9MinusIota, result: Field.F9MinusOne},
    {factor1: Field.F9MinusIota, factor2: Field.F9MinusIotaPlusOne, result: Field.F9MinusIotaMinusOne},
    {factor1: Field.F9MinusIota, factor2: Field.F9MinusIotaMinusOne, result: Field.F9IotaMinusOne},
    {factor1: Field.F9MinusIotaPlusOne, factor2: Field.F9Zero, result: Field.F9Zero},
    {factor1: Field.F9MinusIotaPlusOne, factor2: Field.F9One, result: Field.F9MinusIotaPlusOne},
    {factor1: Field.F9MinusIotaPlusOne, factor2: Field.F9MinusOne, result: Field.F9IotaMinusOne},
    {factor1: Field.F9MinusIotaPlusOne, factor2: Field.F9Iota, result: Field.F9IotaPlusOne},
    {factor1: Field.F9MinusIotaPlusOne, factor2: Field.F9IotaPlusOne, result: Field.F9MinusOne},
    {factor1: Field.F9MinusIotaPlusOne, factor2: Field.F9IotaMinusOne, result: Field.F9MinusIota},
    {factor1: Field.F9MinusIotaPlusOne, factor2: Field.F9MinusIota, result: Field.F9MinusIotaMinusOne},
    {factor1: Field.F9MinusIotaPlusOne, factor2: Field.F9MinusIotaPlusOne, result: Field.F9Iota},
    {factor1: Field.F9MinusIotaPlusOne, factor2: Field.F9MinusIotaMinusOne, result: Field.F9One},
    {factor1: Field.F9MinusIotaMinusOne, factor2: Field.F9Zero, result: Field.F9Zero},
    {factor1: Field.F9MinusIotaMinusOne, factor2: Field.F9One, result: Field.F9MinusIotaMinusOne},
    {factor1: Field.F9MinusIotaMinusOne, factor2: Field.F9MinusOne, result: Field.F9IotaPlusOne},
    {factor1: Field.F9MinusIotaMinusOne, factor2: Field.F9Iota, result: Field.F9MinusIotaPlusOne},
    {factor1: Field.F9MinusIotaMinusOne, factor2: Field.F9IotaPlusOne, result: Field.F9MinusIota},
    {factor1: Field.F9MinusIotaMinusOne, factor2: Field.F9IotaMinusOne, result: Field.F9MinusOne},
    {factor1: Field.F9MinusIotaMinusOne, factor2: Field.F9MinusIota, result: Field.F9IotaMinusOne},
    {factor1: Field.F9MinusIotaMinusOne, factor2: Field.F9MinusIotaPlusOne, result: Field.F9One},
    {factor1: Field.F9MinusIotaMinusOne, factor2: Field.F9MinusIotaMinusOne, result: Field.F9MinusIota},
];
