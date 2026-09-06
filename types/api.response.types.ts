export type APIResponse<T = any> = {
    success: boolean;
    status: number;
    path?: string;
    message?: string;
    meta?: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
    data: T | T[] | Record<string, any> | null;
};