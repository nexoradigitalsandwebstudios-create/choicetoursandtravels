// Every page under /tours (including /tours/[slug]) renders inside this wrapper.
// data-mode="leisure" switches the accent to terracotta and keeps the 16px
// base font. See the [data-mode] blocks in app/globals.css.
export default function ToursLayout({ children }: LayoutProps<"/tours">) {
  return <div data-mode="leisure">{children}</div>;
}
