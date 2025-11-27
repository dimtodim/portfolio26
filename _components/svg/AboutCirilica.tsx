import { SVGProps } from "react";

export default function AboutCirilica(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="about_vertical"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 384"
      fill="currentColor"
      {...props} // <- ovo omogućava className, style, itd.
    >
      <path d="M0,188v36h12v-7.2c5.01,4.52,11.25,7.2,18,7.2,16.57,0,30-16.12,30-36s-13.43-36-30-36S0,168.12,0,188ZM48,188c0,13.25-8.06,24-18,24s-18-10.75-18-24,8.06-24,18-24,18,10.75,18,24Z" />
      <path d="M0,384h12v-24c10.95,14.57,28.37,24,48,24v-11.93c-4.14,0-8.16-.52-12-1.51v-46.56h12v-12H0v72ZM36,324v41.65c-13.7-7.91-23.14-22.39-24-39.13v-2.52h24Z" />
      <path d="M0,92h24v24c0,13.25-10.75,24-24,24v12c19.88,0,36-16.12,36-36v-24h12v60h12v-72H0v12Z" />
      <path d="M12,232H0v72h60v-54c0-9.94-8.06-18-18-18s-18,8.06-18,18v42h-12v-60ZM36,250c0-3.31,2.69-6,6-6s6,2.69,6,6v42h-12v-42Z" />
      <polygon points="0 72 12 72 12 42 60 42 60 30 12 30 12 0 0 0 0 72" />
    </svg>
  );
}
