input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let SPEED = 13
    let RanArrow = randint(0, 8)
    let SPIN = true
    while (SPIN) {
        SPEED = SPEED + 75
        for (let index = 0; index < 8; index++) {
            // basic.show_number(index)
            basic.showArrow(MyArrayOfArrows[index], SPEED)
            if (index == RanArrow && SPEED > 600) {
                basic.showArrow(MyArrayOfArrows[index])
                SPEED = 0
                SPIN = false
                break
            }
            
        }
    }
})
basic.showIcon(IconNames.Heart)
let MyArrayOfArrows = [ArrowNames.North, ArrowNames.NorthEast, ArrowNames.East, ArrowNames.SouthEast, ArrowNames.South, ArrowNames.SouthWest, ArrowNames.West, ArrowNames.NorthWest]
