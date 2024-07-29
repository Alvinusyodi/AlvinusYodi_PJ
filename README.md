# Todo List Project

Ini adalah aplikasi Daftar Tugas sederhana yang dibangun menggunakan Node.js, Express, Sequelize, MySQL, dan WebSocket. Aplikasi ini memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus tugas, serta menggunakan WebSocket untuk menyiarkan pembaruan ke semua klien yang terhubung.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [WebSocket](#websocket)
- [Swagger Documentation](#swagger-documentation)

## Features

- Membuat, membaca, memperbarui, dan menghapus tugas.
- Pembaruan secara real-time menggunakan WebSocket.
- Dokumentasi API dengan Swagger.

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/todo-list-project.git
    cd todo-list-project
    ```

2. **Install the dependencies:**
    ```bash
    npm install
    ```

3. **Set up the MySQL database:**
    - Create a MySQL database.
    - Update the database configuration in `config/database.js` with your MySQL credentials.

4. **Run database migrations:**
    ```bash
    npx sequelize-cli db:migrate
    ```

5. **Start the server:**
    ```bash
    npm start
    ```

6. **Open your browser and navigate to** `http://localhost:3000` **to use the application.**

## Usage

- Buka `http://localhost:3000` di browser Anda untuk menggunakan aplikasi Daftar Tugas.
- Gunakan bidang input untuk menambahkan tugas baru.
- Klik pada tugas untuk menandainya sebagai selesai.
- Gunakan tombol hapus untuk menghapus tugas.

## API Endpoints

### GET /api/todos
Mengambil daftar semua tugas.

### POST /api/todos
Membuat tugas baru.

### PUT /api/todos/{id}
Memperbarui tugas yang ada.

### DELETE /api/todos/{id}
Menghapus tugas.

## WebSocket

Aplikasi ini menggunakan WebSocket untuk menyiarkan pembaruan ke semua klien yang terhubung. Ketika sebuah tugas dibuat, diperbarui, atau dihapus, semua klien yang terhubung akan menerima pesan untuk memperbarui daftar tugas mereka.

## Swagger Documentation

API didokumentasikan menggunakan Swagger. Untuk melihat UI Swagger dan menguji endpoint, ikuti langkah-langkah berikut:

1. **Start the server:**
    ```bash
    node server.js
    ```

2. **Open your browser and navigate to** `http://localhost:3000/api-docs`.

Anda akan melihat UI Swagger dengan endpoint API yang tersedia. Anda dapat menggunakan UI ini untuk menguji API dengan mengirimkan permintaan dan melihat respons.

