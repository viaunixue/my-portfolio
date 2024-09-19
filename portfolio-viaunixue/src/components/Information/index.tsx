import ContactItem from "../ContactItem";
import Introduce from "./Introduce";
import Image from 'next/image';

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src="/images/profile.png"
            alt="Profile picture"
            width={135}
            height={160}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h1 className="leading-[1.15] text-center md:text-left">
            안녕하세요,
            <br /> 백엔드 개발자{" "}
            <span className="text-PRIMARY font-semibold">{information.name}</span>
            입니다.
          </h1>
          <div className="flex gap-4">
            {information.contact.map((contact) => (
              <ContactItem
                key={contact.id}
                {...contact}
                isFooter={false}
              />
            ))}
          </div>
        </div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
