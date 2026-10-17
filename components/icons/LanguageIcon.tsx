// Two speech bubbles: languages
export default function LanguageIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path d="M4 5h9v7H8l-3 3v-3H4Z" />
      <path d="M13 9h7v7h-1v3l-3-3h-4v-3" />
    </svg>
  );
}
