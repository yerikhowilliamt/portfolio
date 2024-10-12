import Navbar from '../Elements/Navbar/Navbar';
import ThemeDropdown from '../ThemeDropdown/ThemeDropdown';
import Socials from '../Elements/Socials/Socials';
import Logo from '../Elements/Logo/Logo';

const Header = () => {
  return (
    <header className='w-full px-5 md:px-10 flex justify-between items-center'>
      <Logo />
      <Navbar />
      <div className='flex gap-4 md:gap-10'>
        <Socials />
        <ThemeDropdown />
      </div>
    </header>
  );
};

export default Header;
