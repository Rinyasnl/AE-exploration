// services/api.ts
export interface DataItem {
    id: number;
    name: string;
  }
  
  export const fetchData = async (): Promise<DataItem[]> => {
    // Simulate an asynchronous API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 3, name: 'Item 3' },
        ]);
      }, 1000);
    });
  };
  