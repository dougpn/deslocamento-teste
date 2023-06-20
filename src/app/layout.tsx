/* Components */
import { Nav } from "./components/Nav";

/* Instruments */
import styles from "./styles/layout.module.css";
import "./styles/globals.css";
import MainLayout from "./components/layouts/MainLayout";

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body><MainLayout>{props.children}</MainLayout></body>
    </html>
  );
}
