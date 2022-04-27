const axios = require("axios");
const fs = require("fs");
const path = require("path");

const options = {
  "--gh-token": null,
};

const api = axios.create({
  baseURL: "https://api.github.com",
});

const getArgs = () => {
  console.log("Getting Args");
  const args = process.argv;
  args.map((value, index, array) => {
    if (Object.getOwnPropertyNames(options).includes(value)) {
      options[value] = array[index + 1];
    }
  });
  return options;
};

const setGhToken = (args) => {
  console.log("Setting GitHub Token...");
  const token = process.env.GITHUB_TOKEN || args["--gh-token"];
  if (!token) {
    throw new Error("GITHUB_TOKEN not found");
  }
  api.interceptors.request.use((config) => {
    config.headers["Authorization"] = token;
    return config;
  });
};

const getRepos = async () => {
  console.log("Getting repos from GitHub API");
  const { data } = await api.get("/orgs/ifood/repos");
  return data;
};

const filterRepos = (repos) => {
  console.log("Filtering repos");
  const allowedFields = [
    "id",
    "name",
    "html_url",
    "description",
    "homepage",
    "stargazers_count",
    "watchers_count",
    "language",
    "forks_count",
    "archived",
    "open_issues_count",
    "license",
    "topics",
    "visibility",
  ];
  const filtered = repos.filter(
    (repo) =>
      !repo.private &&
      repo.topics.includes("open-source") &&
      repo.visibility === "public"
  );
  const cleanData = filtered.map((repo) => {
    const cleanRepo = {};
    Object.getOwnPropertyNames(repo).forEach((property) => {
      if (!allowedFields.includes(property)) return;
      cleanRepo[property] = repo[property];
    });
    return cleanRepo;
  });
  return cleanData;
};

const writeData = (name, data) => {
  console.log("Writting data");
  const pathDir = path.join(__dirname, "../static", "data");
  if (!fs.existsSync(pathDir)) {
    fs.mkdirSync(pathDir);
  }
  fs.writeFileSync(path.join(pathDir, `${name}.json`), JSON.stringify(data));
};

async function run() {
  console.log("Update Site Data started");
  const args = getArgs();
  setGhToken(args);
  try {
    const repos = await getRepos();
    const filteredRepos = filterRepos(repos);
    writeData("projects", filteredRepos);
  } catch (err) {
    console.log(err);
  }
  console.log("Update Site Data finished");
}

run();
