import type { JSX, SVGProps } from "react";
import type { ServiceIconName } from "@/lib/data";

type IconProps = SVGProps<SVGSVGElement>;

function Svg({ children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function GardenIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M16 26V14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 16c0-5-4.5-8.5-8-9 1.5 4 4.5 6.5 8 8.5 0-4.5 4-8.5 8.5-9-1.2 4.2-4.2 7-8.5 9.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8 26h16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function PavingIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5" y="7" width="10" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="17" y="7" width="10" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="5" y="16" width="7" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
      <rect x="14" y="16" width="13" height="7" rx="1.2" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function RemovalIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M7 22h18M9 22V12l4-3 3 2.5L20 9l3 3v10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M12 22V16M16.5 22v-4.5M21 22v-6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function TerraceIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M6 20h20M8 20v4M24 20v4M10 16h12v4H10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M12 12c0-3 2-5 4-5s4 2 4 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function PathIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M8 26c3-5 3-9 0-16M24 26c-3-5-3-9 0-16"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 10h8M11 15h10M12 20h8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

export function EarthIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M6 22h20M8 22c1.5-4 4-7 8-7s6.5 3 8 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 15V8M16 8c2.5 0 4.5 1.5 5 3.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M11 18.5c.8-1.4 2-2.2 3.4-2.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </Svg>
  );
}

const serviceIcons: Record<
  ServiceIconName,
  (props: IconProps) => JSX.Element
> = {
  garden: GardenIcon,
  paving: PavingIcon,
  removal: RemovalIcon,
  terrace: TerraceIcon,
  path: PathIcon,
  earth: EarthIcon,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: ServiceIconName;
  className?: string;
}) {
  const Icon = serviceIcons[name];
  return <Icon className={className} />;
}

export function PhoneIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M9.5 7.5h4l1.5 4-2.2 1.3a12 12 0 0 0 6.4 6.4l1.3-2.2 4 1.5v4A2 2 0 0 1 22.5 24.5 15 15 0 0 1 7.5 9.5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5" y="8" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6 10l10 8 10-8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export function PinIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M16 27s8-7.2 8-13a8 8 0 1 0-16 0c0 5.8 8 13 8 13Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="14" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </Svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path
        d="M7 16.5 13 22.5 25 9.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
