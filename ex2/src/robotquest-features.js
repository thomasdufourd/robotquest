module.exports =
    {turn, move, updateBoard, checkIfFlagReached, cloneRobot};

const SYMBOLS = {
    robot: setReverse('R'),
    tree: colorInGreen('T'),
    flag: colorInYellow('F'),
    water: setBlueBg('w')

}
module.exports.SYMBOLS = SYMBOLS;

const trailIndicators = {
    left: setBright('←'),
    right: setBright('→'),
    up: setBright('↑'),
    down: setBright('↓')
};

// Here
function turn(robot, step, turns) {
// nothing happened

    if (step === 'turn-right') {
        switch (robot.head) {
            case 'up':
                robot.head = 'right';
                break;
            case 'down':
                robot.head = 'left';
                break;
        }
    } else {
        switch (robot.head) {
            case 'up':
                robot.head = 'left';
                break;
            case 'down':
                robot.head = 'right';
                break;
            case 'left':
                robot.head = 'down';
        }
    }
    return 1;

}

function move(robot, maxLineIndex, maxColumnIndex, nbOfMoves) {
    nbOfMoves += 1;
    return nbOfMoves;
}

function updateBoard(board, previousRobotState, currentRobotState) {
    return;
}

function checkIfFlagReached(robot, board) {
    return false;
}

// utils
function cloneRobot(robot) {
    let newRobot = {};
    newRobot.position = {};
    newRobot.position.line = robot.position.line;
    newRobot.position.column = robot.position.column;
    newRobot.head = robot.head;
    return newRobot;
}


// presentation utils
function colorInGreen(char) {
    return `\x1b[32m${char}\x1b[0m`;
}

function colorInYellow(char) {
    return `\x1b[33m${char}\x1b[0m`;
}

function setBlueBg(char) {
    return `\x1b[44m${char}\x1b[0m`;
}

function setReverse(char) {
    return `\x1b[7m${char}\x1b[0m`;
}

function setBright(char) {
    return `\x1b[1m${char}\x1b[0m`;
}
