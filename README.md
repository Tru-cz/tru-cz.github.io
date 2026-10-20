# TRU app — veřejný web

Samostatný statický web pro GitHub Pages. Vývojář: **Tru**. Veřejný kontakt: **trujilo@seznam.cz**.

## Veřejné adresy

- Úvod: https://tru-cz.github.io/
- Zásady soukromí: https://tru-cz.github.io/privacy.html
- Podmínky používání: https://tru-cz.github.io/terms.html

Web neobsahuje APK, databázi aplikace, skutečné portfolio, přístupové údaje ani analytické sledování. Náhled tabulky obsahuje výslovně označená ilustrační data. Používá vlastní logo aplikace, systémové fonty a lokální CSS/JavaScript. Není potřeba build, npm ani vlastní server.

## GitHub Pages

Repozitář `Tru-cz/tru-cz.github.io` je určen pouze pro veřejný web. Jeho kořen obsahuje obsah této složky. V **Settings → Pages → Build and deployment** zvolte **Deploy from a branch**, větev **main**, složku **/ (root)**. Zachovejte `.nojekyll`. Po prvním zveřejnění nebo aktualizaci počkejte na dokončení nasazení.

Veřejný web se nezveřejňuje z kořene Android projektu: nepatří do něj `secrets.properties`, APK, exporty ani zálohy. Při aktualizaci přenášejte pouze soubory webu. Ověřovací značku Googlu při dalších úpravách zachovejte.

## Ověření vlastnictví pro Google

1. Ve [Google Search Console](https://search.google.com/search-console/) použijte stejný Google účet, který spravuje OAuth projekt.
2. Přidejte službu typu **URL prefix / Předpona adresy URL**: `https://tru-cz.github.io/`. Nevybírejte typ Domain, který vyžaduje DNS. Neověřujte `github.io` — tuto doménu nevlastníte.
3. Vyberte **HTML tag / Značka HTML**. Zkopírujte celou skutečnou značku `<meta name="google-site-verification" content="…" />`, kterou Google zobrazí.
4. Vložte ji do `<head>` v `index.html` na místo komentáře `Google Search Console`. Použijte hodnotu od Googlu, nikoli příklad nebo vymyšlený token. Soubor commitněte a nasaďte.
5. Na veřejné úvodní stránce ověřte přítomnost značky ve zdrojovém kódu. Pak v Search Console klikněte **Verify / Ověřit**.
6. Značku už neodstraňujte. Google vlastnictví průběžně kontroluje.

Ověření vlastnictví stránky není totéž jako schválení OAuth aplikace nebo publikace APK na Google Play. Pokud OAuth konzole pro konkrétní projekt vyžádá další kroky, postupujte podle nich.

## Google Auth Platform → Branding

V projektu, který vlastní Android OAuth klienta aplikace:

| Pole | Hodnota |
| --- | --- |
| Application home page | `https://tru-cz.github.io/` |
| Application privacy policy link | `https://tru-cz.github.io/privacy.html` |
| Application terms of service link | `https://tru-cz.github.io/terms.html` |
| Authorized domains | `tru-cz.github.io` |
| Developer contact email | `trujilo@seznam.cz` |

Support email vyberte z možností, které konzole skutečně nabízí. Pro ověření se přihlaste účtem, který má práva k OAuth projektu i ověřenému webu. Název aplikace musí souhlasit s tím, co uživatel vidí; web vysvětluje i dřívější registrační název „Stock mobile app“.

Po doplnění Branding a případném ověření lze v **Audience** přepnout **Publish app → In production**. Přepnutí samo o sobě nenahrazuje případné ověření brandingu. Pro zálohy ponechte pouze rozsah `https://www.googleapis.com/auth/drive.appdata`; nepřidávejte obecný přístup k Disku.

## Co znamená sedm dní v režimu Testing

U oprávnění Google Drive vyprší v režimu Testing souhlas konkrétního testera sedm dní od jeho udělení; tester potom znovu připojí Google účet a potvrdí přístup. Pokud klient obdržel refresh token, vztahuje se omezení i na něj. Nejde o vypršení API klíče nebo registrace aplikace. Existující zálohy se tím nemažou. Production odstraňuje toto konkrétní testovací omezení; běžná platnost přístupových tokenů a možnost odvolání přístupu zůstávají.

## Úpravy a kontrola

Hlavní soubory jsou `index.html`, `privacy.html`, `terms.html`, `styles.css` a `site.js`. `assets/tru-logo.png` je optimalizované vlastní logo. Zásady soukromí upravte při změně zpracování dat nebo připojených služeb.

Před nasazením zkontrolujte interní odkazy, mobilní zobrazení, kontaktní údaje a veřejnou dostupnost všech tří stránek bez přihlášení. Web nepředstavuje potvrzení, že Google již aplikaci schválil.

## Oficiální podklady

- [Google: ověření vlastnictví webu](https://support.google.com/webmasters/answer/9008080?hl=en)
- [Google: OAuth Branding](https://support.google.com/cloud/answer/15549049?hl=en)
- [Google: Audience, Testing a Production](https://support.google.com/cloud/answer/15549945?hl=en)
- [Google: kategorie oprávnění Drive](https://developers.google.com/workspace/drive/api/guides/api-specific-auth)
- [GitHub: vytvoření Pages webu](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
