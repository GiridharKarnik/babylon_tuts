window.addEventListener("DOMContentLoaded", function() {
  let canvas = document.getElementById("canvas");
  let engine = new BABYLON.Engine(canvas, true);

  let createScene = function() {
    let scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.White();


    let box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);
    
    //viewport, an eye.
    let camera = new BABYLON.ArcRotateCamera(
      "arcCamera",
      BABYLON.Tools.ToRadians(45),
      BABYLON.Tools.ToRadians(45),
      10.0,
      box.position,
      scene
    );

    /*
        attaching the the canvas controls to the camera 
        now we can provide key board inputs to the camera.
    */
    camera.attachControl(canvas, true);

    //add wasd controls to the camera.w
    camera.keysUp.push(87);
    camera.keysDown.push(83);
    camera.keysLeft.push(65);
    camera.keysRight.push(68);


    return scene;
  };

  let scene = createScene();

  //will be called 60 times per second, because babylon.js is capped at 60fps.
  //this method is called to draw the world.
  engine.runRenderLoop(function() {
    scene.render();
  });
});
