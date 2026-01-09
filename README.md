# Address Book App

A modern, full-stack Address Book application built with React (Vite) and Node.js (Express).

![Address Book Demo](screenshots/demo.png)

## Features

-   **Create**: Add new contacts with Name, Email, and Phone.
-   **Read**: View your list of contacts.
-   **Update**: Edit existing contact details.
-   **Delete**: Remove contacts from the list.
-   **Premium UI**: Clean, modern interface with responsive design.

## Tech Stack

-   **Frontend**: React, Vite, CSS (Variables & Layouts)
-   **Backend**: Node.js, Express, CORS
-   **Data**: In-memory storage (reset on server restart)

## Getting Started

### Prerequisites

-   Node.js (v14 or higher)
-   npm

### Installation

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone <repository-url>
    cd AddressBook
    ```

2.  **Install & Start Backend**:
    ```bash
    cd server
    npm install
    npm run dev
    ```
    The server will start on `http://localhost:3001`.

3.  **Install & Start Frontend**:
    Open a new terminal window:
    ```bash
    cd client
    npm install
    npm run dev
    ```
    The application will be available at `http://localhost:5173`.

## Project Structure

```
AddressBook/
├── client/         # React Frontend
├── server/         # Node.js/Express Backend
└── screenshots/    # Demo images
```

## License

ISC
