let currentIndex = 0;
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;

function moveSlide(step) {
  currentIndex += step;
  
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }
  
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Otomatik kaydırma fonksiyonu
function autoSlide() {
  moveSlide(1);
}

// Otomatik kaydırmayı başlat
setInterval(autoSlide, 3000); // Her 3 saniyede bir kaydırma



// Harita oluşturma ve başlangıç ayarları
const map = new ol.Map({
  target: 'map', // Haritanın görüneceği elementin ID'si
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM() // OpenStreetMap katmanı
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([36.5544, 40.3139]), // Tokat merkez koordinatları
    zoom: 13
  })
});

// Otobüs rotalarını tanımlayın
const busRoutes = {
  "101": [
    [36.546570, 40.277261],
    [36.549140, 40.280630],
    [36.550261, 40.284828],
    [36.549931, 40.287970],
    [36.551051, 40.294605],
    [36.552897, 40.297696],
    [36.553292, 40.299506],
    [36.553951, 40.306617],
    [36.553457, 40.308401],
    [36.551348, 40.314080],
    [36.551447, 40.315211],
    [36.552238, 40.317296],
    [36.551678, 40.321944],
    [36.552343, 40.323471],
    [36.549640, 40.323716],
    [36.548638, 40.324033],
    [36.548292, 40.324636],
    [36.547933, 40.325952],
    [36.548062, 40.327098],
    [36.547503, 40.328113],
    [36.549107, 40.330067],
    [36.548763, 40.332097],
    [36.551183, 40.333123],
    [36.549780, 40.334443],
    [36.547904, 40.335426],
    [36.546358, 40.335753],
    [36.544898, 40.335917],
    [36.543566, 40.335731],
    [36.542335, 40.335273],
    [36.537066, 40.333854],
    [36.535821, 40.333527],
    [36.533516, 40.333145],
    [36.531411, 40.332981],
    [36.528762, 40.332937],
    [36.515834, 40.334367],
    [36.514230, 40.334596],
    [36.513156, 40.334694],
    [36.507601, 40.335262],
    [36.505468, 40.335633],
    [36.502920, 40.336353],
    [36.499140, 40.337947],
    [36.497536, 40.338372],
    [36.496233, 40.338416],
    [36.494544, 40.338252],
    [36.493313, 40.337881],
    [36.489261, 40.336320],
    [36.485868, 40.335786],
    [36.484636, 40.335949],
    [36.483720, 40.336375],
    [36.483147, 40.336299],
    [36.482861, 40.336091],
    [36.475932, 40.327884],
    [36.475387, 40.326781],
    [36.475302, 40.325483],
    [36.474958, 40.325090],
    [36.473913, 40.324358],
    [36.473340, 40.323707],
    [36.473304, 40.323277],
    [36.473488, 40.322902],
    [36.473826, 40.322712],
    [36.474288, 40.322649],
    [36.475842, 40.323164],
    [36.477075, 40.323725],
    [36.477555, 40.324611],
    [36.477958, 40.325049],
    [36.478628, 40.325361],
    [36.479322, 40.325574],
    [36.479962, 40.325931],
    [36.480870, 40.326740],
    [36.481842, 40.327332],
    [36.483621, 40.328516]
  ],
  "4-H": [
    [36.546570, 40.277261],
    [36.549140, 40.280630],
    [36.550261, 40.284828],
    [36.549931, 40.287970],
    [36.551051, 40.294605],
    [36.552897, 40.297696],
    [36.553292, 40.299506],
    [36.553951, 40.306617],
    [36.553457, 40.308401],
    [36.551348, 40.314080],
    [36.551447, 40.315211],
    [36.552238, 40.317296],
    [36.551678, 40.321944],
    [36.552343, 40.323471],
    [36.555520, 40.329264],
    [36.555898, 40.329445],
    [36.557081, 40.329185],
    [36.557294, 40.329217],
    [36.558552, 40.329006],
    [36.564052, 40.328860],
    [36.566567, 40.329104],
    [36.566130, 40.329989],
    [36.564670, 40.329559],
    [36.563657, 40.329494],
    [36.558733, 40.330306],
    [36.557571, 40.330696],
    [36.556548, 40.330948],
    [36.556164, 40.331192],
    [36.555733, 40.331061],
    [36.555145, 40.331218],
    [36.554475, 40.331477],
    [36.553729, 40.331940],
    [36.552246, 40.333504],
    [36.552151, 40.333911],
    [36.551446, 40.335111],
    [36.548135, 40.337360],
    [36.544470, 40.338558],
    [36.541940, 40.339382],
    [36.540176, 40.339715],
    [36.539371, 40.339920],
    [36.538129, 40.340639],
    [36.536458, 40.341223],
    [36.536044, 40.341416],
    [36.533575, 40.343274],
    [36.531922, 40.343968],
    [36.531003, 40.344986],
    [36.530888, 40.345391],
    [36.530555, 40.345836],
    [36.530222, 40.346666],
    [36.529691, 40.347092],
    [36.528935, 40.347627],
    [36.527774, 40.349046],
    [36.527405, 40.349876],
    [36.527270, 40.351797]
  
  ],
  "103": [
    [36.5544, 40.3139],
    [36.5644, 40.3139],
    [36.5744, 40.3139]
  ]
};

// Dropdown menüye otobüs seçeneklerini ekleme
const busOptions = ["101", "4-H", "103"]; // Mevcut otobüs isimleri
const busNameInput = document.getElementById("busName");
const dropdownMenu = document.getElementById("busDropdown");

// Giriş kutusuna her yazıldığında filtreleme yap
busNameInput.addEventListener("input", () => {
  const inputValue = busNameInput.value.trim().toLowerCase();
  dropdownMenu.style.display = "block";
  dropdownMenu.innerHTML = ""; // Önceki listeyi temizle

  const filteredOptions = busOptions.filter(option => 
    option.toLowerCase().startsWith(inputValue)
  );

  if (filteredOptions.length === 0) {
    const noResultItem = document.createElement("li");
    noResultItem.textContent = "Eşleşen sonuç yok";
    noResultItem.style.color = "gray";
    dropdownMenu.appendChild(noResultItem);
    return;
  }

  filteredOptions.forEach(option => {
    const listItem = document.createElement("li");
    listItem.textContent = option;
    listItem.addEventListener("click", () => {
      busNameInput.value = option; // Seçilen değeri giriş alanına yaz
      dropdownMenu.style.display = "none"; // Listeyi gizle
    });
    dropdownMenu.appendChild(listItem);
  });
});

// Giriş alanına tıklandığında mevcut filtreyi uygula
busNameInput.addEventListener("focus", () => {
  const event = new Event("input");
  busNameInput.dispatchEvent(event); // Input tetikleme
});

// Giriş alanı dışına tıklanınca listeyi gizle
document.addEventListener("click", (event) => {
  if (!busNameInput.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.style.display = "none";
  }
});


// Durakları tanımlayın
const busStops = {
  "101": [
    { name: "Durak 1", coordinates: [36.546570, 40.277261] },
    { name: "Durak 2", coordinates: [36.553457, 40.308401] },
    { name: "Durak 3", coordinates: [36.552343, 40.323471] },
    { name: "Durak 4", coordinates: [36.547503, 40.328113] },
    { name: "Durak 5", coordinates: [36.547904, 40.335426] },
    { name: "Durak 6", coordinates: [36.537066, 40.333854] },
    { name: "Durak 7", coordinates: [36.514230, 40.334596] },
    { name: "Durak 8", coordinates: [36.483720, 40.336375] },
    { name: "Durak 9", coordinates: [36.474288, 40.322649] },
    { name: "Durak 10", coordinates: [36.483621, 40.328516] }
  ],
  "4-H": [
    { name: "Durak A", coordinates: [36.551051, 40.294605] },
    { name: "Durak B", coordinates: [36.552897, 40.297696] }
  ],
  "103": [
    { name: "Durak X", coordinates: [36.553292, 40.299506] },
    { name: "Durak Y", coordinates: [36.553951, 40.306617] }
  ]
};

// Otobüs rotasını çizen fonksiyon
function drawRoute(busName) {
  // Önceki rotaları temizle
  map.getLayers().getArray().forEach(layer => {
    if (layer.get('name') === 'busRoute' || layer.get('name') === 'busStops') {
      map.removeLayer(layer);
    }
  });

  // Seçilen otobüsün rotasını al
  const route = busRoutes[busName];
  if (!route) return;

  // Koordinatları projeksiyona çevir
  const routeCoords = route.map(coord => ol.proj.fromLonLat(coord));

  // Rota için çizgi geometrisi oluştur
  const routeFeature = new ol.Feature({
    geometry: new ol.geom.LineString(routeCoords)
  });

  // Çizgi stilini tanımla
  const routeStyle = new ol.style.Style({
    stroke: new ol.style.Stroke({
      color: '#ff0000',
      width: 3
    })
  });

  routeFeature.setStyle(routeStyle);

  // Rota katmanı oluştur ve haritaya ekle
  const routeLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [routeFeature]
    })
  });

  routeLayer.set('name', 'busRoute');
  map.addLayer(routeLayer);

  // Harita görünümünü rotaya göre ayarla
  const extent = routeFeature.getGeometry().getExtent();
  map.getView().fit(extent, { padding: [50, 50, 50, 50], duration: 1000 });

  // Haritada durakları göster
  const stops = busStops[busName] || [];
  addBusStops(stops);
}

// Otobüs duraklarını haritada gösteren fonksiyon
function addBusStops(stops) {
  const stopFeatures = stops.map(stop => {
    // Her durak için bir özellik (feature) oluştur
    const feature = new ol.Feature({
      geometry: new ol.geom.Point(ol.proj.fromLonLat(stop.coordinates)),
      name: stop.name
    });

    // Durağın stilini tanımlayın (örneğin, mavi bir daire)
    feature.setStyle(
      new ol.style.Style({
        image: new ol.style.Circle({
          radius: 6,
          fill: new ol.style.Fill({ color: 'blue' }),
          stroke: new ol.style.Stroke({ color: 'white', width: 2 })
        }),
        text: new ol.style.Text({
          text: stop.name,
          offsetY: -15,
          fill: new ol.style.Fill({ color: 'black' }),
          stroke: new ol.style.Stroke({ color: 'white', width: 2 })
        })
      })
    );

    return feature;
  });

  // Duraklar için bir katman oluştur
  const stopLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: stopFeatures
    })
  });

  stopLayer.set('name', 'busStops');
  map.addLayer(stopLayer);
}

// Otobüs saatlerini tanımlayın
const busData = {
  "101": {
    weekdays: ["08:00", "12:00", "16:00", "17:00", "19:00"],
    saturday: ["09:00", "13:00", "17:00", "18:00", "20:00"],
    sunday: ["10:00", "14:00", "18:00"]
  },
  "4-H": {
    weekdays: ["09:00", "13:30", "18:30"],
    saturday: ["10:00", "14:30", "19:30"],
    sunday: ["11:00", "15:30", "20:30"]
  },
  "103": {
    weekdays: ["07:30", "11:45", "15:15"],
    saturday: ["08:30", "12:45", "16:15"],
    sunday: ["09:30", "13:45", "17:15"]
  }
};


// Formun submit olayını dinleyin
document.getElementById('busForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Sayfanın yenilenmesini engelle

  const busName = busNameInput.value.trim();
  if (!busName || !busData[busName]) {
    alert("Geçerli bir otobüs seçiniz!");
    return;
  }

  const busTableBody = document.getElementById('busTableBody');
  busTableBody.innerHTML = "";

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${busName}</td>
    <td>${busData[busName].weekdays.join('<br>')}</td>
    <td>${busData[busName].saturday.join('<br>')}</td>
    <td>${busData[busName].sunday.join('<br>')}</td>
  `;
  busTableBody.appendChild(row);

  drawRoute(busName); // Rotayı çiz
});