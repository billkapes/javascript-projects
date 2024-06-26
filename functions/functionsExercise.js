function makeLine(size, userChar = '#') {
    let line = "";
    for (let i=0; i<size; i++) {
        line += userChar;
    }
    return line;
}
console.log(makeLine(5));

function makeSquare(size) {
    return makeRectangle(size, size);
}
console.log(makeSquare(5));

function makeRectangle(width, height) {
    let rectangle = "";
    for (let i=0; i<height; i++) {
        rectangle += makeLine(width) + '\n';
    }
    return rectangle;
}
console.log(makeRectangle(5, 3));

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        stairs += makeLine(i+1) + '\n';
    }
    return stairs.slice(0, -1);
}
console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars, userChar = '#') {
    let spaceLine = '';
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += ' ';
    }
    spaceLine += makeLine(numChars, userChar);  
    for (let i = 0; i < numSpaces; i++) {
        spaceLine += ' ';
    }
    return spaceLine;
}
console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height, userChar = '#') {
    let isoscelesTriangle = '';
    for (let i = 0; i < height; i++) {
        isoscelesTriangle += makeSpaceLine(height - i - 1, 2 * i + 1, userChar) + '\n';
    }
    return isoscelesTriangle.slice(0, -1);
}
console.log(makeIsoscelesTriangle(5));

function makeDiamond(height, userChar = '#') {
    let diamond = '';
    diamond = makeIsoscelesTriangle(height, userChar) + '\n' + makeIsoscelesTriangle(height, userChar).split('\n').reverse().join('\n');
    return diamond;
}
console.log(makeDiamond(5, '\\'));