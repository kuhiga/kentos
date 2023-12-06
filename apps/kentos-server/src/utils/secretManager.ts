class SecretManager {
  private readonly db: string;

  constructor(db: string) {
    this.db = db;
  }

  async getSecret({ secretName }: { secretName: string }): Promise<string> {
    try {
      const kv = await Deno.openKv();
      const get = await kv.get<string>([`${this.db}`, secretName]);
      if (!get.value) {
        throw new Error(`getSecret: ${secretName} doesn't exist`);
      }
      return get.value;
    } catch (error) {
      throw error;
    }
  }
}

export default SecretManager;
