//Terrain Rotation
AFRAME.registerComponent("island-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") {
          if (this.data.speedOfRotation < 0.1) {
            this.data.speedOfRotation += 0.01;
          }
        }
        if (e.key === "ArrowLeft") {
          if (this.data.speedOfRotation > -0.1) {
            this.data.speedOfRotation -= 0.01;
          }
        }
      });
    },
    tick: function () {
      var mapRotation = this.el.getAttribute("rotation");
  
      mapRotation.y += this.data.speedOfRotation;
  
      this.el.setAttribute("rotation", {
        x: mapRotation.x,
        y: mapRotation.y,
        z: mapRotation.z,
      });
    },
  });
  
  //Plane rotation component
  AFRAME.registerComponent("fish-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var fishRotation = this.data.speedOfRotation;      
        var fishPosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (fishRotation.x < 10) {
            fishRotation.x += 0.5;
            this.el.setAttribute("rotation", fishRotation);
          }
        }
        if (e.key === "ArrowLeft") {
          if (fishRotation.x > -10) {
            fishRotation.x -= 0.5;
            this.el.setAttribute("rotation", fishRotation);
          }
        }
        if (e.key === "ArrowUp") {
          if (fishRotation.z < 20) {
            fishRotation.z += 0.5;
            this.el.setAttribute("rotation", fishRotation);
          }
          if (fishPosition.y < 2) {
            fishPosition.y += 0.01;
            this.el.setAttribute("position", fishPosition);
          }
        }
        if (e.key === "ArrowDown") {
          if (fishRotation.z > -10) {
            fishRotation.z -= 0.5;
            this.el.setAttribute("rotation", fishRotation);
          }
          if (fishPosition.y > -2) {
            fishPosition.y -= 0.01;
            this.el.setAttribute("position", fishPosition);
          }
        }
      });
    }
  });
  