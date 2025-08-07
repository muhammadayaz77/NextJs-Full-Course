import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Login",
  description: "you can login here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div className="my-20">

        {children}
        </div>
      </body>
    </html>
  );
}
