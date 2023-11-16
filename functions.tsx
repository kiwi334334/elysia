export function NoClickButton({ i }) {
  switch (i) {
    case 1:
      return (
        <button class="border-black border-solid w-screen h-[100%] bg-slate-100 border-t-8" hx-get="/place2" hx-swap="outerHTML">CLICK ME!</button>
      );
    case 2:
      return (
        <button class="border-black border-solid w-screen h-[100%] bg-slate-100 border-t-8" hx-get="/place3" hx-swap="outerHTML">CLICK ME!</button>
      );
    case 3:
      return (
        <button class="border-black border-solid w-screen h-[100%] bg-slate-100 border-t-8" hx-get="/place4" hx-swap="outerHTML">CLICK ME!</button>
      );
    case 4:
      return (
        <button class="border-black border-solid w-screen h-[100%] bg-slate-100 border-t-8" hx-get="/place5" hx-swap="outerHTML">CLICK ME!</button>
      );
    case 5:
      return (
        <button class="border-black border-solid w-screen h-[100%] bg-slate-100 border-t-8" hx-get="/place6" hx-swap="outerHTML">CLICK ME!</button>
      );
    case 6:
      return (
        <button class="border-black border-solid w-screen h-[100%] bg-slate-100 border-t-8" hx-get="/place7" hx-swap="outerHTML">CLICK ME!</button>
      );
  };
};



export function NoClickText({ i }) {
  switch (i) {
    case 1:
      return (
        <p class="text-8xl font-bold">OKAY DONT PRESS IT AGAIN</p>
      );
    case 2:
      return (
        <p class="text-8xl font-bold">STOP! YOU WILL NOT DO IT</p>
      );
    case 3:
      return (
        <p class="text-8xl font-bold">THATS IT IM COUNTING DOWN</p>
      );
    case 4:
      return (
        <p class="text-8xl font-bold">3...</p>
      );
    case 5:
      return (
        <p class="text-8xl font-bold">2...</p>
      );
    case 6:
      return (
        <p class="text-8xl font-bold">1...</p>
      );
    case 7:
      return (
        <>
          <p class="text-7xl font-bold">0... Ok You Win Im Leaving</p>
          <br />
          <button class="w-screen border-b-4 border-black" hx-get="/jumpscare" hx-swap="#body">Click Me</button>
        </>
      );
  };
};
