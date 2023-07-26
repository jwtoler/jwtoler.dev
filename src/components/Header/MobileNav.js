import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { Transition } from '@headlessui/react';
import { useCallback, useRef, useState } from 'react';

import classNames from 'classnames';
import Image from 'next/image';
import NavItem from './NavItem';
import Copyright from '../Copyright';
import Socials from '../Socials';

import { aboutData } from '../../data/aboutData';

const MobileNav = ({ navSections, currentSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const { name, occupation, profileImage } = aboutData;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const baseClass = "p-2 text-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500";
  const activeClass = classNames(baseClass, "bg-neutral-900 text-white font-bold");
  const inactiveClass = classNames(baseClass, "text-neutral-200 font-medium");

  useOnClickOutside(ref, toggleOpen);

  return (
    <>
      {isOpen ? (
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <div className="fixed inset-0 flex justify-end bg-stone-900 bg-opacity-75 z-20 sm:hidden">
            <div ref={ref} className="w-10/12 pt-8 bg-stone-800">
              <button onClick={toggleOpen} className="fixed p-1 top-3 right-3 z-40 rounded-md text-slate-300">
                <svg className="block h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {!!profileImage && (
                <div className="relative h-36 w-36 mb-6 mx-auto overflow-hidden rounded-full border border-white">
                  <Image alt="about-me-image" fill sizes="150" object-fit="cover" src={profileImage} />
                </div>
              )}
              <div className="mb-2.5 text-center text-3xl font-bold text-slate-100">{name}</div>
              <div className="my-1.5 text-center text-lg font-light text-slate-100">{occupation}</div>
              <nav className="my-8 flex flex-col gap-y-2 px-2">
                {navSections.map(section => (
                  <NavItem
                    activeClass={activeClass}
                    current={section === currentSection}
                    inactiveClass={inactiveClass}
                    key={section}
                    onClick={toggleOpen}
                    section={section}
                  />
                ))}
              </nav>
              <div className="my-5 flex justify-center gap-x-5 text-base text-neutral-100">
                <Socials />
              </div>
              <div className="mt-12 flex justify-center">
                <a href="#_" className="relative inline-flex items-center px-12 py-2 overflow-hidden text-lg font-medium text-cyan-600 border-2 border-cyan-600 rounded-full hover:text-white group hover:bg-gray-50">
                  <span className="absolute left-0 block w-full h-0 transition-all bg-cyan-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                  <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                  <span className="relative">Download CV</span>
                </a>
              </div>
              <Copyright />
            </div>
          </div>
        </Transition>
      ) : (
        <button
          onClick={toggleOpen}
          className="fixed p-1 top-3 right-3 z-40 bg-zinc-500 rounded-md text-slate-300 sm:hidden focus:bg-stone-800"
          aria-controls="mobile-menu"
          aria-expanded="false"
          aria-label="Menu Button">
          <span className="sr-only">Open main menu</span>
          <svg className="block h-9 w-9" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}
    </>
  );
};

export default MobileNav;