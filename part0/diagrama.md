graph TD
    A[Usuario] --> B[Accede a la aplicación de notas SPA en el navegador]
    B --> C[Servidor]
    C -->|HTML + JS| D[Cliente: Renderiza la estructura SPA]
    D --> E[Usuario interactúa con la interfaz]
    E --> F{¿Se necesita comunicación con la API?}
    F -->|Sí| G[Envía solicitud a la API]
    F -->|No| H[Actualiza la interfaz localmente]
    G --> I[Servidor API responde con datos en JSON]
    I --> H