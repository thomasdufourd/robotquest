const featuresToTest = require('../src/robotquest-features');


// up + turn-right ---> right


test('robot should have its head turned to the right when head is up and direction is right', () => {
   let robot = {
        position: {
            line: 0,
            column: 0
        },
        head: 'up'
    };

    let nbOfTurn = featuresToTest.turn(robot, 'turn-right', 0);
    expect(robot.head).toBe('right');
    expect(nbOfTurn).toBe(1);
});

// up + turn-left --> left
test('', () => {
    let robot = {
        position: {
            line: 0,
            column: 0
        },
        head: 'up'
    };

    let nbOfTurn = featuresToTest.turn(robot, 'turn-left', 0);
    expect(robot.head).toBe('left');
    expect(nbOfTurn).toBe(1);
});



// up + turn-right ---> right


test('robot should have its head down when head is left and direction is left', () => {
    let robot = {
        position: {
            line: 0,
            column: 0
        },
        head: 'left'
    };

    let nbOfTurn = featuresToTest.turn(robot, 'turn-left', 0);
    expect(nbOfTurn).toBe(1);
    expect(robot.head).toBe('down');
});

// TODO: write some more tests on turn()

test('robot should move 1 step up when head is up', () => {
    let maxLineIndex = 3; // 4 lines
    let maxColumnIndex = 3; // 4 columns
    let nbOfMoveAlreadyDone = 5;
    let robot = {
        position: {
            line: 2,
            column: 2
        },
        head: 'up'
    };

    let nbOfMove = featuresToTest.move(robot, maxLineIndex, maxColumnIndex, nbOfMoveAlreadyDone);
    expect(nbOfMove).toBe(6);
    expect(robot.position.column).toBe(2);
    expect(robot.position.line).toBe(3);
});

// TODO: write some more tests on move()

test('robot reaches the flag when its position meets `F` on the board', () => {
    let board = [
        ['.', 'F'] // only one line to this board
    ];
    let winningRobot = {
        position: {
            line: 0,
            column: 1
        },
        head: 'right'
    };

    let anotherRobot = {
        position: {
            line: 0,
            column: 0
        },
        head: 'right'
    };


    expect(featuresToTest.checkIfFlagReached(winningRobot, board)).toBe(true);
    expect(featuresToTest.checkIfFlagReached(anotherRobot, board)).toBe(false);

});

// TODO: write some more tests on checkIfFlagReached

