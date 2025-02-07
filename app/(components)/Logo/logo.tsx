import Image from 'next/image';

export function Logo () {
  
    return (
        <Image 
        src="/logo-coe.gif" 
        alt="Maine COE Logo" 
        width="70"
        height="35"
        />
    );
  }