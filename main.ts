input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    
    let SPIN = true
    while (SPIN) {
        SPEED = SPEED + 133
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
let RanArrow = 0
let SPEED = 0
basic.showIcon(IconNames.Heart)
RanArrow = randint(0, 8)
basic.showNumber(RanArrow)
let MyArrayOfArrows = [ArrowNames.North, ArrowNames.NorthEast, ArrowNames.East, ArrowNames.SouthEast, ArrowNames.South, ArrowNames.SouthWest, ArrowNames.West, ArrowNames.NorthWest]
