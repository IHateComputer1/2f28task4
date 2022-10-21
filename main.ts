led.plot(0, 0)
let never_gonna_give_u_up = 0
let never_gonna_let_you_down = 4
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        while (false) {
            never_gonna_give_u_up += 1
            basic.clearScreen()
            led.plot(never_gonna_give_u_up, 0)
            basic.pause(500)
        }
    }
    if (never_gonna_give_u_up > 4) {
        never_gonna_let_you_down += -1
    }
})
