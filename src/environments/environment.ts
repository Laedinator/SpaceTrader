export const environment = {
  token:
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZGVudGlmaWVyIjoiSkFDS1NPTiIsInZlcnNpb24iOiJ2Mi4xLjUiLCJyZXNldF9kYXRlIjoiMjAyNC0wMS0yOCIsImlhdCI6MTcwNjY0MDE0NSwic3ViIjoiYWdlbnQtdG9rZW4ifQ.OJEzmICkdrijhULgdD9LAoSsTlrBhikORPxpCr2jrXOgXUJUs_bCQdBk2AjXSMYsVYtRWo3WY8VbTVE3uI-ce9s5KsOtixGKYX0IC4VbbKVr6tV3YYRXn-0SdsGjf91K5deD4FTQ7Jsqpfb-YBwZ0QAYqLcRVV8cUpVSi90j6Nl_CVt9wIAOfFWESZgs69xsTortlbUsefQZkMCvAdOdjG3T_R6EjD9Q9B1xpb_35uRf4oUicc0JqlsSMm-CejQYRRAWUn5JZhPlN4QMmnNEwSsRxtUOiP2lYbeTXytYUGb0TR_oe01rayh21jKmuRX6r-aPog0fctdEJ-Md6IRyBA',@use '@angular/material' as mat;

    @include mat.core();
    
    $my-primary: mat.define-palette(mat.$indigo-palette, 500);
    $my-accent: mat.define-palette(mat.$pink-palette, A200, A100, A400);
    
    $my-theme: mat.define-light-theme((
     color: (
       primary: $my-primary,
       accent: $my-accent,
     ),
     typography: mat.define-typography-config(),
     density: 0,
    ));
    
    @include mat.all-component-themes($my-theme);@use '@angular/material' as mat;

    @include mat.core();
    
    $my-primary: mat.define-palette(mat.$indigo-palette, 500);
    $my-accent: mat.define-palette(mat.$pink-palette, A200, A100, A400);
    
    $my-theme: mat.define-light-theme((
     color: (
       primary: $my-primary,
       accent: $my-accent,
     ),
     typography: mat.define-typography-config(),
     density: 0,
    ));
    
    @include mat.all-component-themes($my-theme);
  apiUrl: 'https://api.spacetraders.io/v2/',
};
