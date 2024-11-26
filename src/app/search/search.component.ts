import { Component, computed, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToastComponent } from "../toast/toast.component";
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule, ToastComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchQuery = new FormControl('');
  searchCategory : string = '';
  isSearchDropDownShown = false;

  isToastShown = computed<boolean>(() => this.searchService.toast());

  translate: TranslateService = inject(TranslateService);

  constructor(private searchService: SearchService) {}

  onChooseCategory(category : string) {
    this.searchCategory = category;
    this.isSearchDropDownShown = false;
  }

  onSearch() {
    this.searchService.setToast(true);
  }

  toggleSearchDropDown() {
    this.isSearchDropDownShown = ! this.isSearchDropDownShown;
  }
}
