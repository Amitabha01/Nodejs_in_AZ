# Live Countdown Timer

A full-stack countdown timer application built with Node.js and Express. It allows users to set a custom date and time, with the countdown updating in real-time. This project is a demonstration of a containerized  application deployed on a VM of Microsoft Azure.

## Features

- **Real-time Countdown**: Displays a live countdown to a custom date and time
- **Responsive Design**: A clean, responsive user interface that works seamlessly on desktop and mobile devices
- **Node.js & Express.js Backend**: A robust and lightweight server architecture
- **Cloud-Ready Deployment**: Engineered for seamless deployment to Microsoft Azure

## Requirements

- Node.js (v18 or newer)
- npm

## Getting Started

### Running Locally

1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/Amitabha01/Nodejs_in_AZ.git
   cd Nodejs_in_AZ
   npm install
   ```

2. Create a `.env` file with basic settings:
   ```properties
   PORT=3000
   NODE_ENV=development
   STATIC_DIR="./public"
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Using Docker

```bash
docker build -t countdown-timer .
docker run -p 8080:8080 countdown-timer
```

Then visit [http://localhost:8080](http://localhost:8080)

## Project Structure

```
nodejs_application/
├── public/         # Frontend files (HTML, CSS, JS)
├── server.js       # Node.js server
├── .env            # Environment settings
├── Dockerfile      # For containerization
└── package.json    # Dependencies and scripts
```

## Environment Variables

- `PORT`: The port number (default: 3000)
- `NODE_ENV`: "development" or "production" 
- `STATIC_DIR`: Folder for static files (default: "./public")

## Azure Deployment

This project includes a step-by-step guide for deploying a Linux virtual machine on Azure and making the application publicly accessible.

### Provision a VM on Azure:

1. Create a new Ubuntu Server VM in the Azure Portal.
2. Select an allowed region as specified by your subscription policy (e.g., East Asia, Central India).
3. Use an SSH public/private key pair for secure access.

### Connect to the VM:

1. Find the public IP address from the VM's overview page.
2. Use the SSH command to connect, ensuring your private key file has secure permissions (chmod 400 your_key.pem).

   ```bash
   ssh -i /path/to/your_key.pem azureuser@<your_public_ip>
   ```

### Install Node.js & Dependencies:

1. Remove the default Node.js version to avoid conflicts.
2. Add the official NodeSource repository to install the latest stable version of Node.js.
3. Install the required packages.

   ```bash
   sudo apt remove nodejs npm
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt install nodejs
   ```

### Clone and Run the Application:

1. Clone your repository onto the VM.
2. Navigate to the project directory and install the application dependencies.

   ```bash
   git clone https://github.com/Amitabha01/Nodejs_in_AZ.git
   cd Nodejs_in_AZ
   npm install
   npm start
   ```

### Configure Network Security:

1. In the Azure Portal, go to the VM's Networking blade.
2. Create an inbound port rule to allow TCP traffic on port 3000.
3. Set the Destination port ranges to 3000 and the Action to Allow.

### Access the Live Application:

The application is now accessible at http://<your_public_ip>:3000.



## License

MIT

## Author

**Amitabha** - [GitHub](https://github.com/Amitabha01)

## Acknowledgements

- Node.js & Express.js for the core backend technology
- Microsoft Azure for a robust cloud computing platform
