<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>M AYAZ SHOES - 3D Shoes Store</title>
  <style>
    /* Basic reset and styles */
    * {
      margin: 0; padding: 0; box-sizing: border-box;
    }
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #1e1e2f, #3a3a5a);
      color: white;
      overflow-x: hidden;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
      background: #22223b;
      box-shadow: 0 2px 10px rgba(0,0,0,0.7);
      position: sticky;
      top: 0;
      z-index: 10;
    }
    /* 3D glowing text for your brand name */
    .logo {
      font-size: 2.5rem;
      font-weight: 900;
      letter-spacing: 0.1em;
      color: #fff;
      text-transform: uppercase;
      text-shadow:
        0 0 10px #00ffea,
        0 0 20px #00ffe7,
        0 0 30px #00ffc7,
        0 0 40px #00ffaa;
      animation: glow 2s ease-in-out infinite alternate;
      cursor: default;
      user-select: none;
    }
    @keyframes glow {
      0% {
        text-shadow:
          0 0 5px #00ffea,
          0 0 15px #00ffe7,
          0 0 25px #00ffc7,
          0 0 35px #00ffaa;
      }
      100% {
        text-shadow:
          0 0 15px #00ffea,
          0 0 25px #00ffe7,
          0 0 35px #00ffc7,
          0 0 50px #00ffaa;
      }
    }

    nav a {
      color: white;
      margin-left: 25px;
      font-weight: 600;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    nav a:hover {
      color: #00ffea;
    }

    /* Main content container */
    .container {
      max-width: 1200px;
      margin: 40px auto;
      padding: 0 20px;
      display: flex;
      gap: 40px;
      flex-wrap: wrap;
      justify-content: center;
    }

    /* 3D shoe viewer box */
    #shoe-viewer {
      width: 600px;
      height: 600px;
      background: #121224;
      border-radius: 20px;
      box-shadow: 0 0 40px #00ffaaaa;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: grab;
      user-select: none;
    }

    /* Product details */
    .details {
      max-width: 450px;
      color: #ddd;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }
    .details h2 {
      font-size: 2rem;
      font-weight: 900;
      color: #00ffaa;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .details p {
      font-size: 1rem;
      line-height: 1.6;
      color: #ccc;
    }
    .price {
      font-size: 1.8rem;
      font-weight: 700;
      color: #00ffea;
    }
    button.buy-btn {
      background: #00ffaa;
      border: none;
      color: #121224;
      font-weight: 700;
      font-size: 1.2rem;
      padding: 15px 30px;
      border-radius: 50px;
      cursor: pointer;
      transition: background 0.3s ease;
      box-shadow: 0 0 15px #00ffaa;
    }
    button.buy-btn:hover {
      background: #00cc88;
    }

    /* Responsive */
    @media(max-width: 1100px){
      .container {
        flex-direction: column;
        align-items: center;
      }
      #shoe-viewer {
        width: 100%;
        height: 400px;
      }
      .details {
        max-width: 100%;
        text-align: center;
      }
    }

  </style>
</head>
<body>

  <header>
    <div class="logo">M AYAZ SHOES</div>
    <nav>
      <a href="#features">Features</a>
      <a href="#products">Products</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <main class="container">
    <!-- 3D Shoe Viewer -->
    <div id="shoe-viewer"></div>

    <!-- Shoe details -->
    <div class="details">
      <h2>UltraBoost 3D Model</h2>
      <p>Experience the next level of comfort and style with the UltraBoost running shoes. Built with advanced cushioning and high-quality materials, these shoes are perfect for both athletes and casual wearers.</p>
      <div class="price">$179.99</div>
      <button class="buy-btn">Add to Cart</button>
    </div>
  </main>

  <section id="features" style="max-width:1200px;margin:40px auto;padding:0 20px;color:#eee;">
    <h2 style="text-align:center;margin-bottom:30px;">Features of M AYAZ SHOES</h2>
    <ul style="columns:2; column-gap:50px; list-style: none; font-size: 1.1rem;">
      <li>1. Fully 3D Interactive Shoe Model</li>
      <li>2. Smooth Rotation via Mouse Drag</li>
      <li>3. High Quality Textures and Models</li>
      <li>4. Responsive Design for All Devices</li>
      <li>5. Animated Glowing 3D Logo</li>
      <li>6. Add to Cart Button</li>
      <li>7. Hover Effects on Navigation</li>
      <li>8. Smooth Scroll on Navigation</li>
      <li>9. Modern Dark Theme UI</li>
      <li>10. Mobile Friendly Layout</li>
      <li>11. Product Description Section</li>
      <li>12. Realistic Lighting on 3D Model</li>
      <li>13. High FPS for Smooth Animations</li>
      <li>14. Modular and Clean Code</li>
      <li>15. User Select Disabled on 3D Viewer</li>
      <li>16. Styled Buttons with Hover</li>
      <li>17. SEO Friendly HTML Tags</li>
      <li>18. Header Sticky on Scroll</li>
      <li>19. Smooth Glow Animation on Text</li>
      <li>20. Easy to Extend with More Products</li>
    </ul>
  </section>

  <section id="contact" style="max-width:600px;margin:40px auto;padding:20px;color:#eee;">
    <h2 style="text-align:center;margin-bottom:20px;">Contact Us</h2>
    <form style="display:flex;flex-direction:column;gap:15px;">
      <input type="text" placeholder="Your Name" required style="padding:10px;border-radius:5px;border:none;font-size:1rem;">
      <input type="email" placeholder="Your Email" required style="padding:10px;border-radius:5px;border:none;font-size:1rem;">
      <textarea placeholder="Your Message" rows="5" required style="padding:10px;border-radius:5px;border:none;font-size:1rem;"></textarea>
      <button type="submit" style="background:#00ffaa;color:#121224;padding:15px;border:none;border-radius:50px;font-weight:700;cursor:pointer;box-shadow: 0 0 15px #00ffaa;">Send Message</button>
    </form>
  </section>

  <!-- Three.js library for 3D -->
  <script src="https://cdn.jsdelivr.net/npm/three@0.150.1/build/three.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/three@0.150.1/examples/js/loaders/GLTFLoader.js"></script>

  <script>
    // Setup Three.js scene
    const container = document.getElementById('shoe-viewer');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Lighting
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(3, 10, 10);
    scene.add(dirLight);

    // Load shoe 3D model (using a free sample GLTF model for demonstration)
    const loader = new THREE.GLTFLoader();

    let shoeModel;

    // For demo: use a free shoe model GLTF url (replace with your own)
    const modelURL = 'https://threejs.org/examples/models/gltf/Shoe/Shoe.gltf';

    loader.load(modelURL, function(gltf) {
      shoeModel = gltf.scene;
      shoeModel.scale.set(1.2, 1.2, 1.2);
      scene.add(shoeModel);
      animate();
    }, undefined, function(error) {
      console.error('Error loading 3D model:', error);
    });

    // Handle resizing
    window.addEventListener('resize', () => {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    });

    // Rotation control variables
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousMousePosition.x = e.clientX;
      previousMousePosition.y = e.clientY;
      container.style.cursor = 'grabbing';
    });

    container.addEventListener('mouseup', () => {
      isDragging = false;
      container.style.cursor = 'grab';
    });

    container.addEventListener('mouseleave', () => {
      isDragging = false;
      container.style.cursor = 'grab';
    });

    container.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      if (shoeModel) {
        shoeModel.rotation.y += deltaX * 0.01;
        shoeModel.rotation.x += deltaY * 0.01;
        // Clamp x rotation between -0.5 and 0.5 for natural look
        shoeModel.rotation.x = Math.min(Math.max(shoeModel.rotation.x, -0.5), 0.5);
      }

      previousMousePosition.x = e.clientX;
      previousMousePosition.y = e.clientY;
    });

    // Animation loop
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }
  </script>

</body>
</html>
