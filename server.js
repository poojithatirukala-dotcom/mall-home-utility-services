const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./data/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Health check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    platform: 'UrbanNexus - Mall & Home Utility Services Aggregator',
    timestamp: new Date().toISOString()
  });
});

// Mall Endpoints
app.get('/api/malls', (req, res) => {
  res.json(db.getMalls());
});

app.get('/api/malls/:id', (req, res) => {
  const mall = db.getMallById(req.params.id);
  res.json(mall);
});

// Stores & Products
app.get('/api/stores', (req, res) => {
  const { mallId, category, search } = req.query;
  const stores = db.getStores(mallId, category, search);
  res.json(stores);
});

// Multiplex Movies & Booking
app.get('/api/movies', (req, res) => {
  const { mallId } = req.query;
  const movies = db.getMovies(mallId);
  res.json(movies);
});

app.post('/api/movies/book', (req, res) => {
  try {
    const booking = db.bookMovie(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Food Court & Dining
app.get('/api/food', (req, res) => {
  const { mallId } = req.query;
  const foodOutlets = db.getFoodOutlets(mallId);
  res.json(foodOutlets);
});

app.post('/api/food/order', (req, res) => {
  try {
    const order = db.orderFood(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Smart Mall Parking
app.get('/api/parking', (req, res) => {
  const { mallId } = req.query;
  const parkingZones = db.getParkingZones(mallId);
  res.json(parkingZones);
});

app.post('/api/parking/reserve', (req, res) => {
  try {
    const reservation = db.reserveParking(req.body);
    res.status(201).json(reservation);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Home Utility Services
app.get('/api/home-services', (req, res) => {
  const { category } = req.query;
  const services = db.getHomeServices(category);
  res.json(services);
});

app.get('/api/home-services/:id', (req, res) => {
  const service = db.getHomeServiceById(req.params.id);
  if (!service) return res.status(404).json({ error: 'Service not found' });
  res.json(service);
});

app.get('/api/technicians', (req, res) => {
  res.json(db.getTechnicians());
});

app.post('/api/home-services/book', (req, res) => {
  try {
    const booking = db.bookHomeService(req.body);
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Mall-to-Home Delivery
app.post('/api/mall-delivery', (req, res) => {
  try {
    const order = db.orderMallDelivery(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Unified Bookings Management & Live Tracker
app.get('/api/bookings', (req, res) => {
  const { type } = req.query;
  res.json(db.getBookings(type));
});

app.get('/api/bookings/:id', (req, res) => {
  const booking = db.getBookingById(req.params.id);
  if (!booking) return res.status(404).json({ error: 'Booking not found' });
  res.json(booking);
});

app.patch('/api/bookings/:id/status', (req, res) => {
  const { status, notes } = req.body;
  const updated = db.updateBookingStatus(req.params.id, status, notes);
  if (!updated) return res.status(404).json({ error: 'Booking not found' });
  res.json(updated);
});

// Wallet & Promotions
app.get('/api/wallet', (req, res) => {
  res.json(db.getWallet());
});

app.get('/api/promotions', (req, res) => {
  res.json(db.getPromotions());
});

// Platform Aggregator KPI Stats
app.get('/api/stats', (req, res) => {
  res.json(db.getStats());
});

// Reset seed data
app.post('/api/reset', (req, res) => {
  db.resetToDefaults();
  res.json({ message: 'Database reset to initial state successfully.' });
});

// Fallback to index.html for SPA client
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Guard app.listen so it only runs when started directly in local development
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`🚀 UrbanNexus Platform Server Running`);
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log(`🏬 Mall Discovery | 🛠️ Home Utility Services Aggregator`);
    console.log(`=======================================================`);
  });
}

// Export the Express app for Vercel serverless runtime
module.exports = app;
