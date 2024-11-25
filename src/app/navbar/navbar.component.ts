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

  translate: TranslateService = inject(TranslateService);

  useLanguage(language: string) {
    this.translate.use(language);
    this.isLanguageDropDownShown = false;
  }
}
