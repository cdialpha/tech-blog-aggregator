"use client"
import Link from 'next/link'
import { Session } from 'next-auth';
import SignInButton from './SignInButton';
import SignOut from './SignOutLink';

export interface NavbarProps {
  session?: Session | null;
}

export function Navbar({ session }: NavbarProps) {
    return (
        <nav className="w-full py-4 px-8 bg-gray-800 text-white flex justify-between items-center">
        <div className="text-lg font-bold">
            <Link href="/">TBA</Link>
        </div>
        <div>
        {session?.user ? (
        <div className="flex flex-row justify-between items-center">
          <div className="mr-4">{session.user.name}</div>
          <SignOut name={session.user.name ?? ''} />
        </div>
      ) : (
        <SignInButton />
      )}
        </div> 
        </nav>
    )
}