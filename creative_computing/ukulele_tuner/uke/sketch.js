var mic, fft;

function setup() {
   createCanvas(windowWidth,windowHeight);
   noFill();

   mic = new p5.AudioIn();
   mic.start();
   fft = new p5.FFT();
   fft.setInput(mic);
}

function draw() {
   background(0);
   fill(255,255,255);
   var spectrum = fft.analyze();
   
   var nyquist = 22050;

   var freqCent = fft.getCentroid();
   
   var meanCent = freqCent/(nyquist/spectrum.length);
   
   console.log(meanCent);
   
   text("centroid: "+round(freqCent)+" Hz", 10, 40);
   textSize(50);
   
   if (round(freqCent) >= 417 && round(freqCent) <465) {
     text("A");
     textSize(100);
     textFont("Helvetica");
     
   } else if (round(freqCent) >= 465 && round(freqCent) <508) {
     text("B");
     textSize(100);
     textFont("Helvetica");
     
   } else if (round(freqCent) >= 254 && round(freqCent) <276) {
     text("C");
     textSize(100);
     textFont("Helvetica");
     
   } else if (round(freqCent) >= 276 && round(freqCent) <309) {
     text("D");
     textSize(100);
     textFont("Helvetica");
     
   } else if (round(freqCent) >= 309 && round(freqCent) <340) {
     text("E");
     textSize(100);
     textFont("Helvetica");
     
   } else if (round(freqCent) >= 340 && round(freqCent) <370) {
     text("F");
     textSize(100);
     textFont("Helvetica");
     
   } else if (round(freqCent) >= 370 && round(freqCent) <417) {
     text("G");
     textSize(100);
     textFont("Helvetica");
     
   }
   
}