import NavBar from '@/app/ui/NavBar'
import './globals.css'

export const metadata = {
  title: 'SiSGeA Files'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='bg-slate-900 text-white'>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
