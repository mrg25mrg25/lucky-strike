import React, { Suspense } from 'react'
import Nav from "./(files)/nav/page"
import Nav_phone from "./(files)/nav_phone/page"
import Impact from "./(files)/impact/page"
export default function page() {
  return (
    <div>
     <Nav_phone/>
     <Nav/>
     <Impact/>
    </div>
  )
}
