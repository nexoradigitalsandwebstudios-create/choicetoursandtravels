import CallBar from "@/components/CallBar";

// Every page under /devotional renders inside this wrapper.
// data-mode="devotional" switches the accent to gold, the base font to 18px
// and tap targets to 48px. See the [data-mode] blocks in app/globals.css.
// Devotional pages also get the call button pinned to the bottom on mobile.
export default function DevotionalLayout({ children }: LayoutProps<"/devotional">) {
  return (
    <div data-mode="devotional">
      {children}
      <CallBar />
    </div>
  );
}
