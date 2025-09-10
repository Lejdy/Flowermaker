function flowermaker() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //flowers
    const allFlowers = document.querySelectorAll(".flowers:checked");
    if (allFlowers.length === 0) {
      alert("Choose your flower style!")
      return;
    }

    const flowers = document.querySelectorAll("input[name='flowers']:checked");
    const cactus = document.querySelectorAll("input[name='cactus']:checked");
    if (cactus) {
      const cactus_img = new Image();

      cactus_img.addEventListener("load", () => {
        ctx.drawImage(cactus_img, 171, 147, 156, 178);
      });
      cactus_img.src = "/flowers/cactus.png";
    }

    

    //pots
    if (allFlowers.length > 0) {
      const pot = document.querySelector('input[name="pot"]:checked');
      if (!pot) {
          alert("Choose your pot!");
          return;
        }

    const pot_type = pot.value;
      switch (pot_type) {
        case "CLA": 
          const classic_img = new Image();

          classic_img.addEventListener("load", () => {
            ctx.drawImage(classic_img, 122, 233, 254, 299);
          });

          classic_img.src = "/pots/classic.png";
          break;
        
        case "VIO":
          const violet_img = new Image();

          violet_img.addEventListener("load", () => {
            ctx.drawImage(violet_img, 148, 280, 204, 237);
          });

          violet_img.src = "/pots/violet.png";
          break;

        case "GRE":
          const green_img = new Image();

          green_img.addEventListener("load", () => {
            ctx.drawImage(green_img, 166, 280, 168, 258);
          });

          green_img.src = "/pots/green.png";
          break;

        case "GRA":
          const gray_img = new Image();

          gray_img.addEventListener("load", () => {
            ctx.drawImage(gray_img, 172, 280, 156, 258);
          });

          gray_img.src = "/pots/gray.png";
          break;
      }
    }
  

  }
  
}

function clear_canvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


