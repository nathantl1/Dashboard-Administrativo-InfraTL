import svgPaths from "./svg-zhemrf0ynb";

function Heading() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#101828] text-[20px] top-0 tracking-[-0.4492px] whitespace-nowrap">Visão Geral</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Painel de controle do sistema de zeladoria urbana</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[48px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[333.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Total de Chamados</p>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[32px] left-0 top-[20px] w-[333.5px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">1.847</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[36.672px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-px whitespace-nowrap">↑ 12%</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[90.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">vs. mês anterior</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[60px] w-[333.5px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[333.5_0_0] h-[76px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph1 />
        <Heading2 />
        <Container5 />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[76px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container6 />
    </div>
  );
}

function StatsCard() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container3 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[333.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Pendentes</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[32px] left-0 top-[20px] w-[333.5px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">2</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[31.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#e7000b] text-[12px] top-px whitespace-nowrap">↓ 5%</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[90.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">vs. mês anterior</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[60px] w-[333.5px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="flex-[333.5_0_0] h-[76px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph2 />
        <Heading3 />
        <Container9 />
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p377dab00} id="Vector" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 7.5V10.8333" id="Vector_2" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1667H10.0083" id="Vector_3" stroke="var(--stroke-0, #F59E0B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#fef3c7] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[76px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container10 />
    </div>
  );
}

function StatsCard1() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-1 self-stretch shrink-0" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container7 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[333.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Em Execução</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[32px] left-0 top-[20px] w-[333.5px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">3</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16px] relative shrink-0 w-[31.523px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-px whitespace-nowrap">↑ 8%</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[90.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">vs. mês anterior</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[60px] w-[333.5px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[333.5_0_0] h-[76px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph3 />
        <Heading4 />
        <Container13 />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_456)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_456">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[76px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container14 />
    </div>
  );
}

function StatsCard2() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[14px] row-2 self-stretch shrink-0" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container11 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[16px] left-0 top-0 w-[333.5px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Concluídos</p>
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[32px] left-0 top-[20px] w-[333.5px]" data-name="Heading 3">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] left-0 not-italic text-[#101828] text-[24px] top-0 tracking-[0.0703px] whitespace-nowrap">3</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[36.844px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#00a63e] text-[12px] top-px whitespace-nowrap">↑ 15%</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[90.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">vs. mês anterior</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[4px] h-[16px] items-center left-0 top-[60px] w-[333.5px]" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container16() {
  return (
    <div className="flex-[333.5_0_0] h-[76px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Paragraph4 />
        <Heading5 />
        <Container17 />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_439)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3e012060} id="Vector_2" stroke="var(--stroke-0, #22C55E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_439">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#d1fae5] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[10px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[76px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container18 />
    </div>
  );
}

function StatsCard3() {
  return (
    <div className="bg-white col-2 justify-self-stretch relative rounded-[14px] row-2 self-stretch shrink-0" data-name="StatsCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[17px] px-[17px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(2,minmax(0,1fr))] h-[236px] relative shrink-0 w-full" data-name="Container">
      <StatsCard />
      <StatsCard1 />
      <StatsCard2 />
      <StatsCard3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#101828] text-[16px] top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Ocorrências Recentes</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">Acompanhe as solicitações de zeladoria urbana</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[77px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
        <Heading1 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">#2847</p>
      </div>
    </div>
  );
}

function Text10() {
  return <div className="absolute bg-[#f0b100] left-[8px] rounded-[16777200px] size-[6px] top-[7px]" data-name="Text" />;
}

function Text9() {
  return (
    <div className="bg-[#fef9c2] h-[20px] relative rounded-[16777200px] shrink-0 w-[82.883px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text10 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[20px] not-italic text-[#a65f00] text-[12px] top-[3px] whitespace-nowrap">Pendente</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Buraco na Via</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Av. Principal, 1245 - Centro</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">10/03/2026</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="flex-[761_0_0] h-[84px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container24 />
        <Paragraph6 />
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[84px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container23 />
      <Button />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col h-[125px] items-start left-0 pb-px pt-[16px] px-[16px] top-0 w-[829px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container22 />
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.445px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">#2846</p>
      </div>
    </div>
  );
}

function Text13() {
  return <div className="absolute bg-[#2b7fff] left-[8px] rounded-[16777200px] size-[6px] top-[7px]" data-name="Text" />;
}

function Text12() {
  return (
    <div className="bg-[#dbeafe] h-[20px] relative rounded-[16777200px] shrink-0 w-[104.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text13 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[20px] not-italic text-[#1447e6] text-[12px] top-[3px] whitespace-nowrap">Em Execução</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Iluminação Pública</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Rua das Flores, 856 - Jardim</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">10/03/2026</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[761_0_0] h-[84px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container28 />
        <Paragraph9 />
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[84px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Button1 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[125px] items-start left-0 pb-px pt-[16px] px-[16px] top-[125px] w-[829px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container26 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.18px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">#2845</p>
      </div>
    </div>
  );
}

function Text16() {
  return <div className="absolute bg-[#00c950] left-[8px] rounded-[16777200px] size-[6px] top-[7px]" data-name="Text" />;
}

function Text15() {
  return (
    <div className="bg-[#dcfce7] h-[20px] relative rounded-[16777200px] shrink-0 w-[86.133px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text16 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[20px] not-italic text-[#008236] text-[12px] top-[3px] whitespace-nowrap">Concluído</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Coleta de Lixo</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Rua Santos Dumont, 234 - Vila Nova</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">09/03/2026</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="flex-[761_0_0] h-[84px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container32 />
        <Paragraph12 />
        <Paragraph13 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[84px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container31 />
      <Button2 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[125px] items-start left-0 pb-px pt-[16px] px-[16px] top-[250px] w-[829px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container30 />
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.523px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">#2844</p>
      </div>
    </div>
  );
}

function Text19() {
  return <div className="absolute bg-[#00c950] left-[8px] rounded-[16777200px] size-[6px] top-[7px]" data-name="Text" />;
}

function Text18() {
  return (
    <div className="bg-[#dcfce7] h-[20px] relative rounded-[16777200px] shrink-0 w-[86.133px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text19 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[20px] not-italic text-[#008236] text-[12px] top-[3px] whitespace-nowrap">Concluído</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text17 />
      <Text18 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Poda de Árvore</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Av. dos Estados, 3456 - Industrial</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">09/03/2026</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="flex-[761_0_0] h-[84px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container36 />
        <Paragraph15 />
        <Paragraph16 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[84px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Button3 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col h-[125px] items-start left-0 pb-px pt-[16px] px-[16px] top-[375px] w-[829px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container34 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.289px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">#2843</p>
      </div>
    </div>
  );
}

function Text22() {
  return <div className="absolute bg-[#2b7fff] left-[8px] rounded-[16777200px] size-[6px] top-[7px]" data-name="Text" />;
}

function Text21() {
  return (
    <div className="bg-[#dbeafe] h-[20px] relative rounded-[16777200px] shrink-0 w-[104.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text22 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[20px] not-italic text-[#1447e6] text-[12px] top-[3px] whitespace-nowrap">Em Execução</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Buraco na Via</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Rua 7 de Setembro, 789 - Centro</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">08/03/2026</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="flex-[761_0_0] h-[84px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container40 />
        <Paragraph18 />
        <Paragraph19 />
        <Paragraph20 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[84px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Button4 />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col h-[125px] items-start left-0 pb-px pt-[16px] px-[16px] top-[500px] w-[829px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container38 />
    </div>
  );
}

function Text23() {
  return (
    <div className="h-[20px] relative shrink-0 w-[43.945px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">#2842</p>
      </div>
    </div>
  );
}

function Text25() {
  return <div className="absolute bg-[#f0b100] left-[8px] rounded-[16777200px] size-[6px] top-[7px]" data-name="Text" />;
}

function Text24() {
  return (
    <div className="bg-[#fef9c2] h-[20px] relative rounded-[16777200px] shrink-0 w-[82.883px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text25 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[20px] not-italic text-[#a65f00] text-[12px] top-[3px] whitespace-nowrap">Pendente</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text23 />
      <Text24 />
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Limpeza de Bueiro</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Rua Amazonas, 1123 - São José</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">08/03/2026</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="flex-[761_0_0] h-[84px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container44 />
        <Paragraph21 />
        <Paragraph22 />
        <Paragraph23 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[84px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Button5 />
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col h-[125px] items-start left-0 pb-px pt-[16px] px-[16px] top-[625px] w-[829px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container42 />
    </div>
  );
}

function Text26() {
  return (
    <div className="h-[20px] relative shrink-0 w-[41.883px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">#2841</p>
      </div>
    </div>
  );
}

function Text28() {
  return <div className="absolute bg-[#00c950] left-[8px] rounded-[16777200px] size-[6px] top-[7px]" data-name="Text" />;
}

function Text27() {
  return (
    <div className="bg-[#dcfce7] h-[20px] relative rounded-[16777200px] shrink-0 w-[86.133px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text28 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[20px] not-italic text-[#008236] text-[12px] top-[3px] whitespace-nowrap">Concluído</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text26 />
      <Text27 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Sinalização de Trânsito</p>
    </div>
  );
}

function Paragraph25() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Av. Brasil, 2890 - Centro</p>
    </div>
  );
}

function Paragraph26() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">07/03/2026</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="flex-[761_0_0] h-[84px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container48 />
        <Paragraph24 />
        <Paragraph25 />
        <Paragraph26 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[84px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container47 />
      <Button6 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex flex-col h-[125px] items-start left-0 pb-px pt-[16px] px-[16px] top-[750px] w-[829px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container46 />
    </div>
  );
}

function Text29() {
  return (
    <div className="h-[20px] relative shrink-0 w-[44.383px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#101828] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">#2840</p>
      </div>
    </div>
  );
}

function Text31() {
  return <div className="absolute bg-[#2b7fff] left-[8px] rounded-[16777200px] size-[6px] top-[7px]" data-name="Text" />;
}

function Text30() {
  return (
    <div className="bg-[#dbeafe] h-[20px] relative rounded-[16777200px] shrink-0 w-[104.469px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text31 />
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[20px] not-italic text-[#1447e6] text-[12px] top-[3px] whitespace-nowrap">Em Execução</p>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex gap-[8px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text29 />
      <Text30 />
    </div>
  );
}

function Paragraph27() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Iluminação Pública</p>
    </div>
  );
}

function Paragraph28() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-px whitespace-nowrap">Rua das Acácias, 445 - Parque Verde</p>
    </div>
  );
}

function Paragraph29() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[#6a7282] text-[12px] top-px whitespace-nowrap">07/03/2026</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="flex-[761_0_0] h-[84px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Container51 />
        <Paragraph27 />
        <Paragraph28 />
        <Paragraph29 />
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-3/4 right-[16.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[45.83%] left-[16.67%] right-3/4 top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.33333 3.33333">
            <path d={svgPaths.p3815c300} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex h-[84px] items-start justify-between left-[16px] top-[891px] w-[797px]" data-name="Container">
      <Container50 />
      <Button7 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[999px] relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container25 />
      <Container29 />
      <Container33 />
      <Container37 />
      <Container41 />
      <Container45 />
      <Container49 />
    </div>
  );
}

function Paragraph30() {
  return (
    <div className="h-[16px] relative shrink-0 w-[170.75px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-0 not-italic text-[#4a5565] text-[0px] text-[12px] top-px whitespace-nowrap">
          <span className="leading-[16px]">{`Mostrando `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[16px]">8</span>
          <span className="leading-[16px]">{` de `}</span>
          <span className="font-['Inter:Medium',sans-serif] font-medium leading-[16px]">8</span>
          <span className="leading-[16px]">{` ocorrências`}</span>
        </p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative rounded-[4px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[35.5px] not-italic text-[#4a5565] text-[12px] text-center top-[5px] whitespace-nowrap">Anterior</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#3b82f6] h-[24px] relative rounded-[4px] shrink-0 w-[29.766px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[15px] not-italic text-[12px] text-center text-white top-[5px] whitespace-nowrap">1</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-[31.406px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[16px] not-italic text-[#4a5565] text-[12px] text-center top-[5px] whitespace-nowrap">2</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-[70.828px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[16px] left-[35.5px] not-italic text-[#4a5565] text-[12px] text-center top-[5px] whitespace-nowrap">Próximo</p>
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="h-[24px] relative shrink-0 w-[226.867px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Button8 />
        <Button9 />
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Paragraph30 />
      <Container54 />
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[#f9fafb] h-[57px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pt-[17px] px-[16px] relative size-full">
        <Container53 />
      </div>
    </div>
  );
}

function OccurrencesTable() {
  return (
    <div className="bg-white h-[1135px] relative rounded-[14px] shrink-0 w-full" data-name="OccurrencesTable">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container19 />
          <Container20 />
          <Container52 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[14px]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="flex-[1499_0_0] min-h-px min-w-px relative w-[863px]" data-name="Main Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[24px] items-start pt-[16px] px-[16px] relative size-full">
          <Container1 />
          <Container2 />
          <OccurrencesTable />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="flex-[863_0_0] h-[1578px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[79px] relative size-full">
        <MainContent />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#fafbfc] content-stretch flex h-[854px] items-start left-0 top-0 w-[863px]" data-name="App">
      <Container />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[16.67%] right-[16.67%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-1px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
            <path d="M1 1H17" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
            <path d="M1 1H17" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[16.67%] right-[16.67%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-1px_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 2">
            <path d="M1 1H17" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] px-[8px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M17.5 3.33333H11.6667" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 3.33333H2.5" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 10H10" id="Vector_3" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 10H2.5" id="Vector_4" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 16.6667H13.3333" id="Vector_5" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 16.6667H2.5" id="Vector_6" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M11.6667 1.66667V5" id="Vector_7" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M6.66667 8.33333V11.6667" id="Vector_8" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 15V18.3333" id="Vector_9" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text32() {
  return (
    <div className="flex-[1_0_0] h-[24px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[23px] not-italic text-[#364153] text-[16px] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Filtros</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[46px] items-center left-[441.13px] px-[17px] py-px rounded-[10px] top-0 w-[107.992px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon13 />
      <Text32 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#f9fafb] h-[42px] left-0 rounded-[10px] top-0 w-[429.133px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[40px] pr-[16px] py-[10px] relative rounded-[inherit] size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)] tracking-[-0.1504px] whitespace-nowrap">Buscar ocorrências, endereços, categorias...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[12px] size-[20px] top-[11px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pcddfd00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M17.5 17.5L13.9167 13.9167" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute h-[42px] left-0 top-[2px] w-[429.133px]" data-name="Container">
      <TextInput />
      <Icon14 />
    </div>
  );
}

function Container56() {
  return (
    <div className="flex-[549.125_0_0] h-[46px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button13 />
        <Container57 />
      </div>
    </div>
  );
}

function Paragraph31() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-[109px] not-italic text-[#101828] text-[14px] text-right top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">Admin Municipal</p>
    </div>
  );
}

function Paragraph32() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="-translate-x-full absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[109.59px] not-italic text-[#6a7282] text-[12px] text-right top-px whitespace-nowrap">Administrador</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[36px] relative shrink-0 w-[108.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Paragraph31 />
        <Paragraph32 />
      </div>
    </div>
  );
}

function Text33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[21.797px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[20px] left-0 not-italic text-[14px] text-white top-[0.5px] tracking-[-0.1504px] whitespace-nowrap">AM</p>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="relative rounded-[16777200px] shrink-0 size-[36px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(59, 130, 246) 0%, rgb(55, 137, 237) 7.1429%, rgb(50, 143, 228) 14.286%, rgb(46, 149, 219) 21.429%, rgb(42, 154, 210) 28.571%, rgb(39, 160, 200) 35.714%, rgb(35, 164, 191) 42.857%, rgb(33, 169, 181) 50%, rgb(30, 174, 170) 57.143%, rgb(29, 178, 160) 64.286%, rgb(28, 182, 148) 71.429%, rgb(29, 186, 137) 78.571%, rgb(30, 190, 124) 85.714%, rgb(31, 193, 110) 92.857%, rgb(34, 197, 94) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7.102px] relative size-full">
        <Text33 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[36px] items-center left-[44px] pl-[9px] top-0 w-[165.875px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-l border-solid inset-0 pointer-events-none" />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[8px] size-[20px] top-[8px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1c3efea0} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25877f40} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text34() {
  return <div className="absolute bg-[#3b82f6] left-[24px] rounded-[16777200px] size-[8px] top-[4px]" data-name="Text" />;
}

function Button14() {
  return (
    <div className="absolute left-0 rounded-[10px] size-[36px] top-0" data-name="Button">
      <Icon15 />
      <Text34 />
    </div>
  );
}

function Container58() {
  return (
    <div className="h-[36px] relative shrink-0 w-[209.875px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container59 />
        <Button14 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[46px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Button12 />
      <Container56 />
      <Container58 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[79px] items-start left-0 pb-px pt-[16px] px-[16px] top-0 w-[863px]" data-name="Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container55 />
    </div>
  );
}

function Text35() {
  return (
    <div className="h-[28px] relative shrink-0 w-[5.664px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Bold',sans-serif] font-bold leading-[28px] left-0 not-italic text-[20px] text-white top-0 tracking-[-0.4492px] whitespace-nowrap">I</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#3b82f6] relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center pl-[17.164px] pr-[17.172px] relative size-full">
        <Text35 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] left-0 not-italic text-[#f9fafb] text-[18px] top-0 tracking-[-0.4395px] whitespace-nowrap">InfraTL</p>
    </div>
  );
}

function Paragraph33() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-0 not-italic text-[12px] text-[rgba(249,250,251,0.6)] top-px whitespace-nowrap">Zeladoria Urbana</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Heading6 />
        <Paragraph33 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[44px] relative shrink-0 w-[149.305px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container65 />
        <Container66 />
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p354ab980} id="Vector" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
            <path d={svgPaths.p2a4db200} id="Vector" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[28px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[4px] px-[4px] relative size-full">
        <Icon16 />
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex h-[44px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container64 />
      <Button15 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[93px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#374151] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
        <Container63 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1fc96a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p33089d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p49cfa80} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1cfbf300} id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[24px] relative shrink-0 w-[84.328px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[42.5px] not-italic text-[16px] text-center text-white top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Visão Geral</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-[#3b82f6] content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon17 />
      <Text36 />
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button16 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_387)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M10 6.66667V10" id="Vector_2" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M10 13.3333H10.0083" id="Vector_3" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_387">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text37() {
  return (
    <div className="h-[24px] relative shrink-0 w-[90.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[45px] not-italic text-[16px] text-[rgba(249,250,251,0.7)] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Ocorrências</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon18 />
      <Text37 />
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button17 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31104300} id="Vector" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p1b3f8200} id="Vector_2" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M10 9.16667H13.3333" id="Vector_3" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M10 13.3333H13.3333" id="Vector_4" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M6.66667 9.16667H6.675" id="Vector_5" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M6.66667 13.3333H6.675" id="Vector_6" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text38() {
  return (
    <div className="h-[24px] relative shrink-0 w-[136.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[68.5px] not-italic text-[16px] text-[rgba(249,250,251,0.7)] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Ordens de Serviço</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon19 />
      <Text38 />
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button18 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text39() {
  return (
    <div className="h-[24px] relative shrink-0 w-[74.25px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[37px] not-italic text-[16px] text-[rgba(249,250,251,0.7)] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Relatórios</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon20 />
      <Text39 />
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button19 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.ped54800} id="Vector" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
          <path d={svgPaths.p3b27f100} id="Vector_2" stroke="var(--stroke-0, #F9FAFB)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text40() {
  return (
    <div className="h-[24px] relative shrink-0 w-[108.398px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[54.5px] not-italic text-[16px] text-[rgba(249,250,251,0.7)] text-center top-[-0.5px] tracking-[-0.3125px] whitespace-nowrap">Configurações</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[48px] items-center left-0 pl-[16px] rounded-[10px] top-0 w-[223px]" data-name="Button">
      <Icon21 />
      <Text40 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="List Item">
      <Button20 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[256px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[712_0_0] min-h-px min-w-px relative w-[255px]" data-name="Navigation">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] px-[16px] relative size-full">
          <List />
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[16px] left-[111.77px] not-italic text-[12px] text-[rgba(249,250,251,0.5)] text-center top-px whitespace-nowrap">© 2026 InfraTL</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[49px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#374151] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[17px] px-[16px] relative size-full">
        <Container68 />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-[#1f2937] content-stretch flex flex-col h-[854px] items-start left-[-256px] pr-px top-0 w-[256px]" data-name="Sidebar">
      <div aria-hidden="true" className="absolute border-[#374151] border-r border-solid inset-0 pointer-events-none" />
      <Container62 />
      <Navigation />
      <Container67 />
    </div>
  );
}

export default function AdminDashboardDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Admin Dashboard Design">
      <App />
      <Header />
      <Sidebar />
    </div>
  );
}