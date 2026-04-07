export interface Order {
  id: string;
  customer: string;
  email: string;
  items: number;
  total: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  date: string;
}

export const mockOrders: Order[] = [
  { id: "ORD-001", customer: "Emma Laurent", email: "emma@email.com", items: 3, total: 417, status: "delivered", date: "2026-04-05" },
  { id: "ORD-002", customer: "James Chen", email: "james@email.com", items: 1, total: 129, status: "shipped", date: "2026-04-06" },
  { id: "ORD-003", customer: "Sofia Rivera", email: "sofia@email.com", items: 2, total: 354, status: "processing", date: "2026-04-06" },
  { id: "ORD-004", customer: "Liam O'Brien", email: "liam@email.com", items: 1, total: 189, status: "pending", date: "2026-04-07" },
  { id: "ORD-005", customer: "Anika Patel", email: "anika@email.com", items: 4, total: 632, status: "delivered", date: "2026-04-03" },
  { id: "ORD-006", customer: "Noah Kim", email: "noah@email.com", items: 2, total: 275, status: "shipped", date: "2026-04-04" },
  { id: "ORD-007", customer: "Mia Tanaka", email: "mia@email.com", items: 1, total: 98, status: "cancelled", date: "2026-04-02" },
  { id: "ORD-008", customer: "Oliver Dubois", email: "oliver@email.com", items: 3, total: 489, status: "delivered", date: "2026-04-01" },
];

export const salesData = [
  { month: "Jan", revenue: 12400, orders: 86 },
  { month: "Feb", revenue: 15200, orders: 102 },
  { month: "Mar", revenue: 18900, orders: 134 },
  { month: "Apr", revenue: 14600, orders: 95 },
  { month: "May", revenue: 21300, orders: 148 },
  { month: "Jun", revenue: 19800, orders: 131 },
];
