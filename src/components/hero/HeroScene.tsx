import type { ReactNode } from "react";
import { spruceRow } from "@/lib/spruce-row";

const sceneStyles = `
  .plane-sky { fill: #2e5567 }
  .plane-cloud { fill: #efe9da }
  .plane-far { fill: #24485a }
  .plane-cliff { fill: #2a5163 }
  .plane-cliff-shade { fill: #1d3f4f }
  .plane-mid { fill: #1c3b32 }
  .plane-forest { fill: #16332b }
  .plane-ground { fill: #efe9da }
  .plane-ground-shade { fill: #d5d2c2 }
  .plane-wall { fill: #efe9da }
  .plane-roof { fill: #16332b }
  .plane-heat { fill: #d8452a }
  .plane-heat-line { fill: none; stroke: #d8452a }
  .plane-paper-line { fill: none; stroke: #efe9da }
  .summer .plane-sky { fill: #e8dcbe }
  .summer .plane-cloud { fill: #f4eede }
  .summer .plane-far { fill: #2e5567 }
  .summer .plane-cliff { fill: #c0803a }
  .summer .plane-cliff-shade { fill: #9d6528 }
  .summer .plane-mid { fill: #1c3b32 }
  .summer .plane-forest { fill: #16332b }
  .summer .plane-ground { fill: #c0803a }
  .summer .plane-ground-shade { fill: #a86c2c }
  .summer .plane-wall { fill: #efe9da }
  .summer .plane-roof { fill: #16332b }
  .scene { transform: translate(340px, -88px) }
  @media (min-width: 640px) { .scene { transform: translate(190px, -60px) } }
  @media (min-width: 1024px) { .scene { transform: none } }
  @media (max-width: 1023px) { .cloud-left { transform: translateX(400px) } }
`;

type HeroSceneProps = {
  summer: boolean;
  plateKey: number;
  plateAnimated: boolean;
  plateObject: ReactNode;
};

export function HeroScene({
  summer,
  plateKey,
  plateAnimated,
  plateObject,
}: HeroSceneProps) {
  return (
    <div className={`absolute inset-0 grain ${summer ? "summer" : ""}`}>
      <style>{sceneStyles}</style>

      <svg
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        <g className="scene">
          <rect className="plane plane-sky" x="-400" y="-200" width="2400" height="1400" />

          <g style={{ transform: "translateY(calc(var(--sy) * -22px))" }}>
            <g className="plane plane-cloud">
              <g className="cloud-left">
                <ellipse cx="250" cy="180" rx="130" ry="26" />
                <ellipse cx="330" cy="152" rx="86" ry="22" />
              </g>
              <ellipse cx="900" cy="120" rx="150" ry="22" />
              <ellipse cx="980" cy="96" rx="92" ry="18" />
            </g>
          </g>

          <g style={{ transform: "translateY(calc(var(--sy) * -46px))" }}>
            <path
              className="plane plane-far"
              d="M-400,1220 L-400,552 L110,508 L200,534 L320,470 L410,508 L530,456 L640,498 L760,450 L880,494 L1000,456 L1120,502 L1240,468 L1380,506 L1520,472 L2000,500 L2000,1220 Z"
            />
          </g>

          <g style={{ transform: "translateY(calc(var(--sy) * -78px))" }}>
            <path
              className="plane plane-cliff"
              d="M2000,1220 L1030,1220 L1030,486 L1082,438 L1118,356 L1178,330 L1224,262 L1292,296 L1344,244 L1402,286 L1458,240 L1524,278 L1600,228 L2000,228 Z"
            />
            <g className="plane plane-cliff-shade">
              <path d="M1128,352 L1152,346 L1168,1220 L1140,1220 Z" />
              <path d="M1246,276 L1272,288 L1288,1220 L1258,1220 Z" />
              <path d="M1372,266 L1398,282 L1414,1220 L1384,1220 Z" />
              <path d="M1494,258 L1520,276 L1536,1220 L1506,1220 Z" />
            </g>
          </g>

          <g style={{ transform: "translateY(calc(var(--sy) * -110px))" }}>
            <path
              className="plane plane-mid"
              d="M-400,1220 L-400,648 L120,614 L240,640 L360,590 L470,624 L580,578 L700,618 L820,592 L940,626 L1060,598 L1180,630 L1300,604 L1440,634 L2000,608 L2000,1220 Z"
            />
          </g>

          <g style={{ transform: "translateY(calc(var(--sy) * -140px))" }}>
            <path
              className="plane plane-ground"
              d="M-400,1220 L-400,779 L2000,735 L2000,1220 Z"
            />
            <path
              className="plane plane-ground-shade"
              d="M-400,1220 L-400,858 L420,836 L900,864 L2000,826 L2000,1220 Z"
            />
            <path
              className="plane plane-forest"
              d={spruceRow(776, -420, 2040, 34, 46, 104, 7)}
            />

            <g>
              <path className="plane plane-wall" d="M288,800 L288,690 L520,690 L520,800 Z" />
              <path className="plane plane-roof" d="M456,612 L482,612 L482,662 L456,662 Z" />
              <path className="plane plane-roof" d="M262,696 L404,600 L546,696 Z" />
              <path className="plane plane-roof" d="M288,788 L520,788 L520,800 L288,800 Z" />
            </g>

            <g key={plateKey} className={plateAnimated ? "plate-object" : undefined}>
              {plateObject}
            </g>
          </g>

          <g style={{ transform: "translateY(calc(var(--sy) * -180px))" }}>
            <path
              className="plane plane-forest"
              d="M120,920 L120,704 L58,920 Z M120,920 L120,704 L182,920 Z M1436,920 L1436,672 L1360,920 Z M1436,920 L1436,672 L1512,920 Z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
}
