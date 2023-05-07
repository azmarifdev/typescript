/*
type NoobDeveloper = {
    name: string;
};

// type JuniorDeveloper = {
//     name: string;
//     expertise: string;
//     experience: number
// };

type JuniorDeveloper = NoobDeveloper & {
    expertise: string;
    experience: number;
};

// enum
// enum Level {
//     junior = 'junior',
//     mid = 'mid',
//     senior = 'senior',
// }
// enum
// type NextLevelDeveloper = JuniorDeveloper & {
//     leadershipExperience: number;
//     level: Level
// };

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number;
    level: 'junior' | 'mid' | 'senior';
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'arif',
    expertise: 'javascript',
    experience: 1,
};

// enum
// const developer: NextLevelDeveloper = {
//     name: 'azm',
//     expertise: 'typescript',
//     experience: 2,
//     leadershipExperience: 1,
//     level: Level.mid
// };
const developer: NextLevelDeveloper = {
    name: 'azm',
    expertise: 'typescript',
    experience: 2,
    leadershipExperience: 1,
    level: 'mid',
};
*/