import { useState } from "react";
import "./App.css";

type MenuItem = {
  name: string;
  icon: string;
};

const menuItems: MenuItem[] = [
  { name: "Dashboard", icon: "▦" },
  { name: "POS / Sales", icon: "🛒" },
  { name: "Purchases", icon: "📦" },
  { name: "Inventory", icon: "▤" },
  { name: "Customers", icon: "👥" },
  { name: "Suppliers", icon: "🚚" },
  { name: "Accounts / Khata", icon: "💳" },
  { name: "Reports", icon: "📊" },
  { name: "Barcode", icon: "▥" },
  { name: "Settings", icon: "⚙" },
];

function App() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <div className="brand">
          <div className="brand-logo">S</div>

          {sidebarOpen && (
            <div>
              <h1>Smart Store</h1>
              <span>ERP Management</span>
            </div>
          )}
        </div>

        <nav className="navigation">
          <p className="menu-title">
            {sidebarOpen ? "MAIN MENU" : "MENU"}
          </p>

          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`menu-item ${
                activeMenu === item.name ? "active" : ""
              }`}
              onClick={() => setActiveMenu(item.name)}
              title={item.name}
            >
              <span className="menu-icon">{item.icon}</span>
              {sidebarOpen && <span>{item.name}</span>}
            </button>
          ))}
        </nav>

        {sidebarOpen && (
          <div className="sidebar-footer">
            <div className="store-status">
              <span className="status-dot"></span>
              <div>
                <strong>System Online</strong>
                <small>Offline mode ready</small>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="main">
        {/* Top Header */}
        <header className="topbar">
          <div className="header-left">
            <button
              className="toggle-btn"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              ☰
            </button>

            <div>
              <h2>{activeMenu}</h2>
              <p>Manage your business efficiently</p>
            </div>
          </div>

          <div className="header-right">
            <button className="header-btn" title="Notifications">
              🔔
              <span className="notification-dot"></span>
            </button>

            <div className="user-profile">
              <div className="avatar">JA</div>
              <div className="user-info">
                <strong>Admin User</strong>
                <span>Administrator</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard */}
        {activeMenu === "Dashboard" && (
          <section className="dashboard">
            <div className="welcome">
              <div>
                <h3>Good Evening 👋</h3>
                <p>
                  Welcome back. Here's what's happening with your store today.
                </p>
              </div>

              <button className="primary-btn">+ New Sale</button>
            </div>

            {/* Statistics */}
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon sales-icon">💰</div>
                <div>
                  <span>Today's Sales</span>
                  <h3>Rs. 125,450</h3>
                  <small className="positive">↑ 12.5% from yesterday</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon profit-icon">📈</div>
                <div>
                  <span>Today's Profit</span>
                  <h3>Rs. 32,680</h3>
                  <small className="positive">↑ 8.2% from yesterday</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon stock-icon">📦</div>
                <div>
                  <span>Total Stock</span>
                  <h3>4,285 Items</h3>
                  <small>156 low stock items</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon customer-icon">👥</div>
                <div>
                  <span>Customers</span>
                  <h3>1,248</h3>
                  <small className="positive">+24 this month</small>
                </div>
              </div>
            </div>

            {/* Main Dashboard Grid */}
            <div className="content-grid">
              {/* Sales Overview */}
              <div className="panel sales-panel">
                <div className="panel-header">
                  <div>
                    <h3>Sales Overview</h3>
                    <p>Last 7 days</p>
                  </div>

                  <select>
                    <option>Last 7 Days</option>
                    <option>Last 30 Days</option>
                    <option>This Year</option>
                  </select>
                </div>

                <div className="chart">
                  <div className="chart-values">
                    <span>200K</span>
                    <span>150K</span>
                    <span>100K</span>
                    <span>50K</span>
                    <span>0</span>
                  </div>

                  <div className="chart-area">
                    <div className="grid-line line-1"></div>
                    <div className="grid-line line-2"></div>
                    <div className="grid-line line-3"></div>
                    <div className="grid-line line-4"></div>

                    <div className="bars">
                      <div className="bar" style={{ height: "48%" }}>
                        <span>Mon</span>
                      </div>
                      <div className="bar" style={{ height: "67%" }}>
                        <span>Tue</span>
                      </div>
                      <div className="bar" style={{ height: "54%" }}>
                        <span>Wed</span>
                      </div>
                      <div className="bar" style={{ height: "78%" }}>
                        <span>Thu</span>
                      </div>
                      <div className="bar" style={{ height: "63%" }}>
                        <span>Fri</span>
                      </div>
                      <div className="bar" style={{ height: "91%" }}>
                        <span>Sat</span>
                      </div>
                      <div className="bar today" style={{ height: "72%" }}>
                        <span>Sun</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="panel">
                <div className="panel-header">
                  <div>
                    <h3>Quick Actions</h3>
                    <p>Common tasks</p>
                  </div>
                </div>

                <div className="quick-actions">
                  <button>
                    <span>🛒</span>
                    <strong>New Sale</strong>
                    <small>Create invoice</small>
                  </button>

                  <button>
                    <span>📥</span>
                    <strong>Purchase</strong>
                    <small>Add stock</small>
                  </button>

                  <button>
                    <span>👤</span>
                    <strong>Customer</strong>
                    <small>Add customer</small>
                  </button>

                  <button>
                    <span>📊</span>
                    <strong>Reports</strong>
                    <small>View reports</small>
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Grid */}
            <div className="bottom-grid">
              {/* Recent Sales */}
              <div className="panel">
                <div className="panel-header">
                  <div>
                    <h3>Recent Sales</h3>
                    <p>Latest transactions</p>
                  </div>

                  <button className="text-btn">View All →</button>
                </div>

                <div className="table-wrapper">
                  <table>
                    <thead>
                      <tr>
                        <th>Invoice</th>
                        <th>Customer</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>#INV-1045</td>
                        <td>Ahmed Traders</td>
                        <td>Rs. 24,500</td>
                        <td>
                          <span className="badge success">Paid</span>
                        </td>
                      </tr>

                      <tr>
                        <td>#INV-1044</td>
                        <td>Ali Store</td>
                        <td>Rs. 18,750</td>
                        <td>
                          <span className="badge success">Paid</span>
                        </td>
                      </tr>

                      <tr>
                        <td>#INV-1043</td>
                        <td>Walk-in Customer</td>
                        <td>Rs. 9,850</td>
                        <td>
                          <span className="badge pending">Pending</span>
                        </td>
                      </tr>

                      <tr>
                        <td>#INV-1042</td>
                        <td>Hassan Enterprises</td>
                        <td>Rs. 31,200</td>
                        <td>
                          <span className="badge success">Paid</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Stock Alerts */}
              <div className="panel">
                <div className="panel-header">
                  <div>
                    <h3>Stock Alerts</h3>
                    <p>Items requiring attention</p>
                  </div>

                  <button className="text-btn">View All →</button>
                </div>

                <div className="stock-list">
                  <div className="stock-item">
                    <div className="product-icon">📦</div>
                    <div className="product-info">
                      <strong>Premium Sugar</strong>
                      <span>SKU: SUG-001</span>
                    </div>
                    <div className="stock-qty danger">
                      <strong>8</strong>
                      <span>Left</span>
                    </div>
                  </div>

                  <div className="stock-item">
                    <div className="product-icon">📦</div>
                    <div className="product-info">
                      <strong>Cooking Oil 5L</strong>
                      <span>SKU: OIL-005</span>
                    </div>
                    <div className="stock-qty warning">
                      <strong>14</strong>
                      <span>Left</span>
                    </div>
                  </div>

                  <div className="stock-item">
                    <div className="product-icon">📦</div>
                    <div className="product-info">
                      <strong>Tea Premium</strong>
                      <span>SKU: TEA-002</span>
                    </div>
                    <div className="stock-qty warning">
                      <strong>19</strong>
                      <span>Left</span>
                    </div>
                  </div>

                  <div className="stock-item">
                    <div className="product-icon">📦</div>
                    <div className="product-info">
                      <strong>Flour 20KG</strong>
                      <span>SKU: FLR-020</span>
                    </div>
                    <div className="stock-qty danger">
                      <strong>5</strong>
                      <span>Left</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* System Information */}
            <div className="system-bar">
              <div>
                <span className="online-dot"></span>
                <strong>Offline Mode Ready</strong>
                <span>Data will sync automatically when internet is available.</span>
              </div>

              <div className="system-details">
                <span>Currency: <strong>PKR</strong></span>
                <span>•</span>
                <span>Last sync: <strong>Just now</strong></span>
              </div>
            </div>
          </section>
        )}

        {/* Placeholder for future modules */}
        {activeMenu !== "Dashboard" && (
          <section className="module-placeholder">
            <div className="placeholder-icon">🚀</div>
            <h2>{activeMenu}</h2>
            <p>
              This module will be connected during the next development phase.
            </p>
            <button
              className="primary-btn"
              onClick={() => setActiveMenu("Dashboard")}
            >
              ← Back to Dashboard
            </button>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;