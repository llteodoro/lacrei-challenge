# CI/CD Pipeline for Node.js Application with AWS ECS

![GitHub Workflow Status](https://github.com/llteodoro/lacrei-challenge/blob/main/.github/workflows/ci.yml)
![Docker Pulls](272544213398.dkr.ecr.us-east-2.amazonaws.com/lacrei-node-api:1.0)
![AWS ECS](https://img.shields.io/badge/AWS-ECS-orange)

This project implements a complete CI/CD pipeline for a Node.js application using GitHub Actions, Docker, and AWS ECS.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Local Development](#local-development)
- [Pipeline Overview](#pipeline-overview)
- [Security Scanning](#security-scanning)
- [Deployment](#deployment)
- [Rollback Procedure](#rollback-procedure)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)

## Features
- Automated testing with Jest
- Containerization with Docker
- Security scanning with OWASP ZAP
- AWS ECR image repository
- ECS Fargate deployment
- Automated rollback capability

## Getting Started

### Prerequisites
- Node.js 18+
- Docker
- AWS account with ECS/ECR access
- GitHub repository

### Local Development
```bash
# Install dependencies
npm install

# Run application
npm start

# Run tests
npm test

# Build Docker image
docker build -t lacrei-node-api .