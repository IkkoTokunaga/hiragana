import Link from "next/link";
import { GOJUON_GRID, HIRAGANA_MAP } from "@/lib/hiragana";

export default function HomePage() {
  return (
    <div>
      <section className="rounded-3xl bg-white/70 p-5 shadow-sm">
        <h1 className="text-2xl font-bold text-primary-700">
          すきな ひらがなを えらんでね
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          えらぶと、なぞって かけるよ。かきじゅんも みられるよ。
        </p>
      </section>

      <section className="mt-5">
        <div
          className="grid grid-cols-5 gap-2 sm:gap-3"
          role="grid"
          aria-label="ごじゅうおん ひょう"
        >
          {GOJUON_GRID.flat().map((char, i) => {
            if (!char) {
              return <div key={`blank-${i}`} aria-hidden="true" />;
            }
            const item = HIRAGANA_MAP[char];
            const ready = !!item?.strokes && item.strokes.length > 0;
            return (
              <Link
                key={char}
                href={`/practice/${encodeURIComponent(char)}`}
                className={`relative flex aspect-square items-center justify-center rounded-2xl border-2 text-3xl font-bold shadow-sm transition-transform active:scale-95 sm:text-4xl ${
                  ready
                    ? "border-primary-300 bg-white text-gray-800 hover:bg-primary-50"
                    : "border-gray-200 bg-gray-50 text-gray-400"
                }`}
                aria-label={`${char} ${ready ? "" : "(じゅんびちゅう)"}`}
              >
                {char}
                {!ready && (
                  <span className="absolute bottom-1 right-1 rounded-full bg-gray-300 px-1.5 py-0.5 text-[8px] font-bold text-white">
                    じゅんび
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="mt-6 rounded-2xl bg-amber-50 p-4 text-sm text-amber-800">
        <strong>おしらせ:</strong>{" "}
        ピンク「じゅんび」マークの ひらがなは、かきじゅん データを じゅんび ちゅうです。
        あ ぎょう、か ぎょう、さ ぎょう（15もじ）が
        いま すぐに あそべます。
      </section>
    </div>
  );
}
