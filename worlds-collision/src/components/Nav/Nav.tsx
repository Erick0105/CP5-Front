import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <nav className="menu">
        <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/calculo">Cálculo</Link></li>
        </ul>
    </nav>
  )
}
