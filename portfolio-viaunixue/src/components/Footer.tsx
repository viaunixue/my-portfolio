import ContactItem from "./ContactItem";

const Footer = ({
  contact
}: {
  contact: { id: number; name: string; href: string; isEmail?: boolean }[];
  name: string;
}) => {
  return (
    <footer className="flex flex-col gap-4 justify-center items-center bg-GRAY_EXTRAHEAVY py-6 text-xs text-GRAY_HEAVY">
      <div className="flex gap-6">
        {contact.map((contact) => (
          <ContactItem key={contact.id} {...contact} isFooter={true} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <span className="whitespace-pre-wrap text-center">{`Copyright 2023. 이상조 All rights reserved.`}</span>
        <a target="_blank" rel="noreferrer" href="https://github.com/sjoleee/very-simple-portfolio">
          Powered by very-simple-portfolio
        </a>
      </div>
    </footer>
  );
};

export default Footer;
