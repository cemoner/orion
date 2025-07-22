import { Header } from '../components/ui/Header';
import {Footer} from '../components/ui/Footer'; 
import Home from './home/page';
export default function HomePage() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}