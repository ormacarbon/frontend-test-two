export default function Home() {
  function toggleTheme(e) {
    const container = document.querySelector("#container");
    if (e.target.checked) {
      container.classList.add("dark");
    } else {
      container.classList.remove("dark");
    }
  }

  return (
    <div id="container">
      <div
        className={`
        flex justify-center p-6 items-center h-screen 
        relative dark:bg-slate-800
      `}
      >
        <div
          className={`
          max-w-4xl flex flex-col justify-center 
          dark:text-zinc-300
        `}
        >
          <h1
            className={`
              font-bold text-2xl text-center pb-4
            `}
          >
            Dark Theme
          </h1>
          <div className="flex justify-center items-center gap-2 pb-4">
            <h2
              className={`
              font-bold text-xl text-center
            `}
            >
              Click to change theme
            </h2>
            <input
              className="peer hidden"
              type="checkbox"
              id="check"
              onChange={e => toggleTheme(e)}
            />
            <label
              className={`
            relative bg-zinc-500 flex items-center p-1 
            transition-all cursor-pointer w-14 h-7 
            rounded-full peer-checked:bg-zinc-200 
            peer-checked:justify-end
          `}
              htmlFor="check"
            >
              <span
                className={`
              h-5 w-5 rounded-full bg-zinc-200 dark:bg-zinc-500
            `}
              ></span>
            </label>
          </div>
          <p>
            Test test test test!!!!
          </p>
        </div>
      </div>
    </div>
  );
}