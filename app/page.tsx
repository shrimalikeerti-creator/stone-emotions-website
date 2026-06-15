export default function HomePage() {
  return (
    <main style={{ padding: '60px 24px', textAlign: 'center' }}>
      <span className="eyebrow">Stone Emotions</span>
      <h1 style={{ fontSize: '2.4rem', margin: '14px 0' }}>
        Premium natural stone, carved with intent.
      </h1>
      <p style={{ color: 'var(--ink-soft)', maxWidth: '60ch', margin: '0 auto 24px' }}>
        This is a placeholder homepage for the new Next.js + Sanity build.
        The Gallery page is fully wired up to Sanity — visit{' '}
        <a href="/gallery/">/gallery/</a> to see it, and{' '}
        <a href="/studio/">/studio/</a> to manage content.
      </p>
    </main>
  );
}
