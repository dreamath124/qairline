<template>
  <div class="ticket-stats-container">
    <h1 class="stats-title">Thống kê đặt vé của khách hàng</h1>

    <!-- Bộ lọc thống kê -->
    <div class="filters">
      <div class="filter-group">
        <label for="dateFrom">Từ ngày:</label>
        <input v-model="filters.dateFrom" type="date" id="dateFrom" class="filter-input" />

        <label for="dateTo">Đến ngày:</label>
        <input v-model="filters.dateTo" type="date" id="dateTo" class="filter-input" />

        <button @click="filterTickets" class="filter-button">Lọc</button>
      </div>
    </div>

    <!-- Bảng thống kê đặt vé -->
    <div v-if="loading" class="loading">
      <p>Đang tải...</p>
    </div>

    <table v-else class="ticket-table">
      <thead>
        <tr>
          <th>Mã đặt vé</th>
          <th>Khách hàng</th>
          <th>Chuyến bay</th>
          <th>Ngày đặt</th>
          <th>Giá vé</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="ticket in filteredTickets" :key="ticket.id">
          <td>{{ ticket.id }}</td>
          <td>{{ ticket.customer }}</td>
          <td>{{ ticket.flight }}</td>
          <td>{{ ticket.date }}</td>
          <td>{{ ticket.price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tickets: [], // Dữ liệu vé đặt
      filters: {
        dateFrom: "",
        dateTo: "",
      },
      loading: true, // Trạng thái tải dữ liệu
    };
  },
  computed: {
    filteredTickets() {
      // Lọc vé theo ngày
      return this.tickets.filter((ticket) => {
        const ticketDate = new Date(ticket.date);
        const from = this.filters.dateFrom ? new Date(this.filters.dateFrom) : null;
        const to = this.filters.dateTo ? new Date(this.filters.dateTo) : null;

        return (
          (!from || ticketDate >= from) &&
          (!to || ticketDate <= to)
        );
      });
    },
  },
  methods: {
    async fetchTickets() {
      // Giả lập gọi API để tải dữ liệu đặt vé
      this.loading = true;
      try {
        const response = await fetch("/api/tickets"); // API giả định
        this.tickets = await response.json();
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu: ", error);
      } finally {
        this.loading = false;
      }
    },
    filterTickets() {
      // Hàm thực thi lọc (thực tế đã được xử lý qua computed)
      console.log("Lọc vé theo ngày: ", this.filters);
    },
  },
  async mounted() {
    // Tải dữ liệu khi component được mount
    await this.fetchTickets();
  },
};
</script>

<style>
.ticket-stats-container {
  max-width: 900px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

.stats-title {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 20px;
}

.filters {
  margin-bottom: 20px;
}

.filter-group {
  display: flex;
  gap: 10px;
  align-items: center;
}

.filter-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.filter-button {
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.filter-button:hover {
  background-color: #2980b9;
}

.loading {
  text-align: center;
  color: #3498db;
}

.ticket-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.ticket-table th, .ticket-table td {
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;
}

.ticket-table th {
  background-color: #f8f8f8;
}
</style>
