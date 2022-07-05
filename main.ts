input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `).showImage(1)
    basic.pause(20000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    images.createImage(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `).showImage(0)
})
basic.forever(function () {
	
})
