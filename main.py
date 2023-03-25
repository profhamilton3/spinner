def on_button_pressed_a():
    basic.show_arrow(ArrowNames.NORTH)
input.on_button_pressed(Button.A, on_button_pressed_a)

basic.show_icon(IconNames.HEART)
RanArrow = randint(0, 8)
MyArrayOfArrows = [images.arrow_image(ArrowNames.NORTH),
    images.arrow_image(ArrowNames.NORTH_EAST),
    images.arrow_image(ArrowNames.EAST),
    images.arrow_image(ArrowNames.SOUTH_EAST),
    images.arrow_image(ArrowNames.SOUTH),
    images.arrow_image(ArrowNames.SOUTH_WEST),
    images.arrow_image(ArrowNames.WEST),
    images.arrow_image(ArrowNames.NORTH_WEST)]