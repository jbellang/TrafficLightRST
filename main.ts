input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # # # .
        # # . . #
        # . # . #
        # . . # #
        . # # # .
        `)
    if (input.buttonIsPressed(Button.A)) {
        music.playTone(523, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.Happy)
        for (let index = 0; index <= 4; index++) {
        	
        }
    }
})
// Reset Button
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
pins.digitalWritePin(DigitalPin.P0, 1)
basic.pause(500)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 1)
basic.pause(200)
basic.pause(100)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 1)
basic.pause(500)
pins.digitalWritePin(DigitalPin.P2, 0)
