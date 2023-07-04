interface HomeIconProps {
  color?: string;
  className?: string;
}

export default function HomeIcon({ color, className }: HomeIconProps) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="home_line">
        <path
          id="Vector"
          d="M28 26.667C28 27.0207 27.8595 27.3598 27.6095 27.6098C27.3594 27.8599 27.0203 28.0004 26.6667 28.0004H5.33333C4.97971 28.0004 4.64057 27.8599 4.39052 27.6098C4.14048 27.3598 4 27.0207 4 26.667V12.6537C3.99986 12.4505 4.04616 12.25 4.13535 12.0674C4.22455 11.8849 4.35429 11.7251 4.51467 11.6004L15.1813 3.30436C15.4154 3.12229 15.7035 3.02344 16 3.02344C16.2965 3.02344 16.5846 3.12229 16.8187 3.30436L27.4853 11.6004C27.6457 11.7251 27.7754 11.8849 27.8646 12.0674C27.9538 12.25 28.0001 12.4505 28 12.6537V26.667ZM25.3333 25.3337V13.3044L16 6.0457L6.66667 13.3044V25.3337H25.3333Z"
          fill={color || '#424242'}
        />
      </g>
    </svg>
  );
}
