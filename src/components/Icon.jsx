const paths = {
  code: 'M8 16l-4-4 4-4M16 8l4 4-4 4M14 4l-4 16',
  mobile: 'M7 3h10a1 1 0 011 1v16a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zM11 18h2',
  layers: 'M12 3l9 5-9 5-9-5 9-5zM3 13l9 5 9-5M3 8l9 5 9-5',
  cpu: 'M8 8h8v8H8V8zM8 3v3M12 3v3M16 3v3M8 18v3M12 18v3M16 18v3M3 8h3M3 12h3M3 16h3M18 8h3M18 12h3M18 16h3',
  briefcase: 'M4 8h16v11a1 1 0 01-1 1H5a1 1 0 01-1-1V8zM9 8V6a2 2 0 012-2h2a2 2 0 012 2v2',
  server: 'M4 5h16v5H4V5zM4 14h16v5H4v-5zM8 7.5h.01M8 16.5h.01',
  sliders: 'M4 6h6M14 6h6M4 12h10M18 12h2M4 18h6M14 18h6M10 4v4M18 10v4M10 16v4',
  custom: 'M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.9L12 3z',
}
 
export default function Icon({ name, className = 'w-6 h-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d={paths[name]} />
    </svg>
  )
}