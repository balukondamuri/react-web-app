export interface User{
    id: string;
    name: string;
    email:  string;
}

export interface AppConfig{
    apiUrl: string;
    version: string;
}

export type AuthStatus = ' authenticated' | 'unauthenticated' | 'loading';

export interface AppState{
    user: User | null;
    authStatus: AuthStatus;
    config: AppConfig;
    isLoading: boolean;
    error: string | null;
}