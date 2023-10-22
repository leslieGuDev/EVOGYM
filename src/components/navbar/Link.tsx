import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggled: (value: boolean) => void;
  isMenuToggled: boolean;
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
  isMenuToggled,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const handleOnClick = () => {
    setSelectedPage(lowerCasePage);
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-primary-500" : null
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={handleOnClick}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
