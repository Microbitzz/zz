control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_4_DOWN, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 255)
    robotbit.MotorRun(robotbit.Motors.M1B, 255)
    robotbit.MotorRun(robotbit.Motors.M2A, -255)
    robotbit.MotorRun(robotbit.Motors.M2B, -255)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_4_UP, function () {
    robotbit.MotorStopAll()
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_C_DOWN, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 255)
    robotbit.MotorRun(robotbit.Motors.M1B, -255)
    robotbit.MotorRun(robotbit.Motors.M2A, 255)
    robotbit.MotorRun(robotbit.Motors.M2B, -255)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_3_UP, function () {
    robotbit.MotorStopAll()
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_D_DOWN, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, -255)
    robotbit.MotorRun(robotbit.Motors.M1B, 255)
    robotbit.MotorRun(robotbit.Motors.M2A, -255)
    robotbit.MotorRun(robotbit.Motors.M2B, 255)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_B_DOWN, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, -255)
    robotbit.MotorRun(robotbit.Motors.M1B, -255)
    robotbit.MotorRun(robotbit.Motors.M2A, -255)
    robotbit.MotorRun(robotbit.Motors.M2B, -255)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_A_DOWN, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 255)
    robotbit.MotorRun(robotbit.Motors.M1B, 255)
    robotbit.MotorRun(robotbit.Motors.M2A, 255)
    robotbit.MotorRun(robotbit.Motors.M2B, 255)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_B_UP, function () {
    robotbit.MotorStopAll()
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_3_DOWN, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, -255)
    robotbit.MotorRun(robotbit.Motors.M1B, -255)
    robotbit.MotorRun(robotbit.Motors.M2A, 255)
    robotbit.MotorRun(robotbit.Motors.M2B, 255)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_D_UP, function () {
    robotbit.MotorStopAll()
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_C_UP, function () {
    robotbit.MotorStopAll()
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
    robotbit.rgb().showColor(neopixel.rgb(30, 30, 30))
    basic.pause(1000)
    basic.showIcon(IconNames.SmallHeart)
    robotbit.rgb().showColor(neopixel.rgb(2, 30, 2))
    bluetooth.uartWriteValue("x", 0)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_2_DOWN, function () {
    geekservo += -15
    robotbit.GeekServo(robotbit.Servos.S1, geekservo)
    robotbit.GeekServo(robotbit.Servos.S2, geekservo)
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_A_UP, function () {
    robotbit.MotorStopAll()
})
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MES_DPAD_BUTTON_1_DOWN, function () {
    geekservo += 15
    robotbit.GeekServo(robotbit.Servos.S1, geekservo)
    robotbit.GeekServo(robotbit.Servos.S2, geekservo)
})
let geekservo = 0
input.setSoundThreshold(SoundThreshold.Loud, 150)
basic.showNumber(EventBusSource.MES_DPAD_CONTROLLER_ID)
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startLEDService()
bluetooth.startTemperatureService()
bluetooth.startMagnetometerService()
