import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const linkBase = 'px-3 py-2 rounded-lg hover:bg-gray-100';
  const active = ({ isActive }: { isActive: boolean }) => isActive ? `${linkBase} bg-gray-200` : linkBase;

  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-white/70 border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="font-semibold text-lg">Andrés · Portfolio</Link>
        <nav className="space-x-2">
          <NavLink to="/" className={active} end>Home</NavLink>
          <NavLink to="/projects" className={active}>Projects</NavLink>
        </nav>
      </div>
    </header>
  );
}