import { useState } from 'react';
import './App.css'
let shouldCreate = 0;
let tileHeight = 50;
let tileWidth = 25;
let rainSpeed = 0.5;
let rainInterval = 10;
function tileRainProgress(){
    let tiles = document.querySelectorAll<HTMLElement>(".tileRain");
    shouldCreate+=rainSpeed;
    if(shouldCreate>=tileHeight){
        shouldCreate = 0;
        tileRain();
    }
    tiles.forEach(tile => {
        tile.style.top = parseFloat(tile.style.top) + rainSpeed + "%";
        if(parseFloat(tile.style.top)>(100+(tileHeight*1.5))) {
            tile.remove();
        }
    });
}
function tileRain(PDH:undefined|number=undefined){ //PDH, skrót - predefined height
    for(let i = 0; i < (100/tileWidth); i++){
        let tile = document.createElement("div");
        tile.className = `tileRain tileOpacity${Math.floor(Math.random()*3+1)}`;
        tile.style.left = `${i*tileWidth}%`;
        if(PDH==undefined)
            tile.style.top = `-${tileHeight}%`;
        else
            tile.style.top = `${PDH}%`;
        tile.style.height = `${tileHeight}%`;
        tile.style.width = `${tileWidth}%`;
        document.getElementById("tileRainContainer")?.appendChild(tile);
    }
}
document.addEventListener("DOMContentLoaded",function(){
    let tileRainContainer = document.createElement("div");
    tileRainContainer.id = "tileRainContainer";
    document.getElementsByTagName("body")[0].appendChild(tileRainContainer);
    for(let i = -1; i < (100/tileHeight); i++){
        tileRain(i*tileHeight);
    }
    setInterval(tileRainProgress,rainInterval);
});

function NavBar(){
  return (
    <div className=''>

    </div>
  )
}
function Introduction() {
  return (
    <div>
      <h1 className="text-2xl text-white bg-blue-900 p-8 rounded-4xl
       shadow-xl
      shadow-blue-950
        h-auto
        w-sm
        xl:w-4xl 
        lg:w-3xl 
        md:w-2xl 
        sm:w-lg
        text-center
        "
        >
          Jestem Hubert Paciejewski.<br/>
          Chciałbym zostać programistą, najlepiej tworzyć gry lub strony internetowe.<br/>
          Chodzę do ZST Puławy nr. 4. - Chemika. <br/>
          Urodziłem się 4 grudnia 2009r. i pochodzę z Polski (szokujące).<br/>
          Lubię naturę i wycieczki na świeżym powietrzu.
        </h1>
    </div>
  );
}
function Banner(
  {header,photos,desc} : {header:string, photos:string[],desc:string},
){
  const [show, showHide] = useState(false);
  let emote = show ? "😐" : "😑";
  let pictureVisibility:string = show ? "" : "hidden";
  let descVisibility:string = show ? "" : "hidden";
  function click(){
    showHide(!show);
  }
  return (
    <div className='
        shadow-xl
        shadow-blue-950
        hover:scale-105
        hover:shadow-2xl
        hover:shadow-blue-900
        duration-75
        rounded-xl
        overflow-hidden
        w-sm
        xl:w-4xl 
        lg:w-3xl 
        md:w-2xl 
        sm:w-lg
        m-10
        '>
    <div className={`flex justify-center items-center lg:flex-row flex-col w-full overflow-hidden lg:max-h-64 ${pictureVisibility}`}>
      <img src={photos[0]} className='lg:w-1/3 w-full lg:h-full h-1/3'/>
      <img src={photos[1]} className='lg:w-1/3 w-full lg:h-full h-1/3'/>
      <img src={photos[2]} className='lg:w-1/3 w-full lg:h-full h-1/3'/>
    </div>
    <div className="@container flex flex-col gap-5 items-center justify-center bg-gray-600 text-zinc-50 h-auto p-3">
      <div className="text-4xl text-white p-5 w-full text-center">
          <h1 className='font-bold text-5xl'>{header} <button onClick={click} className="bg-blue-500 rounded-2xl p-3 m-3 hover:bg-blue-600 active:bg-blue-700 duration-90">{emote}</button></h1>
          <p className={`text-md p-5 ${descVisibility}`} dangerouslySetInnerHTML={{ __html: desc }}></p>
      </div>
    </div>
    </div>
  );
}
function App() {
  return (
    <div className="h-auto min-h-screen flex items-center justify-center p-10">
      <div className="@container flex flex-col items-center gap-10 w-full h-auto">
        <NavBar/>
        <h1 className="flex flex-col justify-center items-center text-5xl font-bold text-white bg-blue-950 p-5 rounded-full
        w-sm
        xl:w-5xl 
        lg:w-4xl 
        md:w-2xl 
        sm:w-xl
        text-center
         shadow-xl
        shadow-blue-950
        mb-15
        ">
          Personalne Portfolio
          <img src={"cat.gif"} style={{width:"150px"}}/>
        </h1>
        <Introduction />
        <Banner photos={["coding1.jpg","english1.jpg","people1.avif"]} header={"Umiejętności"} desc="
          Znam HTML, JS, CSS, SQL, TS, PHP, C++ w znacznym stopniu.<br>
          Poziom języka angielskiego mało się różni od polskiego. <br>
          Potrafię dość efektywnie pracować w zespole i dogadywać się z innymi.
        "/>
        <Banner photos={["game1.png","game2.png","game3.png"]} header={"Gry"} desc="
          Lubię gry które posiadają dużą różnorodność oraz historię.<br>
          Przeważnie gry 2D, platformówki, metroidvanie, sandbox. <br>
          Nie przepadam za grami survival, FPS, multiplayer, clickerów.
        "/>
        <Banner photos={["music1.png","music2.png","music3.png"]} header={"Muzyka"} desc="
          Podoba mi się muzyka energincza i ciężka, jak i spokojna.<br>
          Raczej trudno aby jakaś piosenka naprawdę mi się nie podobała..<br>
          Nie przepadam raczej za rapem, disco polo i zbyt ciężką muzyką.
        "/>
        <Banner photos={["film1.jpg","film2.jpg","film3.jpg"]} header={"Filmy/Seriale"} desc="
          Oglądam filmy science-fiction, fantasy oraz przygodowe.<br>
          Filmy eksplorujące ciekawe tematy lub interesujące koncepty.<br>
          Nie oglądam raczej horrorów (zależy), romansów, filmów dokumentalnych.
        "/>
        <Banner photos={["projekt1.jpg","projekt2.jpg","projekt3.jpg"]} header={"Projekty"} desc="
          W wolnym czasie lubię sobie stworzyć coś w co można później zagrać.<br>
          Projektami wartymi uwagi są jak widać na górze:<br>
          Blockblast - prosta rekreacja gry blockblast z (wydaje mi się) możliwą nieskończoną grą.<br>
          Wordle - rekreacja gry wordle, gdzie lista słów jest brana z github.<br>
          Postaw na Milion - rekreacja teleturnieju Postaw na Milion z możliwością modyfikacji zasad.<br>
          Obecnie jeszcze pracuje nad grą Rummikub ale jest jeszcze mocno nie dokończona.<br>
          Niestety te projekty nie są udostępnione, a Postaw na Milion posiada niczym nie blokowaną możliwość dodawania i usuwania pytań więc słabo by się sprawdziło na serwerze.
        "/>
      </div>
    </div>
  )
}

export default App
export { Introduction }
