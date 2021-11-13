def on_logo_pressed():
    robotbit.motor_stop_all()
    basic.show_icon(IconNames.HAPPY)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def on_button_pressed_a():
    robotbit.motor_run(robotbit.Motors.M1A, 255)
    robotbit.motor_run(robotbit.Motors.M1B, 255)
    robotbit.motor_run(robotbit.Motors.M2A, 255)
    robotbit.motor_run(robotbit.Motors.M2B, 255)
    robotbit.rgb().show_color(neopixel.rgb(30, 2, 2))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_uart_data_received():
    basic.show_string("Z-1")
bluetooth.on_uart_data_received("1", on_uart_data_received)

def on_button_pressed_b():
    robotbit.motor_run(robotbit.Motors.M1A, -255)
    robotbit.motor_run(robotbit.Motors.M1B, -255)
    robotbit.motor_run(robotbit.Motors.M2A, -255)
    robotbit.motor_run(robotbit.Motors.M2B, -255)
    robotbit.rgb().show_color(neopixel.rgb(2, 2, 30))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_sound_loud():
    basic.show_icon(IconNames.HEART)
    robotbit.rgb().show_color(neopixel.rgb(30, 30, 30))
    basic.pause(1000)
    basic.show_icon(IconNames.SMALL_HEART)
    robotbit.rgb().show_color(neopixel.rgb(2, 30, 2))
    bluetooth.uart_write_value("x", 0)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_mes_dpad_controller_id_microbit_evt():
    if control.event_value() % 2 == 1:
        led.plot(Math.floor((control.event_value() - 1 - Math.floor((control.event_value() - 1) / 8) * 8) / 2),
            Math.floor((control.event_value() - 1) / 8))
    else:
        led.unplot(Math.floor((control.event_value() - 1 - Math.floor((control.event_value() - 1) / 8) * 8) / 2),
            Math.floor((control.event_value() - 1) / 8))
control.on_event(EventBusSource.MES_DPAD_CONTROLLER_ID,
    EventBusValue.MICROBIT_EVT_ANY,
    on_mes_dpad_controller_id_microbit_evt)

def on_uart_data_received2():
    basic.show_string("Z-A")
bluetooth.on_uart_data_received("A", on_uart_data_received2)

input.set_sound_threshold(SoundThreshold.LOUD, 150)
basic.show_number(0)
bluetooth.start_accelerometer_service()
bluetooth.start_button_service()
bluetooth.start_io_pin_service()
bluetooth.start_led_service()
bluetooth.start_temperature_service()
bluetooth.start_magnetometer_service()
bluetooth.start_uart_service()