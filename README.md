# Angular Responsive Grid Table

A dynamic and responsive data grid component for Angular, featuring **sorting**, **filtering**, **pagination**, and **lazy loading**. Built with **Bootstrap** for a professional UI and optimized for large datasets.

## Features

✔ **Responsive**: Adapts to all screen sizes  
✔ **Sorting & Filtering**: Click headers to sort, search within columns  
✔ **Pagination**: Supports large datasets with chunked loading  
✔ **Mock API**: Simulates backend data fetching for testing  
✔ **Bootstrap Styled**: Clean, professional UI  

## Installation

1. Install dependencies:
   ```bash
   npm install
   ```
2. Add Bootstrap to `angular.json`:
   ```json
   "styles": ["node_modules/bootstrap/dist/css/bootstrap.min.css"],
   "scripts": ["node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"]
   ```
3. Import the component in your module:
   ```typescript
   import { GridTableComponent } from './grid-table.component';
   ```

## Usage

Add the component in your template:
   ```html
   <app-grid-table></app-grid-table>
   ```

## Mock Data Service

A mock service provides sample data. Modify it in `data-mock.service.ts`:
   ```typescript
   @Injectable({ providedIn: 'root' })
   export class DataMockService {
     getData(page: number, sortColumn: string, sortOrder: string, filters: object): Observable<any> {
       return of({ data: [...], totalCount: 1000 });
     }
   }
   ```

## License

This project is licensed under the MIT License.

