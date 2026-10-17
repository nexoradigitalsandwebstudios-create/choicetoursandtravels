// Chat bubble with a handset, used next to WhatsApp links
export default function WhatsAppIcon({ className = "" }: { className?: string }) {
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
      <path d="M4.5 19.5 5.6 16A8.5 8.5 0 1 1 8.4 18.6Z" />
      <path d="M9 8.8c0 3.2 2.9 6.2 6.2 6.2l1.1-1.6-1.9-.9-.9.8a5 5 0 0 1-2.8-2.8l.8-.9-.9-1.9Z" />
    </svg>
  );
}
