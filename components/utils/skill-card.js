import Image from 'next/image';

const SkillCard = ({ name, description, img_src }) => {
    return ( 
        <figure 
            className="bg-white flex flex-col items-center p-4 gap-2 md:gap-3 scale-95 md:scale-100 rounded-md shadow-slate-700/10 shadow-xl hover:shadow-md hover:shadow-slate-700/15 hover:-translate-y-0.5 transition-all duration-300 ease-in-out" 
            data-description={description}
        >
            <Image src={img_src} alt={name} height="90" width="90"/>
            <figcaption className="select-none font-semibold uppercase text-slate-600 text-sm">{ name }</figcaption>
        </figure>
     );
}
 
export default SkillCard;