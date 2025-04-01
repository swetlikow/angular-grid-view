import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

interface DataItem {
  [key: string]: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: DataItem[] = [];
  columns: string[] = ['id', 'name', 'email', 'phone', 'address']; // Define table columns
  filters: { [key: string]: string } = {};
  sortColumn: string = 'id';
  sortOrder: string = 'asc';
  currentPage: number = 1;
  totalItems: number = 0;
  pageSize: number = 10;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService
      .getData(this.currentPage, this.sortColumn, this.sortOrder, this.filters)
      .subscribe((response) => {
        this.data = response.data;
        this.totalItems = response.totalCount;
      });
  }

  onFilterChange(): void {
    this.currentPage = 1; // Reset to first page on filter change
    this.loadData();
  }

  onSort(column: string): void {
    if (this.sortColumn === column) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }
    this.loadData();
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.loadData();
  }

  getTotalPages(): number {
    return Math.ceil(this.totalItems / this.pageSize);
  }
}
