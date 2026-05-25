export function renderErrorPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>X Studio — Temporarily unavailable</title>
    <style>
      :root { color-scheme: light; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        background: #f6f1e8;
        color: #24211d;
        font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      }
      main {
        width: min(92vw, 520px);
        text-align: center;
        padding: 48px 20px;
      }
      .mark {
        width: 64px;
        height: 64px;
        margin: 0 auto 24px;
        display: grid;
        place-items: center;
        border-radius: 999px;
        background: #d5ff42;
        color: #24211d;
        font-size: 28px;
        font-weight: 700;
      }
      h1 {
        margin: 0;
        font-family: ui-serif, Georgia, Cambria, "Times New Roman", serif;
        font-size: clamp(2.5rem, 10vw, 4.5rem);
        font-weight: 400;
        line-height: 0.95;
      }
      p {
        margin: 18px auto 0;
        max-width: 34rem;
        color: rgba(36, 33, 29, 0.72);
        line-height: 1.6;
      }
      .actions {
        margin-top: 32px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px;
      }
      a, button {
        min-height: 44px;
        border: 1px solid rgba(36, 33, 29, 0.18);
        border-radius: 999px;
        padding: 0 20px;
        font: inherit;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        cursor: pointer;
      }
      button {
        background: #24211d;
        color: #f6f1e8;
      }
      a {
        display: inline-flex;
        align-items: center;
        background: transparent;
        color: #24211d;
      }
    </style>
  </head>
  <body>
    <main>
      <div class="mark">X</div>
      <h1>We'll be right back.</h1>
      <p>The site hit a temporary loading issue. Please refresh the page or return home.</p>
      <div class="actions">
        <button onclick="window.location.reload()">Refresh</button>
        <a href="/">Go home</a>
      </div>
    </main>
  </body>
</html>`;
}