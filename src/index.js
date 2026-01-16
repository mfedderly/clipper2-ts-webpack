import {inflatePathsD, JoinType, EndType } from "clipper2-ts";

const inflated = inflatePathsD(
    [[
        {x: 0, y: 0},
        {x: 1, y: 1},
        {x: 2, y: 0},
        {x: 0, y: 0},
    ]],
    10,
    JoinType.Round,
    EndType.Round,
    0,
    2,
    0
);

console.log(inflated);