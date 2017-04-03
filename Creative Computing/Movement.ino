#include <Servo.h>
Servo servoMotor;
int servoPin = 3;

void setup() {
  Serial.begin(9600);
  servoMotor.attach(servoPin);
}

void loop() {
  int analogValue = analogRead(A0);
  Serial.println(analogValue);
  int servoAngle = map(analogValue, 500, 750, 0, 125);
  servoMotor.write(servoAngle);
}
