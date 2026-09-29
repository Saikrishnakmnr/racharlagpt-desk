# RacharlaGPT Desk

A zero-cost, no-login, no-database public workspace for students, teachers, professors, professionals, creators and everyone.

**Tagline:** Understand. Clean. Translate. Create.

## Included in this build
- Neon/radiant responsive UI
- Browser-first CSV cleaner
- Bill/invoice field extraction + arithmetic verification
- Notes/document structuring
- Lightweight local English correction
- Translation workspace with provider-independent architecture notice
- Deterministic PPT slide-plan builder
- Social/message draft studio
- Local image resize/export
- Student, teacher, engineering and everyone modes
- Ecosystem links to RacharlaGPT.in, Spin.RacharlaGPT.in, trend.racharlagpt.in and songs.racharlagpt.in
- About/contact/YouTube information
- No login, no database, no user history

## Brand / ownership
Created and developed by **Racharla Saikrishna**.
Contact: racharlagpt@gmail.com
YouTube: https://youtube.com/@racharlagpt

## Architecture principle
The Desk does not make a third-party free AI API the foundation of the product. AI can be connected later through a replaceable provider adapter. Core utilities should remain usable without external AI.

## Deployment
This is a static site. It can be deployed to Cloudflare Pages or any static hosting service. No build step is required.

## Important before production
1. Add your final Privacy, Terms and Disclaimer pages/content before enabling advertising.
2. Review every external-link destination and legal statement.
3. If an external AI provider is later added, keep keys server-side and make paid usage impossible by default unless explicitly enabled.
4. For medical/hospital documents, preserve source traceability and uncertainty; do not present AI interpretation as proof or professional advice.
5. Test the site on Android Chrome, desktop Chrome/Edge/Firefox and a slow mobile connection.

## Architecture (v1)
```text
Homepage
   ↓
RacharlaGPT Core
   ├── PDF Engine
   ├── Excel Engine
   ├── PPT Engine
   ├── OCR Engine
   ├── Document Engine
   ├── Calculator
   └── Export Engine
          │
          ↓
       AI Adapter
       ├── Provider A (future)
       ├── Provider B (future)
       ├── Local model (future)
       └── None (current default)
```
The current build explicitly defaults to `NoneProvider`, so no external AI service is required for startup. Each AI provider can be added behind the same adapter without rewriting the Desk UI or deterministic engines.
