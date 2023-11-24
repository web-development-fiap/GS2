'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from './header.module.css';

export default function Header() {
    const router = useRouter();
  
    const handleLogout = () => {
      sessionStorage.removeItem('isAuthenticated');
      router.push('/');
      router.refresh();
    };
  
    const isAuthenticated = sessionStorage.getItem('isAuthenticated') === 'true';
  
    