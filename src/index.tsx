import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import { NoClickText, NoClickButton } from "../functions.tsx"

const app = new Elysia();
app.use(html());

function BaseHTML({ id, title, children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/htmx.org@1.9.8"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>
          {title}
        </title>
      </head>
      <body id={id} class="overflow-hidden">
        {children}
      </body>
    </html>
  );
};

function onrun() {
  for (let i = 0; i < 8; i++) {
    app.get(`/place${i}`, () => (
      <div id="div2" class="bg-slate-300 w-screen h-[100%]">
        <NoClickText i={i} />
        <NoClickButton i={i} />
      </div>
    ));
  };
};

app.get("/", () => (
  <BaseHTML id={'body'} title={"Hello World"}>
    <div id="div1" class="bg-slate-300 w-screen h-[100%]">
      <p class="text-8xl font-bold">NEVER CLICK THIS BUTTON</p>
      <button class="border-black border-solid w-screen h-[100%] bg-slate-100 border-t-8" hx-get="/place1" hx-swap="outerHTML">CLICK ME!</button>
    </div>
  </BaseHTML>
));

app.get("/jumpscare", () => (
  <>
    <img class="w-screen top-0 left-0 absolute" src="https://play-lh.googleusercontent.com/qBiLTYKuDA9aecK01rKoBYMp19lLOSq3xJvLkjTxlLCOJ_blR9ZPvBUblRaKFbDQ8P29" />
    <audio autoplay>
      <source src="./public/jumpscare.mp3" type="audio/mpeg" />
    </audio>
  </>
))

onrun();
app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
