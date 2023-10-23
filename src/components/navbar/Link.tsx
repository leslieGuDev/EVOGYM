import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: string;
  setSelectedPage: (value: SelectedPage) => void;
  setIsMenuToggled?: (value: boolean) => void;
};

const Link = ({
  page,
  selectedPage,
  setSelectedPage,
  setIsMenuToggled,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;

  const handleClick = (lowerCasePage: SelectedPage) => {
    setSelectedPage(lowerCasePage);
    setIsMenuToggled && setIsMenuToggled(false);
  };

  return (
    <AnchorLink
      className={`${selectedPage === lowerCasePage ? "text-primary-500" : ""} 
      transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        handleClick(lowerCasePage);
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
