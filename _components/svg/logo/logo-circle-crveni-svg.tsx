interface LogoCircleCrveniSvgProps extends React.SVGProps<SVGSVGElement> {
  logoColor?: string;
}

export default function LogoCircleCrveniSvg({
  logoColor = "var(--color-amber-500)",

  ...props
}: LogoCircleCrveniSvgProps) {
  return (
    <svg
      id="logo_square"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192 192"
      {...props}
    >
      <path
        fill={logoColor}
        d="M115.23,72.03c-15.7,0-29.64,7.54-38.4,19.2v-19.2H19.23v9.6h19.2c-11.66,8.76-19.2,22.7-19.2,38.4h9.6c0-21.21,17.19-38.4,38.4-38.4v38.4h9.6c0-21.21,17.19-38.4,38.4-38.4v38.4h9.6c0-3.31.42-6.53,1.21-9.6h37.19v9.6h9.6v-48h-57.6ZM124.83,91.23v-9.6h9.6c-3.63,2.73-6.87,5.96-9.6,9.6ZM163.23,100.83h-33.26c6.64-11.48,19.05-19.2,33.26-19.2h0v19.2Z"
      />
      <path
        fill={logoColor}
        d="M96.03,0C42.99,0,0,42.99,0,96.03s42.99,96.03,96.03,96.03,96.03-42.99,96.03-96.03S149.07,0,96.03,0ZM96.03,184.06c-48.62,0-88.03-39.41-88.03-88.03S47.41,8,96.03,8s88.03,39.41,88.03,88.03-39.41,88.03-88.03,88.03Z"
      />
    </svg>
  );
}
