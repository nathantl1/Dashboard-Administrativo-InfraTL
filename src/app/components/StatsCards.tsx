import svgPaths from "../../imports/svg-zhemrf0ynb";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  changePositive: boolean;
  iconBg: string;
  iconColor: string;
  iconType: "document" | "alert" | "clock" | "check";
}

function StatIcon({
  type,
  color,
}: {
  type: StatCardProps["iconType"];
  color: string;
}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {type === "document" && (
        <>
          <path
            d={svgPaths.p3713e00}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.pd2076c0}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M8.33333 7.5H6.66667"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M13.3333 10.8333H6.66667"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M13.3333 14.1667H6.66667"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </>
      )}
      {type === "alert" && (
        <>
          <path
            d={svgPaths.p377dab00}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M10 7.5V10.8333"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M10 14.1667H10.0083"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
        </>
      )}
      {type === "clock" && (
        <g clipPath="url(#clip_clock)">
          <path
            d={svgPaths.p14d24500}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d="M10 5V10L13.3333 11.6667"
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <defs>
            <clipPath id="clip_clock">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </g>
      )}
      {type === "check" && (
        <g clipPath="url(#clip_check)">
          <path
            d={svgPaths.p14d24500}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <path
            d={svgPaths.p3e012060}
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.66667"
          />
          <defs>
            <clipPath id="clip_check">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </g>
      )}
    </svg>
  );
}

function StatCard({
  label,
  value,
  change,
  changePositive,
  iconBg,
  iconColor,
  iconType,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-[14px] border border-[#e5e7eb] p-[17px]">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p
            className="text-[#4a5565] text-[12px] leading-[16px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {label}
          </p>
          <p
            className="text-[#101828] text-[24px] font-semibold leading-[32px] tracking-[0.07px] mt-1"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {value}
          </p>
          <div className="flex items-center gap-1 mt-2">
            <span
              className={`text-[12px] leading-[16px] ${
                changePositive ? "text-[#00a63e]" : "text-[#e7000b]"
              }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {change}
            </span>
            <span
              className="text-[#6a7282] text-[12px] leading-[16px]"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              vs. mes anterior
            </span>
          </div>
        </div>
        <div
          className="w-10 h-10 rounded-[10px] flex items-center justify-center shrink-0"
          style={{ backgroundColor: iconBg }}
        >
          <StatIcon type={iconType} color={iconColor} />
        </div>
      </div>
    </div>
  );
}

export function StatsCards() {
  const cards: StatCardProps[] = [
    {
      label: "Total de Chamados",
      value: "1.847",
      change: "\u2191 12%",
      changePositive: true,
      iconBg: "#dbeafe",
      iconColor: "#3B82F6",
      iconType: "document",
    },
    {
      label: "Pendentes",
      value: "2",
      change: "\u2193 5%",
      changePositive: false,
      iconBg: "#fef3c7",
      iconColor: "#F59E0B",
      iconType: "alert",
    },
    {
      label: "Em Execucao",
      value: "3",
      change: "\u2191 8%",
      changePositive: true,
      iconBg: "#dbeafe",
      iconColor: "#3B82F6",
      iconType: "clock",
    },
    {
      label: "Concluidos",
      value: "3",
      change: "\u2191 15%",
      changePositive: true,
      iconBg: "#d1fae5",
      iconColor: "#22C55E",
      iconType: "check",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {cards.map((card) => (
        <StatCard key={card.label} {...card} />
      ))}
    </div>
  );
}
