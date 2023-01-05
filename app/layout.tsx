import "../styles/globals.css"
import Navbar from "./shared/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="wrapper">
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
