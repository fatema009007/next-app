import Link from 'next/link'
import ProductCart from './components/ProductCart'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
export const dynamic = 'dynamic force';


export default async function Home() {
 const session= await getServerSession(authOptions);
 console.log(`session`, session);
  return (
    <>
     <h1>Hello  {session && <span>{session.user!.name}</span>}</h1>
     <Link href="users/new">new users</Link>
    <ProductCart/>
    </>
   
  )
}
