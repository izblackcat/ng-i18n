import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isLanguageDropDownShown = false;
  isMenuShown = false;
  currentLanguage: string = 'العربية';

  translate: TranslateService = inject(TranslateService);

  useLanguage(language: string) {
    this.translate.use(language);
    switch (language) {
      case 'ar':
        this.currentLanguage = 'العربية';
        break;
      case 'fr':
        this.currentLanguage = 'Français';
        break;
      case 'ch':
        this.currentLanguage = '中文';
        break;
      case 'en':
        this.currentLanguage = 'English';
        break;
      default:
        break;
    }
    this.isLanguageDropDownShown = false;
  }
}
