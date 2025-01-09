# NgI18n

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11. It serves as a simple example for building a multi-language app with Angular.

## Usage

To use multiple languages in your Angular app, follow the steps below:

### Used languages:

In this app, we use the following languages:

- Arabic( `العربية` )
- English ( `English` )
- French ( `Français` )
- Chineese ( `中文` )

1.  First, you will need to add the following dependencies to your project:
    ```bash
    npm install @ngx-translate/core @ngx-translate/http-loader
    ```
2.  Second, in the `assets` folder, you create a folder `i18n` :

    ```bash
    mkdir assets/i18n
    ```

    This folder will contain `.json` files for each of the languages that your application uses. In this example `ar.json`, `fr.json`, `en.json` and `ch.json`.

3.  In your `app.config.ts` file, you need to make the following changes:

    Add the following function :

    ```ts
    //...
    export function createTranslateLoader(http: HttpClient) {
      return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
    }
    //...
    ```

    In the providers array, add the following and `set your default language`:

    ```ts
    // ...
    providers: [
      provideZoneChangeDetection({ eventCoalescing: true }),
      provideRouter(routes),
      provideHttpClient(),
      importProvidersFrom([
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient],
          },
          defaultLanguage: "ar", // this sets your default language
        }),
      ]),
    ];
    //...
    ```

4.  Now, your are almost done! In your components that contain text your want to internalize, you need two things:

    - Import `TranslateModule` and add it to your `imports` array:
    - Import and `inject` the `Translate Service` :

    ```ts
    import { Component, inject } from "@angular/core";

    import { TranslateModule, TranslateService } from "@ngx-translate/core";

    @Component({
      selector: "app-home",
      standalone: true,
      imports: [TranslateModule],
      templateUrl: "./home.component.html",
      styleUrl: "./home.component.css",
    })
    export class HomeComponent {
      translate: TranslateService = inject(TranslateService);
    }
    ```

5.  Now, you need to prepare your `.json` files for the languages you have:
    For example, the `home component` in our case contains the following parts:

    ```json
    ...
    "HOME": {
        "HEADER1": "Life is Great",
        "HEADER2": "with cats",
        "PAR1": "The bond between humans and cats is a tale as old as time, filled with warmth, mystery, and a dash of mischief. Whether they’re perched elegantly on a windowsill, basking in the sun, or darting playfully after a fluttering ribbon, cats bring joy to every moment. They teach us the art of curiosity and the value of a well-earned nap, reminding us to savor the simple pleasures in life",
        "PAR2": "Each cat has its own unique story to tell, from the gentle purring that soothes a restless night to the mischievous antics that bring laughter into our days. These feline companions are more than pets—they are confidants, entertainers, and steadfast friends. Their playful spirit and quiet wisdom enrich our lives in ways words can scarcely capture, making each day a little brighter and every challenge a bit lighter.",
        "BUTTON": "Read more"
    }
    ...
    ```

    These fields need to be translated each time the user changes the language. Thus, `we need to define these entries for each language`.

    We add the following in each language's `.json` file.

    - In `ar.json` :

    ```json
    ...
    "HOME": {
        "HEADER1": "الحياة رائعة",
        "HEADER2": "مع القطط",
        "PAR1": "الرابط بين البشر والقطط قصة قديمة قدم الزمن، مليئة بالدفء والغموض وقليل من المرح. سواء كانوا يجلسون بأناقة على حافة النافذة، أو يستمتعون بأشعة الشمس، أو يطاردون شريطًا يتمايل، تضيف القطط الفرح إلى كل لحظة. إنها تعلمنا فن الفضول وقيمة القيلولة المستحقة، وتذكرنا بالاستمتاع بالأشياء البسيطة في الحياة.",
        "PAR2": "لكل قطة قصة فريدة ترويها، من الخرخرة اللطيفة التي تهدئ ليلة مضطربة إلى الأفعال المزعجة التي تضيف الضحك إلى أيامنا. هذه الرفقة الفريدة ليست مجرد حيوانات أليفة - إنها أصدقاء مقربون، ومسلون، ورفقاء أوفياء. روحهم المرحة وحكمتهم الهادئة تضيف إلى حياتنا بطريقة لا تستطيع الكلمات وصفها، مما يجعل كل يوم أكثر إشراقًا وكل تحدٍ أخف.",
        "BUTTON": "اقرأ المزيد"
    }
    ...
    ```

    - In `fr.json` :

    ```json
    ...
    "HOME": {
        "HEADER1": "La vie est belle",
        "HEADER2": "avec les chats",
        "PAR1": "Le lien entre les humains et les chats est une histoire aussi vieille que le temps, remplie de chaleur, de mystère et d'une touche de malice. Qu'ils soient perchés élégamment sur un rebord de fenêtre, profitant du soleil ou jouant avec un ruban flottant, les chats apportent de la joie à chaque instant. Ils nous enseignent l'art de la curiosité et la valeur d'une sieste bien méritée, nous rappelant de savourer les plaisirs simples de la vie.",
        "PAR2": "Chaque chat a sa propre histoire unique à raconter, du ronronnement doux qui apaise une nuit agitée aux facéties espiègles qui apportent des rires à nos journées. Ces compagnons félins sont bien plus que des animaux de compagnie : ce sont des confidents, des amuseurs et des amis fidèles. Leur esprit joueur et leur sagesse tranquille enrichissent nos vies d'une manière que les mots ne peuvent guère capturer, rendant chaque jour un peu plus lumineux et chaque défi un peu plus léger.",
        "BUTTON": "Lire la suite"
    }
    ...
    ```

    - In `ch.json` :

    ```json
    ...
    "HOME": {
        "HEADER1": "生活是美好的",
        "HEADER2": "有了猫",
        "PAR1": "人类与猫之间的纽带是一段古老的故事，充满了温暖、神秘和一丝顽皮。无论是优雅地坐在窗台上，沐浴在阳光下，还是追逐飘动的丝带，猫咪都会为每一刻带来欢乐。它们教会我们好奇心的艺术和午休的价值，提醒我们珍惜生活中的简单乐趣。",
        "PAR2": "每只猫都有自己独特的故事，从安抚不安夜晚的温柔呼噜声到带来笑声的顽皮行为。这些猫咪伴侣不仅仅是宠物——它们是知己、娱乐者和忠诚的朋友。它们的玩心和安静的智慧以难以言表的方式丰富了我们的生活，使每一天都更加明亮，每一个挑战都更加轻松。",
        "BUTTON": "了解更多"
    }
    ...
    ```

6.  In your template ( `home.component.html` ), you need to translate each field by doing the following :

    ```html
    <!-- ... -->
    <h1 [class]="translate.currentLang === 'ar' ? 'arabic-header': ''" class="mb-4 mt-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">{{'HOME.HEADER1' | translate }}&nbsp;<span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> {{'HOME.HEADER2' | translate }}</span></h1>
    <!-- ... -->
    ```

    This ensures, that when the language changes, the field gets translated to the choosen language.

    > `Arabic` is written from Right to Left, that's why we do that check.

7.  Another thing, is that when we start the app, we set the language to the the default one which is `Arabic` in the `app.component.ts`:

    ```ts
    ngOnInit(): void {
        this.useLanguage('ar');
    }
    ```

    - Finally, since we change the language from the `navbar` component that's used as the header of the app, we add the following function to use a language :

    ```ts
    useLanguage(language: string) {
        this.translate.use(language);
    }
    ```

8.  Now, you are done :blush: !
