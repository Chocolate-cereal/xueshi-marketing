export function ThemeScript() {
  const code = `(() => {try {const saved = localStorage.getItem('theme'); const dark = saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; document.documentElement.classList.toggle('dark', dark);} catch (_) {}})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
