// /src/components/Icons.tsx

import React from 'react';

// SVG 컴포넌트가 받을 수 있는 props의 타입을 정의합니다.
// React.SVGProps<SVGSVGElement>는 <svg> 요소에 적용 가능한 모든 속성(className, onClick 등)을 포함합니다.
type SvgIconProps = React.SVGProps<SVGSVGElement>;

export const Icon = {
  Play: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 0 1 0 1.971l-11.54 6.347a1.125 1.125 0 0 1-1.667-.985V5.653Z" />
    </svg>
  ),
  Pause: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M6 6.75h3v10.5H6V6.75Zm9 0h3v10.5h-3V6.75Z" />
    </svg>
  ),
  Stop: (props: SvgIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M6 6.75h3v10.5H6V6.75Zm9 0h3v10.5h-3V6.75Z" />
    </svg>
  )
};
