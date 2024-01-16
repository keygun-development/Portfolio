import {Octokit} from "octokit";
import NodeCache from "node-cache";

const octokit = new Octokit({auth: `${import.meta.env.PUBLIC_S_GITHUB_TOKEN}`});

interface CachedData<T> {
    data: T;
    lastRefreshed: Date;
}

const cache = new NodeCache({
    stdTTL: 24 * 60 * 60, // Cache TTL in seconds (24 hours)
    checkperiod: 120, // How often to check for stale caches in seconds
    useClones: false, // Whether to clone cached data to avoid reference issues
});

// Helper function to check if the cache is stale
function isCacheStale<T>(cachedData: CachedData<T> | undefined): boolean {
    if (!cachedData) {
        return true;
    }

    const now = new Date();
    const refreshTime = new Date(cachedData.lastRefreshed);
    refreshTime.setDate(refreshTime.getDate() + 1); // Refresh every 24 hours
    return now > refreshTime;
}

// Function to fetch all user repos with caching
export async function fetchAllUserRepos(): Promise<any[]> {
    const cacheKey = 'allUserRepos';
    const cachedData = cache.get<CachedData<any[]>>(cacheKey);

    if (cachedData && !isCacheStale(cachedData)) {
        return cachedData.data;
    }

    const repos: any[] = [];
    let page = 1;

    while (true) {
        const result = await octokit.request('GET /users/keygun-development/repos', {
            type: 'public',
            per_page: 100,
            page: page,
        });

        if (result.data.length === 0) break;
        repos.push(...result.data);
        page++;
    }

    const newData: CachedData<any[]> = { data: repos, lastRefreshed: new Date() };
    cache.set(cacheKey, newData);
    return repos;
}

// Function to fetch belonging image with caching
export async function fetchBelongingImage(user: string, repo: string): Promise<string> {
    const cacheKey = `image-${user}-${repo}`;
    const cachedData = cache.get<CachedData<string>>(cacheKey);

    if (cachedData && !isCacheStale(cachedData)) {
        return cachedData.data;
    }

    const result = await octokit.request(`GET /repos/${user}/${repo}/contents/repo.png`, {
        owner: 'keygun-development',
        repo: repo,
    });

    const newData: CachedData<string> = { data: result.data.download_url, lastRefreshed: new Date() };
    cache.set(cacheKey, newData);
    return result.data.download_url;
}

// Function to fetch all org packages with caching
export async function fetchAllOrgPackages(): Promise<any> {
    const cacheKey = 'allOrgPackages';
    const cachedData = cache.get<CachedData<any>>(cacheKey);

    if (cachedData && !isCacheStale(cachedData)) {
        return cachedData.data;
    }

    const result = await octokit.request(`GET /orgs/quickdevelopment/packages`, {
        org: 'quickdevelopment',
        package_type: 'npm',
    });

    const newData: CachedData<any> = { data: result.data, lastRefreshed: new Date() };
    cache.set(cacheKey, newData);
    return result.data;
}