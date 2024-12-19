<template>
  <div class="admin-tickets">
    <header>
      <h1>Thống kê đặt vé của khách hàng</h1>
    </header>

    <section class="filter-section">
      <h2>Bộ lọc</h2>
      <form @submit.prevent="applyFilter" class="filter-form">
        <div class="form-group">
          <label for="customer-name">Tên khách hàng</label>
          <input type="text" id="customer-name" v-model="filters.customerName" placeholder="Nhập tên khách hàng..." />
        </div>

        <div class="form-group">
          <label for="date-range">Khoảng thời gian</label>
          <input type="date" v-model="filters.startDate" /> -
          <input type="date" v-model="filters.endDate" />
        </div>

        <button type="submit" class="filter-button">Áp dụng bộ lọc</button>
      </form>
    </section>

    <section class="ticket-stats">
      <h2>Kết quả thống kê</h2>
      <table class="stats-table">
        <thead>
          <tr>
            <th>Tên khách hàng</th>
            <th>Mã chuyến bay</th>
            <th>Điểm đi</th>
            <th>Điểm đến</th>
            <th>Ngày đặt vé</th>
            <th>Số ghế</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ticket in filteredTickets" :key="ticket.id">
            <td>{{ ticket.customerName }}</td>
            <td>{{ ticket.flightCode }}</td>
            <td>{{ ticket.departure }}</td>
            <td>{{ ticket.destination }}</td>
            <td>{{ ticket.bookingDate }}</td>
            <td>{{ ticket.seats }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AdminTickets',
  data() {
    return {
      filters: {
        customerName: '',
        startDate: '',
        endDate: ''
      },
      tickets: []
    };
  },
  computed: {
    filteredTickets() {
      return this.tickets.filter(ticket => {
        const matchesName = this.filters.customerName === '' || ticket.customerName.toLowerCase().includes(this.filters.customerName.toLowerCase());
        const matchesDate = (!this.filters.startDate || ticket.bookingDate >= this.filters.startDate) &&
                            (!this.filters.endDate || ticket.bookingDate <= this.filters.endDate);
        return matchesName && matchesDate;
      });
    }
