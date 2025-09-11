function flowermaker() {
  const canvas = document.getElementById("canvas");

  const numberOfFlowers = document.getElementById('number').value;
  if (!numberOfFlowers) {
    alert("Choose number of flowers at first!")
  }
  
  if (numberOfFlowers < 0) {
    alert("Choose a non-negative number!")
  }

  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //flowers I
    const allFlowers = document.querySelectorAll(".flowers:checked");
    if (allFlowers.length === 0) {
      alert("Choose your flower style!")
      return;
    }

    const flowers = document.querySelectorAll("input[name='flowers']:checked");
    const cactus = document.querySelectorAll("input[name='cactus']:checked");
    
    if (flowers.length > 0 && cactus.length > 0) {
      alert("You can't choose cactus and different flowers at the same time!")
      return;
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
              ctx.drawImage(classic_img, 125, 246, 247, 235);
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
    
    //flowers II

    //cactus + cactus flower
    if (flowers.length === 0 && cactus.length > 0) {
      const cactus_img = new Image();

      cactus_img.addEventListener("load", () => {
      ctx.drawImage(cactus_img, 171, 147, 156, 178);
      });

      const cactus_flower = new Image();
      cactus_flower.onload = () => {
        for (let i = 0; i < numberOfFlowers; i++) {
        const randX = 175 + Math.random() * (156 - 35); 
        const randY = 147 + Math.random() * (178 - 35);

        ctx.drawImage(cactus_flower, randX, randY, 35, 35);
        }
      };
      cactus_img.src = "/flowers/cactus.png";
      cactus_flower.src = "/flowers/cactus_flower.png";
      
    }


    if (flowers.length > 0 && cactus.length === 0) {
      const stem_img = new Image ();
      stem_img.addEventListener("load", () => {
        ctx.drawImage(stem_img, 147, 124, 215, 203);
      });
      stem_img.src = "/flowers/stem.png";
    }
  }


  
  
}

function clear_canvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}


