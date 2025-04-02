import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {
  private mockData: any[] = this.generateMockData(100); // 100 rows of mock data

  constructor() {}

  // Simulate getting paged data from an API
  getData(page: number, sortColumn: string, sortOrder: string, filters: any) {
    const pageSize = 10;
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    let filteredData = [...this.mockData];

    // Apply filters
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        filteredData = filteredData.filter(item => item[key]?.toLowerCase().includes(filters[key].toLowerCase()));
      }
    });

    // Sort the data
    filteredData.sort((a, b) => {
      const valueA = a[sortColumn];
      const valueB = b[sortColumn];
      if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1;
      if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });

    // Slice the data to return only the current page
    const pagedData = filteredData.slice(startIndex, endIndex);

    // Simulate a delay and return data as an observable
    return of({
      data: pagedData,
      totalCount: filteredData.length
    }).pipe(delay(100)); // Simulating API call delay (500ms)
  }

  // Helper function to generate mock data
  private generateMockData(count: number): any[] {
    const mockData = [];
    for (let i = 0; i < count; i++) {
      mockData.push({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        phone: `123-456-789${i % 10}`,
        address: `Address ${i + 1}`
      });
    }
    return mockData;
  }
}
