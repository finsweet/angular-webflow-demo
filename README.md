# Angular - Webflow Demo

Simple hello world project created to demonstrate how we can mount an Angular app on top of a Webflow website.

## References

- Repository: https://github.com/finsweet/angular-webflow-demo
- Live site: https://angular-webflow-demo.webflow.io/
- Webflow read-only: https://preview.webflow.com/preview/angular-webflow-demo?utm_medium=preview_link&utm_source=designer&utm_content=angular-webflow-demo&preview=6fd73fb8356145edf1be17888a3c5376&workflow=preview

## Key info

- The app is mounted inside an HTML Embed by simply adding the custom app tag `<angular-webflow></angular-webflow>`.
- The app scripts are added to the page settings.
- This app doesn't use Angular's built-in router.
- The app inherits Webflow's CSS styles by default. The styles cascade follows this hirearchy:
  - Webflow's CSS styles.
    - Angular app global styles.
      - Angular app scoped styles.
- If styles must be 100% decoupled from the Webflow project, we can mount the Angular app inside a Shadow DOM to avoid any CSS collisions.
