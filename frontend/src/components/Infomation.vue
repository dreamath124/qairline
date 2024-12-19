<template>
  <div class="information">
    <header>
      <h1>Thông tin chung và thông tin chuyến bay</h1>
    </header>

    <section class="general-info">
      <h2>Thông tin chung</h2>
      <ul>
        <li v-for="info in generalInfo" :key="info.id">{{ info.content }}</li>
      </ul>
    </section>

    <section class="flight-info">
      <h2>Thông tin chuyến bay</h2>
      <table class="flight-table">
        <thead>
          <tr>
            <th>Mã chuyến bay</th>
            <th>Hãng</th>
            <th>Điểm đi</th>
            <th>Điểm đến</th>
            <th>Thời gian khởi hành</th>
            <th>Thời gian đến</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="flight in flights" :key="flight.id">
            <td>{{ flight.code }}</td>
            <td>{{ flight.airline }}</td>
            <td>{{ flight.departure }}</td>
            <td>{{ flight.destination }}</td>
            <td>{{ flight.departureTime }}</td>
            <td>{{ flight.arrivalTime }}</td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Information',
  data() {
    return {
      generalInfo: [
        { id: 1, content: 'QAIRLINE cung cấp các chuyến bay nội địa và quốc tế.' },
        { id: 2, content: 'Đảm bảo an toàn và chất lượng dịch vụ.' },
        { id: 3, content: 'Dịch vụ hỗ trợ khách hàng 24/7.' }
      ],
      flights: [
        { id: 1, code: 'QA123', airline: 'QAIRLINE', departure: 'Hà Nội', destination: 'TP. Hồ Chí Minh', departureTime: '08:00 AM', arrivalTime: '10:00 AM' },
        { id: 2, code: 'QA456', airline: 'QAIRLINE', departure: 'Đà Nẵng', destination: 'Hà Nội', departureTime: '01:00 PM', arrivalTime: '03:00 PM' }
      ]
    };
  }
};
</script>

<style scoped>
.information {
  font-family: Arial, sans-serif;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.general-info, .flight-info {
  margin-bottom: 20px;
}

.flight-table {
  width: 100%;
  border-collapse: collapse;
}

.flight-table th, .flight-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.flight-table th {
  background-color: #f4f4f4;
}
</style>
