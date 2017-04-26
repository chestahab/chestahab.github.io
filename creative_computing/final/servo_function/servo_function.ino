#include <Servo.h>      // include the servo library
 
Servo myservo;       // create servo instance
int pos = 0; 
 
void setup() {
  Serial.begin(9600);       // initialize serial communications
  myservo.attach(9);  // attach servo on pin 9 to the servo object
}
 
void loop(){
  if (Serial.available() > 0){
     int input = Serial.parseInt();  //wait for byte from P5
     //Serial.println(input);
     int respond = input;
     if (respond == 1) {
        for(pos = 115; pos>=70; pos-=10) {
          myservo.write(pos); // tell servo to go to position in variable 'pos'
          delay(30); // waits 15ms for the servo to reach the position
          }
        for(pos = 70; pos < 115; pos += 10) {
          myservo.write(pos); // tell servo to go to position in variable 'pos'
          delay(30); // waits 15ms for the servo to reach the position
          }
        //Src:http://www.instructables.com/id/Arduino-Servo-fast-sweep/
     }
     Serial.write(respond);           // write back to P5
  }
}
