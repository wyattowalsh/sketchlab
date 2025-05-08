import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center p-4 md:p-8 lg:p-16">
      <h1 className="mb-4 text-2xl md:text-4xl lg:text-6xl font-bold leading-tight">
        Hello World
      </h1>
      <p className="text-fd-muted-foreground text-base md:text-lg lg:text-xl leading-relaxed">
        You can open{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}
        and see the documentation.
      </p>
    </main>
  );
}
