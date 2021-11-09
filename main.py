def on_logo_pressed():
    robotbit.motor_stop_all()
    basic.show_icon(IconNames.HAPPY)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    robotbit.motor_run(robotbit.Motors.M1A, 255)
    robotbit.motor_run(robotbit.Motors.M1B, 255)
    robotbit.motor_run(robotbit.Motors.M2A, 255)
    robotbit.motor_run(robotbit.Motors.M2B, 255)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    robotbit.motor_run(robotbit.Motors.M1A, -255)
    robotbit.motor_run(robotbit.Motors.M1B, -255)
    robotbit.motor_run(robotbit.Motors.M2A, -255)
    robotbit.motor_run(robotbit.Motors.M2B, -255)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_sound_loud():
    basic.show_icon(IconNames.HEART)
    robotbit.rgb().show_color(neopixel.rgb(100, 100, 100))
    basic.pause(1000)
    basic.show_icon(IconNames.SMALL_HEART)
    robotbit.rgb().show_color(neopixel.rgb(2, 100, 9))
input.on_sound(DetectedSound.LOUD, on_sound_loud)

radio.set_group(0)
input.set_sound_threshold(SoundThreshold.LOUD, 150)
basic.show_number(0)