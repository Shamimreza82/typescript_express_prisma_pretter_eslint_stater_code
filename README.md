# New Folder (6)

This project is a Node.js application built with Express, TypeScript, and Prisma. It uses PostgreSQL as the database.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/download/)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### 1. Clone the Repository

```bash
git clone <repository-url>
cd new-folder-(6)
```

### 2. Install Dependencies

```bash
npm install
```

or if you are using yarn:

```bash
yarn install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root of your project and add the following environment variables. Replace the placeholder values with your actual database credentials.

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
```

**Note:** Make sure your PostgreSQL server is running.

### 4. Database Setup

Run the following command to generate the Prisma client and push the schema to your database:

```bash
npm run db:push
```

This will create the necessary tables in your database based on the `schema.prisma` file.

## Running the Application

### Development

To run the application in development mode with hot-reloading, use the following command:

```bash
npm run dev
```

The server will start on the port specified in your application (default is usually 3000 or 5000) and will automatically restart when you make changes to the code.

### Production

To build and run the application in production mode, use the following commands:

```bash
npm run build
npm run start
```

This will first compile the TypeScript code to JavaScript and then start the server.

## Available Scripts

- `dev`: Starts the development server using `tsx` and `watch`.
- `build`: Compiles the TypeScript code to JavaScript.
- `start`: Starts the production server from the `dist` directory.
- `db:generate`: Generates the Prisma client.
- `db:push`: Pushes the database schema to the database.
- `lint`: Lints the code using ESLint.
- `lint:fix`: Lints and fixes the code using ESLint.
- `format`: Formats the code using Prettier.
- `format:check`: Checks the formatting of the code using Prettier.

## Linting and Formatting

This project uses ESLint for linting and Prettier for code formatting. To check for linting and formatting errors, you can use the `lint` and `format:check` scripts.

To automatically fix linting and formatting errors, you can use the `lint:fix` and `format` scripts.
