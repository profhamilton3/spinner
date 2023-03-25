input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    while (SPEED < 600) {
        for (let index = 0; index < 8; index++) {
            basic.showArrow(MyArrayOfArrows[index], SPEED)
            if (index == RanArrow && SPEED > 600) {
                SPEED = 0
                break
            }
            
        }
        SPEED = SPEED + 133
    }
})
let RanArrow = 0
let SPEED = 0
basic.showIcon(IconNames.Heart)
RanArrow = randint(0, 8)
let MyArrayOfArrows = [ArrowNames.North, ArrowNames.NorthEast, ArrowNames.East, ArrowNames.SouthEast, ArrowNames.South, ArrowNames.SouthWest, ArrowNames.West, ArrowNames.NorthWest]
