import LocaleSwitcher from './LocaleSwitcher';

export default function Navigation() {
  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div></div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
