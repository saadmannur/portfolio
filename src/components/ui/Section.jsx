export default function Section({ id, children, className = "" }) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 py-16 sm:scroll-mt-24 sm:py-20 md:py-24 lg:py-28 ${className}`}
    >
      {children}
    </section>
  );
}
