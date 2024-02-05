import { SVGProps } from 'react';
const TerminalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="m11 12-7.071 7.071-1.414-1.414L8.172 12 2.514 6.343 3.929 4.93 10.999 12Zm0 7h10v2H11v-2Z" />
  </svg>
);
export default TerminalIcon;
