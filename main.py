def on_button_pressed_a():
    global SPEED
    while SPEED < 600:
        for index in range(8):
            basic.show_arrow(MyArrayOfArrows[index], SPEED)
            if  (index == RanArrow) and (SPEED > 600):
                SPEED = 0
                break
        SPEED = SPEED + 133
input.on_button_pressed(Button.A, on_button_pressed_a)

RanArrow = 0
SPEED = 0
basic.show_icon(IconNames.HEART)
RanArrow = randint(0, 8)
MyArrayOfArrows = [ArrowNames.NORTH,
    ArrowNames.NORTH_EAST,
    ArrowNames.EAST,
    ArrowNames.SOUTH_EAST,
    ArrowNames.SOUTH,
    ArrowNames.SOUTH_WEST,
    ArrowNames.WEST,
    ArrowNames.NORTH_WEST]