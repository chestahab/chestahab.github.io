void setup() {
  pinMode(13, OUTPUT);
  Serial.begin(9600);
  // put your setup code here, to run once:

}

void loop() {
  int input = analogRead(0);
  if(input<300){
    digitalWrite(13,HIGH);
    delay (400);
    digitalWrite(13,LOW);
    delay(400);
    digitalWrite(13, HIGH);
  }
  else if(input<600){
    digitalWrite(13,HIGH);
    delay (400);
    digitalWrite(13,LOW);
    delay (80) ;
    digitalWrite(13, HIGH);
  }
  else if (input<1000){
    digitalWrite(13,HIGH);
  } else {
    digitalWrite(13,LOW);
  }
  Serial.println(input);
  // put your main code here, to run repeatedly:

}
