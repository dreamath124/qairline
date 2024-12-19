<template>
  <div class="flight-info">
    <h1>Thông tin chuyến bay</h1>
    <div v-if="loading" class="loading">Đang tải dữ liệu...</div>
    <div v-else>
      <table>
        <thead>
          <tr>
            <th>Mã chuyến bay</th>
            <th>Hãng</th>
            <th>Điểm đi</th>
            <th>Điểm đến</th>
            <th>Giờ khởi hành</th>
            <th>Giờ đến</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="flight in flights" :key="flight.id">
            <td>{{ flight.code }}</td>
            <td>{{ flight.airline }}</td>
            <td>{{ flight.origin }}</td>
            <td>{{ flight.destination }}</td>
            <td>{{ flight.departureTime }}</td>
            <td>{{ flight.arrivalTime }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Infomation",
  data() {
    return {
      flights: [], // Danh sách chuyến bay
      loading: true, // Trạng thái tải dữ liệu
    };
  },
  methods: {
    async fetchFlights() {
      try {
        const response = await fetch("https://api.example.com/flights");
        this.flights = await response.json();
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
      } finally {
        this.loading = false;
      }
    },
  },
  mounted() {
    this.fetchFlights();
  },
};
</script>

<style scoped>
.flight-info {
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table, th, td {
  border: 1px solid #ccc;
}
th, td {
  padding: 10px;
  text-align: left;
}
.loading {
  font-size: 16px;
  font-weight: bold;
}
</style>
