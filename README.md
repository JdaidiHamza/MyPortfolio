
## 🌟 My Personal Portfolio

Welcome to my personal portfolio website! This project showcases my skills, personal projects, and offers a way to get in touch.

## 🌐 Live Demo

Explore the live version here:
👉 [http://jdaidihamza.mine.bz](http://jdaidihamza.mine.bz)

## 💻 Technologies Used

* 🅰️ **Angular v19** – Frontend framework
* 🗄️ **PrimeNG** – UI component library
* 💨 **Tailwind CSS** – Styling utility-first framework
* 🐳 **Docker** – Containerization
* 🌐 **Nginx** – Web server
* ☁️ **Oracle Cloud Infrastructure (OCI)** – Hosting platform

## ✨ Features

* 🏠 **Home Section** – Quick introduction
* 🛠️ **Skills Section** – Technical & soft skills overview
* 🚀 **Projects Section** – Highlights of key projects
* ✉️ **Contact Section** – Built-in contact form

## 🚀 Getting Started

### Prerequisites

* Node.js (LTS recommended)
* npm (comes with Node.js)
* Angular CLI
* Docker *(optional, for containerized setup)*

Install Angular CLI globally:

```bash
npm install -g @angular/cli
```

### Installation

Clone the repository:

```bash
git clone https://github.com/JdaidiHamza/MyPortfolio.git
cd MyPortfolio

```

Install project dependencies:

```bash
npm install
```

### Running the Development Server

```bash
ng serve
# Navigate to http://localhost:4200/
# The app will auto-reload on changes
```

### Building for Production

```bash
ng build
# The build artifacts will be output to the dist/ directory
```

## ☁️ Deployment

This portfolio is deployed with Docker on Oracle Cloud Infrastructure using Nginx to serve static files.

### Dockerized Production Setup

```bash
# Build the Angular app
ng build --configuration production

# Build Docker image
docker build -t my-portfolio .

# Run the container
docker run -d -p 80:80 my-portfolio
```

> Nginx is used as the web server inside the container to serve the Angular build artifacts.
> The container is deployed to an OCI VM instance or container service.

CI/CD and infrastructure automation can be added as needed — details can be provided upon request.

## 📬 Contact

Feel free to reach out through the contact form on the [live demo](http://jdaidihamza.mine.bz) or visit my [GitHub profile](https://github.com/JdaidiHamza).

