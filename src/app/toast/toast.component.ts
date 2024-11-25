import { Component, inject } from '@angular/core';
import { SearchService } from '../search.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {

  translate: TranslateService = inject(TranslateService);

  constructor(private searchService: SearchService) {}

  useLanguage(language: string) {
    this.translate.use(language);
  }

  onDismissToast() {
    this.searchService.setToast(false);
  }
}
