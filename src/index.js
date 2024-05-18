import "./style.css";

import back1img from './metadata/memes/backdrop/after-i-used-every-single-filtre-from-ibis-paint-v0-a21arw3v07eb1.png';
import back2img from './metadata/memes/backdrop/EATEOT-HIGH-RES.webp';
import back3img from './metadata/memes/backdrop/GODLYSPIRIK-HIGH-RES.webp';
import back4img from './metadata/memes/backdrop/HyperionText-HIGH-RES.webp';
import back5img from './metadata/memes/backdrop/MentalCollapsing-HIGH-RES.webp';
import back6img from './metadata/memes/backdrop/OMEGA_T-HIGH-RES.webp';

import gif1img from './metadata/memes/gifs/chomik-groovin.gif'
import gif2img from './metadata/memes/gifs/chomik-read-listen-camera.gif'
import gif3img from './metadata/memes/gifs/chomikuj.gif'
import gif4img from './metadata/memes/gifs/Uncanny_final.gif'

import meme1img from './metadata/memes/popping/1.webp';
import meme2img from './metadata/memes/popping/2.webp';
import meme3img from './metadata/memes/popping/3.webp';
import meme4img from './metadata/memes/popping/4.webp';
import meme5img from './metadata/memes/popping/5.png';
import meme6img from './metadata/memes/popping/6.webp';
import meme7img from './metadata/memes/popping/7.webp';
import meme8img from './metadata/memes/popping/8.webp';
import meme9img from './metadata/memes/popping/9.webp';
import meme10img from './metadata/memes/popping/10.webp';
import meme11img from './metadata/memes/popping/11.webp';
import meme12img from './metadata/memes/popping/12.webp';
import meme13img from './metadata/memes/popping/13.webp';
import meme14img from './metadata/memes/popping/14.webp';
import meme15img from './metadata/memes/popping/15.jpeg';
import meme16img from './metadata/memes/popping/16.png';
import meme17img from './metadata/memes/popping/21.webp';
import meme18img from './metadata/memes/popping/18.webp';
import meme19img from './metadata/memes/popping/19.webp';
import meme20img from './metadata/memes/popping/20.webp';
import meme21img from './metadata/memes/popping/17.webp';
import meme22img from './metadata/memes/popping/22.jpg';
import meme23img from './metadata/memes/popping/23.webp';
import meme24img from './metadata/memes/popping/24.webp';
import meme25img from './metadata/memes/popping/25.webp';


// Header
const header = document.querySelector('header');

const dialogues = document.createElement('span');
dialogues.innerHTML = `looksl ike some lovecraftian horror
&nbsp; don't try it.
&nbsp; In an Alternate Universe: You found Verse Chomik!
&nbsp; even tho theyt had the most evil intentions, they werent as strong as the main antagonist: ULTIMITE CHOMIK >:)
&nbsp; looksl ike some lovecraftian horror
&nbsp; I'm sorry for all the sins I have committed creating this nightmare. Oh, and that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny
&nbsp; don't try it.
&nbsp; In an Alternate Universe: You found Verse Chomik!
&nbsp; even tho theyt had the most evil intentions, they werent as strong as the main antagonist: ULTIMITE CHOMIK >:)
&nbsp; I'm sorry for all the sins I have committed creating this nightmare. Oh, and that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny`;
header.appendChild(dialogues);

// Main
const main = document.querySelector('main');

const tickerH1 = document.createElement('h1');
tickerH1.innerHTML = `$CHOMIK`;
main.appendChild(tickerH1);

const socialsContainer = document.createElement('div');
socialsContainer.classList.add('socials');

const telegramBtn = document.createElement('button');
telegramBtn.id = "telegram-button";
telegramBtn.innerHTML = `TG`;
socialsContainer.appendChild(telegramBtn);

const twitterBtn = document.createElement('button');
twitterBtn.id = "twitter-button";
twitterBtn.innerHTML = `TWITTER`;
socialsContainer.appendChild(twitterBtn);

const chartBtn = document.createElement('button');
chartBtn.id = "chart-button";
chartBtn.innerHTML = `CHART`;
socialsContainer.appendChild(chartBtn);

const buyBtn = document.createElement('button');
buyBtn.id = "buy-button";
buyBtn.innerHTML = `BUY`;
socialsContainer.appendChild(buyBtn);

const buttons = [telegramBtn, twitterBtn, chartBtn, buyBtn];
buttons.forEach(button => {
  button.classList.add("background-blur");
});

main.appendChild(socialsContainer);

// Footer
const footer = document.querySelector('footer');

const contract = document.createElement('span');
contract.id = "contract";
contract.innerHTML = `9s27dnCRMVhxtskPded2aYVXsbwWbJ1yuc2PobHUpFiA`;
footer.appendChild(contract);

const copyCaBtn = document.createElement('button');
copyCaBtn.id = "copy-ca-button";
copyCaBtn.innerHTML = `COPY CA`;

footer.appendChild(copyCaBtn);

// Background

const backdropStatic = document.getElementById('backdrop-static');

const back1 = document.createElement('img');
back1.classList.add("back1");
back1.src = back1img;
backdropStatic.appendChild(back1);

const back4 = document.createElement('img');
back4.classList.add("back4");
back4.src = back4img;
backdropStatic.appendChild(back4);

const back6 = document.createElement('img');
back6.classList.add("back6");
back6.src = back6img;
backdropStatic.appendChild(back6);

const back2 = document.createElement('img');
back2.classList.add("back2");
back2.src = back2img;
backdropStatic.appendChild(back2);

const back3 = document.createElement('img');
back3.classList.add("back3");
back3.src = back3img;
backdropStatic.appendChild(back3);

const back5 = document.createElement('img');
back5.classList.add("back5");
back5.src = back5img;
backdropStatic.appendChild(back5);

const gif1 = document.createElement('img');
gif1.classList.add("gif1");
gif1.src = gif1img;
backdropStatic.appendChild(gif1);

const gif2 = document.createElement('img');
gif2.classList.add("gif2");
gif2.src = gif2img;
backdropStatic.appendChild(gif2);

const gif3 = document.createElement('img');
gif3.classList.add("gif3");
gif3.src = gif3img;
backdropStatic.appendChild(gif3);

const gif4 = document.createElement('img');
gif4.classList.add("gif4");
gif4.src = gif4img;
backdropStatic.appendChild(gif4);

const backdropAnimation = document.getElementById('backdrop-animation');

const meme1 = document.createElement('img');
meme1.classList.add("meme1");
meme1.src = meme1img;
backdropAnimation.appendChild(meme1);

const meme2 = document.createElement('img');
meme2.classList.add("meme2");
meme2.src = meme2img;
backdropAnimation.appendChild(meme2);

const meme3 = document.createElement('img');
meme3.classList.add("meme3");
meme3.src = meme3img;
backdropAnimation.appendChild(meme3);

const meme4 = document.createElement('img');
meme4.classList.add("meme4");
meme4.src = meme4img;
backdropAnimation.appendChild(meme4);

const meme5 = document.createElement('img');
meme5.classList.add("meme5");
meme5.src = meme5img;
backdropAnimation.appendChild(meme5);

const meme6 = document.createElement('img');
meme6.classList.add("meme6");
meme6.src = meme6img;
backdropAnimation.appendChild(meme6);

const meme7 = document.createElement('img');
meme7.classList.add("meme7");
meme7.src = meme7img;
backdropAnimation.appendChild(meme7);

const meme8 = document.createElement('img');
meme8.classList.add("meme8");
meme8.src = meme8img;
backdropAnimation.appendChild(meme8);

const meme9 = document.createElement('img');
meme9.classList.add("meme9");
meme9.src = meme9img;
backdropAnimation.appendChild(meme9);

const meme10 = document.createElement('img');
meme10.classList.add("meme10");
meme10.src = meme10img;
backdropAnimation.appendChild(meme10);

const meme11 = document.createElement('img');
meme11.classList.add("meme11");
meme11.src = meme11img;
backdropAnimation.appendChild(meme11);

const meme12 = document.createElement('img');
meme12.classList.add("meme12");
meme12.src = meme12img;
backdropAnimation.appendChild(meme12);

const meme13 = document.createElement('img');
meme13.classList.add("meme13");
meme13.src = meme13img;
backdropAnimation.appendChild(meme13);

const meme14 = document.createElement('img');
meme14.classList.add("meme14");
meme14.src = meme14img;
backdropAnimation.appendChild(meme14);

const meme15 = document.createElement('img');
meme15.classList.add("meme15");
meme15.src = meme15img;
backdropAnimation.appendChild(meme15);

const meme16 = document.createElement('img');
meme16.classList.add("meme16");
meme16.src = meme16img;
backdropAnimation.appendChild(meme16);

const meme17 = document.createElement('img');
meme17.classList.add("meme17");
meme17.src = meme17img;
backdropAnimation.appendChild(meme17);

const meme18 = document.createElement('img');
meme18.classList.add("meme18");
meme18.src = meme18img;
backdropAnimation.appendChild(meme18);

const meme19 = document.createElement('img');
meme19.classList.add("meme19");
meme19.src = meme19img;
backdropAnimation.appendChild(meme19);

const meme20 = document.createElement('img');
meme20.classList.add("meme20");
meme20.src = meme20img;
backdropAnimation.appendChild(meme20);

const meme21 = document.createElement('img');
meme21.classList.add("meme21");
meme21.src = meme21img;
backdropAnimation.appendChild(meme21);

const meme22 = document.createElement('img');
meme22.classList.add("meme22");
meme22.src = meme22img;
backdropAnimation.appendChild(meme22);

const meme23 = document.createElement('img');
meme23.classList.add("meme23");
meme23.src = meme23img;
backdropAnimation.appendChild(meme23);

const meme24 = document.createElement('img');
meme24.classList.add("meme24");
meme24.src = meme24img;
backdropAnimation.appendChild(meme24);

const meme25 = document.createElement('img');
meme25.classList.add("meme25");
meme25.src = meme25img;
backdropAnimation.appendChild(meme25);

document.addEventListener('DOMContentLoaded', function() {

  // LINKS
  twitterBtn.addEventListener('click', function() {
    window.open('https://x.com/ChomikSol', '_blank');
  });

  telegramBtn.addEventListener('click', function() {
    window.open('https://t.me/chomikportal', '_blank');
  });

  chartBtn.addEventListener('click', function() {
    window.open('https://dexscreener.com/solana/', '_blank');
  });

  buyBtn.addEventListener('click', function() {
    window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=', '_blank');
  });

  // COPY FUNCTION
  const copyButton = copyCaBtn;
  const textToCopy = "9s27dnCRMVhxtskPded2aYVXsbwWbJ1yuc2PobHUpFiA";
  copyButton.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });

  const memesToPop = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8, meme9, meme10, meme11, meme12, meme13, meme14, meme15, meme16, meme17, meme18, meme19, meme20, meme21, meme22, meme23, meme24, meme25];

  let currentIndex = null;
  function getRandomIndex() {
    return Math.floor(Math.random() * memesToPop.length);
  }
  function showRandomMeme() {
    if (currentIndex !== null) {
      memesToPop[currentIndex].style.opacity = '0.0';
    }

    let newIndex = getRandomIndex();

    while (newIndex === currentIndex) {
      newIndex = getRandomIndex();
    }
    
    memesToPop[newIndex].style.opacity = '1.0';
    currentIndex = newIndex;
  }

  // Initially hide all memes
  memesToPop.forEach(meme => {
    meme.style.opacity = '0.0';
  });
  // Show a random meme every 1/3 second
  setInterval(showRandomMeme, 333);
});