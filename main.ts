input.onButtonPressed(Button.A, function on_button_pressed_a() {
    while (SPEED < 1000) {
        for (let index = 0; index < 8; index++) {
            basic.showArrow(MyArrayOfArrows.get(index)[index])
        }
    }
})
let SPEED = 0
basic.showIcon(IconNames.Heart)
SPEED = 0
let RanArrow = randint(0, 8)
let MyArrayOfArrows = [images.arrowImage(ArrowNames.North), images.arrowImage(ArrowNames.NorthEast), images.arrowImage(ArrowNames.East), images.arrowImage(ArrowNames.SouthEast), images.arrowImage(ArrowNames.South), images.arrowImage(ArrowNames.SouthWest), images.arrowImage(ArrowNames.West), images.arrowImage(ArrowNames.NorthWest)]
