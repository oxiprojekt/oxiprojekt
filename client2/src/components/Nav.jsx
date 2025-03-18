import { navItems } from '../constants';
//import {navigation} from '../data';
//import {Link} from 'react-scroll';

const Nav = () => {
  return (
    <div>
        <ul className='flex space-x-8 capitalize text-[14px]'>
            {navItems.map((item, index) => {
                return (
                    <li className='cursor-pointer group'
                    key={index}>
                        <a className='transition-all duration-300 relative'
                            href={item.href}>{item.label}
                            <div className="w-full h-[2px] bg-rose-500 transform scale-x-0 group-hover:scale-x-90 transition-all duration-300 ease-in"></div>
                        </a>
                        
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
export default Nav;
