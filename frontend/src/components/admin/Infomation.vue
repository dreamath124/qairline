<template>
  <div class="admin-information">
    <header>
      <h1>Quản trị: Đăng thông tin</h1>
    </header>

    <form @submit.prevent="submitInformation" class="info-form">
      <div class="form-group">
        <label for="title">Tiêu đề</label>
        <input type="text" id="title" v-model="form.title" required placeholder="Nhập tiêu đề..." />
      </div>

      <div class="form-group">
        <label for="content">Nội dung</label>
        <textarea id="content" v-model="form.content" required placeholder="Nhập nội dung..."></textarea>
      </div>

      <div class="form-group">
        <label for="type">Loại thông tin</label>
        <select id="type" v-model="form.type" required>
          <option value="news">Tin tức</option>
          <option value="promotion">Khuyến mại</option>
          <option value="alert">Thông báo</option>
        </select>
      </div>

      <button type="submit" class="submit-button">Đăng thông tin</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminInformation',
  data() {
    return {
      form: {
        title: '',
        content: '',
        type: 'news'
      }
    };
  },
  methods: {
    async submitInformation() {
      try {
        const response = await fetch('https://api.example.com/information', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.form)
        });

        if (!response.ok) {
          throw new Error('Lỗi khi gửi thông tin.');
        }

        const result = await response.json();
        console.log('Thông tin đã được gửi:', result);
        alert('Thông tin đã được đăng thành công!');
        
        // Reset form
        this.form = {
          title: '',
          content: '',
          type: 'news'
        };
      } catch (error) {
        console.error('Lỗi:', error);
        alert('Đã xảy ra lỗi khi đăng thông tin.');
      }
    }
  }
};
</script>

<style scoped>
.admin-information {
  font-family: Arial, sans-serif;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 20px;
}

.info-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input, textarea, select {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

.submit-button {
  background-color: #007BFF;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #0056b3;
}
</style>
