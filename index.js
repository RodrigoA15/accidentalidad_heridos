import { data } from "./data.js";

export const Hola = () => {
  var map = L.map("map", {
    center: [2.44497084266567, -76.61667097602667],
    zoom: 13,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

  for (var i = 0; i < data.length; i++) {
    var latlng = data[i];
    L.marker(latlng, {
      icon: L.icon({
        iconUrl: "./location_15016015.png",
        iconSize: [38, 35],
      }),
    })
      .addTo(map)
      .bindPopup(`dataa ${latlng}`)
      .openPopup();
  }
  map.fitBounds(L.latLngBounds([data]));

  L.circleMarker([2.481388889, -76.57416667], {
    className: "leaflet-circleMarker-icon",
    radius: 24,
    color: "blue",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4813319,-76.5742647,3a,75y,236.03h,82.7t/data=!3m7!1e1!3m5!1s7CdJ5Vu7xBPX6TuFRy5mBg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D7CdJ5Vu7xBPX6TuFRy5mBg%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D236.03249117185618%26pitch%3D7.296091938462595%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  L.circleMarker([2.441944444, -76.60861111], {
    className: "leaflet-circleMarker-icon",
    radius: 24,
    color: "blue",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4421751,-76.608679,3a,90y,77.69h,72.36t/data=!3m7!1e1!3m5!1soqmo6h0I616qBtRV_VipEw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3Doqmo6h0I616qBtRV_VipEw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D77.68923509500516%26pitch%3D17.640228808782652%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  L.circleMarker([2.494722222, -76.57527778], {
    className: "leaflet-circleMarker-icon",
    radius: 24,
    color: "blue",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4952516,-76.574868,3a,75y,238.02h,79.63t/data=!3m7!1e1!3m5!1sQUbRoR9X6SGoRviwC3c55Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DQUbRoR9X6SGoRviwC3c55Q%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D238.0151633868253%26pitch%3D10.372894396825131%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  L.circleMarker([2.479166667, -76.59055556], {
    className: "leaflet-circleMarker-icon",
    radius: 24,
    color: "blue",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4793136,-76.5905314,3a,75y,263.96h,81.29t/data=!3m7!1e1!3m5!1sO9dkK88-tbNxz4Dn0u1rlw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DO9dkK88-tbNxz4Dn0u1rlw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D263.9571993308959%26pitch%3D8.71352208349333%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  L.circleMarker([2.438055556, -76.62916667], {
    className: "leaflet-circleMarker-icon",
    radius: 24,
    color: "blue",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4382786,-76.6290994,3a,75y,88.46h,78.09t/data=!3m7!1e1!3m5!1sbVh5CAmMD2a14whGvW5e8Q!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DbVh5CAmMD2a14whGvW5e8Q%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D88.46379742330922%26pitch%3D11.912691347156084%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  L.circleMarker([2.475, -76.57972222], {
    className: "leaflet-circleMarker-icon",
    radius: 24,
    color: "blue",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4750613,-76.5799628,3a,90y,40.86h,71.73t/data=!3m7!1e1!3m5!1snK2k0mqi_qhJkzSAbU7Gbw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DnK2k0mqi_qhJkzSAbU7Gbw%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D40.86354083120442%26pitch%3D18.267613857652606%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  //Segunda parte
  L.circleMarker([2.492672471974319, -76.58010759863058], {
    className: "leaflet-circleMarker-icon",
    radius: 24,
    color: "blue",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4927179,-76.5800808,3a,75y,245.89h,88.99t/data=!3m7!1e1!3m5!1s9MAVmjF4_dEufJELjXGd5g!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3D9MAVmjF4_dEufJELjXGd5g%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D245.89334770443642%26pitch%3D1.0132803951416633%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  L.circleMarker([2.4422782789902295, -76.60893859325604], {
    className: "leaflet-circleMarker-icon",
    radius: 24,
    color: "blue",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4422046,-76.6087646,3a,75y,110.78h,77.15t/data=!3m7!1e1!3m5!1sbuWNPveZWQbPi_IRZsziag!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DbuWNPveZWQbPi_IRZsziag%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D110.78210772541524%26pitch%3D12.85464300879707%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);

  L.circleMarker([2.449888411906566, -76.63678368265776], {
    className: "leaflet-circleMarker-icon",
    radius: 24,
    color: "blue",
    fillColor: "#f03",
  })
    .on("click", () => {
      window.location.href =
        "https://www.google.com/maps/@2.4422046,-76.6087646,3a,75y,110.78h,77.15t/data=!3m7!1e1!3m5!1sbuWNPveZWQbPi_IRZsziag!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DbuWNPveZWQbPi_IRZsziag%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D110.78210772541524%26pitch%3D12.85464300879707%26thumbfov%3D90!7i13312!8i6656?authuser=0&coh=205410&entry=ttu";
    })
    .addTo(map);
};
