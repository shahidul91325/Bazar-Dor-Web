# 🛒 বাজার দর (Bazar Dor)

### Daily Essential Product Prices at a Glance

**Bazar Dor** is a responsive web application that helps users explore the latest prices of essential products in Bangladesh. Users can browse products, explore categories, compare market prices, and track daily price changes through an intuitive Bengali-language interface.

🌐 **Live Website:** https://bazar-dor-web.vercel.app/

💻 **GitHub Repository:** https://github.com/shahidul91325/Bazar-Dor-Web

---

## ✨ Key Features

1. **📊 Daily Price Tracking** — Explore essential product prices and see daily price changes with percentage indicators.
2. **📈 Price Increase & Decrease Sections** — Quickly identify products whose prices have increased or decreased.
3. **🛍️ Product Browsing** — Browse products through a responsive card layout with product names, categories, units, and prices.
4. **🗂️ Category Filtering** — Explore products by category and sort them by price from low to high or high to low.
5. **🔎 Product Details** — View product information, minimum and maximum prices, average prices, and market-wise price comparisons.
6. **🔐 Authentication** — Register and sign in using email and password, with Google and GitHub authentication support.
7. **👤 Profile Management** — Access your profile and update your personal information.
8. **📱 Fully Responsive Design** — Enjoy a consistent experience across mobile phones, tablets, and desktop devices.
9. **⏳ Loading & Error States** — Display loading indicators, skeleton UI, and friendly error or not-found pages.
10. **🔔 Toast Notifications** — Receive feedback for authentication actions, validation errors, and other relevant operations.

---

## 🛠️ Technologies Used

| Technology      | Purpose                                  |
| --------------- | ---------------------------------------- |
| Next.js         | React framework and application routing  |
| React           | Building reusable UI components          |
| TypeScript      | Type safety and maintainable code        |
| Tailwind CSS    | Responsive styling                       |
| DaisyUI         | Prebuilt UI components                   |
| Better Auth     | Authentication and session management    |
| MongoDB         | Database integration for authentication  |
| React Hot Toast | Toast notifications                      |
| Vercel          | Deployment and hosting                   |
| REST API        | Product, category, and market price data |

---

## 🔌 API Endpoints

The application uses the Bazar Dor API to retrieve product and category information.

**Main API URL**

`https://openapi.programming-hero.com/api/bazardor`

**Alternative API URLs**

- `https://api.api-store.workers.dev/api/bazardor`
- `https://api.abcz.workers.dev/api/bazardor`

### Available Endpoints

| Endpoint                  | Description                   |
| ------------------------- | ----------------------------- |
| `/products`               | Retrieve all products         |
| `/products?category=chal` | Retrieve products by category |
| `/products/1`             | Retrieve a single product     |
| `/categories`             | Retrieve all categories       |
| `/categories/chal`        | Retrieve a single category    |

Replace `chal` or `1` with the appropriate category slug or product identifier when needed.

---

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js (LTS version recommended)
- npm
- Git
- A MongoDB database for authentication, if required by your configuration

### 1. Clone the Repository

```bash
git clone https://github.com/shahidul91325/Bazar-Dor-Web.git
```

### 2. Navigate to the Project Directory

```bash
cd Bazar-Dor-Web
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file in the project root and configure the environment variables required by your application.

Example:

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
DATABASE_URL=your_mongodb_connection_string
```

**Important:** These are example variable names. Check your Better Auth configuration and database connection code to confirm the exact names your project uses. Never commit real secrets or database credentials to GitHub.

If Google and GitHub sign-in are enabled, configure their OAuth client IDs, client secrets, and callback URLs according to your authentication setup.

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## 📂 Main Application Routes

| Route              | Description                                       |
| ------------------ | ------------------------------------------------- |
| `/`                | Homepage with price sections and product listings |
| `/category/[slug]` | Products filtered by category                     |
| `/product/[id]`    | Product details and market price information      |
| `/sign-in`         | User sign-in                                      |
| `/sign-up`         | User registration                                 |
| `/profile`         | User profile and account information              |
| `/not-found`       | Application not-found UI, where applicable        |

Some routes may require authentication. The actual access permissions depend on the application's authentication and route-protection configuration.

---

## 📱 Responsive Design

Bazar Dor is designed to work across different screen sizes.

- **Mobile:** Compact navigation, stacked hero section, and single-column or narrow product grids.
- **Tablet:** Flexible layouts and appropriately sized product cards.
- **Desktop:** Wider content sections, multi-column product grids, and expanded navigation.

---

## 🔒 Authentication & Security

The application uses Better Auth for user authentication.

- Email and password authentication
- Google and GitHub sign-in, when configured
- Session-based access to protected pages
- Profile information management
- Authentication feedback and validation messages

Keep all private credentials in environment variables. Do not expose database credentials, OAuth client secrets, or authentication secrets in client-side code.

---

## 🚢 Deployment

The application is deployed on Vercel.

**Live URL:** https://bazar-dor-web.vercel.app/

To deploy your own instance:

1. Push your project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Verify your database and OAuth settings.
5. Deploy the application.
6. Test the homepage, authentication, category pages, product details, and direct URL refresh after deployment.

---

## 📝 Important Note

Product prices are indicative and may change depending on market conditions, location, and time.

**সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।**

---

## 👨‍💻 Author

**Bazar Dor — বাজার দর**

A web application built to make essential product prices in Bangladesh easier to explore and compare.

- **GitHub:** https://github.com/shahidul91325/Bazar-Dor-Web
- **Live Website:** https://bazar-dor-web.vercel.app/

---

⭐ If you find this project useful, consider giving the repository a star on GitHub.
