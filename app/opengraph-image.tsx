import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt = "ひらがな「あ」の筆順つきイメージ";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const SQ_W = 290;
const SQ_H = 289;

export default async function OpenGraphImage() {
  const bytes = await readFile(join(process.cwd(), "public", "og-square.png"));
  const src = `data:image/png;base64,${bytes.toString("base64")}`;

  const maxW = 1100;
  const maxH = 560;
  const scale = Math.min(maxW / SQ_W, maxH / SQ_H);
  const w = Math.round(SQ_W * scale);
  const h = Math.round(SQ_H * scale);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- Satori image element for OG */}
        <img src={src} width={w} height={h} alt="" />
      </div>
    ),
    { ...size },
  );
}
