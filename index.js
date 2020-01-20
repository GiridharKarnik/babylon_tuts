window.addEventListener("DOMContentLoaded", function() {
  let canvas = document.getElementById("canvas");
  let engine = new BABYLON.Engine(canvas, true);

  let createScene = function() {
    //step 1: crate a scene.
    let scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.White();

    //step 2: crate a 3D object in the scene
    let box = BABYLON.Mesh.CreateBox("Box", 4.0, scene);

    //step 3: crate a camera to view the world from. viewport, an eye.
    let camera = new BABYLON.ArcRotateCamera(
      "arcCamera",
      BABYLON.Tools.ToRadians(45),
      BABYLON.Tools.ToRadians(45),
      10.0,
      box.position,
      scene
    );

    /*
        step 4: camera controls.
        attaching the the canvas controls to the camera 
        now we can provide key board inputs to the camera.
    */
    camera.attachControl(canvas, true);

    //add wasd controls to the camera.w
    camera.keysUp.push(87);
    camera.keysDown.push(83);
    camera.keysLeft.push(65);
    camera.keysRight.push(68);

    //step 5: create a light source
    let light = new BABYLON.SpotLight(
      "spotLight",
      new BABYLON.Vector3(0, 10, 0),
      new BABYLON.Vector3(0, -1, 0),
      BABYLON.Tools.ToRadians(45),
      0.1,
      scene
    );

    //color of the light
    light.diffuse = new BABYLON.Color3(1, 0, 0);

    return scene;
  };

  let scene = createScene();

  //final step: start the game loop.
  //will be called 60 times per second, because babylon.js is capped at 60fps.
  //this method is called to draw the world.
  engine.runRenderLoop(function() {

    //make the light go close to the object over time.
    let light = scene.getLightByName("spotLight");
    light.position.y -= 0.01;


    scene.render();
  });
});
