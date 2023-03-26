def on_button_pressed_a():
    SPEED = 13
    RanArrow = randint(0, 8) 
    SPIN = True
    while SPIN:
        SPEED = SPEED + 75
        for index in range(8):
            #basic.show_number(index)
            basic.show_arrow(MyArrayOfArrows[index], SPEED)
            if  (index == RanArrow) and (SPEED > 600):
                basic.show_arrow(MyArrayOfArrows[index])
                SPEED = 0
                SPIN= False 
                break
                
        

input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_icon(IconNames.HEART)
MyArrayOfArrows = [ArrowNames.NORTH,
    ArrowNames.NORTH_EAST,
    ArrowNames.EAST,
    ArrowNames.SOUTH_EAST,
    ArrowNames.SOUTH,
    ArrowNames.SOUTH_WEST,
    ArrowNames.WEST,
    ArrowNames.NORTH_WEST]