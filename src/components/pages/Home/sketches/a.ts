const sketch = (p5: any) => {
  p5.setup = () => {
    p5.createCanvas(640, 480);
    p5.frameRate(12);
  };

  p5.draw = () => {
    p5.fill(255);
    p5.strokeWeight(3);
    p5.stroke(((p5.frameCount % 360) / 360) * 255);
    p5.push();
    p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
    p5.pop();
  };
};

export default sketch;
