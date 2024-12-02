import "./style.css";

import {
  Application,
  Camera,
  Color,
  Entity,
  FILLMODE_FILL_WINDOW,
  RESOLUTION_AUTO,
} from "playcanvas";

const main = () => {
  const renderCanvas =
    document.querySelector<HTMLCanvasElement>("#renderCanvas");
  if (!renderCanvas) {
    return;
  }

  const app = new Application(renderCanvas);
  app.setCanvasResolution(RESOLUTION_AUTO);
  app.setCanvasFillMode(FILLMODE_FILL_WINDOW);
  window.addEventListener("resize", () => app.resizeCanvas());
  app.start();

  const camera = new Entity();
  camera.addComponent("camera", {
    clearColor: new Color(0.3, 0.3, 0.7),
  } as Camera);
  camera.setPosition(0, 0, 3);
  app.root.addChild(camera);

  const light = new Entity();
  light.addComponent("light");
  light.setEulerAngles(45, 45, 0);
  app.root.addChild(light);

  const box = new Entity();
  box.addComponent("model", { type: "box" });
  app.root.addChild(box);

  app.on("update", (dt: number) => {
    box.rotate(10 * dt, 20 * dt, 30 * dt);
  });
};

main();

