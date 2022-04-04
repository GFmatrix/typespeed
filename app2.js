var gaps = [
  "In my free time ",
  "I listen on music on CD. ",
  "Is that Kylie? ",
  "We've just done this exercise. ",
  "I played this game before. ",
  "He always go to the rivers, forests and mountains on ships. ",
  "But he never go to the unknows places on foot.",
  "But he found a way from the forest.",
  "And from that day he never came to the forest on foot.",
  "This is the third year of the competition. ",
  "Last year's films were about the family",
  "I think I've heard/b that song before",
  "Wendy arrived and then we had dinner",
];
var reading = [
  "Last month I got the chance to take part in an underwater research project in an area of the Gulf of Mexico called the Flower Gardens. A team of professional researchers, led by the scientist Dr. Matt Phillips, was trying to learn more about the fish and various creatures that live in this part of the sea. The Flower Gardens are a long way from the shore and we spent three days on a boat.",
  "The team used a piece of underwater equipment called a Remotely Operated Vehicle ROV to collect information. The ROV could measure water depth and temperature and it also had a camera that sent live film back to the boat. The ROV was great fun. It was controlled by a computer on the boat, and I was allowed to operate it a few times.",
  "However, the thing I enjoyed most was diving into the water. At first, I was quite frightened mainly because I couldn't see land in any direction. But as soon as I jumped into the water, I wasn't afraid anymore. It was amazing to see the colourful fish swimming around and I could see all the way to the Flower Gardens, which are almost 30 metres down.",
  "I will never forget the Flower Gardens. The trip was like a holiday but I also learnt new things about science and research projects. The team was very friendly and everyone was happy to explain what they knew about the sea. It was a great opportunity and it has made me think about my goals in life. The experience will definitely help me work harder to become a scientist.",
  "Youth World is an entertainment magazine full of ideas on what to do. It provides details of all the latest films, concerts, exhibitions and fashion shows. If you are someone who prefers to stay in, it also recommends the best DVDs to watch. Olaf would like to read stories that people his own age have written. He is also keen on music and would like some recommendations on the best bands to listen to.",
  "NS Teens magazine is well known for its wildlife and environmental content but it also has articles on the history and culture of people from around the world. Some of the articles are long and detailed but the magazine is also famous for its fantastic photo journalism. There are also letters from readers as well as maps and fact sheets.",
  "Comedy Kids own comedy clubs in several countries that are run just for young people aged 10 15. They're real clubs with real comedians, who are just as familiar with working in adult comedy clubs as they are working with children. But don't take our word for it come and see for yourself!",
  "The Comedy Kids company was set up by John Winterton, who says that noone had thought of being a stand up comedian for young people until he came along. In fact, his act quickly became so popular that he soon found lots of other comedians who wanted to join his company and perform for families and young people.",
  "Of course, it's not the same as performing on stage, so we're always looking for comedians in the clubs who are good at working with small numbers of young people and we've discovered there aren't many of them about! But the ones we have found are brilliant. But don't take our word for it come and see for yourself!",
  "Last month I got the chance to take part in an underwater research project in an area of the Gulf of Mexico called the Flower Gardens. A team of professional researchers, led by the scientist Dr. Matt Phillips, was trying to learn more about the fish and various creatures that live in this part of the sea. The Flower Gardens are a long way from the shore and we spent three days on a boat.",
  "I will never forget the Flower Gardens. The trip was like a holiday but I also learnt new things about science and research projects. The team was very friendly and everyone was happy to explain what they knew about the sea. It was a great opportunity and it has made me think about my goals in life. The experience will definitely help me work harder to become a scientist.",
  "However, the thing I enjoyed most was diving into the water. At first, I was quite frightened mainly because I couldn't see land in any direction. But as soon as I jumped into the water, I wasn't afraid anymore. It was amazing to see the colourful fish swimming around and I could see all the way to the Flower Gardens, which are almost 30 metres down.",
  "Jo looked at the map and decided to go left. He wanted to go to the Karpats on foot. Jo liked to go to the rivers, forests and mountains on foot. He always took map with he. But one day he lost! Jo was very worried and scared. He was in the forest one week. He was could at night, he was very hot in the afternoon. He ate mushroomes and berries.",
];
var words = ["club", "captain", "gym", "give up", "team", "member", "turn down", "eat out", "pleasure", "play", "act", "follow", "see", "interest", "to", "from", "when", "where"];

let target = document.getElementById("screen");
let wordShow = document.getElementById("screen2");
let acc = document.getElementById("acc");
let wpm = document.getElementById("wpm");
let tme = document.getElementById("tme");
let point1 = document.getElementById("whPoint");
let body3 = document.getElementById("body3");
body3.style.display = "none";
let errors = 0;
let correct = 0;
let l = 0;
let time = 0;
let work = true;
let stType = false;

wod = reading[Math.floor(Math.random() * reading.length)];
document.getElementById("r1").innerText += wod;
wod = wod.split("");
let colors = [];
let colors2 = [];
let bgColors = [];
for (let j = 0; j < wod.length; j++) {
  colors.push("#646464");
  bgColors.push();
  colors2.push("#000");
}
for (let i = 0; i < wod.length; i++) {
  wordShow.innerHTML += `<span id='sp-${i}'>${wod[i]}</span>`;
}
document.onkeypress = function (event) {
  stType = true;
  if (event.keyCode == 13 || event.keyCode == 189) {
  } else {
    if (event.keyCode == 32) {
      l -= 12;
      target.innerHTML += "&nbsp;";
      target.style.cssText = "transform: translateX(" + l + "px)";
    } else {
      l -= 12;
      target.innerHTML += String.fromCharCode(event.keyCode);
      target.style.cssText = "transform: translateX(" + l + "px)";
    }
    if (String.fromCharCode(event.keyCode) == wod[target.innerText.length - 1]) {
      colors[target.innerText.length - 1] = "#adff2f";
    } else {
      colors[target.innerText.length - 1] = "#f00";
      colors2[target.innerText.length - 1] = "#f00";
      bgColors[target.innerText.length - 1] = "#ff8181";
      errors = errors + 1;
    }
    document.getElementById(`sp-${target.innerText.length - 1}`).style.cssText = `border-bottom: 0px #fff solid`;
    for (let k = 0; k < wod.length; k++) {
      let setColor = document.getElementById(`sp-${k}`);
      setColor.style.color = colors[k];
      setColor.style.backgroundColor = bgColors[k];
    }
    try {
      document.getElementById(`sp-${target.innerText.length}`).style.cssText = `border-bottom: 1px #fff solid`;
    } catch {}
  }
};
document.onkeydown = function (event) {
  if (event.keyCode == 13 || event.keyCode == 189) {
  } else {
    if (event.keyCode == 8 && target.innerText != "") {
      target.innerHTML = target.innerText.slice(0, -1);
      l += 12;
      target.style.cssText = "transform: translateX(" + parseInt(parseInt(l) + parseInt(12)) + "px)";
      colors[target.innerText.length] = "#fff";
      for (let k = 0; k < wod.length; k++) {
        let setColor = document.getElementById(`sp-${k}`);
        setColor.style.color = colors[k];
        setColor.style.backgroundColor = bgColors[k];
      }
      document.getElementById(`sp-${target.innerText.length + 1}`).style.cssText = `border-bottom: 0px #fff solid`; //Tushinib olchi?
      document.getElementById(`sp-${target.innerText.length}`).style.cssText = `border-bottom: 1px #fff solid`;
    }
  }
};

//This for wpm, acc va others
setInterval(function () {
  if (work && stType) {
    if (target.innerText == "") {
      acc.innerHTML = "100%";
      wpm.innerText = "0";
    } else {
      errors = parseInt(errors);
      let o = parseInt(target.innerText.length);
      if ((target.innerText.length / 5 - errors) / (time / 60) < 0) {
        wpm.innerText = "0";
      } else {
        wpm.innerText = Math.round(((target.innerText.length / 5 - errors) / (time / 60)) * 10) / 10;
      }
      if (100 - (errors / o) * 100 < 0) {
        acc.innerHTML = "0%";
      } else {
        acc.innerHTML = Math.floor((100 - (errors / o) * 100) * 10) / 10 + "%";
      }
    }
  }
}, 1000);
setInterval(function () {
  if (work && stType) {
    tme.innerText = Math.round(time * 10) / 10 + "s";
    time += 0.1;
  }
}, 100);
//This result window
let swithWindow = setInterval(function () {
  if (wordShow.innerText.length <= target.innerText.length) {
    work = false;
  }
  if (!work) {
    clearInterval(swithWindow);
    document.onkeydown = function () {};
    document.onkeypress = function () {};
    setTimeout(function () {
      document.querySelector(".body2").style.cssText = "opacity: 0";
      setTimeout(function () {
        document.querySelector(".body2").className = "body2 hdn";
        body3.style.display = "block";
        setTimeout(function () {
          document.querySelector(".body3").style.cssText = "opacity: 1";
          document.getElementById("acc2").innerHTML = acc.innerHTML;
          document.getElementById("wdm2").innerHTML = wpm.innerHTML;
          document.getElementById("tme2").innerHTML = tme.innerHTML;
          document.getElementById("err").innerHTML = errors;
          document.getElementById("lett").innerHTML = target.innerText.length;
          target2 = target.innerText.split("");
          for (let e = 0; e < target2.length; e++) {
            document.getElementById("r2").innerHTML += `<span id='spp-${e}'>${target2[e]}</span>`;
            let setColor2 = document.getElementById(`spp-${e}`);
            setColor2.style.color = colors2[e];
            setColor2.style.backgroundColor = bgColors[e];
          }
        }, 100);
      }, 400);
    }, 500);
  }
}, 1);
