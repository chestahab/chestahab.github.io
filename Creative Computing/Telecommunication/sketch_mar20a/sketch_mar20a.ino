void setup() {
 Serial.begin(9600);
  while (Serial.available () <= 0) {
    Serial.println("hello");
    delay(300);
 }

}

void loop(){ 
  if (Serial.available() > 0){
    if (Serial.read() == 120) {
  int reading = analogRead(A0);
  int value = map(reading, 0, 1023, 0, 255);
  Serial.write(value);
    }
  }
}
