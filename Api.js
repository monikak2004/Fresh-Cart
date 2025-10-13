const BASE_URL = "http://localhost:5000";

// ===== AUTH =====
async function registerUser(data) {
  const res = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

async function loginUser(email, password) {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}

// ===== CATALOG =====
async function getCatalog() {
  const res = await fetch(`${BASE_URL}/catalog`);
  return res.json();
}

// ===== ORDER =====
async function placeOrder(user_id, variant_id, quantity) {
  const res = await fetch(`${BASE_URL}/place-order`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ user_id, variant_id, quantity }),
  });
  return res.json();
}

// ===== DISTRIBUTOR =====
async function distributorAddVariant(payload) {
  const res = await fetch(`${BASE_URL}/distributor/product`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

async function distributorUpdateVariant(variant_id, payload) {
  const res = await fetch(`${BASE_URL}/distributor/product/${variant_id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

async function distributorGetOrders() {
  const res = await fetch(`${BASE_URL}/distributor/orders`);
  return res.json();
}

async function distributorUpdateOrderStatus(order_id, status) {
  const res = await fetch(`${BASE_URL}/distributor/orders/${order_id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  return res.json();
}
