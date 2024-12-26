import {
  BookIcon,
  Discord,
  LightingIcon,
  Sport,
  Telegram,
  Twitter,
} from "@/design-systems/Atoms/Icons";
import Typography from "@/design-systems/Atoms/Typography";

const Footer: React.FC = () => {
  const data = [
    { icon: <Twitter /> },
    { icon: <Discord /> },
    { icon: <Telegram /> },
    { icon: <BookIcon /> },
    { icon: <Sport /> },
    { icon: <LightingIcon /> },
  ];

  return (
    <div className="flex justify-center container">
      <div className="max-sm:p-[20px] py-3 border-t-[1px] border-separator h-auto w-full flex md:flex-row flex-col items-center gap-2 text-gray221 justify-between">
        <div className="flex gap-2 items-center">
          <Typography className="text-[40px] font-bold pr-4 leading-[40px] ">
            Alto
          </Typography>
        </div>
          <div className="flex gap-4 ml-3">
            {data.map((item, key) => (
              <div key={key} className="h-[16px] w-[16px]">
                {item.icon}
              </div>
            ))}
          </div>
        <div>Disclaimer</div>
      </div>
    </div>
  );
};

export default Footer;
