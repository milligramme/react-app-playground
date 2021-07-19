import p5 from "p5";

const sketch = (p5: p5) => {
  p5.setup = () => {
    p5.createCanvas(640, 480);
    p5.frameRate(12);
  };

  p5.draw = () => {
    p5.stroke(255);
    p5.strokeWeight(1);
    p5.fill(((p5.frameCount % 360) / 360) * 255);
    p5.push();
    p5.ellipse(p5.width * Math.random(), p5.height * Math.random(), 12, 12);
    p5.pop();
  };

  p5.mouseClicked = () => {
    p5.fill(255);
    p5.rect(0, 0, p5.width, p5.height);
  };
};

export default sketch;
