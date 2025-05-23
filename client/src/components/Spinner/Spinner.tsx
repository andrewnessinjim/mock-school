import * as React from "react";

const Spinner: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    preserveAspectRatio="xMidYMid"
    style={{
      shapeRendering: "auto",
      display: "block",
      background: "0 0",
    }}
    viewBox="0 0 100 100"
    {...props}
  >
    <g transform="translate(80 50)">
      <circle r={6} fill="#b659c5">
        <animateTransform
          attributeName="transform"
          begin="-0.875s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.875s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(45 -50.355 121.569)">
      <circle r={6} fill="#b659c5" fillOpacity={0.875}>
        <animateTransform
          attributeName="transform"
          begin="-0.75s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.75s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(90 -15 65)">
      <circle r={6} fill="#b659c5" fillOpacity={0.75}>
        <animateTransform
          attributeName="transform"
          begin="-0.625s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.625s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(135 -.355 41.569)">
      <circle r={6} fill="#b659c5" fillOpacity={0.625}>
        <animateTransform
          attributeName="transform"
          begin="-0.5s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.5s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(180 10 25)">
      <circle r={6} fill="#b659c5" fillOpacity={0.5}>
        <animateTransform
          attributeName="transform"
          begin="-0.375s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.375s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(-135 20.355 8.431)">
      <circle r={6} fill="#b659c5" fillOpacity={0.375}>
        <animateTransform
          attributeName="transform"
          begin="-0.25s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.25s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(-90 35 -15)">
      <circle r={6} fill="#b659c5" fillOpacity={0.25}>
        <animateTransform
          attributeName="transform"
          begin="-0.125s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="-0.125s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
    <g transform="rotate(-45 70.355 -71.569)">
      <circle r={6} fill="#b659c5" fillOpacity={0.125}>
        <animateTransform
          attributeName="transform"
          begin="0s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          type="scale"
          values="1.5 1.5;1 1"
        />
        <animate
          attributeName="fill-opacity"
          begin="0s"
          dur="1s"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </g>
  </svg>
);

export default Spinner;
