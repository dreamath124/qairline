<template>
  <div class="airplanes-admin">
    <h1>Quản lý Tàu Bay và Chuyến Bay</h1>

    <!-- Form nhập dữ liệu tàu bay -->
    <section>
      <h2>Nhập Dữ Liệu Tàu Bay</h2>
      <form @submit.prevent="addAirplane">
        <label for="airplane-name">Tên tàu bay:</label>
        <input
          type="text"
          id="airplane-name"
          v-model="newAirplane.name"
          required
        />

        <label for="airplane-model">Mẫu tàu bay:</label>
        <input
          type="text"
          id="airplane-model"
          v-model="newAirplane.model"
          required
        />

        <button type="submit">Thêm Tàu Bay</button>
      </form>

      <ul>
        <li v-for="(plane, index) in airplanes" :key="index">
          {{ plane.name }} - {{ plane.model }}
        </li>
      </ul>
    </section>

    <!-- Form nhập dữ liệu chuyến bay và đổi giờ khởi hành -->
    <section>
      <h2>Nhập Dữ Liệu Chuyến Bay và Đổi Giờ Khởi Hành</h2>
      <form @submit.prevent="addFlight">
        <label for="flight-number">Số hiệu chuyến bay:</label>
        <input
          type="text"
          id="flight-number"
          v-model="newFlight.number"
          required
        />

        <label for="departure">Giờ khởi hành:</label>
        <input
          type="datetime-local"
          id="departure"
          v-model="newFlight.departureTime"
          required
        />

        <label for="destination">Điểm đến:</label>
        <input
          type="text"
          id="destination"
          v-model="newFlight.destination"
          required
        />

        <button type="submit">Thêm Chuyến Bay</button>
      </form>

      <ul>
        <li v-for="(flight, index) in flights" :key="index">
          {{ flight.number }} - Giờ khởi hành: {{ flight.departureTime }} - Điểm
          đến: {{ flight.destination }}
          <button @click="updateDepartureTime(index)">
            Đổi giờ khởi hành
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: "AirplanesAdmin",
  data() {
    return {
      airplanes: [], // Danh sách tàu bay
      newAirplane: {
        name: "",
        model: "",
      },
      flights: [], // Danh sách chuyến bay
      newFlight: {
        number: "",
        departureTime: "",
        destination: "",
      },
    };
  },
  methods: {
    // Thêm dữ liệu tàu bay
    addAirplane() {
      this.airplanes.push({ ...this.newAirplane });
      this.newAirplane.name = "";
      this.newAirplane.model = "";
    },
    // Thêm dữ liệu chuyến bay
    addFlight() {
      this.flights.push({ ...this.newFlight });
      this.newFlight.number = "";
      this.newFlight.departureTime = "";
      this.newFlight.destination = "";
    },
    // Đổi giờ khởi hành chuyến bay
    updateDepartureTime(index) {
      const newTime = prompt(
        "Nhập giờ khởi hành mới (YYYY-MM-DDTHH:mm):",
        this.flights[index].departureTime
      );
      if (newTime) {
        this.flights[index].departureTime = newTime;
      }
    },
  },
};
</script>

<style scoped>
.airplanes-admin {
  font-family: Arial, sans-serif;
  margin: 20px;
}

h1,
h2 {
  color: #2c3e50;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-top: 10px;
}

input {
  padding: 5px;
  margin-bottom: 10px;
  width: 300px;
}

button {
  padding: 8px 12px;
  background-color: #42b983;
  color: #fff;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

button:hover {
  background-color: #2c3e50;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 10px;
}
</style>
