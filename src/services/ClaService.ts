import { DocusaurusConfig } from "@docusaurus/types";
import axios, { AxiosInstance } from "axios";

export class ClaService {
  siteConfig: DocusaurusConfig;
  env: Record<string, unknown>;
  api: AxiosInstance;

  constructor(siteConfig: DocusaurusConfig) {
    this.siteConfig = siteConfig;
    this.env = siteConfig.customFields;
    this.api = axios.create({
      baseURL: this.env.ifoodServiceUrl as string,
    });
  }

  getGHCodeUrl() {
    return `${this.env.githubUrl}/authorize?scope=user:email&client_id=${this.env.githubClientId}&redirect_uri=${this.siteConfig.url}/auth`;
  }

  async getClaText() {
    const { data } = await axios.get(this.env.claUrl as string);
    return data;
  }

  async signCla(code: string) {
    let isOk = false;
    try {
      const { data: token } = await this.api.post("/github/login", { code });
      const { data: response } = await this.api.post(
        "/contributor",
        {},
        { headers: { authorization: token } }
      );
      isOk = true;
    } catch (err) {
        console.log(err);
    }
    return isOk;
  }
}
