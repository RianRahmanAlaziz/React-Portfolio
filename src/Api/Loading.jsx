const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const ProjectsLoader = async () => {
    const [categoriesRes, projectsRes] = await Promise.all([
        fetch(`${baseUrl}/api/category`),
        fetch(`${baseUrl}/api/projects`),
    ]);

    const categories = await categoriesRes.json();
    const projects = await projectsRes.json();

    return { categories, projects };
};

export const HomeLoader = async () => {
    const [homesRes, aboutmeRes, projectRes, contactRes] = await Promise.all([
        fetch(`${baseUrl}/api/home`),
        fetch(`${baseUrl}/api/aboutme`),
        fetch(`${baseUrl}/api/project`),
        fetch(`${baseUrl}/api/contact`),
    ]);

    const home = await homesRes.json();
    const aboutme = await aboutmeRes.json();
    const myproject = await projectRes.json();
    const contact = await contactRes.json();

    return { home, aboutme, myproject, contact };
};

export const AboutLoader = async () => {
    const [aboutRes, ExperienceRes, EducationRes] = await Promise.all([
        fetch(`${baseUrl}/api/about`),
        fetch(`${baseUrl}/api/experience`),
        fetch(`${baseUrl}/api/education`),
    ]);

    const about = await aboutRes.json();
    const Experience = await ExperienceRes.json();
    const Education = await EducationRes.json();


    return { about, Experience, Education };
};