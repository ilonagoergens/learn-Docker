# node.js-image
FROM public.ecr.aws/lambda/nodejs:14

# Lambda-Funktion kopieren
COPY index.js package.json ./ 

# Abhängigkeiten installieren
RUN npm install

# Handler-Skript
CMD ["index.handler"]

