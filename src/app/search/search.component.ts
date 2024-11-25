import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [TranslateModule, ReactiveFormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  searchQuery = new FormControl('');
  searchCategory : string = '';

  isSearchDropDownShown = false;

  translate: TranslateService = inject(TranslateService);

  useLanguage(language: string) {
    this.translate.use(language);
  }

  onChooseCategory(category : string) {
    this.searchCategory = category;
    this.isSearchDropDownShown = false;
  }

  onSearch() {
    console.log(`Searching for ${this.searchQuery.value} in ${this.searchCategory}`);
  }

  toggleSearchDropDown() {
    this.isSearchDropDownShown = ! this.isSearchDropDownShown;
  }
}
