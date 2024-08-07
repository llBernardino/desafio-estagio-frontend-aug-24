import { Avatar, AvatarImage } from "@/components/ui/avatar";
import ProfileHead from "../assets/perfil2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCommentDots, faFolderPlus, faCircleInfo, faUsers } from "@fortawesome/free-solid-svg-icons";


export const Head = () => {
  return (
    <section className="Head">
        <div className="flex justify-between items-center py-3 px-5 min-h-16 max-w-xl w-full  bg-[#162c33]">
            <Avatar className="w-14 h-14">
                <AvatarImage src={ProfileHead} />
            </Avatar>
            <div className="iconsbox flex gap-9">
            <FontAwesomeIcon icon={faUsers} className=" text-slate-400 text-2xl" />
                <FontAwesomeIcon icon={faCircleInfo} className=" text-slate-400 text-2xl"/>
                <FontAwesomeIcon icon={faCommentDots}className=" text-slate-400 text-2xl" />
                <FontAwesomeIcon icon={faFolderPlus}className=" text-slate-400 text-2xl" />
                <FontAwesomeIcon icon={faBars}className=" text-slate-400 text-2xl" />
            </div>
        </div>
    
    </section>
  );
};
