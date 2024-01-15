import {Octokit} from "octokit";

const octokit = new Octokit({auth: `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`});

export async function fetchAllUserRepos() {
    const repos = [];
    let page = 1;
    while (true) {
        const result = await octokit.request('GET /users/keygun-development/repos', {
            type: 'public',
            per_page: 100,
            page: page
        });

        if (result.data.length === 0) break;
        repos.push(...result.data);
        page++;
    }
    return repos;
}

export async function fetchBelongingImage(user: string, repo: string)
{
    const result = await octokit.request(`GET /repos/${user}/${repo}/contents/repo.png`, {
        owner: 'keygun-development',
        repo: repo
    });
    return result.data.download_url;
}

export async function fetchAllOrgPackages()
{
    const result = await octokit.request(`GET /orgs/quickdevelopment/packages`, {
        org: 'quickdevelopment',
        package_type: 'npm'
    });
    return result.data;
}