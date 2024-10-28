# simple-toast 🍞

## 📦 Installation

```bash
bun add @gs0428/simple-toast
# OR
pnpm add @gs0428/simple-toast
```

## 🔧 Setup

### 1. Create a Provider

```jsx
// provider.tsx
"use client";

import { Toast } from "@gs0428/simple-toast";

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <>
      {children}
      <Toast />
    </>
  );
}
```

### 2. Wrap Root Layout

```jsx
// layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
```

## 🚀 Usage

```jsx
// home.tsx
import { toast } from "@gs0428/simple-toast";

export default function Home() {
  const onClickFire = () => {
    toast("Hello World!");
  };

  return (
    <main>
      <button onClick={onClickFire}>Fire</button>
    </main>
  );
}
```

## ⚙️ Options

|   prop   |  type  |   default   | description                                                                                                                                                                |
| :------: | :----: | :---------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| position | string | "top-right" | Specifies where the Toast message will appear on the screen. Possible values: `"top-right"`, `"top-mid"`, `"top-left"`, `"bottom-right"`, `"bottom-mid"`, `"bottom-left"`. |
| duration | number |    3000     | The duration (in milliseconds) the Toast message remains on the screen. A higher number keeps it displayed longer.                                                         |
|   type   | string |  "default"  | Specifies the type of Toast message. Possible values: `"default"`, `"success"`, `"error"`. Different types have unique styles.                                             |

## 📜 License

Licensed under MIT
