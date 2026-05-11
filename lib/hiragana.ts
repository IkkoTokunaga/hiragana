import strokesJson from "./hiragana-strokes.json";

export type HiraganaWord = {
  word: string;
  emoji: string;
};

export type HiraganaItem = {
  char: string;
  reading: string;
  romaji: string;
  strokes?: string[];
  words: HiraganaWord[];
};

// KanjiVG SVGs are authored on a 109x109 grid.
export const VIEW_BOX = "0 0 109 109";

const STROKES = strokesJson as Record<string, string[]>;

type BaseEntry = Omit<HiraganaItem, "strokes">;

const BASE: BaseEntry[] = [
  {
    char: "あ",
    reading: "あ",
    romaji: "a",
    words: [
      { word: "あり", emoji: "🐜" },
      { word: "あめ", emoji: "🌧️" },
      { word: "あか", emoji: "🟥" },
    ],
  },
  {
    char: "い",
    reading: "い",
    romaji: "i",
    words: [
      { word: "いぬ", emoji: "🐶" },
      { word: "いす", emoji: "🪑" },
      { word: "いえ", emoji: "🏠" },
    ],
  },
  {
    char: "う",
    reading: "う",
    romaji: "u",
    words: [
      { word: "うみ", emoji: "🌊" },
      { word: "うし", emoji: "🐄" },
      { word: "うた", emoji: "🎵" },
    ],
  },
  {
    char: "え",
    reading: "え",
    romaji: "e",
    words: [
      { word: "えき", emoji: "🚉" },
      { word: "えほん", emoji: "📖" },
      { word: "えんぴつ", emoji: "✏️" },
    ],
  },
  {
    char: "お",
    reading: "お",
    romaji: "o",
    words: [
      { word: "おに", emoji: "👹" },
      { word: "おちゃ", emoji: "🍵" },
      { word: "おはな", emoji: "🌸" },
    ],
  },
  {
    char: "か",
    reading: "か",
    romaji: "ka",
    words: [
      { word: "かさ", emoji: "☂️" },
      { word: "かに", emoji: "🦀" },
      { word: "かばん", emoji: "👜" },
    ],
  },
  {
    char: "き",
    reading: "き",
    romaji: "ki",
    words: [
      { word: "きつね", emoji: "🦊" },
      { word: "きく", emoji: "🌼" },
      { word: "きいろ", emoji: "🟡" },
    ],
  },
  {
    char: "く",
    reading: "く",
    romaji: "ku",
    words: [
      { word: "くつ", emoji: "👟" },
      { word: "くも", emoji: "☁️" },
      { word: "くるま", emoji: "🚗" },
    ],
  },
  {
    char: "け",
    reading: "け",
    romaji: "ke",
    words: [
      { word: "けむり", emoji: "💨" },
      { word: "けいと", emoji: "🧶" },
      { word: "けいさん", emoji: "🧮" },
    ],
  },
  {
    char: "こ",
    reading: "こ",
    romaji: "ko",
    words: [
      { word: "こま", emoji: "🌀" },
      { word: "ことり", emoji: "🐦" },
      { word: "こい", emoji: "🐟" },
    ],
  },
  {
    char: "さ",
    reading: "さ",
    romaji: "sa",
    words: [
      { word: "さかな", emoji: "🐟" },
      { word: "さくら", emoji: "🌸" },
      { word: "さる", emoji: "🐵" },
    ],
  },
  {
    char: "し",
    reading: "し",
    romaji: "shi",
    words: [
      { word: "しか", emoji: "🦌" },
      { word: "しお", emoji: "🧂" },
      { word: "しま", emoji: "🏝️" },
    ],
  },
  {
    char: "す",
    reading: "す",
    romaji: "su",
    words: [
      { word: "すいか", emoji: "🍉" },
      { word: "すずめ", emoji: "🐦" },
      { word: "すな", emoji: "🏖️" },
    ],
  },
  {
    char: "せ",
    reading: "せ",
    romaji: "se",
    words: [
      { word: "せみ", emoji: "🦗" },
      { word: "せんせい", emoji: "👩\u200d🏫" },
      { word: "せかい", emoji: "🌍" },
    ],
  },
  {
    char: "そ",
    reading: "そ",
    romaji: "so",
    words: [
      { word: "そら", emoji: "☁️" },
      { word: "そふ", emoji: "👴" },
      { word: "そうじ", emoji: "🧹" },
    ],
  },
  {
    char: "た",
    reading: "た",
    romaji: "ta",
    words: [
      { word: "たまご", emoji: "🥚" },
      { word: "たいよう", emoji: "☀️" },
    ],
  },
  {
    char: "ち",
    reading: "ち",
    romaji: "chi",
    words: [
      { word: "ちず", emoji: "🗺️" },
      { word: "ちょうちょ", emoji: "🦋" },
    ],
  },
  {
    char: "つ",
    reading: "つ",
    romaji: "tsu",
    words: [
      { word: "つき", emoji: "🌙" },
      { word: "つみき", emoji: "🧱" },
    ],
  },
  {
    char: "て",
    reading: "て",
    romaji: "te",
    words: [
      { word: "てがみ", emoji: "✉️" },
      { word: "てぶくろ", emoji: "🧤" },
    ],
  },
  {
    char: "と",
    reading: "と",
    romaji: "to",
    words: [
      { word: "とり", emoji: "🐦" },
      { word: "とけい", emoji: "🕐" },
    ],
  },
  {
    char: "な",
    reading: "な",
    romaji: "na",
    words: [
      { word: "なす", emoji: "🍆" },
      { word: "なつ", emoji: "🌞" },
    ],
  },
  {
    char: "に",
    reading: "に",
    romaji: "ni",
    words: [
      { word: "にじ", emoji: "🌈" },
      { word: "にわとり", emoji: "🐔" },
    ],
  },
  {
    char: "ぬ",
    reading: "ぬ",
    romaji: "nu",
    words: [
      { word: "ぬいぐるみ", emoji: "🧸" },
      { word: "ぬの", emoji: "🧵" },
    ],
  },
  {
    char: "ね",
    reading: "ね",
    romaji: "ne",
    words: [
      { word: "ねこ", emoji: "🐱" },
      { word: "ねずみ", emoji: "🐭" },
    ],
  },
  {
    char: "の",
    reading: "の",
    romaji: "no",
    words: [
      { word: "のり", emoji: "🍙" },
      { word: "のはら", emoji: "🌾" },
    ],
  },
  {
    char: "は",
    reading: "は",
    romaji: "ha",
    words: [
      { word: "はな", emoji: "🌷" },
      { word: "はと", emoji: "🕊️" },
    ],
  },
  {
    char: "ひ",
    reading: "ひ",
    romaji: "hi",
    words: [
      { word: "ひこうき", emoji: "✈️" },
      { word: "ひつじ", emoji: "🐑" },
    ],
  },
  {
    char: "ふ",
    reading: "ふ",
    romaji: "fu",
    words: [
      { word: "ふね", emoji: "⛵" },
      { word: "ふうせん", emoji: "🎈" },
    ],
  },
  {
    char: "へ",
    reading: "へ",
    romaji: "he",
    words: [
      { word: "へび", emoji: "🐍" },
      { word: "へや", emoji: "🛏️" },
    ],
  },
  {
    char: "ほ",
    reading: "ほ",
    romaji: "ho",
    words: [
      { word: "ほし", emoji: "⭐" },
      { word: "ほん", emoji: "📚" },
    ],
  },
  {
    char: "ま",
    reading: "ま",
    romaji: "ma",
    words: [
      { word: "まめ", emoji: "🫘" },
      { word: "まど", emoji: "🪟" },
    ],
  },
  {
    char: "み",
    reading: "み",
    romaji: "mi",
    words: [
      { word: "みかん", emoji: "🍊" },
      { word: "みず", emoji: "💧" },
    ],
  },
  {
    char: "む",
    reading: "む",
    romaji: "mu",
    words: [
      { word: "むし", emoji: "🐛" },
      { word: "むぎ", emoji: "🌾" },
    ],
  },
  {
    char: "め",
    reading: "め",
    romaji: "me",
    words: [
      { word: "めだか", emoji: "🐟" },
      { word: "めがね", emoji: "👓" },
    ],
  },
  {
    char: "も",
    reading: "も",
    romaji: "mo",
    words: [
      { word: "もも", emoji: "🍑" },
      { word: "もり", emoji: "🌲" },
    ],
  },
  {
    char: "や",
    reading: "や",
    romaji: "ya",
    words: [
      { word: "やま", emoji: "⛰️" },
      { word: "やさい", emoji: "🥬" },
    ],
  },
  {
    char: "ゆ",
    reading: "ゆ",
    romaji: "yu",
    words: [
      { word: "ゆき", emoji: "❄️" },
      { word: "ゆび", emoji: "👆" },
    ],
  },
  {
    char: "よ",
    reading: "よ",
    romaji: "yo",
    words: [
      { word: "よる", emoji: "🌃" },
      { word: "よっと", emoji: "⛵" },
    ],
  },
  {
    char: "ら",
    reading: "ら",
    romaji: "ra",
    words: [
      { word: "らくだ", emoji: "🐫" },
      { word: "らっぱ", emoji: "🎺" },
    ],
  },
  {
    char: "り",
    reading: "り",
    romaji: "ri",
    words: [
      { word: "りんご", emoji: "🍎" },
      { word: "りす", emoji: "🐿️" },
    ],
  },
  {
    char: "る",
    reading: "る",
    romaji: "ru",
    words: [
      { word: "るす", emoji: "🏠" },
      { word: "るーぺ", emoji: "🔍" },
    ],
  },
  {
    char: "れ",
    reading: "れ",
    romaji: "re",
    words: [
      { word: "れもん", emoji: "🍋" },
      { word: "れんこん", emoji: "🪷" },
    ],
  },
  {
    char: "ろ",
    reading: "ろ",
    romaji: "ro",
    words: [
      { word: "ろうそく", emoji: "🕯️" },
      { word: "ろぼっと", emoji: "🤖" },
    ],
  },
  {
    char: "わ",
    reading: "わ",
    romaji: "wa",
    words: [
      { word: "わに", emoji: "🐊" },
      { word: "わたあめ", emoji: "🍬" },
    ],
  },
  {
    char: "を",
    reading: "を",
    romaji: "wo",
    words: [
      { word: "ほんをよむ", emoji: "📖" },
      { word: "みずをのむ", emoji: "💧" },
    ],
  },
  {
    char: "ん",
    reading: "ん",
    romaji: "n",
    words: [
      { word: "ぱん", emoji: "🍞" },
      { word: "みかん", emoji: "🍊" },
    ],
  },
];

const data: HiraganaItem[] = BASE.map((b) => ({
  ...b,
  strokes: STROKES[b.char],
}));

export const HIRAGANA_LIST: HiraganaItem[] = data;

export const HIRAGANA_MAP: Record<string, HiraganaItem> = Object.fromEntries(
  data.map((h) => [h.char, h]),
);

// Standard 50-sounds chart layout (gyou × dan). Empty strings = blank cell.
export const GOJUON_GRID: string[][] = [
  ["あ", "い", "う", "え", "お"],
  ["か", "き", "く", "け", "こ"],
  ["さ", "し", "す", "せ", "そ"],
  ["た", "ち", "つ", "て", "と"],
  ["な", "に", "ぬ", "ね", "の"],
  ["は", "ひ", "ふ", "へ", "ほ"],
  ["ま", "み", "む", "め", "も"],
  ["や", "", "ゆ", "", "よ"],
  ["ら", "り", "る", "れ", "ろ"],
  ["わ", "", "を", "", "ん"],
];

export function getHiragana(char: string): HiraganaItem | undefined {
  return HIRAGANA_MAP[char];
}
