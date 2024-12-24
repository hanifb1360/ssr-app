export async function dynamicImport(clientPath, serverPath) {
    if (typeof window !== "undefined") {
      // Client-side logic
      const module = await import(clientPath);
      return module.default;
    } else {
      // Server-side logic
      const module = await import(serverPath);
      return module.default;
    }
  }