export type PacakgeJsonType = {
    name?: string;
    version?: string;
    description?: string;
    scripts?: { [key: string]: string };
    keywords?: string[];
    repository?: { [key: string]: string };
    private?: boolean;
    author?: string;
    license?: string;
    schematics?: string;
    dependencies?: { [key: string]: string };
    devDependencies: { [key: string]: string };
};
