type TypeA = string;
type TypeB = number;
type TypeC = boolean;
type TypeD = undefined;
type TypeE = null;

type TypeF = TypeA extends string
    ? string
    : TypeB extends number
    ? number
    : TypeC extends boolean
    ? boolean
    : TypeD extends undefined
    ? undefined
    : TypeE extends null
    ? null
    : never;

    