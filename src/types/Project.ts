type Repository = {
    [key: string]: any;
};

interface Project {
    name: string,
    html_url: string,
    homepage: string,
    description: string,
    repository: Repository
}

export default Project