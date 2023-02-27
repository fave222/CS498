import Image from 'next/image';
import { Inter } from '@next/font/google';

import MyNavbar from '../app/Components/navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <MyNavbar/>
  )
}
