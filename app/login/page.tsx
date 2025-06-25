import { HeaderOuter } from '../(components)/Headers/HeaderOuter';
import { FooterLinksOuter } from '../(components)/Footers/FooterLinksOuter';
import  Login  from '../(components)/Login/Login';

export default function LoginPage() {
    return (
      <main>
        <HeaderOuter/>
        <Login/>           
        <FooterLinksOuter/>
      </main>
    );
  } 