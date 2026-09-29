# 🏬 UrbanNexus: Mall & Home Utility Services Aggregator

**UrbanNexus** is an omnichannel aggregator platform that bridges commercial shopping mall ecosystems with on-demand residential home utility services into a single, cohesive application.

---

## 🌟 Key Features

### 1. 🏬 Mall Discovery & Services Hub
- **Multi-Mall Network**: Seamlessly switch between regional flagship centers (*Phoenix Grand Galleria*, *Orion SkyTech Mall*, *Horizon Central Galleria*).
- **Smart Parking & EV Fast-Charging**:
  - Live occupancy and bay vacancy monitoring for Basement B1, B2, EV Fast-Charging zones, and Valet bays.
  - Advance slot booking with digital **ANPR License Plate recognition** and instant **QR Code Ingress Passes**.
- **Multiplex Cinema Booking**:
  - Browse movies, IMAX 3D with Laser, 4DX, and Dolby Atmos showtimes.
  - Interactive seat matrix picker with real-time seat reservation.
- **Food Court Digital Pre-Orders**:
  - Digital food court buzzer token system (`BUZZ-XX`).
  - Pre-order gourmet pizza, artisan ramen, specialty coffee without waiting in queues.
- **Mall-to-Home Hyperlocal Delivery**:
  - Browse products across fashion, electronics, cosmetics, and sportswear (e.g. Zara, Apple Store, Nike, Sephora).
  - Select between **2-Hour Hyperlocal Doorstep Delivery** or **Click & Collect at Mall Concierge**.

### 2. 🛠️ On-Demand Home Utility Services Hub
- **Comprehensive Service Catalog**:
  - **AC & Refrigeration**: High-pressure jet foam wash, gas leak detection, cooling calibration.
  - **Electrical Solutions**: 45-min emergency outage dispatch, breaker & MCB replacement, load safety audits.
  - **Master Plumbing**: Acoustic leak detection, burst pipe repair, drainage unblocking.
  - **Deep Home Cleaning**: Hospital-grade eco-cleaning for 1 BHK, 2 BHK, and 3 BHK apartments.
  - **Major Appliance Care**: Washing machine, refrigerator, and microwave repairs with OEM spares.
  - **Pest Defense**: Odorless herbal cockroach and termite barrier protection.
  - **Carpentry & Fitments**: Modular furniture assembly, digital lock installations.
- **Verified Technician Assurance**:
  - 100% Police-verified pros with background checks, ratings, and active tracking.
  - Transparent 30 to 90-day warranties with free re-visits.
  - Emergency Dispatch SLA (&lt; 45 mins) for urgent electrical or water leak emergencies.

### 3. 📍 Unified Live Activity & Dispatch Tracker
- Consolidated real-time timeline for:
  - **Home Service Technicians**: Step-by-step progress tracking (*Assigned* ➔ *En Route* ➔ *In Progress* ➔ *Completed*).
  - **Live GPS Telemetry Simulator**: Visual tracking of technicians and delivery scooters in the local district.
  - **Digital Passes**: Quick modal display of Mall Parking QR codes, Cinema e-Tickets, and Food Court Buzzers.
  - **Interactive Status Stepper**: One-click demo status advancement for evaluators to test state transitions.

### 4. 🪙 NexusPoints Unified Loyalty Wallet
- Earn reward points automatically on every mall transaction (dining, parking, movies) and redeem them directly as credits on home maintenance services (or vice versa).

### 5. ⚙️ Facility & Vendor Operations Portal
- Real-time operational dashboard for mall facility managers:
  - Live ticket queue & technician re-assignment.
  - Mall parking gate capacity controls (simulate rush hours or adjust available bays).
  - Flash promotion broadcast management.

---

## 🏗️ Technology Stack

- **Backend**: Node.js & Express.js REST API
- **Data Layer**: In-memory seeded database with mock store for malls, products, technicians, parking bays, and bookings
- **Frontend**: Clean Single Page Application (SPA) built with Tailwind CSS, Lucide Icons, and responsive design for mobile & desktop
- **Architecture**: Decoupled RESTful API endpoints supporting easy scaling to PostgreSQL/MongoDB

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation & Run

1. Navigate to the project directory:
   ```powershell
   cd C:\Users\pooja\.gemini\antigravity\scratch\urban-nexus
   ```

2. Start the unified server:
   ```powershell
   node server.js
   ```
   *(or run `npm.cmd start`)*

3. Open your web browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## 📡 API Endpoints Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Service health status check |
| `GET` | `/api/malls` | List all partner shopping malls |
| `GET` | `/api/stores?mallId=&category=&search=` | Search & filter stores and products |
| `GET` | `/api/movies?mallId=` | List now-showing multiplex movies & screens |
| `POST` | `/api/movies/book` | Reserve cinema seats & issue e-ticket |
| `GET` | `/api/food?mallId=` | Food court restaurant stalls & menus |
| `POST` | `/api/food/order` | Place digital food order & generate buzzer token |
| `GET` | `/api/parking?mallId=` | Real-time parking zones, EV bays & capacity |
| `POST` | `/api/parking/reserve` | Reserve parking bay & generate QR pass |
| `GET` | `/api/home-services?category=` | On-demand home utility service catalog |
| `GET` | `/api/technicians` | Certified technician profiles & status |
| `POST` | `/api/home-services/book` | Book home utility technician with SLA |
| `POST` | `/api/mall-delivery` | Place mall-to-home hyperlocal delivery order |
| `GET` | `/api/bookings?type=` | Retrieve unified bookings history & status |
| `PATCH`| `/api/bookings/:id/status` | Update booking status in the live tracker |
| `GET` | `/api/wallet` | Check NexusPoints loyalty balance & history |
| `GET` | `/api/stats` | Aggregator KPIs and facility metrics |
| `POST` | `/api/reset` | Reset demo database to default state |
