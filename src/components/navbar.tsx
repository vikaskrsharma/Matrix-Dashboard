import React from 'react'
import NavCartIcon from './icons/navCartIcon'
import NavHealthIcon from './icons/navHealthIcon'

const Navbar = () => {
    const navLinks = [
        {
            name: 'Revenue Leakage',
            icon: <NavCartIcon />,
        },
        {
            name: 'Satisfaction Score',
            icon: <NavHealthIcon />
        }
    ]
    return (
        <nav className='side-nav'>
            <div className='nav-bar h-full  pl-[29px] pt-[38px]'>
                <div className='nav-heading text-[26px] font-semibold leading-[31.47px] text-left'>Health Matrix</div>

                <div className='nav-links mt-[29px]'>
                    <ul className='nav-link-list flex flex-col gap-[30px]'>
                        {navLinks.map((link) => {
                            return (
                                <li className='flex gap-[14px] items-center' key={link.name}>
                                    <span className='w-8 h-8 rounded-[12px] bg-[rgba(15,23,42,0.1)] flex justify-center items-center'>
                                        {link.icon}
                                    </span>
                                    <span className='text-[16px] font-normal leading-[19.36px] text-left'>{link.name}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar