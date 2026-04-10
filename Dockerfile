# =============================================
# Student:    Arshpreet Singh
# Course:     WEBD-3012
# Assignment: 14 — Portfolio Website
# =============================================

# ── Stage 1: Build ───────────────────────────
FROM node:18-alpine AS builder

WORKDIR /singh_arshpreet_final_site

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

# ── Stage 2: Production Server ────────────────
FROM nginx:stable-alpine AS production

LABEL name="singh_arshpreet_coding_assignment14"

COPY --from=builder /singh_arshpreet_final_site/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 5575

CMD ["nginx", "-g", "daemon off;"]