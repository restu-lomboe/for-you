function showDiv() {
  Content.style = "opacity:1;margin-top:15vh;";
  ket.style = "margin-top:30px;";
}

function memulai() {
  suratin.style = "transition:all 0.5s ease;transform:scale(.1);opacity:0";
  ket.style = "transition:all 0.5s ease;transform:scale(0);opacity:0";
  navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {  
    var x = document.getElementById("myAudio"); 
    x.play();

    // stop microphone stream acquired by getUserMedia
    stream.getTracks().forEach(function (track) { track.stop(); });
  });
  setTimeout(pesan, 500);
}

function kpemb() {
  suratin.style = "display:none";
  ket.style = "display:none";
  fotoakhir.style = "display:inline-flex;transform:scale(1);";
  Content.style = "opacity:1;margin-top:2vh;";
  bq.style = "opacity:1;visibility:visible;margin-top:5px";
  bodyblur.style = "opacity:.5";
  setTimeout(ngetik, 150);
}

const date = new Date();
const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
let hours = date.getHours();
let minutes = date.getMinutes();

if (hours < 10) {
  hours = "0" + hours;
}
if (minutes < 10) {
  minutes = "0" + minutes;
}

const day = days[date.getDay()];
const dateNum = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

console.log(`${hours}.${minutes} WIB - ${day}, ${dateNum} ${month} ${year}`);

const element = document.querySelector("body");
const watermark = document.createElement("div");

watermark.textContent = `${day}, ${dateNum} ${month} ${year}`;
watermark.style = "color:white;opacity:0;font-size:10px;position:fixed;bottom:25px;left:25px;z-index:150";
element.appendChild(watermark);

//////////////////////////////////////////////////

const body = document.querySelector("body");

function berjatuhan() {
  const heart = document.createElement("div");
  heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><path d='M13.23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></path></g></svg>";
  heart.className = "heart-icon";
  heart.style.left = (Math.random() * 95) + "vw";
  heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
  document.body.appendChild(heart);
}

setInterval(function () {
  const heartArr = document.querySelectorAll(".heart-icon");
  if (heartArr.length > 100) {
      heartArr[0].remove();
  }
}, 100);

//////////////////////////////////////////////////

function tombol() {
  Tombol.style = "margin-top:15px;opacity:1;transform: scale(1);";
  ftom = 1;
}

let ftom = 0;

function fakhiran() {
  document.getElementById("akhiran").style = "display:inline-flex";
}

const swals = Swal.mixin({
  allowOutsideClick: false,
  cancelButtonColor: '#FF0040',
  imageWidth: 90,
  imageHeight: 100,
});

const swalst = Swal.mixin({
  allowOutsideClick: false,
  showConfirmButton: false,
  timer: 2400,
  timerProgressBar: true,
  imageWidth: 90,
  imageHeight: 90,
});

const style = document.createElement('style');

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
const monthNames = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
today = `${dd} ${monthNames[today.getMonth()]} ${yyyy}`;

function setel() {
  audio.play();
}

function setel2() {
  bgm.play();
}

function sjawab() {
  if (ftom == 1) {
      Tombol.style = "display:none";
      jawab();
  }
}

let aa = 0, katangetik;

function ngetik() {
  new TypeIt("#kalimat", {
      strings: ["" + katangetik],
      startDelay: 50,
      speed: 40,
      cursor: true,
      afterComplete: function () {
          kalimat.innerHTML = katangetik;
          setInterval(berjatuhan, 200);
      },
  }).go();
}

let ai = 0, katangetik2;

function ngetik2() {
  new TypeIt("#kalimatc", {
      strings: ["" + katangetik2],
      startDelay: 50,
      speed: 35,
      cursor: true,
      afterComplete: function () {
          kalimatc.innerHTML = katangetik2;
          fotoakhir.style.transform = "scale(0)";
          setTimeout(function () {
              fotoakhir.src = fotoakhir2.src;
              fotoakhir.style.transform = "scale(1)";
          }, 300);
          setInterval(berjatuhan, 200);
      },
  }).go();
}

function otomatis() {
  kalimatc.style.transform = "scale(.3)";
  setTimeout(function () {
      kalimatc.style.transform = "scale(1)";
  }, 250);
}

function kemunculan() {
  otomatis();
  kalimatc.innerHTML = ktbwh2;
  setTimeout(kemunculan2, 2000);
}

function kemunculan2() {
  otomatis();
  kalimatc.innerHTML = ktbwh3;
  setTimeout(kemunculan3, 2000);
}

function kemunculan3() {
  otomatis();
  kalimatc.innerHTML = katangetik2;
  setTimeout(kemunculan, 2000);
}

async function jawab() {
  await swals.fire('Kirim pesan ke<br>WhatsApp aku, ya!');
  window.location = `https://api.whatsapp.com/send?phone=&text=${pesanwhatsapp}`;
}