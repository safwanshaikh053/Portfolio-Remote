export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container flex flex-col items-center justify-between gap-3 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Mohammed Safwan.</p>
        <p>Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
      </div>
    </footer>
  );
}
