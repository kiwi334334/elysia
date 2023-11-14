import { html } from "@elysiajs/html";
import { Elysia, t } from "elysia";

const app = new Elysia();
app.use(html());

function BaseHTML({ title, children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://unpkg.com/htmx.org@1.9.8"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <title>
          {title}
        </title>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}

app.get("/", () => (
  <BaseHTML title={"Hello World"}>
    <div class="bg-slate-300 w-screen h-screen">
      <h1 class="text-[5vh]">Hello World</h1>
      <p>My name is BANANA</p>
    </div>
  </BaseHTML>
))

app.get("/form", () => (
  <>
  </>
));

app.post('/post1', ({ body }) => body)

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
