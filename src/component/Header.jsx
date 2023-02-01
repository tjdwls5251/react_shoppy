import React from 'react';
import {BsShop,BsFillPencilFill,BsCartFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
import CartStatus from './CartStatus';
import Button from './ui/Button';
import User from './User';

export default function Header() {
   const {user,login,logout} =useAuthContext();
    console.log(user)
    return (
        <header className='flex justify-between border-b border-gray-300 p-2'>
            <Link to='/' className='flex items-center text-4xl text-brand'>
                <BsShop />
                <h1>Shoppy</h1>
            </Link>
            <nav className='flex items-center gap-4 font-semibold'>
                <Link to='/products'>Products</Link>
                {user && <Link to='/carts' className='text-2xl'><CartStatus /></Link>}
                {user && user.isAdmin && (
                    <Link to='/products/new' className='text-2xl'><BsFillPencilFill /></Link>
                )}
                {user && <User user={user} />}
                {!user && <Button text={'Login'} onClick={login}  />}
                {user && <Button text={'Logout'} onClick={logout} />}
            </nav>
        </header>
    );
}

