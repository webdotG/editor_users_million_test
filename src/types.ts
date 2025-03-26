export interface User {
    id: number;
    name: string;
    surname: string;
    age: number;
    email: string;
    department: string;
    company: string;
    jobTitle: string;
  }
  
  export interface SortConfig {
    field: keyof User;
    direction: 'asc' | 'desc';
  }
  
  export interface FilterCriteria {
    name?: string;
    surname?: string;
    email?: string;
    [key: string]: string | undefined;
  }
  
  export interface UsersState {
    users: User[];
    filteredUsers: User[];
    selectedUser: User | null;
    loading: boolean;
    error: string | null;
    filterCriteria: FilterCriteria;
    sortConfig: SortConfig;
  }
  
  export type WorkerMessage = {
    action: 'FILTER' | 'SORT' | 'FILTER_RESULT' | 'SORT_RESULT';
    payload: any;
  };