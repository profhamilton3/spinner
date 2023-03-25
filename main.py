def on_button_pressed_a():
    while SPEED < 1000:
        for index in range(8):
            temp = MyArrayOfArrows[index]
            basic.show_arrow(temp,SPEED)
input.on_button_pressed(Button.A, on_button_pressed_a)

SPEED = 0
basic.show_icon(IconNames.HEART)
SPEED = 0
RanArrow = randint(0, 8)
MyArrayOfArrows = [images.arrow_image(ArrowNames.NORTH),
    images.arrow_image(ArrowNames.NORTH_EAST),
    images.arrow_image(ArrowNames.EAST),
    images.arrow_image(ArrowNames.SOUTH_EAST),
    images.arrow_image(ArrowNames.SOUTH),
    images.arrow_image(ArrowNames.SOUTH_WEST),
    images.arrow_image(ArrowNames.WEST),
    images.arrow_image(ArrowNames.NORTH_WEST)]