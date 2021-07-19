import p5 from "p5";

const sketch = (p5: p5) => {
  p5.setup = () => {
    p5.createCanvas(240, 32);
    p5.frameRate(60);
    p5.background(255);
  };

  let x = 0;

  p5.draw = () => {
    p5.noStroke();
    p5.fill(255, 0.9);
    p5.rect(0, 0, p5.width, p5.height);

    x = p5.width * Math.sin((p5.frameCount / 180) % p5.TWO_PI);
    p5.noFill();
    p5.stroke(0);
    p5.strokeWeight(2);
    p5.line(x, 0, x, p5.height);
  };
};

export default sketch;
