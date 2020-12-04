export enum Commands {
    TOGGLE,
    DRAW,
    MOVE_ROOMS,
    ADD_DEVICE,
    MOVE_DEVICE,
    MANAGE,
    UNDO,
    REDO
}

export const commandsDescription = {
    [Commands.TOGGLE]: {
        type: Commands.TOGGLE,
        name: "Toggle",
        description: "Toggles background blueprint visibility (if any photo uploaded).",
        image: "/toggleImageOff.svg"
    },
    [Commands.DRAW]: {
        type: Commands.DRAW,
        name: "Draw",
        description: "LPM: Add new room point <br/>LPM (on begining point): Finish room <br/>RPM (on room): Delete selected room <br/> RPM (while building): Remove added room point <br/>",
        image: "/drawRoom.svg"
    },
    [Commands.MOVE_ROOMS]: {
        type: Commands.MOVE_ROOMS,
        name: "Move rooms",
        description: "LPM drag (on room): Move selected room <br/>LPM drag (on wall): Move selected wall <br/>LPM drag (on point): Move selected point <br/>",
        image: "/moveRoom.svg"
    },
    [Commands.ADD_DEVICE]: {
        type: Commands.ADD_DEVICE,
        name: "Add device",
        description: "<table><tbody><tr><td>LPM:</td><td>Adds new device in selected place</td></tr><tr><td>RPM:</td><td>Removes selected device</td></tr></tbody></table>",
        image: "/addDevice.svg"
    },
    [Commands.MOVE_DEVICE]: {
        type: Commands.MOVE_DEVICE,
        name: "Move device",
        description: "LPM (drag): Moves selected device",
        image: "/moveDevice.svg"
    },
    [Commands.UNDO]: {
        type: Commands.UNDO,
        name: "Undo",
        description: "Undoes the last performed action.",
        image: "/undo.svg"
    },
    [Commands.REDO]: {
        type: Commands.REDO,
        name: "Redo",
        description: "Redoes the last performed action.",
        image: "/redo.svg"
    }
}