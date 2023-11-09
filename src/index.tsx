import { html } from "@elysiajs/html";
import { Elysia } from "elysia";

const app = new Elysia();
app.use(html());

function BaseHTML({title, children}) {
  return (
    <html lang="en">
      <head>
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
  <BaseHTML title={"Hello"}>
    <h1>Hello</h1>
  </BaseHTML> 
));

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
