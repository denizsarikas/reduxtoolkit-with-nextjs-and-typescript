"use client"
import Login from '@/components/Login'
// import { useSelector } from 'react-redux/es/exports' // ts için değştirdik
import { useAppSelector } from '@/redux/store'

export default function Home() {

  // const username = useSelector((state) => state.authReducer.value.username) //type hatası için değiştiriyoruz
  const username = useAppSelector((state) => state.authReducer.value.username) //type hatası için değiştiriyoruz
  const isModerator = useAppSelector((state) => state.authReducer.value.isModerator) //type hatası için değiştiriyoruz

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 gap-3 bg-black text-white">
      <Login />
      <h1>Username: {username}</h1>
      {isModerator && <h1>This user is a moderator.</h1>}
    </main>
  )
}
