import {Menu, X} from 'lucide-react';
import {useState} from 'react';
import logo from '../assets/logo.png';
import acc from '../assets/acc.png';
import { navItems } from '../constants';

const navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    
    const toogleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="px-4 relative text-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-7 w-7 mr-4" src={logo} alt="logo"/>
                    <span className="text-xl tracking-tight">DEMO</span>
                </div>
                <ul className='hidden lg:flex space-x-12'>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                </ul>
                <div className="hidden lg:flex justify-center items-center">
                    <div className="text-xl tracking-tight mr-4">
                        <button>EN</button>
                    </div>
                    <a href='#'><img className="h-8 w-8" src={acc} alt='accImg'/></a>
                </div>
                <div className="lg:hidden md:flex-col justify-end">
                    <button onClick={toogleNavbar}>
                        {mobileDrawerOpen ? <X /> : <Menu />}
                    </button>
                    <div>
                        {mobileDrawerOpen && (
                            <div className="fixed top-14 right-0 z-20 bg-neutral-900 w-full p-10 flex
                            flex-col justify-center items-center lg:hidden">
                                <ul>
                                    {navItems.map((item, index) => (
                                        <li key={index} className='py-4'>
                                            <a href={item.href}>{item.label}</a>
                                        </li>
                                    ))}
                                </ul>
                                <a href='#' className='mt-4 flex items-center space-x-2'><img className="h-8 w-8" src={acc} alt='accImg'/> <span>Login</span></a>
                            </div>  
                        )}
                    </div>
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default navbar
