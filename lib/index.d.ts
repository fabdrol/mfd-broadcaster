export interface ISKPlugin {
    id: string;
    name: string;
    description: string;
    start: (options: any, restartPlugin: any) => void;
    stop: () => void;
    schema: {
        [key: string]: any;
    };
}
