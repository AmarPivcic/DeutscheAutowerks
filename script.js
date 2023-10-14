function load(buttonId){
    if(buttonId==="audia6")
    {
        document.getElementById("content").innerHTML=`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="./index.html">Back</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="album py-5 bg-body-tertiary bg-black">
        <div class="container">
        <h2 style="text-align: center; padding-bottom: 10px;" class="text-light">AUDI A6</h2>
        <h5 style="text-align: center; padding-bottom: 30px;" class="text-light">The Audi A6 is a sophisticated midsize luxury car known for its elegant design, advanced technology, and impressive performance.</h5>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/audi/A6Limo.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">
                <div class="card-body">
                  <h4 class="card-text text-light">Audi A6 Sedan 55 TFSI quattro</h4>
                  <p class="card-text text-light">Price €56.280</p>
                  <ul class="text-light">
                    <li>Engine: 3.0 TFSI V6</li>
                    <li>Power: 340 HP</li>
                    <li>Consumption: 9.7L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>
                     
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/audi/A6Avant.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Audi A6 Avant 50 TDI quattro</h4>
                    <p class="card-text text-light">Price €65.955</p> 
                    <ul class="text-light">
                    <li>Engine: 3.0 TDI V6</li>
                    <li>Power: 286 HP</li>
                    <li>Consumption: 6.8L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>
                     
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/audi/A6Allroad.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">                
                <div class="card-body">
                    <h4 class="card-text text-light">Audi A6 Allroad 55 TDI quattro</h4>
                    <p class="card-text text-light">Price €86.280</p>
                    <ul class="text-light">
                    <li>Engine: 3.0 TDI V6</li>
                    <li>Power: 349 HP</li>
                    <li>Consumption: 6.9L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>
                     
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/audi/RS6Performance.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                      <div class="card-body">
                    <h4 class="card-text text-light">Audi RS6 Performance</h4>
                    <p class="card-text text-light">price €126.295</p>
                    <ul class="text-light">
                    <li>Engine: 4.0 TwinTurbo V8</li>
                    <li>Power: 621 HP</li>
                    <li>Consumption: 12.7L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>
                     
                  </div>
                </div>
              </div>
            </div>`;
            setTimeout(function () {
                window.scrollTo(0, 0);
            },2);
    }
    else if(buttonId==="audia3"){
        document.getElementById("content").innerHTML=`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="./index.html">Back</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="album py-5 bg-body-tertiary bg-black">
        <div class="container">
        <h2 style="text-align: center; padding-bottom: 10px;" class="text-light">AUDI A3</h2>
        <h5 style="text-align: center; padding-bottom: 30px;" class="text-light">
        The Audi A3 is a compact luxury car that combines a sleek, stylish design with a range of premium features, making it an enticing choice for those seeking a smaller yet upscale vehicle.</h5>
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/audi/A3.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">
                <div class="card-body">
                  <h4 class="card-text text-light">Audi A3 Sportback 35 TFSI</h4>
                  <p class="card-text text-light">Price €32.280</p>
                  <ul class="text-light">
                    <li>Engine: 1.5 TFSI I4</li>
                    <li>Power: 150 HP</li>
                    <li>Consumption: 6.2L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>
                     
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/audi/S3Sportback.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Audi S3 Sportback quattro</h4>
                    <p class="card-text text-light">Price €46.955</p> 
                    <ul class="text-light">
                    <li>Engine: 2.0 TFSI I4</li>
                    <li>Power: 310 HP</li>
                    <li>Consumption: 8.8L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>
                     
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/audi/RS3Sedan.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">                
                <div class="card-body">
                    <h4 class="card-text text-light">Audi RS3 Sedan quattro</h4>
                    <p class="card-text text-light">Price €61.400</p>
                    <ul class="text-light">
                    <li>Engine: 2.5 TFSI I5</li>
                    <li>Power: 400 HP</li>
                    <li>Consumption: 9.2L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>
                     
                  </div>
                </div>
              </div>
            </div>`;
            setTimeout(function () {
                window.scrollTo(0, 0);
            },2);
    }

    else if(buttonId==="audia8"){
        document.getElementById("content").innerHTML=`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="./index.html">Back</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="album py-5 bg-body-tertiary bg-black">
        <div class="container">
        <h2 style="text-align: center; padding-bottom: 10px;" class="text-light">AUDI A8</h2>
        <h5 style="text-align: center; padding-bottom: 30px;" class="text-light"> The Audi A8 is a flagship luxury sedan celebrated for its opulent interior, cutting-edge technology, and exceptional performance, setting the standard for premium automotive excellence.</h5>          
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/audi/A8.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">
                <div class="card-body">
                  <h4 class="card-text text-light">Audi A8 60 TFSI quattro</h4>
                  <p class="card-text text-light">Price €92.280</p>
                  <ul class="text-light">
                    <li>Engine: 4.0 TFSI V8</li>
                    <li>Power: 460 HP</li>
                    <li>Consumption: 11.2L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/audi/S8.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Audi S8 quattro</h4>
                    <p class="card-text text-light">Price €126.955</p> 
                    <ul class="text-light">
                    <li>Engine: 4.0 TFSI V8</li>
                    <li>Power: 571 HP</li>
                    <li>Consumption: 12.8L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>`;
            setTimeout(function () {
                window.scrollTo(0, 0);
            },2);
    }

    else if(buttonId==="bmw3er"){
        document.getElementById("content").innerHTML=`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="./index.html">Back</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="album py-5 bg-body-tertiary bg-black">
        <div class="container">
        <h2 style="text-align: center; padding-bottom: 10px;" class="text-light">BMW 3 Series</h2>
        <h5 style="text-align: center; padding-bottom: 30px;" class="text-light"> The BMW 3 Series is a revered compact luxury sedan known for its dynamic driving experience, refined interior, and a long-standing legacy as the benchmark in its class.</h5>          
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/bmw/3Series.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">
                <div class="card-body">
                  <h4 class="card-text text-light">BMW 330i Sedan</h4>
                  <p class="card-text text-light">Price €46.345</p>
                  <ul class="text-light">
                    <li>Engine: 2.0 Turbo I4</li>
                    <li>Power: 255 HP</li>
                    <li>Consumption: 7.2L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/bmw/3touring.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">BMW 330d Touring</h4>
                    <p class="card-text text-light">Price €52.955</p> 
                    <ul class="text-light">
                    <li>Engine: 3.0 Turbo Diesel I6</li>
                    <li>Power: 286 HP</li>
                    <li>Consumption: 6.8L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/bmw/BMWM3.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">BMW M3</h4>
                    <p class="card-text text-light">Price €82.955</p> 
                    <ul class="text-light">
                    <li>Engine: 3.0 Turbo I6</li>
                    <li>Power: 480 HP</li>
                    <li>Consumption: 11.8L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>`;
            setTimeout(function () {
                window.scrollTo(0, 0);
            },2);
    }

    else if(buttonId==="mbgclass"){
        document.getElementById("content").innerHTML=`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="./index.html">Back</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="album py-5 bg-body-tertiary bg-black">
        <div class="container">
        <h2 style="text-align: center; padding-bottom: 10px;" class="text-light">Mercedes Benz G Class</h2>
        <h5 style="text-align: center; padding-bottom: 30px;" class="text-light"> The Mercedes-Benz G-Class, often referred to as the "G-Wagon," is an iconic, rugged luxury SUV celebrated for its timeless design and exceptional off-road capabilities.</h5>          
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/mercedes/GClass.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">
                <div class="card-body">
                  <h4 class="card-text text-light">Mercedes Benz G400d</h4>
                  <p class="card-text text-light">Price €166.345</p>
                  <ul class="text-light">
                    <li>Engine: 3.0 Turbo Diesel I6</li>
                    <li>Power: 326 HP</li>
                    <li>Consumption: 10.2L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/mercedes/G63AMG.png" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Mercedes Benz G63 AMG</h4>
                    <p class="card-text text-light">Price €202.955</p> 
                    <ul class="text-light">
                    <li>Engine: 4.0 BiTurbo V8</li>
                    <li>Power: 577 HP</li>
                    <li>Consumption: 15.8L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>`;
            setTimeout(function () {
                window.scrollTo(0, 0);
            },2);
    }

    else if(buttonId==="vwpassat"){
        document.getElementById("content").innerHTML=`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="./index.html">Back</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="album py-5 bg-body-tertiary bg-black">
        <div class="container">
        <h2 style="text-align: center; padding-bottom: 10px;" class="text-light">Volkswagen Passat</h2>
        <h5 style="text-align: center; padding-bottom: 30px;" class="text-light"> The Volkswagen Passat is a midsize car with a reputation for offering a spacious, comfortable interior and a balanced blend of performance, efficiency, and affordability.</h5>          
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/volkswagen/Passat.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">
                <div class="card-body">
                  <h4 class="card-text text-light">Volkswagen Passat Sedan 2.0 TSI 4motion</h4>
                  <p class="card-text text-light">Price €51.280</p>
                  <ul class="text-light">
                    <li>Engine: 2.0 Turbo I4</li>
                    <li>Power: 280 HP</li>
                    <li>Consumption: 8.2L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/volkswagen/PassatVariant.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Volkswagen Passat Variant 2.0 BiTDI 4motion</h4>
                    <p class="card-text text-light">Price €43.725</p> 
                    <ul class="text-light">
                    <li>Engine: 2.0 BiTDI I4</li>
                    <li>Power: 240 HP</li>
                    <li>Consumption: 6.8L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/volkswagen/PassatAlltrack.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Volkswagen Passat Alltrack 2.0 TDI 4motion</h4>
                    <p class="card-text text-light">Price €38.635</p> 
                    <ul class="text-light">
                    <li>Engine: 2.0 TDI I4</li>
                    <li>Power: 190 HP</li>
                    <li>Consumption: 6.4L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>`;
            setTimeout(function () {
                window.scrollTo(0, 0);
            },2);
    }

    else if(buttonId==="vwgolf"){
        document.getElementById("content").innerHTML=`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="./index.html">Back</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="album py-5 bg-body-tertiary bg-black">
        <div class="container">
        <h2 style="text-align: center; padding-bottom: 10px;" class="text-light">Volkswagen Golf</h2>
        <h5 style="text-align: center; padding-bottom: 30px;" class="text-light"> 
        The Volkswagen Golf is a versatile compact car prized for its practicality, fun-to-drive nature, and a longstanding reputation for delivering European sophistication at an accessible price point.</h5>          
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/volkswagen/Golf.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">
                <div class="card-body">
                  <h4 class="card-text text-light">Volkswagen Golf 2.0 TDI</h4>
                  <p class="card-text text-light">Price €28.280</p>
                  <ul class="text-light">
                    <li>Engine: 2.0 TDI I4</li>
                    <li>Power: 150 HP</li>
                    <li>Consumption: 6.2L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/volkswagen/GolfGTI.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Volkswagen Golf GTI</h4>
                    <p class="card-text text-light">Price €36.725</p> 
                    <ul class="text-light">
                    <li>Engine: 2.0 TFSI I4</li>
                    <li>Power: 245 HP</li>
                    <li>Consumption: 7.8L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/volkswagen/GolfR.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Volkswagen Golf R</h4>
                    <p class="card-text text-light">Price €44.225</p> 
                    <ul class="text-light">
                    <li>Engine: 2.0 TFSI I4</li>
                    <li>Power: 310 HP</li>
                    <li>Consumption: 8.8L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>`;
            setTimeout(function () {
                window.scrollTo(0, 0);
            },2);
    }

    else if(buttonId==="p911"){
        document.getElementById("content").innerHTML=`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="./index.html">Back</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="album py-5 bg-body-tertiary bg-black">
        <div class="container">
        <h2 style="text-align: center; padding-bottom: 10px;" class="text-light">Porsche 911</h2>
        <h5 style="text-align: center; padding-bottom: 30px;" class="text-light"> 
        The Porsche 911 is a legendary sports car that has defined automotive excellence for decades, known for its iconic design, exhilarating performance, and unwavering commitment to precision engineering.</h5>          
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/porsche/911.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">
                <div class="card-body">
                  <h4 class="card-text text-light">Porsche 911 Carrera S</h4>
                  <p class="card-text text-light">Price €128.280</p>
                  <ul class="text-light">
                    <li>Engine: 3.0 TwinTurbo F6</li>
                    <li>Power: 450 HP</li>
                    <li>Consumption: 11.2L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/porsche/911TurboS.png" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Porsche 911 Turbo S</h4>
                    <p class="card-text text-light">Price €206.105</p> 
                    <ul class="text-light">
                    <li>Engine: 3.7 TwinTurbo F6</li>
                    <li>Power: 650 HP</li>
                    <li>Consumption: 13.8L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/porsche/911GT3RS.png" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Porsche 911 GT3 RS</h4>
                    <p class="card-text text-light">Price €224.765</p> 
                    <ul class="text-light">
                    <li>Engine: 4.0 NA F6</li>
                    <li>Power: 525 HP</li>
                    <li>Consumption: 15.3L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>`;
            setTimeout(function () {
                window.scrollTo(0, 0);
            },2);
    }

    else if(buttonId==="p718"){
        document.getElementById("content").innerHTML=`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <div id="navbarExample01">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <a class="nav-link" aria-current="page" href="./index.html">Back</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="album py-5 bg-body-tertiary bg-black">
        <div class="container">
        <h2 style="text-align: center; padding-bottom: 10px;" class="text-light">Porsche 718</h2>
        <h5 style="text-align: center; padding-bottom: 30px;" class="text-light"> 
        The Porsche 718 is a dynamic sports car lineup renowned for its agile handling and turbocharged power, offering an exhilarating driving experience in a compact and stylish package.</h5>          
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/porsche/718.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;">
                <div class="card-body">
                  <h4 class="card-text text-light">Porsche 718 Boxster GTS 4.0</h4>
                  <p class="card-text text-light">Price €98.880</p>
                  <ul class="text-light">
                    <li>Engine: 4.0 NA F6</li>
                    <li>Power: 400 HP</li>
                    <li>Consumption: 11.2L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/porsche/718GT4S.jpeg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Porsche 718 Cayman GT4</h4>
                    <p class="card-text text-light">Price €126.105</p> 
                    <ul class="text-light">
                    <li>Engine: 4.0 NA F6</li>
                    <li>Power: 420 HP</li>
                    <li>Consumption: 14.1L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card bg-dark shadow-sm">
                <img src="./images/porsche/GT4RS.jpg" class="bd-placeholder-img card-img-top" width="100%" height="225" style="object-fit: cover;"> 
                <div class="card-body">
                    <h4 class="card-text text-light">Porsche 718 Cayman GT4 RS</h4>
                    <p class="card-text text-light">Price €144.325</p> 
                    <ul class="text-light">
                    <li>Engine: 4.0 NA F6</li>
                    <li>Power: 500 HP</li>
                    <li>Consumption: 15.6L/100km</li>
                  </ul>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-secondary">Appoint test drive</button>
                    </div>                   
                  </div>
                </div>
              </div>
            </div>`;
            setTimeout(function () {
                window.scrollTo(0, 0);
            },2);
    }  
}

