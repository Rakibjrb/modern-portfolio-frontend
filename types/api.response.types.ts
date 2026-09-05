export type APIResponse = {
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
    data: any[] | null;
}