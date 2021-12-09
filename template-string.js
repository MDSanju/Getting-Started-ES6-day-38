const multiLineNew = `This is new es6 solution to apply multi line code.
It was so hard to do on old version before es6.
That time people was used to applying those (\ n and +) to break lines.
But now es6 is used like that easy putting muli line codes or breaking.
`;

console.log(multiLineNew);

const count = 5;
// old system dynamic
const oldOption = '<h3 class="friend-name">Friend-' + count + '</h3>';
console.log(oldOption);

// new es6 system dynamic
const esCount = 10;
const newEs6 = `<h3 class="friend-name">Friend-${esCount}</h3>`;
console.log(newEs6);

// system of using all valid js codes in this way
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const new2Es6 = `<h3 class="friend-name">Friend-${letters.length}</h3>`;
console.log(new2Es6);

// another example
const first = 'MD';
const last = 'Sanju';

// old system
const fullOld = first + ' ' + last;

// new system
// const fullNew = `${first} ${last}`;

// multiple times using system
const fullNew = `It's me: ${first} ${last}. Has bucks ${letters.length * 300}. Wanna go to Canada.`;
console.log(fullNew);