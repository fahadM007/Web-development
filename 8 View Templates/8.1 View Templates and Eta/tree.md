Eta
├── configure(options)
│   └── options (Object)
│       ├── views (String)            // Path to templates
│       ├── cache (Boolean)           // Whether to enable template caching
│       ├── filters (Object)          // Custom filters for data manipulation
│       ├── include (String)          // Path to partial templates
│       └── loader (Function)         // Custom template loading function
├── render(template, data, options)
│   ├── template (String)             // Template string to render
│   ├── dta a(Object)                // Data to be injected into the template
│   └── options (Object)             // Optional rendering options
│       ├── cache (Boolean)          // Whether to cache rendered templates
│       └── include (String)         // Path to include partial templates
├── renderFile(filePath, data, options)
│   ├── filePath (String)            // Path to the template file
│   ├── data (Object)                // Data to be injected into the template
│   └── options (Object)             // Optional rendering options
├── parse(template)
│   └── template (String)            // Template string to be parsed
├── compile(template)
│   └── template (String)            // Template string to be compiled into a function
├── templates
│   └── define(name, template)       // Define a named template (for reuse in others)
│       ├── name (String)            // Template name
│       └── template (String)        // Template string
├── include(templateName, data)      // Include another template within the current template
│   ├── templateName (String)        // Name of the included template
│   └── data (Object)                // Data for the included template
└── filters
    ├── register(name, filterFunction)  // Register a custom filter
    │   ├── name (String)               // Filter name
    │   └── filterFunction (Function)   // Custom filter function
    └── availableFilters (Object)       // List of available custom filters
