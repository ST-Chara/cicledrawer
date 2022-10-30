startbit.onStartbit_getAngle(startbit.startbit_Servos.Servo1, function () {
    startbit.setServo(startbit.startbit_servorange.range2, 1, angle, 0)
})
input.onButtonPressed(Button.A, function () {
	
})
let angle = 0
angle = 0
startbit.startbit_Init()
startbit.startbit_digitaltube(startbit.startbit_digitaltubePort.port1, 7, 4)
startbit.setServo(startbit.startbit_servorange.range2, 1, angle, 200)
startbit.setServo(startbit.startbit_servorange.range2, 2, angle, 200)
basic.forever(function () {
    startbit.startbit_readAngle(startbit.startbit_Servos.Servo2)
    if (input.buttonIsPressed(Button.A)) {
        angle += 1
        if (angle > 270) {
            angle = 0
        }
        startbit.setServo(startbit.startbit_servorange.range2, 2, angle, 0)
    }
    startbit.startbit_showNumber(startbit.getServosAngle(startbit.startbit_Servos.Servo2))
})
