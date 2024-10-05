# OAuth Test Project

## Overview

This project is a Vite-based React TypeScript application designed to test OAuth functionality, specifically Google OAuth integration with an Express backend. It serves as a demonstration and testing ground for implementing secure authentication flows in a modern web application.

## Features

- Google OAuth integration
- React Query for efficient data fetching and state management
- Tailwind CSS for styling
- React Router for navigation
- Toast notifications for user feedback

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (version 14 or higher)
- pnpm or yarn
- A Google Cloud Platform account with OAuth 2.0 credentials

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/dev-sandip/oauth-test.git
   cd oauth-test
   ```

2. Install dependencies:
   ```
   pnpm install
   ```
   or
   ```
   yarn install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following:
   ```
   VITE_GOOGLE_CLIENT_ID=your_google_client_id
   VITE_API_URL=your_api_url
   ```

## Usage

To run the development server:

```
pnpm run dev
```
or
```
yarn dev
```

To build the project:

```
pnpm run build
```
or
```
yarn build
```

To preview the built project:

```
pnpm run preview
```
or
```
yarn preview
```

## Scripts

- `dev`: Runs the app in development mode
- `build`: Builds the app for production
- `lint`: Runs ESLint to check for code quality issues
- `preview`: Previews the built app locally

## Dependencies

This project uses several key dependencies:

- React v18.3.1
- React Router v6.26.2
- @tanstack/react-query v5.59.0
- @react-oauth/google v0.12.1
- Axios v1.7.7
- Tailwind CSS v3.4.13
- TypeScript v5.5.3
- Vite v5.4.8

For a full list of dependencies, please refer to the `package.json` file.

## Contributing

Contributions to this project are welcome. Please fork the repository and create a pull request with your changes.

## License

[MIT License](https://opensource.org/licenses/MIT)

## Contact

dev-sandip - [GitHub](https://github.com/dev-sandip)

Project Link: [https://github.com/dev-sandip/oauth-test](https://github.com/dev-sandip/oauth-test)