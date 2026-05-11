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

export const VIEW_BOX = "0 0 100 100";

const data: HiraganaItem[] = [
  {
    char: "あ",
    reading: "あ",
    romaji: "a",
    strokes: [
      "M22,32 Q45,30 75,30",
      "M52,18 Q50,50 42,75 Q38,82 32,80",
      "M72,38 Q88,52 78,72 Q60,88 38,78 Q22,68 35,55 Q55,46 72,58",
    ],
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
    strokes: [
      "M28,30 Q22,55 30,75 Q38,82 48,72",
      "M70,35 Q68,55 70,68",
    ],
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
    strokes: [
      "M42,20 L60,22",
      "M28,42 Q52,32 75,42 Q85,58 60,78 Q35,85 22,75",
    ],
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
    strokes: [
      "M48,15 Q50,20 55,22",
      "M28,38 L72,38 L30,78 Q50,82 75,72",
    ],
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
    strokes: [
      "M22,32 L72,30",
      "M52,18 Q50,55 38,75 Q30,82 25,75 Q22,65 35,62",
      "M75,55 Q82,65 78,72",
    ],
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
    strokes: [
      "M22,32 Q50,28 72,32 Q80,42 72,55 Q55,75 38,82 Q25,82 26,68",
      "M42,18 Q44,55 52,78",
      "M78,32 Q82,40 78,48",
    ],
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
    strokes: [
      "M22,32 L78,30",
      "M22,50 L78,48",
      "M58,18 Q35,42 22,60",
      "M30,70 Q48,82 38,90",
    ],
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
    strokes: ["M65,22 Q35,50 65,80"],
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
    strokes: [
      "M30,25 Q28,55 32,82 Q35,88 42,80",
      "M45,38 L75,38",
      "M68,30 Q70,55 65,78 Q60,85 55,80",
    ],
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
    strokes: [
      "M28,30 L70,28 Q72,38 60,38",
      "M25,72 L72,70",
    ],
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
    strokes: [
      "M30,30 L72,30",
      "M55,18 Q52,55 35,75",
      "M30,55 Q50,48 72,58 Q80,70 65,82 Q45,88 30,82",
    ],
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
    strokes: [
      "M40,20 Q38,55 40,75 Q50,85 70,75 Q78,68 75,60",
    ],
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
    strokes: [
      "M22,35 L78,33",
      "M52,18 Q50,52 38,62 Q35,68 42,72 Q60,72 65,82 Q60,90 50,85",
    ],
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
    strokes: [
      "M22,38 L70,36 Q78,46 70,55",
      "M48,22 Q50,55 55,82",
      "M22,68 L78,66",
    ],
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
    strokes: [
      "M28,28 L65,26 L30,50 L72,50 Q80,65 60,80 Q35,85 25,75",
    ],
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

export const HIRAGANA_LIST: HiraganaItem[] = data;

export const HIRAGANA_MAP: Record<string, HiraganaItem> = Object.fromEntries(
  data.map((h) => [h.char, h]),
);

// Grid layout for the 50-sounds chart (gyou × dan).
// Empty strings = blank cell in the standard layout.
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
