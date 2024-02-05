import { SVGProps } from 'react';
const ComputerIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M4 16h16V5H4v11Zm9 2v2h4v2H7v-2h4v-2H2.992A.998.998 0 0 1 2 16.992V4.008C2 3.451 2.455 3 2.992 3h18.016c.548 0 .992.449.992 1.007v12.985c0 .557-.455 1.008-.992 1.008H13Z" />
  </svg>
);
export default ComputerIcon;
