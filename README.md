# Invoice Tracker
![dashboard](/public/dashboard.png)
This is a work in progress that I am currently working on integrating Postgre SQL and Nextjs.
## Overview
The **Invoice Tracker** is a web application built using **Next.js**, **PostgreSQL**, **Tailwind CSS**, and **ShadCN**. It allows users to **create, manage, and track invoices** efficiently while storing data securely in a PostgreSQL database.

## Features
- **Create and Manage Invoices**: Users can add invoices with details like client name, amount, status, and due date.
- **Store Data in PostgreSQL**: Securely saves invoice records in a PostgreSQL database.
- **Modern UI with ShadCN & Tailwind**: Provides a clean and user-friendly interface.
- **Dynamic Filtering and Sorting**: Allows users to filter invoices by status (Pending, Paid, Overdue, etc.).
- **Responsive Design**: Fully mobile-friendly and optimized for various screen sizes.

## Technologies Used
- **Next.js** – React framework for building server-side rendered (SSR) and static web applications.
- **PostgreSQL** – Relational database for storing invoice records.
- **Tailwind CSS** – Utility-first CSS framework for styling.
- **ShadCN** – Modern UI components for a sleek user experience.

## Installation
### Prerequisites
Ensure you have the following installed:
- **Node.js** (Latest LTS version)
- **PostgreSQL** (Running locally or on AWS RDS)

### Steps to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/invoice-tracker.git
   cd invoice-tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file and add your PostgreSQL database credentials:
   ```env
   DATABASE_URL=
   ```
4. Run database migrations:
   ```bash
   npx prisma migrate dev --name init
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints
| Method | Endpoint         | Description                   |
|--------|----------------|-------------------------------|
| GET    | /api/invoices  | Fetch all invoices           |
| POST   | /api/invoices  | Create a new invoice         |
| PUT    | /api/invoices/:id | Update invoice details  |
| DELETE | /api/invoices/:id | Delete an invoice      |

## UI Components
- **Invoice Form**: Uses ShadCN `Input`, `Select`, and `Button` components.
- **Invoice Table**: Displays stored invoices with Tailwind styling.
- **Status Dropdown**: Uses ShadCN `Select` to update invoice status.

## Deployment
To deploy on **Vercel**, run:
```bash
vercel
```
Ensure that the **DATABASE_URL** environment variable is set correctly on Vercel.

## License
This project is licensed under the MIT License.

