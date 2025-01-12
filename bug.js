```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Next.js 15 App</h1>
      <p>This is a simple Next.js 15 app.</p>
    </div>
  );
}
```
This code will not render correctly if the `pages` directory is renamed.  Next.js 15 uses a file-system based routing system, and if the `pages` directory is moved or renamed the application will not find the index page and result in a 404 error.