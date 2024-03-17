const wrapper = document.querySelector(".wrapper");
try {
  const response = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/14.5.1/data/en_US/champion.json"
  );

  const list = await response.json();
  const championlist = Object.entries(list.data);

  // console.log(list);
  // console.log(championlist);

  championlist.forEach((element) => {
    const version = Object.values(element[1]);
    const images = Object.values(version[7]);
    console.log(images[0]);

    const h1 = document.createElement("h1");
    h1.innerText = element[0];

    const desc = document.createElement("p");
    desc.innerText = version[4];

    const img = document.createElement("img");
    img.innerText = images[0];

    wrapper.append(h1);
    wrapper.append(desc);
    wrapper.append(img);
  });
} catch (error) {
  console.log(error);
  const diverreur = document.createElement("div");

  diverreur.innerText = "Impossible de contacter le serveur";

  wrapper.append(diverreur);
}
