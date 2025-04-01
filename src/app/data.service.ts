import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataMockService } from './mock-data.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private dataMockService: DataMockService) {}

  getData(page: number, sortColumn: string, sortOrder: string, filters: any): Observable<any> {
    return this.dataMockService.getData(page, sortColumn, sortOrder, filters);
  }
}
