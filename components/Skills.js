import useSWR from 'swr';
import SkillCard from './utils/skill-card';

const fetcher = url => fetch(url).then(res => res.json());

const Skills = () => {

    const { data, error } = useSWR('/api/static-data', fetcher);
    const parsed = data && JSON.parse(data);

    return (
        <div className="flex-container py-32 bg-slate-50 gap-32">
            <div class="sub-container">
                <div class="px-4 xl:px-0 mb-10">
                    <h2 className="text-4xl mb-4">Languages and Frameworks</h2>
                    <p className="text-slate-600">Markup and Programming Languages including their Frameworks and Libraries</p>
                </div>
                <ul className="flex items-center flex-wrap gap-2 md:gap-4 m-auto justify-center px-4 md:px-12">
                    { data && parsed.languagesAndFrameworks.map((lang, idx) =>
                        <li key={idx}>
                            <SkillCard
                                name={lang.name}
                                description={lang.description}
                                img_src={`/assets/skills/${lang.name}.svg`}
                            />
                        </li>
                    )}
                </ul>
            </div>
            <div class="sub-container">
                <div class="px-4 xl:px-0 mb-10">
                    <h2 className="text-4xl mb-4">Tools and Applications</h2>
                    <p className="text-slate-600">Management and Development</p>
                </div>
                <ul className="flex items-center flex-wrap gap-2 md:gap-4 m-auto justify-center px-4 md:px-12">
                    { data && parsed.toolsAndApplications.map((tool, idx) =>
                        <li key={idx}>
                            <SkillCard
                                name={tool.name}
                                description={tool.description}
                                img_src={`/assets/skills/${tool.name}.svg`}
                            />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Skills;