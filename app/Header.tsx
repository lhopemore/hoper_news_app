import Link from "next/link";
import NavLinks from "./NavLinks";
import SearchBox from "./SearchBox";
import DarkModeButton  from "./DarkModeButton";
import MenuButton from "./MenuButton";
import SubscribeButton from "./SubscribeButton";

function Header() {
  return (
    <header>
      <div className="grid grid-cols-3 p-10 items-center">
        <MenuButton />

        <Link href="/" prefetch={false}>
          <h1 className="font-serif text-2xl md:text-4xl text-center">
            The{" "}
            <span className="underline decoration-6 decoration-orange-400">
              Hopemore
            </span>{" "}
            News
          </h1>
        </Link>

        <div className="flex items-center justify-end space-x-2">
          <DarkModeButton />
          <SubscribeButton />
        </div>
      </div>

      <NavLinks />
      <SearchBox />
    </header>
  );
}

export default Header;