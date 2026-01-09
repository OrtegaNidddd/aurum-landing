export function AurumLogo({
  className = "",
  size = 160,
}: {
  className?: string
  size?: number
}) {
  return (
    <svg
      width={size}
      height={(size * 85) / 158} // mantiene proporción original
      viewBox="0 0 158 85"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="AURUM Logo"
      role="img"
    >
      <path
        d="M4.58349e-05 1.07705C1.94389 20.4766 9.47157 33.437 19.7459 38.2858C49.8041 27.4362 78.9812 16.6749 119.514 3.796C73.4098 5.47653 46.764 9.13724 4.58349e-05 1.07705Z"
        fill="var(--aurum-gold)"
      />
      <path
        d="M25.1167 56.3623L48.4966 76.5532C73.26 47.9239 85.8224 31.6649 140.659 1.67731C98.1693 12.7928 59.7139 30.9761 25.1167 56.3623Z"
        fill="var(--aurum-gold)"
      />
      <path
        d="M66.7973 81.5774L92.93 84.8373C89.0656 67.9506 119.495 21.3624 157.398 2.59903e-05C109.926 22.7421 90.9128 41.2303 66.7973 81.5774Z"
        fill="var(--aurum-gold)"
      />
    </svg>
  )
}
