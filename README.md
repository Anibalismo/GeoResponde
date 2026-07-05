<p align="center">
  <img src="docs/GeoResponde.png" alt="GeoResponde" width="180">
</p>

<h1 align="center">
GeoResponde
</h1>

<p align="center">

<b>Open Federated Geospatial Situation Room</b>

Connecting Scientific Intelligence with Humanitarian Response.

</p>

<p align="center">

<a href="https://www.georesponde.app">🌐 Live Demo</a>
<a href="./CONTRIBUTING.md">Contributing</a> •
<a href="./docs">Documentation</a>

</p>

---

# Why GeoResponde?

When disasters strike, critical information becomes fragmented across different sources:
 * Humanitarian organizations.
 * Scientific geospatial intelligence.
 * Governments, NGOs, volunteers, and affected families.

GeoResponde exists to reconnect these pieces. Instead of creating another isolated database, we consolidate trusted information into a single operational view while respecting data ownership. Our goal is to help everyone understand a rapidly evolving situation and make better decisions in a chaotic environment.
---

# What is GeoResponde?

GeoResponde is an open-source platform that bridges the gap between scientific intelligence and humanitarian action. Rather than replacing existing systems, we integrate them into a single operational environment to accelerate emergency response.

The platform provides three core capabilities:

* **Scientific Intelligence:** We consolidate hazard layers, satellite-derived products, and geological data (including earthquake activity and active faults) to provide a clear view of the disaster's physical impact.
* **Federated Humanitarian Search:** We connect trusted databases to provide real-time information on critical resources, such as shelter availability, hospital status, and the location of missing persons.
* **Operational Reporting:** We enable a structured workflow that routes reports on building damage, resource needs, and status updates directly to the relevant humanitarian providers.

## Current Integrations

GeoResponde continuously expands its network through our Provider SDK. Currently, we federate data from:

* **Scientific Sources:** USGS, NASA EONET, FUNVISIS, the GEM Global Active Faults Database, and satellite-derived products from Sentinel and Copernicus.
* **Humanitarian Providers:** Over 16+ active platforms, including regional initiatives like Venezuela Te Busca, TerremotoVenezuela, and Patitas a Salvo.

## Design Principles

GeoResponde is built on five core principles to ensure efficiency, trust, and scalability:

* **Federation over duplication:** Existing organizations already hold valuable data; we connect these systems instead of competing with them.
* **Scientific intelligence for operational action:** Earth science must directly improve on-the-ground decision-making during crises.
* **Data ownership remains with providers:** Organizations are the authoritative source of their information. GeoResponde only federates access; we do not appropriate data.
* **Open by default:** Transparency, interoperability, and collaboration are essential to build trust among responders and communities.
* **Reusable beyond a single disaster:** Initially developed in response to the 2026 Venezuela earthquake, our architecture is designed to scale and support emergency response efforts anywhere in the world.

## Architecture

GeoResponde operates on a modular, tiered architecture designed to securely connect user actions with federated data without creating local duplicates. The system is structured into four main layers:

* **Application Layer:** The user-facing modules that drive the core workflows (Situation, Find, and Report).
* **Core Services:** The operational engines handling the logic for the *Scientific Intelligence* processing and the *Humanitarian Federation* routing.
* **Integration Layer:** The backbone of the federation. It utilizes a **Provider Gateway** to manage API calls and data translation, paired with a **Provider Registry** that authenticates and manages the active list of trusted partners.
* **External Sources:** The decentralized endpoints that maintain data ownership, encompassing Humanitarian Organizations, Scientific Agencies, and Public Data Sources.

## Current Capabilities

GeoResponde provides a comprehensive suite of tools designed for crisis management and data integration:

* **Federated Operations:** Federated Search and Reporting, fully supporting PFIF (People Finder Interchange Format) exports.
* **Platform Management:** A robust Provider Registry, a dedicated Provider SDK, and real-time Provider Health Monitoring.
* **Operational View:** A Situation Room that integrates multiple Scientific Intelligence Layers for spatial awareness.

## Tech Stack

Our monorepo is built with modern, scalable tools to ensure fast development and reliable deployments:

* **Frontend:** React, TypeScript, and MapLibre (deployed via Vercel).
* **Backend:** Fastify and TypeScript (deployed via Railway).
* **Tooling:** Managed as a pnpm workspace.

## Getting Started

To run the project locally, ensure you have `pnpm` installed, then execute:

```bash
pnpm install
pnpm dev
```

The application will start the following local servers:
* **Frontend:** `http://localhost:5173`
* **Backend (Gateway):** `http://localhost:3001`

**Important:** To properly point the frontend to your local gateway and avoid CORS errors during development, you must configure the `VITE_API_URL` environment variable. For detailed instructions, please see our [Local Development Guide](docs/local-development.md).

---

## Roadmap

Our current development priorities focus on expanding the ecosystem and standardizing data exchange:

* **Ecosystem Expansion:** Onboarding new communities, adding humanitarian providers, and integrating more scientific layers.
* **Standardization & APIs:** Developing the Open Humanitarian Interface (OHI), the Emergency Exchange Protocol (EEP), and a common provider submission API.
* **User Experience:** Enhancing mobile optimization for on-the-ground usability.

## Contributing

GeoResponde welcomes contributions from everyone; whether you are a developer, scientist, emergency manager, or volunteer, your help is valuable. We deeply appreciate those who contribute their time for the greater good, whether you are a Git veteran or making your very first open-source contribution.

Please read `CONTRIBUTING.md` and `docs/community/ways-to-contribute.md` before opening a Pull Request.

## Current Release: v0.5.0-alpha

This release introduces the federated architecture that serves as the foundation for GeoResponde's next stage. Key highlights include the Provider Registry, Federated Search and Reporting workflows, the Submission Router, the Provider SDK, a redesigned Situation Room, and our new community contribution framework.

## Acknowledgements

GeoResponde would not exist without the humanitarian organizations, scientific institutions, and volunteers who openly share information during emergencies. Our goal is to amplify their work, not replace it.

## License

Released under the MIT License.