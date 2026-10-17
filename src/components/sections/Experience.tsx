export function Experience() {
  return (
    <section className="relative bg-spruce grain">
      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-5 py-20 sm:px-10">
        <p className="caption text-xs text-stock/70">Arkusz 04</p>
        <div className="mt-2 flex flex-wrap items-end gap-x-6 gap-y-2">
          <p
            className="display inline-flex items-center bg-stock px-5 leading-[0.78] text-spruce sm:px-8"
            style={{ fontSize: "clamp(9rem, 34vw, 22rem)" }}
          >
            25
          </p>
          <p className="display pb-3 text-stock text-[clamp(2.4rem,9vw,5.5rem)] leading-[0.85] sm:pb-6">
            lat
            <br />
            doświadczenia
          </p>
        </div>
        <ul
          className="mt-10 flex items-end gap-[1.1%] border-b-2 border-stock/25 pb-3"
          aria-hidden="true"
        >
          {Array.from({ length: 25 }, (_, index) => (
            <li
              key={index}
              className={`flex-1 ${
                (index + 1) % 5 === 0 ? "h-12 bg-stock/70" : "h-6 bg-stock/30"
              }`}
            />
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-stock/85 sm:text-xl">
          Ćwierć wieku przy różnorodnych instalacjach w firmach i u klientów
          prywatnych. Przez ten czas zmieniły się kotły, przepisy i urządzenia —
          a jakość została ta sama.
        </p>
      </div>
    </section>
  );
}
