# Assignment 14 — Portfolio Website

**Student:** Arshpreet Singh
**Course:** WEBD-3012
**Port:** 5575

## How to Run

### Prerequisites
- Docker Desktop installed and running

### Steps

1. Clone the repo:
   git clone https://github.com/Asingh918/coding_assignment14.git
   cd coding_assignment14

2. Build the Docker image:
   docker build -t singh_arshpreet_coding_assignment14 .

3. Run the container:
   docker run -d -p 5575:5575 --name singh_arshpreet_coding_assignment14 singh_arshpreet_coding_assignment14

4. Open browser at:
   http://localhost:5575

## Portfolio Sections
- Hero — Basic information about me
- Work — Projects I have built
- Skills — Languages, frameworks and tools
- Resources — Helpful references I use
- Developer Setup — My VS Code and terminal setup

## CI/CD
GitHub Actions runs Prettier, ESLint and build on every push.