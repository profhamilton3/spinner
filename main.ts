input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showArrow(ArrowNames.North)
})
basic.showIcon(IconNames.Heart)
let RanArrow = randint(0, 8)
let MyArrayOfArrows = [images.arrowImage(ArrowNames.North), images.arrowImage(ArrowNames.NorthEast), images.arrowImage(ArrowNames.East), images.arrowImage(ArrowNames.SouthEast), images.arrowImage(ArrowNames.South), images.arrowImage(ArrowNames.SouthWest), images.arrowImage(ArrowNames.West), images.arrowImage(ArrowNames.NorthWest)]
